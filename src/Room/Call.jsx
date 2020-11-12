import React, { useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import {BsFillMicFill, BsCameraVideoFill} from 'react-icons/bs'

import {useSocket} from './Room'
import Video from './Video'

import './Call.scss'

const Call = () => {
  const {socket} = useSocket() 
  const [partnerPeer, setPartnerPeer] = useState(null);
  const userVideo = useRef();
  const partnerPeerRef = useRef(null);
  const [isMicActive, setIsMicActive] = useState(false);
  const [isCamActive, setIsCamActive] = useState(false);

  useEffect(() => {
    if (!socket) return

    getUserMedia()
    
    socket.on('partner-in-room-id', async ({socketId: partnerID}) => {
      const stream = await getUserMedia()
        
      const peer = initiatorPeer(partnerID, socket.id, stream)
        
      partnerPeerRef.current = {
        peerID: partnerID,
        peer,
      }

        setPartnerPeer(peer)
    })

    socket.on('incomming-call', async ({signal, callerID}) => {
      const stream = await getUserMedia()
      const peer = successorPeer(signal, callerID, stream)
      
      partnerPeerRef.current = {
        peerID: callerID,
        peer
      }
      
      setPartnerPeer(peer)
    })
  
    socket.on("receiving-returned-signal", ({signal}) => {
      partnerPeerRef.current.peer.signal(signal);
    });

    socket.on("user-left", (leftPartnerID) => {
      setPartnerPeer(null)
      partnerPeerRef.current.peer.destroy()
    })
  }, [socket]);

  const getUserMedia = async () => {
    const stream =  await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    userVideo.current.srcObject = stream;
    setIsMicActive(true)
    setIsCamActive(true)
    return stream
  }


  const initiatorPeer = (partnerID, callerID, stream) => {
    const peer = new Peer({
        initiator: true,
        trickle: false,
        stream,
    });

    peer.on("signal", signal => {
      socket.emit('call-partner', { partnerID, signal, callerID})
    })

    return peer;
  }

  const successorPeer = (incomingSignal, callerID, stream) => {
    const peer = new Peer({
        initiator: false,
        trickle: false,
        stream,
    })

    peer.on("signal", signal => {
      socket.emit("returning-signal", { signal, callerID })
    })


    peer.signal(incomingSignal);

    return peer;

  }

  const toggleCamera = () => {
    const cameraTrack = userVideo.current.srcObject.getTracks().find((track) => track.kind === 'video')
    cameraTrack.enabled = !isCamActive
    setIsCamActive(!isCamActive)
  }

  const toggleMicrophone = () => {
    const microphoneTrack = userVideo.current.srcObject.getTracks().find((track) => track.kind === 'audio')
    microphoneTrack.enabled = !isMicActive
    setIsMicActive(!isMicActive)
  }
  
  return (
    <div className="call-panel-container">
      <div 
        className="call-control-panel"
      >
        
        <button 
          onClick={toggleMicrophone} 
          className={`control-btn ${!isMicActive && 'btn-inactive'}`} 
          disabled={!userVideo.current?.srcObject}
        >
          <BsFillMicFill />
        </button>
        <button 
          onClick={toggleCamera} 
          className={`control-btn ${!isCamActive && 'btn-inactive'}`}
          disabled={!userVideo.current?.srcObject}
        >
          <BsCameraVideoFill />
        </button>
      </div>

      <div className="participant-cam">
        <video muted ref={userVideo} autoPlay playsInline />
      </div>

      {
        partnerPeer && (
          <div className="participant-cam">
            <Video peer={partnerPeer} />
          </div>
        )
      }
    </div>
  )
}

export default Call
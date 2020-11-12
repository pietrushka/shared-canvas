import React, { useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import {BsFillMicFill, BsCameraVideoFill} from 'react-icons/bs'

import {useSocket} from './Room'

import './Call.scss'

const Video = ({peer}) => {
  const ref = useRef();

  useEffect(() => {
    peer.on("stream", stream => {
        ref.current.srcObject = stream;
    })
  }, []);

  return (
      <video playsInline autoPlay ref={ref} />
  );
}

const Call = () => {
  const {socket} = useSocket() 
  const [partnerPeer, setPartnerPeer] = useState(null);
  const userVideo = useRef();
  const partnerPeerRef = useRef(null);


  useEffect(() => {
    if (!socket) return

    socket.on('partner-in-room-id', ({socketId: partnerID}) => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
        userVideo.current.srcObject = stream;
        
        const peer = initiatorPeer(partnerID, socket.id, stream)
        
        partnerPeerRef.current = {
          peerID: partnerID,
          peer,
        }

        setPartnerPeer(peer)

        // peer.on("close", () => {
        //   console.log(peer)
        //   partnerPeerRef.current = null
        //   setPartnerPeer(null)
        // })
      })
    })

    socket.on('incomming-call', ({signal, callerID}) => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
        userVideo.current.srcObject = stream;
        const peer = successorPeer(signal, callerID, stream)
        
        partnerPeerRef.current = {
          peerID: callerID,
          peer
        }
        
        setPartnerPeer(peer)

        // peer.on("close", () => {
        //   console.log(peer)
        //   partnerPeerRef.current = null
        //   setPartnerPeer(null)
        // })
      })
      })
  
    socket.on("receiving-returned-signal", ({signal}) => {
      partnerPeerRef.current.peer.signal(signal);
    });

    socket.on("user-left", (leftPartnerID) => {
      setPartnerPeer(null)
      partnerPeerRef.current.peer.destroy()
    })
  }, [socket]);

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

  return (
    <div className="call-panel-container">
      <div className="call-control-panel">
        <button className="mic-btn">
          <BsFillMicFill />
        </button>
        <button className="cam-btn">
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
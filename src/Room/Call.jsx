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
  const [peers, setPeers] = useState([]);
  const userVideo = useRef();
  const peersRef = useRef([]);

  useEffect(() => {
    if (!!socket) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          userVideo.current.srcObject = stream;
        })
          
      socket.on('users-in-the-room', (users) => {
        const peers = [];
        users.forEach(({socketId}) => {
            const peer = createPeer(socketId, socket.id, userVideo.current.srcObject);
            peersRef.current.push({
                peerID: socketId,
                peer,
            })
            peers.push(peer);
        })
        setPeers(peers);
      })
  
      socket.on("user-joined", payload => {
        const peer = addPeer(payload.signal, payload.callerID, userVideo.current.srcObject);
        peersRef.current.push({
            peerID: payload.callerID,
            peer,
        })
  
        setPeers(users => [...users, peer]);
      });
  
      socket.on("receiving-returned-signal", payload => {
        const item = peersRef.current.find(p => p.peerID === payload.id);
        item.peer.signal(payload.signal);
      });

      
    }

  }, [socket]);


  const createPeer = (userToSignal, callerID, stream) => {
    const peer = new Peer({
        initiator: true,
        trickle: false,
        stream,
    });

    peer.on("signal", signal => {
        socket.emit("sending-signal", { userToSignal, callerID, signal })
    })

    return peer;
  }

  const addPeer = (incomingSignal, callerID, stream) => {
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
        peers.map((peer, index) => (
          <div key={index} className="participant-cam">
            <Video  peer={peer} />
          </div>
        ))
      }

    </div>
  )
}

export default Call
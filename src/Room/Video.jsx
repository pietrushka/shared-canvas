import React, {useEffect, useRef} from 'react'

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

export default Video
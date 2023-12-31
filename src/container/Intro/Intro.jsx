import React, { useRef, useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import './Intro.css';
import { meal } from '../../constants'

const Intro = () => {
  const vidRef = useRef();
  const [playVideo,setPlayVideo] = useState(false);

  const handlePlayVideo = () => {
    setPlayVideo((prev) => !prev);
    if(playVideo) {
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }
  return (
    <div className='app__video'>
      <video
        src={meal}
        type='video/mp4'
        ref={vidRef}
        loop
        controls={false}
        muted
      />
      <div className='app__video-overlay flex__center'>
        <div 
        className='app__video-overlay_circle flex__center'
        onClick={handlePlayVideo}
        >
          {playVideo ? (<BsPauseFill color='#fff' fontSize={30} />) 
          : (<BsFillPlayFill color='#fff' fontSize={30} />)}
        </div>
      </div>
  </div>
  );
  
}

export default Intro;

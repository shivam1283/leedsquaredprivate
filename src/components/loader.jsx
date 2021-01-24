import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../assets/loader.json'
const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};



function Loader(){
    return (<Lottie options={defaultOptions}/>)
}

export default Loader
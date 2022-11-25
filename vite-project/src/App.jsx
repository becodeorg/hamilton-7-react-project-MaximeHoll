import './index.css'
import React, { useState, useEffect } from 'react';

import Time from './components/Time'
import Modal from './components/Modal';

function App() {


  const [timer, setTimer] = useState({minutes: 25, seconds: 0});

  const [startStop, setStartStop] = useState("play");

  const [launchTimer, setLaunchTimer] = useState(false);

  const [launchAlert, setLaunchAlert] = useState(false);

  const [hidden, setHidden] = useState("hidden");

  console.log(launchTimer);

  const addTime = (minutes) => {

  if(timer.minutes < 99 && launchTimer === false) {

  let changeTime = {minutes: minutes +1, seconds: 0};
  setTimer(changeTime);
  }

  
}

  const  removeTime = (minutes) => {

    if(timer.minutes > 0 && launchTimer === false) {

    let changeTime = {minutes: minutes - 1, seconds: 0};
  
    setTimer(changeTime);}
  }

  const resetTime = () => {
    let changeTime = {minutes: 0, seconds: 0};
    setTimer(changeTime);
    setLaunchTimer(false);
    setStartStop("play");
  }  

  
  const startStopTimer = () => {
    setLaunchTimer(!launchTimer)
    if(startStop === "play") {
    setStartStop("stop")
  } else if (startStop === "stop") {
    setStartStop("play")
  }
  }
  
    useEffect(() => {
      if(launchTimer === true && (timer.minutes + timer.seconds != 0)) {
      const interval = setInterval(() => {
        
        let changeTime = {minutes: timer.seconds === 0 ? timer.minutes - 1 : timer.minutes , seconds: timer.seconds === 0 ? timer.seconds + 59 : timer.seconds - 1};
        setTimer(changeTime);
        setLaunchAlert(true);
        alertModal()
      
    }, 1000);
      
      return () => clearInterval(interval);}
      
    });

  
    function alertModal() {
    if(launchAlert === true && (timer.minutes ===0 && timer.seconds === 1)) {
      setLaunchTimer(false);
      setStartStop("play");
      let changeTime = {minutes: 0 , seconds: 0};
      setTimer(changeTime);
      setHidden("")
    } 
    }

    function closeModal () {
      setHidden("hidden");
    }

    function newTimer() {
      window.location.reload(true); 
    }

  return (
    <div className="App bg-slate-400 h-screen w-screen flex flex-col align-center content-center pt-10 font-mono">
      <Modal hidden={hidden} closeModal={closeModal} newTimer={newTimer}/>
     <div className="border-black bg-white border-3 flex h-1/6 w-96 m-auto">
        <Time minutes={timer.minutes < 10 ? `0${ timer.minutes }` : timer.minutes} seconds={timer.seconds < 10 ? `0${ timer.seconds }` : timer.seconds}/>
        <div className='flex flex-col w-1/4 bg-slate-300'>
          <button className='h-1/4 border-black border-2' onClick={() => addTime(timer.minutes)}>+</button>
          <button className='h-1/4 border-black border-2' onClick={() => startStopTimer()}>{startStop}</button>
          <button className='h-1/4 border-black border-2' onClick={() => resetTime()}>reset</button>
          <button className='h-1/4 border-black border-2' onClick={() => removeTime(timer.minutes)}>-</button>
        </div>
     </div>
    </div>
  )
}

export default App

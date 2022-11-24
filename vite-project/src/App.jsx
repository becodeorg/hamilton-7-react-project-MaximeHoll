import './index.css'
import React, { useState } from 'react';

import Time from './components/Time'

function App() {

  const initialTimer = {minutes: 0, seconds: 0};

  const [timer, setTimer] = useState(initialTimer);

  const addTime = (minutes) => {

  if(timer.minutes < 99) {

  let changeTime = {minutes: minutes + 1, seconds: 0};
  setTimer(changeTime);
  }

  
}

  const  removeTime = (minutes) => {

    if(timer.minutes > 0) {

    let changeTime = {minutes: minutes - 1, seconds: 0};
  
    setTimer(changeTime);}
  }

  const resetTime = () => {
    let changeTime = {minutes: 0, seconds: 0};
    setTimer(changeTime);
  }  
  return (
    <div className="App bg-slate-400 h-screen w-screen flex flex-col align-center content-center">
     <div className="border-black bg-white border-3 flex h-1/6 w-4/5 ml-auto mr-auto mt-auto mb-auto">
        <Time minutes={timer.minutes < 10 ? `0${ timer.minutes }` : timer.minutes} seconds={timer.seconds < 10 ? `0${ timer.seconds }` : timer.seconds}/>
        <div className='flex flex-col w-1/4 bg-slate-300'>
          <button className='h-1/4 border-black border-2' onClick={() => addTime(timer.minutes)}>+</button>
          <button className='h-1/4 border-black border-2'>play</button>
          <button className='h-1/4 border-black border-2' onClick={resetTime}>reset</button>
          <button className='h-1/4 border-black border-2' onClick={() => removeTime(timer.minutes)}>-</button>
        </div>
     </div>
    </div>
  )
}

export default App

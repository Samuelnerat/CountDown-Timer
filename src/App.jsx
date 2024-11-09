import React, { useState, useEffect } from 'react';
import TimerInput from './components/TimerInput';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
// import image from "../public/bg.jpg"; 

function App() {
  const [time, setTime] = useState(0); 
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  const handleSetTimeAndStart = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    setTime(totalSeconds);
    setRemainingTime(totalSeconds);
    setIsRunning(true); 
  };

  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setRemainingTime(time);
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", height:600,width:600 }}>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage:"url(/bg.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover", opacity: 0.9, }}>
      <div className=" bg-white bg-opacity-50 backdrop-blur-md max-w-xl shadow-2xl w-full  p-24 rounded-lg">
        <div className=''>
        <TimerInput 
          onSetTime={handleSetTimeAndStart} 
          setHours={setHours} 
          setMinutes={setMinutes} 
          setSeconds={setSeconds} 
        />
        <TimerDisplay remainingTime={remainingTime} />
        <TimerControls
          onStart={handleSetTimeAndStart}
          onPause={handlePause}
          onReset={handleReset}
          isRunning={isRunning}
        />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { FaPlay, FaPause  } from "react-icons/fa";
import { LuRefreshCcwDot } from "react-icons/lu";

const TimerControls = ({ onStart, onPause, onReset, isRunning }) => {
  return (
    <div className="flex space-x-4">
      <button
        className="bg-green-500 text-white px-5 py-3 rounded"
        onClick={onStart}
        disabled={isRunning} 
      >
       <FaPlay className='w-8 h-8'/>
      </button>
      <button
        className="bg-yellow-500 text-white px-5 py-3 rounded"
        onClick={onPause}
        disabled={!isRunning} 
      >
        <FaPause className='w-8 h-8' />
      </button>
      <button className="bg-red-500 text-white px-5 py-3 rounded" onClick={onReset}>
      <LuRefreshCcwDot className='w-8 h-8' />
      </button>
    </div>
  );
};

export default TimerControls;

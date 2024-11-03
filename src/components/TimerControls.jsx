import React from 'react';
import { FaPlay, FaPause  } from "react-icons/fa";
import { LuRefreshCcwDot } from "react-icons/lu";

const TimerControls = ({ onStart, onPause, onReset, isRunning }) => {
  return (
    <div className="flex space-x-4">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={onStart}
        disabled={isRunning} 
      >
       <FaPlay />
      </button>
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded"
        onClick={onPause}
        disabled={!isRunning} 
      >
        <FaPause />
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onReset}>
      <LuRefreshCcwDot />
      </button>
    </div>
  );
};

export default TimerControls;

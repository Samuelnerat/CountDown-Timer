import React from 'react';

const TimerInput = ({ onSetTime, setHours, setMinutes, setSeconds }) => {
  return (
    <div className="flex space-x-2 mb-4">
      <input
        type="number"
        min="0"
        className="w-16 p-2 border rounded"
        onChange={(e) => setHours(e.target.value)}
        placeholder="HH"
      />
      <input
        type="number"
        min="0"
        className="w-16 p-2 border rounded"
        onChange={(e) => setMinutes(e.target.value)}
        placeholder="MM"
      />
      <input
        type="number"
        min="0"
        className="w-16 p-2 border rounded"
        onChange={(e) => setSeconds(e.target.value)}
        placeholder="SS"
      />
    </div>
  );
};

export default TimerInput;
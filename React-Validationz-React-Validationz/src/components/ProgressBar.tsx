// src/components/ProgressBar.js
import React from 'react';

const ProgressBar = ({ step }:any) => {
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
  const progress = (step - 1) * 33.33; // 100% divided by 3 steps (for 4 steps)

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        {steps.map((stepLabel, index) => (
          <div
            key={index}
            className={`text-sm font-medium ${
              step > index ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            {stepLabel}
          </div>
        ))}
      </div>
      <div className="relative h-2 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

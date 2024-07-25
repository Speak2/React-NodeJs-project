// MiddleComponent.js
import React from 'react'; 
import MiddleLeft from './MiddleLeft';
import MiddleRight from './MiddleRight';

const MiddleComponent = () => {
  return (
    <div className="middle">
        <MiddleLeft />
        <MiddleRight />
    </div>
  );
};

export default MiddleComponent;

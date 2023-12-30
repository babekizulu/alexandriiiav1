//libs
import React, { useState } from 'react';

const VolumeSlider = () => {
  //state management
  const [mouseX, setMouseX] = useState(0);
  const [sliderX, setSliderX] = useState(0);
  //handlers
  const onMouseMoveHandler = (x) => {
    setMouseX(x);
  };
  const onSliderDrag = () => {
    //
  };
  return (
    <div
      className='volume-slider-container'
      onMouseMove={(e) => onMouseMoveHandler(e.clientX)}
    >
      <div
        className='slider-knob'
        style={`transform: TranslateX(${sliderX})`}
      ></div>
      <div className='slide-meter'></div>
    </div>
  );
};

export default VolumeSlider;

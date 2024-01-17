//libs
import React, { useState } from 'react';

const VolumeSlider = () => {
  //state management
  const [sliderX, setSliderX] = useState(0);
  const [volume, setVolume] = useState(0);
  //handlers
  const onSliderDrag = (x) => {
    setSliderX(x - 300);
  };
  return (
    <div
      className='volume-slider-container'
      onMouseEnter={(e) => console.log(e.clientX)}
    >
      <div
        className='slider-knob'
        style={{ transform: `translateX(${sliderX}px)` }}
        onDragCapture={(e) => onSliderDrag(e.clientX)}
        onDragEnd={(e) => setSliderX(e.clientX - 300)}
      ></div>
      <div className='slide-meter'></div>
    </div>
  );
};

export default VolumeSlider;

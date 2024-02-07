//libs
import React, { useState } from 'react';

const VolumeSlider = () => {
  //state management
  const [sliderX, setSliderX] = useState(0);
  const [volume, setVolume] = useState(0);
  //handlers
  const onSliderDrag = (x) => {
    const initialX = x - 300;
    setSliderX(initialX);
    const vol =
      sliderX <= 0
        ? Math.max(Math.floor(sliderX / 10), 0)
        : Math.min(Math.floor(sliderX / 10), 10);
    setVolume(vol);
  };
  return (
    <div
      className='volume-slider-container'
      onMouseEnter={(e) => console.log(e.clientX)}
    >
      <div
        className='slider-knob'
        style={{
          transform: `translateX(${
            sliderX <= 0 ? Math.max(sliderX, 0) : Math.min(sliderX, 70)
          }px)`,
        }}
        onDragCapture={(e) => onSliderDrag(e.clientX)}
        onDragEnd={(e) => setSliderX(e.clientX - 300)}
      ></div>
      <div className='slide-meter'></div>
      <h3>{volume}</h3>
    </div>
  );
};

export default VolumeSlider;

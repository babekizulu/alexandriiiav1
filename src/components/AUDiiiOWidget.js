//libs
import React from 'react';
//components
import PlayBtn from './buttons/PlayBtn';
import ToggleSlider from './buttons/ToggleSlider';
import ConfigBtn from './buttons/ConfigBtn';
import VolumeSlider from './buttons/VolumeSlider';

const AUDiiiOWidget = () => {
  return (
    <div className='audiiio-widget'>
      <PlayBtn />
      <ToggleSlider />
      <ConfigBtn />
      <VolumeSlider />
    </div>
  );
};

export default AUDiiiOWidget;

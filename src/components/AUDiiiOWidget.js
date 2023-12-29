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
      <ul>
        <li>
          <PlayBtn />
        </li>
        <li>
          <ToggleSlider />
        </li>
        <li>
          <ConfigBtn />
        </li>
        <li>
          <VolumeSlider />
        </li>
      </ul>
    </div>
  );
};

export default AUDiiiOWidget;

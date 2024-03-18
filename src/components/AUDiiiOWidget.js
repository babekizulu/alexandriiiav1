//libs
import React from 'react';
//components
import PlayBtn from './buttons/PlayBtn';
import ToggleSlider from './buttons/ToggleSlider';
import ConfigBtn from './buttons/ConfigBtn';
import VolumeSlider from './buttons/VolumeSlider';

const AUDiiiOWidget = ({ volume, volumeHandler }) => {
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
          <ConfigBtn configType='audio' />
        </li>
        <li>
          <VolumeSlider volume={volume} volumeHandler={volumeHandler} />
        </li>
      </ul>
    </div>
  );
};

export default AUDiiiOWidget;

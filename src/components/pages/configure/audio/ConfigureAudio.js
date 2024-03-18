//libs
import React from 'react';
//component
import HomeBackgroundImg from '../../home/HomeBackgroundImg';
import BackBtn from '../../../buttons/BackBtn';

const ConfigureAudio = () => {
  return (
    <div className='page'>
      <HomeBackgroundImg />
      <BackBtn prevDir='/' />
      Configure Audio
    </div>
  );
};

export default ConfigureAudio;

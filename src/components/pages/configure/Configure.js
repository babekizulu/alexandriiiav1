//libs
import React from 'react';
//components
import HomeBackgroundImg from '../home/HomeBackgroundImg';
import BackBtn from '../../buttons/BackBtn';

const Configure = () => {
  return (
    <div>
      <HomeBackgroundImg />
      <BackBtn prevDir='/' />
      Configure
    </div>
  );
};

export default Configure;

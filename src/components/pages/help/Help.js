//libs
import React from 'react';
//components
import HomeBackgroundImg from '../home/HomeBackgroundImg';
import BackBtn from '../../buttons/BackBtn';

const Help = () => {
  return (
    <div className='page'>
      <HomeBackgroundImg />
      <BackBtn prevDir='/' />
      Help
    </div>
  );
};

export default Help;

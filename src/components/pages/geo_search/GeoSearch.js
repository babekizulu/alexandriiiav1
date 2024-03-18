//libs
import React from 'react';
//component
import BackBtn from '../../buttons/BackBtn';
import HomeBackgroundImg from '../home/HomeBackgroundImg';

const GeoSearch = () => {
  return (
    <div className='page'>
      <HomeBackgroundImg />
      <BackBtn prevDir='/explorer' />
    </div>
  );
};

export default GeoSearch;

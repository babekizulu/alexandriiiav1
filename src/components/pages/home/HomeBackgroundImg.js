//libs
import React from 'react';
//assets
import background from '../../../images/bg_blank.webp';

const HomeBackgroundImg = () => {
  return (
    <div className='background-img-container'>
      <img className='background-img' src={background} alt='background' />
    </div>
  );
};

export default HomeBackgroundImg;

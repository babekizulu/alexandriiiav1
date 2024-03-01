//libs
import React from 'react';
//components
import ExploreBtn from '../../buttons/ExploreBtn';
import Hero from './Hero';
import HomeBackgroundImg from './HomeBackgroundImg';

const Home = ({ volume }) => {
  return (
    <div className='home page'>
      <HomeBackgroundImg />
      <Hero />
      <ExploreBtn />
    </div>
  );
};

export default Home;

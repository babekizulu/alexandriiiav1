//libs
import React from 'react';
//components
import ExploreBtn from '../buttons/ExploreBtn';

const Home = () => {
  return (
    <div className='home page'>
      <div className='page-header-container'>
        <header className='page-header'>
          <h1>
            Welcome to the future...
            <br />
            Or the past...
            <br />
            Or wherever you want to go- let's go there
          </h1>
        </header>
      </div>
      <ExploreBtn />
    </div>
  );
};

export default Home;

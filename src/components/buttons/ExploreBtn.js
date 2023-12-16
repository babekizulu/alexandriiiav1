//libs
import React from 'react';
//components
import Link from '../Link';

const ExploreBtn = () => {
  return (
    <div className='explore-btn-container'>
      <Link href='/explorer' className='explore-btn'>
        explore
      </Link>
    </div>
  );
};

export default ExploreBtn;

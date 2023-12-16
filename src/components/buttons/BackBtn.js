//libs
import React from 'react';
//component
import Link from '../Link';

const BackBtn = ({ prevDir }) => {
  return (
    <div className='back-btn-container'>
      <Link href={prevDir} className='back-btn'>
        back
      </Link>
    </div>
  );
};

export default BackBtn;

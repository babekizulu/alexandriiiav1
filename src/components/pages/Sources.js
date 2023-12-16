//libs
import React from 'react';
//components
import BackBtn from '../buttons/BackBtn';

const Sources = ({ dir }) => {
  return (
    <div className='sources page'>
      <BackBtn prevDir={dir} />
    </div>
  );
};

export default Sources;

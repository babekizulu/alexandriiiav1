//libs
import React from 'react';
//components
import Link from '../Link';

const HelpBtn = () => {
  return (
    <div className='help-btn-container'>
      <Link href='/help' className='help-btn'>
        ?
      </Link>
    </div>
  );
};

export default HelpBtn;

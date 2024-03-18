//libs
import React from 'react';
//components
import Link from '../Link';

const ConfigBtn = ({ configType }) => {
  return (
    <div className='config-btn-container'>
      <Link href={`/configure/${configType}`} className='config-btn'>
        configure
      </Link>
    </div>
  );
};

export default ConfigBtn;

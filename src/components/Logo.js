//libs
import React from 'react';
//components
import Link from './Link';
import LogoSVG from './LogoSVG';

const Logo = () => {
  return (
    <div className='logo-container'>
      <Link href='/' className='logo'>
        <LogoSVG />
      </Link>
    </div>
  );
};

export default Logo;

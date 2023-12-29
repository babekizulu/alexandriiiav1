//libs
import React from 'react';
//components
import Logo from './Logo';
import AUDiiiOWidget from './AUDiiiOWidget';
import ToggleSlider from './buttons/ToggleSlider';
import HelpBtn from './buttons/HelpBtn';

const Header = () => {
  return (
    <div className='header-container'>
      <AUDiiiOWidget />
      <Logo />
      <ToggleSlider />
      <HelpBtn />
    </div>
  );
};

export default Header;

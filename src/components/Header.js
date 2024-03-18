//libs
import React from 'react';
//components
import Logo from './Logo';
import AUDiiiOWidget from './AUDiiiOWidget';
import ToggleSlider from './buttons/ToggleSlider';
import HelpBtn from './buttons/HelpBtn';

const Header = ({volume, volumeHandler}) => {
  return (
    <div className='header-container'>
      <AUDiiiOWidget volume={volume} volumeHandler={volumeHandler}/>
      <Logo />
      <ToggleSlider />
      <HelpBtn />
    </div>
  );
};

export default Header;

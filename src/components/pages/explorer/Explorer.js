//libs
import React from 'react';
//components
import Link from '../../Link';
import BackBtn from '../../buttons/BackBtn';
import HomeBackgroundImg from '../home/HomeBackgroundImg';
import AtlasSVG from '../../AtlasSVG';
import ThemeSVG from '../../ThemeSVG';
import GeoSearchSVG from '../../GeoSearchSVG';

const Explorer = () => {
  return (
    <div className='explorer page'>
      <HomeBackgroundImg />
      <BackBtn prevDir='/' />
      <div className='explorer-grid'>
        <Link href='/explorer/atlas-search' className='explorer-item'>
          <AtlasSVG />
        </Link>
        <Link href='/explorer/theme-search' className='explorer-item'>
          <ThemeSVG />
        </Link>
        <Link href='/explorer/geo-search' className='explorer-item'>
          <GeoSearchSVG />
        </Link>
      </div>
    </div>
  );
};

export default Explorer;

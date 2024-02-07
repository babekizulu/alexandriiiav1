//libs
import React from 'react';
//components
import Link from '../Link';
import BackBtn from '../buttons/BackBtn';

const Explorer = () => {
  return (
    <div className='explorer page'>
      <BackBtn prevDir='/' />
      <div className='explorer-grid'>
        <Link href='/explorer/atlas-search' className='explorer-item'>
          <header>
            <h2>Atlas Search</h2>
          </header>
        </Link>
        <Link href='/explorer/theme-search' className='explorer-item'>
          <header>
            <h2>Theme Search</h2>
          </header>
        </Link>
        <Link href='/explorer/geo-search' className='explorer-item'>
          <header>
            <h2>Geo-Search</h2>
          </header>
        </Link>
      </div>
    </div>
  );
};

export default Explorer;

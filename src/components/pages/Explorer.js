//libs
import React from 'react';
//components
import Link from '../Link';

const Explorer = () => {
  return (
    <div className='explorer page'>
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
        <Link href='/explorer/keyword-search' className='explorer-item'>
          <header>
            <h2>Keyword Search</h2>
          </header>
        </Link>
      </div>
    </div>
  );
};

export default Explorer;

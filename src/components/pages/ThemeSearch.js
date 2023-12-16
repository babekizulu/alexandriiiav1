//libs
import React from 'react';
//component
import Link from '../Link';

const ThemeSearch = () => {
  /*
  - mechanical inventions
  - mathematical apparatus
  - rockets
  - rocket components
  - satellites
  - antennae
  - analog computers
  - digital computers
  - compilers
  - computer programming languages
  - rocket launches
  - architecture
  - manufactured materials
  - manufactured textiles
  - artifacts
  - artworks
  - scientific apparatus
  - collaborative scientific efforts
  - intellectual contributions
  - economics
  - agricultural techniques
  - agricultural tools
  - institutions, organizations and unions
  - scientists
  - mathematicians
  - engineers
  - architects
  - astronauts
  - historians
  */
  return (
    <div className='theme-search page'>
      <div className='explorer-grid'>
        <Link
          href='/explorer/theme-search/mechanical-inventions'
          className='explorer-item'
        >
          THEME NAME
        </Link>
      </div>
    </div>
  );
};

export default ThemeSearch;

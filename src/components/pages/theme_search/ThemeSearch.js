//libs
import React from 'react';
//component
import BackBtn from '../../buttons/BackBtn';
import Link from '../../Link';
import HomeBackgroundImg from '../home/HomeBackgroundImg';

const ThemeSearch = () => {
  /*
  1. mechanical inventions
  2. mathematical apparatus
  3. rockets
  4. rocket components
  5. satellites
  6. antennae
  7. analog computers
  8. digital computers
  9. compilers
  10. computer programming languages
  11. rocket launches
  12. architecture
  13. manufactured materials
  14. manufactured textiles
  15. artifacts
  16. artworks
  17. scientific apparatus
  18. collaborative scientific efforts
  19. intellectual contributions
  20. economics
  21. agricultural techniques
  22. agricultural tools
  23. institutions, organizations and unions
  24. scientists
  25. mathematicians
  26. engineers
  27. architects
  28. astronauts
  29. historians
  */
  return (
    <div className='theme-search page'>
      <HomeBackgroundImg />
      <BackBtn prevDir='/explorer' />
      <div className='explorer-grid'>
        <Link
          href='/explorer/theme-search/mechancal-inventions'
          className='explorer-item'
        >
          Mechanical Inventions
        </Link>
        <Link href='/explorer/theme-search/rockets' className='explorer-item'>
          Rockets
        </Link>
        <Link
          href='/explorer/theme-search/rocket-components'
          className='explorer-item'
        >
          Rocket Components
        </Link>
        <Link
          href='/explorer/theme-search/satellites'
          className='explorer-item'
        >
          Satellites
        </Link>
        <Link href='/explorer/theme-search/antennae' className='explorer-item'>
          Antennae
        </Link>
        <Link
          href='/explorer/theme-search/analog-computers'
          className='explorer-item'
        >
          Analog Computers
        </Link>
        <Link
          href='/explorer/theme-search/digital-computers'
          className='explorer-item'
        >
          Digital Computers
        </Link>
        <Link href='/explorer/theme-search/compilers' className='explorer-item'>
          Compilers
        </Link>
        <Link
          href='/explorer/theme-search/computer-programming-languages'
          className='explorer-item'
        >
          Computer Programming Languages
        </Link>
        <Link
          href='/explorer/theme-search/rocket-launches'
          className='explorer-item'
        >
          Rocket Launches
        </Link>
        <Link
          href='/explorer/theme-search/architecture'
          className='explorer-item'
        >
          Architecture
        </Link>
        <Link
          href='/explorer/theme-search/manufactured-materials'
          className='explorer-item'
        >
          Manufactured Materials
        </Link>
        <Link
          href='/explorer/theme-search/manufactured-textiles'
          className='explorer-item'
        >
          Manufactured Textiles
        </Link>
        <Link href='/explorer/theme-search/artifacts' className='explorer-item'>
          Artifacts
        </Link>
        <Link href='/explorer/theme-search/artworks' className='explorer-item'>
          Artworks
        </Link>
        <Link
          href='/explorer/theme-search/scientifc-apparatus'
          className='explorer-item'
        >
          Scientific Apparatus
        </Link>
        <Link
          href='/explorer/theme-search/collaborative-scientific-efforts'
          className='explorer-item'
        >
          Collaborative Scientific Efforts
        </Link>
        <Link
          href='/explorer/theme-search/intellectual-contributions'
          className='explorer-item'
        >
          Intellectual Contributions
        </Link>
        <Link href='/explorer/theme-search/economics' className='explorer-item'>
          Economics
        </Link>
        <Link
          href='/explorer/theme-search/agricultural-techniques'
          className='explorer-item'
        >
          Agricultural Techniques
        </Link>
        <Link
          href='/explorer/theme-search/agricultural-tools'
          className='explorer-item'
        >
          Agricultural Tools
        </Link>
        <Link
          href='/explorer/theme-search/institutions-organizations-unions'
          className='explorer-item'
        >
          Institutions, Organizations & Unions
        </Link>
        <Link
          href='/explorer/theme-search/scientists'
          className='explorer-item'
        >
          Scientists
        </Link>
        <Link
          href='/explorer/theme-search/mathematicians'
          className='explorer-item'
        >
          Mathematicians
        </Link>
        <Link href='/explorer/theme-search/engineers' className='explorer-item'>
          Engineers
        </Link>
        <Link
          href='/explorer/theme-search/architects'
          className='explorer-item'
        >
          Architects
        </Link>
        <Link
          href='/explorer/theme-search/astronauts'
          className='explorer-item'
        >
          Astronauts
        </Link>
        <Link
          href='/explorer/theme-search/historians'
          className='explorer-item'
        >
          Historians
        </Link>
      </div>
    </div>
  );
};

export default ThemeSearch;

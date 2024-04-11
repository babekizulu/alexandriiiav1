//libs
import React, { useState } from 'react';

const KeywordSVG = () => {
  const [hover, setHover] = useState(false);
  //handler
  const onHover = () => {
    setHover(true);
  };

  const onUnHover = () => {
    setHover(false);
  };
  return (
    <div
      className='menu-icon-container'
      onMouseEnter={onHover}
      onMouseLeave={onUnHover}
    >
      <svg
        width='178'
        height='178'
        viewBox='0 0 178 178'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='115' cy='63' r='51' stroke='#131313' strokeWidth='10' />
        <rect
          x='73.1764'
          y='89.6764'
          width='22'
          height='93.5876'
          transform='rotate(45 73.1764 89.6764)'
          fill='#131313'
        />
        <path
          d='M123.939 89H106.083V87.016L111.779 82.536V63.848L106.083 59.88V57.896L117.027 53.8H119.458V84.2L125.219 86.44L123.939 89ZM115.363 34.6C116.643 34.6 117.688 35.0693 118.499 36.008C119.352 36.9467 119.779 38.12 119.779 39.528C119.779 40.5093 119.48 41.448 118.883 42.344C118.285 43.1973 117.539 43.88 116.643 44.392C115.747 44.904 114.872 45.16 114.019 45.16C112.739 45.16 111.672 44.6907 110.819 43.752C110.008 42.8133 109.603 41.64 109.603 40.232C109.603 39.2507 109.901 38.3333 110.499 37.48C111.096 36.584 111.843 35.88 112.739 35.368C113.635 34.856 114.509 34.6 115.363 34.6Z'
          fill={hover ? '#00a6ff' : 'none'}
        />
      </svg>
    </div>
  );
};

export default KeywordSVG;
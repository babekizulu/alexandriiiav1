//libs
import React, { useState } from 'react';
//components
import PlaySVG from '../PlaySVG';

const PlayBtn = () => {
  const [hover, setHover] = useState(false);
  //handlers
  const hoverHandler = () => {
    setHover(true);
  };
  const unHoverHandler = () => {
    setHover(false);
  };
  return (
    <div
      className='play-btn'
      onMouseEnter={hoverHandler}
      onMouseLeave={unHoverHandler}
    >
      <PlaySVG hover={hover} />
    </div>
  );
};

export default PlayBtn;

//libs
import React from 'react';

const SearchBar = ({ searchTerm, onChangeHandler }) => {
  return (
    <div className='search-bar'>
      <input
        value={searchTerm}
        type='text'
        placeholder='search...'
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

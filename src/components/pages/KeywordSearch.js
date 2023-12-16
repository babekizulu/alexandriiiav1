//libs
import React, { useState, useEffect } from 'react';
//components
import BackBtn from '../buttons/BackBtn';
import SearchBar from '../SearchBar';
import TimeDial from '../TimeDial';
import DataCard from '../DataCard';

const KeywordSearch = ({ upSource }) => {
  //state management
  const [searchTerm, setSearchTerm] = useState('');
  const [dataTitle, setDataTitle] = useState('');
  const [, dataDescription] = useState('');
  const [setDataModelImg, dataModelImg] = useState('');
  //variable
  const currentPage = '/explorer/keyword-search';
  //life cycle methods
  useEffect(() => {
    upSource(currentPage);
  }, []);
  //handlers
  const onChangeHandler = (value) => {
    setSearchTerm(value);
  };
  return (
    <div className='keyword-search page'>
      <BackBtn prevDir='/explorer' />
      <SearchBar searchTerm={searchTerm} onChangeHandler={onChangeHandler} />
      <TimeDial />
      <DataCard
        dataTitle={dataTitle}
        dataDescription={dataDescription}
        dataModelImg={dataModelImg}
      />
    </div>
  );
};

export default KeywordSearch;

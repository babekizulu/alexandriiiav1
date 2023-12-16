//libs
import React, { useState, useEffect } from 'react';
//components
import BackBtn from '../buttons/BackBtn';
import Atlas from '../Atlas';
import TimeDial from '../TimeDial';
import DataCard from '../DataCard';

const AtlasSearch = ({ upSource }) => {
  //state management
  const [selectedContinent, setSelectedContinent] = useState('Africa');
  const [dataTitle, setDataTitle] = useState('');
  const [dataDescription, setDataDescription] = useState('');
  const [dataModelImg, setDataModelImg] = useState('');
  //variables
  const currentPage = '/explorer/atlas-search';
  //life cycle methods
  useEffect(() => {
    upSource(currentPage);
  }, []);
  return (
    <div className='atlas-search page'>
      <BackBtn prevDir='/explorer' />
      <Atlas />
      <div className='selected-continent-name-container'>
        <header className='selected-continent-name'>
          <h2>{selectedContinent}</h2>
        </header>
      </div>
      <TimeDial />
      {!selectedContinent ? (
        ''
      ) : (
        <DataCard
          dataTitle={dataTitle}
          dataDescription={dataDescription}
          dataModelImg={dataModelImg}
        />
      )}
    </div>
  );
};
export default AtlasSearch;

//libs
import React, { useState } from 'react';
//components
import Atlas from '../Atlas';
import TimeDial from '../TimeDial';
import DataCard from '../DataCard';

const AtlasSearch = () => {
  //state management
  const [setSelectedContinent, selectedContinent] = useState('Africa');
  const [setDataTitle, dataTitle] = useState('');
  const [setDataDescription, dataDescription] = useState('');
  const [setDataModelImg, dataModelImg] = useState('');
  return (
    <div className='atlas-search page'>
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

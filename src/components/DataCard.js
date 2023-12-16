//libs
import React from 'react';

const DataCard = ({ dataTitle, dataDescription, dataModelImg }) => {
  return (
    <div className='data-card'>
      <div className='data-card-header-container'>
        <header className='data-card-header'>
          <h3>{dataTitle}</h3>
        </header>
      </div>
      <div className='data-description-container'>
        <p className='data-description'>{dataDescription}</p>
      </div>
      <div className='data-model-img-container'>
        <img src={dataModelImg} alt='data model' className='data-model-img' />
      </div>
    </div>
  );
};

export default DataCard;

//libs
import React, { useState, useEffect } from 'react';
//components
import BackBtn from '../../buttons/BackBtn';
import BrowseBtn from '../../buttons/BrowseBtn';

const GeoSearch = () => {
  //state management
  const [currentLocation, setCurrentLocation] = useState('locating...');
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  //life cycle methods
  useEffect(() => {
    onCurrentLocationChange();
  }, []);
  //handlers
  const onCurrentLocationChange = () => {
    const successHandler = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLatitude(latitude);
      setLongitude(longitude);
    };
    const errorHandler = () => {
      setCurrentLocation('Location Unknown');
    };
    if (!navigator.geolocation) {
      //handle
    } else {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    }
  };
  return (
    <div className='geo-search page'>
      <BackBtn prevDir='/explorer' />
      <div className='current-location-header-container'>
        <header className='current-location-header'>
          <h1>{currentLocation}</h1>
        </header>
      </div>
    </div>
  );
};

export default GeoSearch;

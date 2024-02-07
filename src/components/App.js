//libs
import React, { useState } from 'react';
//components
import Header from './Header';
import Route from './Route';
//pages
import Home from './pages/Home';
import Explorer from './pages/Explorer';
import AtlasSearch from './pages/AtlasSearch';
import ThemeSearch from './pages/ThemeSearch';
import GeoSearch from './pages/GeoSearch';
import Sources from './pages/Sources';
//styling
import '../scss/App.scss';

const App = () => {
  //state management
  const [dir, setDir] = useState('');
  const [volume, setVolume] = useState(0);
  const upSource = (path) => {
    setDir(path);
  };
  return (
    <div className='app-container'>
      <Header />
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/explorer'>
        <Explorer />
      </Route>
      <Route path='/explorer/atlas-search'>
        <AtlasSearch upSource={upSource} />
      </Route>
      <Route path='/explorer/theme-search'>
        <ThemeSearch />
      </Route>
      <Route path='/explorer/geo-search'>
        <GeoSearch />
      </Route>
      <Route path='/sources'>
        <Sources dir={dir} />
      </Route>
    </div>
  );
};

export default App;

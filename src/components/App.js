//libs
import React, { useState } from 'react';
//components
import Header from './Header';
import Route from './Route';
//pages
import Home from './pages/home/Home';
import Explorer from './pages/explorer/Explorer';
import AtlasSearch from './pages/atlas_search/AtlasSearch';
import ThemeSearch from './pages/theme_search/ThemeSearch';
import GeoSearch from './pages/geo_search/GeoSearch';
import Help from './pages/help/Help';
import Sources from './pages/sources_page/Sources';
import Configure from './pages/configure/Configure';
import ConfigureAudio from './pages/configure/audio/ConfigureAudio';
//styling
import '../scss/App.scss';

const App = () => {
  //state management
  const [dir, setDir] = useState('');
  const [volume, setVolume] = useState(0);
  //handlers
  const volumeHandler = (level) => {
    setVolume(level);
  };
  const upSource = (path) => {
    setDir(path);
  };
  return (
    <div className='app-container'>
      <Header volume={volume} volumeHandler={volumeHandler} />
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
      <Route path='/help'>
        <Help />
      </Route>
      <Route path='/configure'>
        <Configure />
      </Route>
      <Route path='/configure/audio'>
        <ConfigureAudio />
      </Route>
    </div>
  );
};

export default App;

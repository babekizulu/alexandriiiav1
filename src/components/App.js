//libs
import React from 'react';
//components
import Header from './Header';
import Route from './Route';
//pages
import Home from './pages/Home';
import Explorer from './pages/Explorer';
import AtlasSearch from './pages/AtlasSearch';
import ThemeSearch from './pages/ThemeSearch';
import KeywordSearch from './pages/KeywordSearch';

const App = () => {
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
        <AtlasSearch />
      </Route>
      <Route path='/explorer/theme-search'>
        <ThemeSearch />
      </Route>
      <Route path='/explorer/keyword-search'>
        <KeywordSearch />
      </Route>
    </div>
  );
};

export default App;

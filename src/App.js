import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import DataContext from './context/DataContext';
import { Main } from './App.style';
import NavBar from './components/navbar/NavBar';

const Home = lazy(()=> import('./views/home/Home'));
const MediaGenres =lazy(()=> import('./views/mediagenres/MediaGenres'));
const MediaView = lazy(()=> import('./views/mediaview/MediaView'));
const IndividualCard = lazy(()=> import('./views/individualcard/IndividualCard'));
const PersonView = lazy(() => import('./views/personview/PersonView'));

const App = () => {

  const info = {
    movies: useFetch([3, 'trending', 'movies', 'week']),
    series: useFetch([3, 'trending', 'tv', 'week'])
  };

  return (
    <Router>
      <NavBar />
      <Main>
        <Suspense fallback={<div className="loading-message">Loading...</div>}>
        <DataContext.Provider value={info}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:media" component={MediaGenres}/>
            <Route exact path="/:media/:mediagenres/:query?/page/:numberPage" component={MediaView} />
            <Route exact path="/person/:id/:section" component={PersonView}/>
            <Route exact path="/:media/:id/:section/:seasonNumber?" component={IndividualCard} />
          </Switch>
        </DataContext.Provider>
        </Suspense>
      </Main>
    </Router>
  );
}

export default App;
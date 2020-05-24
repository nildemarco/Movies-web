import React from 'react';
import { Main } from './App.style';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './views/home/Home';
import useFetch from './hooks/useFetch';
import DataContext from './context/DataContext';
import MediaGenres from './views/mediagenres/MediaGenres';
import MediaView from './views/mediaview/MediaView';
import IndividualCard from './views/individualcard/IndividualCard';
import PersonView from './views/personview/PersonView';


const App = () => {

  const info = {
    movies: useFetch([3, 'trending', 'movies', 'week']),
    series: useFetch([3, 'trending', 'tv', 'week'])
  }

  return (
    <Router>
      <NavBar />
      <Main>
        <DataContext.Provider value={info}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:media" component={MediaGenres}/>
            <Route exact path="/:media/:mediagenres/:query?/page/:numberPage" component={MediaView} />
            <Route exact path="/person/:id/:section" component={PersonView}/>
            <Route exact path="/:media/:id/:section/:seasonNumber?" component={IndividualCard} />
          </Switch>
        </DataContext.Provider>
      </Main>
    </Router>
  );
}

export default App;
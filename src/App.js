import React from 'react';
import { Main } from './App.style';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './views/home/Home';
import useFetch from './hooks/useFetch';
import DataContext from './context/DataContext';
import AllMovies from './views/movies/AllMovies';
import AllSeries from './views/tv/AllSeries';


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
            <Route exact path="/movie/trending/page/1" component={AllMovies} />
            <Route exact path="/tv/trending/page/1" component={AllSeries} />
          </Switch>
        </DataContext.Provider>
      </Main>
    </Router>
  );
}

export default App;

import React from 'react';
import { Main } from './App.style';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import useFetch from './hooks/useFetch';
import CardContainer from './components/card-container/CardContainer'


const App = () => {

  const movies = useFetch("movie");

  console.log(movies)
  return (
    <Router>
      <Main>
        <NavBar />
        {movies &&
          <CardContainer title="Peliculas que son tendencia" info={movies.results} link="peliculas"/>
        }
      </Main>
    </Router>
  );
}

export default App;

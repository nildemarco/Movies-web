import React from 'react';
import { Main } from './App.style';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import useFetch from './hooks/useFetch';
import Card from './components/card/Card'

function App() {

  const movies = useFetch("movie");

  console.log(movies)
  return (
    <Router>
      <Main>
        <NavBar />
        { movies &&
        <Card title={movies.results[0].title} img={movies.results[0].poster_path}/>
      }
      </Main>
    </Router>
  );
}

export default App;

import React from 'react';
import { Main } from './App.style';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import useFetch from './hooks/useFetch';
import IndividualCard from './components/individualcard/IndividualCard';


const App = () => {

  const movies = useFetch("movie");

  console.log(movies)
  return (
    <Router>
      <NavBar />
      <Main>
        {movies &&
          <IndividualCard info={movies} />
        }
      </Main>
    </Router>
  );
}

export default App;

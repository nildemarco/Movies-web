import React from 'react';
import { Main } from './App.style';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './views/home/Home';
// import IndividualCard from './components/individualcard/IndividualCard';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Main>
       <Switch>
         <Route path="/" component={Home}/>
       </Switch>
      </Main>
    </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from "styled-components";
import './App.css';

import LandingPage from './Pages/index'

const CONTAINER = styled.div`

max-width: 1080px;
overflow-x: hidden;
max-height: 90vh;
margin: 0 auto;
background-color: white;
border-radius: 0.5rem;
overflow-y: scroll;
box-shadow: 7px 8px 2px -5px gray;

::-webkit-scrollbar {
    width: 0;}

`
function App() {
  return (
   <CONTAINER>

    <Router>
      <Switch>

          <Route exact path='/'>
            {/* add pathway to component page here  */}
            <LandingPage></LandingPage>
          </Route>

      </Switch>
    </Router>

   </CONTAINER>
  );
}

export default App;

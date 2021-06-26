import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from "styled-components";
import './App.css';

import LandingPage from './Pages/index'

const CONTAINER = styled.div`

max-width: 1080px;
margin: 0 auto;

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

          <Route path='/dashboard'>
            {/* add pathway to component page here  */}
          </Route>

          <Route path='/other'>
            {/* add pathway to component page here  */}
          </Route>

      </Switch>
    </Router>

   </CONTAINER>
  );
}

export default App;

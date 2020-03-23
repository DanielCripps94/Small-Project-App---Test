import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import ProjectListContainer from './components/ProjectListContainer'
import CreateProject from './components/CreateProject'
import ProjectUpdate from './components/ProjectUpdate'
import NavBar from './components/NavBar'
import API from './components/API'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/projects' component={ProjectListContainer}></Route>
        <Route path='/userproject' component={ProjectUpdate}></Route>
        <Route path='/create' component={CreateProject}></Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);

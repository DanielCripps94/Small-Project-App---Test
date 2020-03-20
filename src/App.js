import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import ProjectList from './components/ProjectListContainer'
import CreateProject from './components/CreateProject'
import ProjectUpdate from './components/ProjectUpdate'
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/projects' component={ProjectList}></Route>
        <Route path='/userproject' component={ProjectUpdate}></Route>
        <Route path='/create' component={CreateProject}></Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);

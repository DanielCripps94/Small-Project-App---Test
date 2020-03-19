import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import ProjectList from './components/ProjectList'
import CreateProject from './components/CreateProject'
import ProjectUpdate from './components/ProjectUpdate'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Switch>
        <Route exact path='/' component={ProjectList}></Route>
        <Route path='/edit/:id' component={ProjectUpdate}></Route>
        <Route path='/create' component={CreateProject}></Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);

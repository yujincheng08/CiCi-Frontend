import React from 'react';
import {Route} from 'react-router-dom'
import Home from 'components/Home';
import Account from 'components/Account';
import Logout from 'components/Account/Logout';
import Word from 'components/Word';

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Route exact path="/" component={Home}/>
        <Route path="/:action(login|register)" component={Account}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/word/:word" component={Word}/>
      </div>
    );
  }
}

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

import Login from './components/Login';
import ContentFeed from './components/ContentFeed';
import WhiskyPage from './components/WhiskyPage';
import BeerPage from './components/BeerPage';
import WinePage from './components/WinePage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
            <Scene key="login" component={Login} title="Login" hideNavBar/>
            <Scene key="contentFeed" component={ContentFeed} title="content" hideNavBar/>
            <Scene key="whisky" component={WhiskyPage} title="whisky" hideNavBar/>
            <Scene key="beer" component={BeerPage} title="beer" hideNavBar/>
            <Scene key="wine" component={WinePage} title="wine" hideNavBar/>
        </Scene>
    </Router>
    );
  }
}

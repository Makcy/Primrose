import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  MainPage,
} from '../components';

class AppRoot extends Component {
  render() {
    return (
      <Router>
        <MainPage />
      </Router>
    );
  }
}

export default connect()(AppRoot);

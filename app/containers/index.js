import React, { Component } from 'react';
import { connect } from 'react-redux';
import { view as Todos } from '../components/Todos';

class AppRoot extends Component {
  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default connect()(AppRoot);

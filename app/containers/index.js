import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppRoot extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default connect()(AppRoot);

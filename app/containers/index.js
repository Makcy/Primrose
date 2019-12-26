import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppRoot extends Component {
  render() {
    return (
      <div>
        <span>Hello World</span>
      </div>
    );
  }
}

export default connect()(AppRoot);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

class AppRoot extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    );
  }
}

export default connect()(AppRoot);

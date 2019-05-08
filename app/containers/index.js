import React, { Component } from 'react';
import { connect } from 'react-redux';

class AppIndex extends Component {
  render() {
    const { value, onSaveWorld } = this.props;
    return (
      <div>
        <span>Hello {value}</span>
        <button onClick={onSaveWorld}>Save World</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //  get actions from import
    onSaveWorld: () => dispatch({
      type: 'SAVE_WORLD',
    }),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppIndex);

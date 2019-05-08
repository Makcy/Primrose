import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class AppIndex extends PureComponent {
  render() {
    const { value, onSaveWorld } = this.props;
    return (
      <div>
        <span>
          Hello
          {value}
        </span>
        <button type="button" onClick={onSaveWorld}>Save World</button>
      </div>
    );
  }
}

AppIndex.propTypes = {
  value: PropTypes.string.isRequired,
  onSaveWorld: PropTypes.func.isRequired,
};

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

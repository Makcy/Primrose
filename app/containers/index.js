// import React, { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// class AppIndex extends Component {
//   render() {
//     const { value, onSaveWorld } = this.props;
//     return (
//       <div>
//         <span>
//           Hello
//           {value}
//         </span>
//         <button type="button" onClick={onSaveWorld}>Save World</button>
//       </div>
//     );
//   }
// }
const AppIndex = ({ value, onSaveWorld }) => (
  <div>
    <span>
      Hello
      {value}
    </span>
    <button type="button" onClick={onSaveWorld}>Save World</button>
  </div>
);


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

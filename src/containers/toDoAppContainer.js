import {
  connect
} from 'react-redux';
import ToDoApp from '../components/ToDoApp';
import {
  inputChange,
  inputSubmit,
  listItemDelete,
  listItemClick
} from '../redux/modules/toDoApp';

function mapStateToProps(state) {
  return {
    toDoApp: state.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputChange: (event) => dispatch(inputChange(event.target.value)),
    inputSubmit: (event) => {
      event.preventDefault();
      dispatch(inputSubmit())
    },
    listItemDelete: (index) => dispatch(listItemDelete(index)),
    listItemClick: (index) => dispatch(listItemClick(index))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);
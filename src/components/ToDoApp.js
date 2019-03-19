import React from 'react';

import List from './List';
import Input from './Input';

class ToDoApp extends React.Component {
  // onInputChange = (event) => { 
  //   this.setState({ newToDo: event.target.value });
  // }
  // onInputSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     list: [...this.state.list, {item: this.state.newToDo, done: false}],
  //     newToDo: ''
  //   })
  // }
  // onListItemClick = (i) => {
  //   this.setState({
  //     list: [
  //       ...this.state.list.slice(0, i),
  //       Object.assign({}, {item: this.state.list[i].item, done: !this.state.list[i].done}),
  //       ...this.state.list.slice(i+1)
  //     ]
  //   })
  // }
  // onListItemDeleteClick = (i) => {
  //   this.setState({
  //     list: [
  //       ...this.state.list.slice(0, i),
  //       ...this.state.list.slice(i+1)
  //     ]
  //   })
  // }
  // componentWillMount() {
  //   this.setState({
  //     list: [{item: 'thing1', done: false}],
  //     newToDo: 'test'
  //   });
  // }
  render() {
    const { toDoApp, inputChange, inputSubmit, listItemDelete, listItemClick} = this.props;
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body">
              <h1>My To Do App</h1>
              {/* <Input onChange={this.onInputChange} onSubmit={this.onInputSubmit}/> */}
              <Input onChange={inputChange} onSubmit={inputSubmit} />
              <hr />
              <List listItems={toDoApp.list}
                onDeleteClick={listItemDelete}
                onClick={listItemClick}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoApp;
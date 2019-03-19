import React from 'react';
import ReactDom from 'react-dom';

// import ToDoApp from './components/ToDoApp';
import { Provider } from 'react-redux';
import  ToDoAppContainer from './containers/toDoAppContainer';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render() {
    return(
      <div>
        {/* <ToDoApp/> */}
        <Provider store={store}>
          <ToDoAppContainer />
        </Provider>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('app'));
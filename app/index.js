
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import AppRoot from './containers';

const store = createStore(rootReducer);

const div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

ReactDom.render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('app'),
);

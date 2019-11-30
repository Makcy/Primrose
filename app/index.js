
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppRoot from './containers';
import store from './store';

// const div = document.createElement('div');
// div.setAttribute('id', 'app');
// document.body.appendChild(div);
// document.body.style.margin = 0;

ReactDom.render(
  <Provider store={store}>
    <AppRoot />
  </Provider>,
  document.getElementById('app'),
);

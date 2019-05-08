import React, { Component } from 'react';
import styles from './MainPage.scss';
import {
  TopMenu,
} from '..';

export default class MainPage extends Component {
  render() {
    console.log('Styles', styles);
    return (
      <div>
        <span className={styles.test}>Hello MainPage</span>
        <TopMenu />
      </div>
    );
  }
}

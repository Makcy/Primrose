import React, { Component } from 'react';
import styles from './MainPage.scss';
import {
  TopMenu,
  MainContent,
  Footer,
} from '..';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <TopMenu className={styles.top} />
        <MainContent className={styles.main} />
        <Footer className={styles.footer} />
      </div>
    );
  }
}

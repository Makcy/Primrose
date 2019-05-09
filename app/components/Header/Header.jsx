import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styles from './Header.scss';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles['header-linner']}>
          <div className={styles.title}>
            <span>{title}</span>
          </div>
        </div>
      </div>
    );
  }
}

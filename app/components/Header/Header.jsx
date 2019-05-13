import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styles from './Header.scss';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    nav: PropTypes.arrayOf.isRequired,
  };

  render() {
    const { title, nav } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles['header-linner']}>
          <div className={styles.title}>
            <span>{title}</span>
          </div>
          <div className={styles.nav}>
            <ul>
              {
                nav.map(item => (
                  <li key={item.tip} className={styles.menuItem}>
                    <a href="http://www.baidu.com">
                      <i className={item.icon} />
                      {item.tip}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Header.scss';

export default class Header extends Component {
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
                      <i className={classNames(
                        item.icon,
                        styles.menuItemIcon,
                      )}
                      />
                      {item.tip}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={styles['site-nav']}>
            <div className={styles['site-nav-toggle']}>
              <button type="button">
                <span className={styles['btn-bar']} />
                <span className={styles['btn-bar']} />
                <span className={styles['btn-bar']} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

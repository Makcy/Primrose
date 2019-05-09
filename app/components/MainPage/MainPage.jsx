import React, { Component } from 'react';
import {
  Header,
  MainContent,
  Footer,
} from '..';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        title: '不忘初心，方得始终',
        nav: [
          '首页',
          '归档',
          '标签',
          '关于',
        ],
      },
    };
  }

  render() {
    const { header } = this.state;
    return (
      <div>
        <Header {...header} />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

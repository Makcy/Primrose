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
          {
            tip: '首页',
            icon: 'fa fa-home fa-fw',
          },
          {
            tip: '归档',
            icon: 'fa fa-archive fa-fw',
          },
          {
            tip: '标签',
            icon: 'fa fa-tags fa-fw',
          },
          {
            tip: '关于',
            icon: 'fa fa-user fa-fw',
          },
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

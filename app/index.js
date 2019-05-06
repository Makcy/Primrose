import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <h1>Hello Primrose</h1>
      </div>
    );
  }
}

const div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

ReactDom.render(<App />, document.getElementById('app'));

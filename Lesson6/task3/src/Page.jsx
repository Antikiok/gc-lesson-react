/* eslint-disable class-methods-use-this */
import React from 'react';
import Message from './Message.jsx';

class Page extends React.Component {
  state = {
    text: null,
  };

  setText = text => {
    this.setState({ text });
  };

  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="action">
          <button className="btn" onClick={() => this.setText('Hello, world!')}>
            Text1
          </button>
          <button className="btn" onClick={() => this.setText('Another exciting text.')}>
            Text2
          </button>
          <button className="btn" onClick={() => this.setText('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;

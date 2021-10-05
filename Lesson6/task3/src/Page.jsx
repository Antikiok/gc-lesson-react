/* eslint-disable class-methods-use-this */
import React from 'react';
import Message from './Message.jsx';

const text1 = 'Hello, world!';
const text2 = 'Another exciting text';

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
          <button className="btn" onClick={() => this.setText(text1)}>
            Text1
          </button>
          <button className="btn" onClick={() => this.setText(text2)}>
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

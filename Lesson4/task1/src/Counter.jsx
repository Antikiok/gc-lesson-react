import React, { Component } from 'react';
import './counter.scss';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    setInterval(() => {
      this.setState(
        {
          counter: this.state.counter + 1,
        },
        1000,
      );
    });
  }

  render() {
    console.log(this.state.counter);

    return <div className="counter">{this.state.counter}</div>;
  }
}
export default Counter;

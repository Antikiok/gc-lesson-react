import React from 'react';

class Life extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
  // }

  componentDidUpdate() {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('return React element to build DOM');
    return null;
  }
}

export default Life;

import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      text: 'Off',
    };
  }
  swithToggler = state => {
    if (this.state.toggled) {
      this.setState(state => ({
        toggled: !state.toggled,
        text: 'On',
      }));
    } else {
      this.setState(state => ({
        toggled: !state.toggled,
        text: 'Off',
      }));
    }
  };

  render() {
    return (
      <button className={'fancy-button'} onClick={this.swithToggler}>
        {this.state.text}
      </button>
    );
  }
}

export default Toggler;

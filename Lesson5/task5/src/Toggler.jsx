import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      text: 'Off',
    };
  }

  swithToggler = () => {
    if (this.state.toggled) {
      this.setState(state => ({
        toggled: !state.toggled,
        text: 'Off',
      }));
    } else {
      this.setState(state => ({
        toggled: !state.toggled,
        text: 'On',
      }));
    }
  };

  render() {
    return (
      <button className={'toggler'} onClick={this.swithToggler}>
        {this.state.text}
      </button>
    );
  }
}

export default Toggler;

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
    this.setState(state => ({
      toggled: !state.toggled,
    }));
  };
  render() {
    if (this.state.toggled) {
      return (
        <>
          <button className={'fancy-button'} onClick={this.swithToggler}>
            On
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className={'fancy-button'} onClick={this.swithToggler}>
            {this.state.text}
          </button>
        </>
      );
    }
  }
}

export default Toggler;

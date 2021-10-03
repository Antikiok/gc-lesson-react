import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
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
            Off
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className={'fancy-button'} onClick={this.swithToggler}>
            On
          </button>
        </>
      );
    }
  }
}

export default Toggler;

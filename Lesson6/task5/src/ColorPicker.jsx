import React from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textColor: '',
    };
  }

  handleHover = color => {
    this.setState({
      textColor: color,
    });
  };

  handleMouseLeave = () => {
    this.setState({
      textColor: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.textColor}</div>
        <div>
          <button
            onMouseEnter={() => this.handleHover(CORAL)}
            onMouseLeave={this.handleMouseLeave}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseEnter={() => this.handleHover(AQUA)}
            onMouseLeave={this.handleMouseLeave}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseEnter={() => this.handleHover(BISQUE)}
            onMouseLeave={this.handleMouseLeave}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;

import React from 'react';
const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends React.Component {
  setBodyColor = color => {
    document.body.style.background = color;
  };
  render() {
    return (
      <div className="colors">
        <button
          onClick={() => this.setBodyColor(RED)}
          style={{ backgroundColor: RED }}
          className="colors__button"
        ></button>
        <button
          onClick={() => this.setBodyColor(GREEN)}
          style={{ backgroundColor: GREEN }}
          className="colors__button"
        ></button>
        <button
          onClick={() => this.setBodyColor(BLUE)}
          style={{ backgroundColor: BLUE }}
          className="colors__button"
        ></button>
      </div>
    );
  }
}
export default Colors;

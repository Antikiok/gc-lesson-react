import React from 'react';
import Clock from './Clock.jsx';
import './index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const localTime = this.props.localTimeZone;
    return (
      <>
        <button className="btn" onClick={this.toggle}>
          Hide
        </button>
        {this.state.visible &&
          localTime.map(time => (
            <Clock key={time.id} location={time.location} offset={time.offset} />
          ))}
      </>
    );
  }
}

export default App;

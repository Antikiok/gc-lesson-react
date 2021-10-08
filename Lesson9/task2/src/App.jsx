import React from 'react';
import UserForm from './UserForm.jsx';

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
            <UserForm key={time.id} location={time.location} offset={time.offset} />
          ))}
      </>
    );
  }
}

export default App;

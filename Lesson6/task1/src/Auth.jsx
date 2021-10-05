import React from 'react';
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn } = this.state;
    let button;

    if (isLoggedIn) {
      button = <Logout onLogout={this.handleLogoutClick} />;
    } else {
      button = <Login onLogin={this.handleLoginClick} />;
    }
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default Auth;

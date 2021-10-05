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

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <>
        <div className="panel">
          <Greeting isLoggedIn={this.state.isLoggedIn} />
          {this.state.isLoggedIn ? (
            <Logout isLogout={this.handleLogout} />
          ) : (
            <Login isLogin={this.handleLogin} />
          )}
        </div>
      </>
    );
  }
}

export default Auth;

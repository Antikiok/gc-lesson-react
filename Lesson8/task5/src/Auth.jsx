import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      onSpinner: false,
    };
  }

  handleLogin = () => {
    this.setState({ onSpinner: true });
    setTimeout(() => {
      this.setState({ onSpinner: false });
      this.setState({ isLoggedIn: true });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const button = this.state.isLoggedIn ? (
      <Logout onLogout={this.handleLogout} />
    ) : (
      <Login onLogin={this.handleLogin} />
    );
    return <div className="panel">{this.state.onSpinner ? <Spinner size={30} /> : button}</div>;
  }
}

export default Auth;

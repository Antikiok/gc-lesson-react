import React, { Component } from 'react';
import UserForm from './UserForm.jsx';

class App extends Component {
  createUser = userData => {
    console.log(userData);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;

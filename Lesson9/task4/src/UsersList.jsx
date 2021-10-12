import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends React.Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { users } = this.props;
    const { value } = this.state;
    const filterdUsersList = (
      this.state.value === ''
        ? users
        : users.filter(user => user.name.toLowerCase().includes(value.toLowerCase()))
    ).map(user => <User key={user.id} name={user.name} age={user.age} />);
    return (
      <>
        <Filter filteredText={value} count={filterdUsersList.length} onChange={this.handleChange} />
        <ul className="users">{filterdUsersList}</ul>
      </>
    );
  }
}

export default UsersList;

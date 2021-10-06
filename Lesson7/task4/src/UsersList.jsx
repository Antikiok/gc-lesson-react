import React from 'react';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Pagination />
        <ul className="users">
          {this.props.users.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;

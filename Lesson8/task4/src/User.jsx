import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.fetchUser(this.props.userId);
  }

  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: data,
        });
      });
  };

  render() {
    const { user } = this.state;
    if (!this.state.user) {
      return null;
    }
    return (
      <div className="user">
        <div>
          <img className="user__avatar" alt="User Avatar" src={user.avatar_url} />
        </div>
        <div className="user__info">
          <span className="user__name">{user.name}</span>
          <span className="user__location">{user.location}</span>
        </div>
      </div>
    );
  }
}

export default User;

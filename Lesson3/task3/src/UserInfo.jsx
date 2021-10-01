import React from 'react';
import Avatar from './Avatar.jsx';

function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
}

export default UserInfo;

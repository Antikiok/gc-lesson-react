import React from 'react';
import Avatar from './Avatar.jsx';

const UserInfo = props => {
  console.log(props);
  return (
    <div className="user-info">
      <Avatar author={props.author} />
      <div className="user-info__name">{props.author.name}</div>
    </div>
  );
};

export default UserInfo;

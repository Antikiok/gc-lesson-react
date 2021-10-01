import React from 'react';

const Avatar = props => {
  return <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />;
};

export default Avatar;

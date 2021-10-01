import React from 'react';

const Profile = props => (
  <div className="profile">
    <div className="profile__name">{`${props.firstName} ${props.lastName}`}</div>
    <div className="profile__birth">{`Was born ${props.birthDate} in ${props.birthPlace}`}</div>
  </div>
);

export default Profile;

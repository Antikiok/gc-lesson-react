import React from 'react';
import moment from 'moment';

const Profile = props => {
  const formattedDate = moment(new Date(props.userInfo.birthDate)).format('DD MMM YY');

  return (
    <div className="profile">
      <div className="profile__name">{`${props.userInfo.firstName} ${props.userInfo.lastName}`}</div>
      <div className="profile__birth">{`Was born ${formattedDate} in ${props.userInfo.birthPlace}`}</div>
    </div>
  );
};

export default Profile;

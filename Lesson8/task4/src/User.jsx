import React from 'react';

const User = () => {
  return (
    <div className="user">
      <div>
        <img
          className="user__avatar"
          alt="User Avatar"
          src="https://avatars3.githubusercontent.com/u/69631?v=4"
        />
      </div>
      <div className="user__info">
        <span className="user__name">Facebook</span>
        <span className="user__location">Menlo Park, California</span>
      </div>
    </div>
  );
};
export default User;

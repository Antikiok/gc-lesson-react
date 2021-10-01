import React from 'react';
import './comments.scss';
import moment from 'moment';
import UserInfo from './UserInfo.jsx';

const formatDate = date => moment(date).format('DD MMM YYYY');

const Comment = props => {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
};

export default Comment;

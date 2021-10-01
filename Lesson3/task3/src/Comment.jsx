import React from 'react';
import './comments.scss';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

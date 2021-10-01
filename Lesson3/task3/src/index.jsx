import ReactDOM from 'react-dom';
import React from 'react';

import Comment from './Comment.jsx';
import './index.scss';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars.githubusercontent.com/u/7864315',
};

ReactDOM.render(
  <Comment user={userInfo} text="Good job!" date={new Date()} />,
  document.getElementById('root'),
);

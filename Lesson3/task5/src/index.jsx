import ReactDOM from 'react-dom';
import React from 'react';
import moment from 'moment';

import Profile from './Profile.jsx';

ReactDOM.render(
  <Profile
    firstName={'John'}
    lastName={'Doe'}
    birthDate={moment(new Date(1991, 0, 17)).format('DD MMM YY')}
    birthPlace={'London'}
  />,
  document.getElementById('root'),
);

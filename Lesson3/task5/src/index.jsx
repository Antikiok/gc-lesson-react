import ReactDOM from 'react-dom';
import React from 'react';
import Profile from './Profile.jsx';
import './index.css';

const userData = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

ReactDOM.render(<Profile userInfo={userData} />, document.getElementById('root'));

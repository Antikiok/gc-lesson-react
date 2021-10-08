import ReactDOM from 'react-dom';
import React from 'react';

import './index.scss';
import App from './App.jsx';

const localTimeZone = [
  {
    id: 'id-0',
    location: 'London',
    offset: 0,
  },
  {
    id: 'id-1',
    location: 'Kyiv',
    offset: 2,
  },
  {
    id: 'id-2',
    location: 'New York',
    offset: -5,
  },
];

ReactDOM.render(<App localTimeZone={localTimeZone} />, document.getElementById('root'));

import ReactDOM from 'react-dom';
import React from 'react';

import './index.scss';
import UsersList from './UsersList.jsx';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Sam',
  },
  {
    id: 'id-4',
    age: 32,
    name: 'Nika',
  },
  {
    id: 'id-5',
    age: 25,
    name: 'Rembo',
  },
];

ReactDOM.render(<UsersList users={users} />, document.getElementById('root'));

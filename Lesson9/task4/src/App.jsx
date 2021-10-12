import React from 'react';
import UsersList from './UsersList.jsx';

const usersList = [
  { id: 0, name: 'John', age: 22 },
  { id: 1, name: 'Tom', age: 31 },
  { id: 2, name: 'Rembo', age: 27 },
  { id: 3, name: 'Rocky', age: 56 },
  { id: 4, name: 'Alen', age: 11 },
  { id: 5, name: 'Phill', age: 24 },
];

const App = () => <UsersList users={usersList} />;

export default App;

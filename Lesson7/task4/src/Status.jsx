/* eslint-disable class-methods-use-this */
import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

const Status = ({ isOnline }) => (isOnline ? <Online /> : <Offline />);

export default Status;

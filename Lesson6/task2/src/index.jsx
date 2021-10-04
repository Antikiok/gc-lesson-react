import ReactDOM from 'react-dom';
import React from 'react';

import './index.scss';
import Mailbox from './Mailbox.jsx';

ReactDOM.render(<Mailbox unreadMessages={['d']} />, document.getElementById('root'));

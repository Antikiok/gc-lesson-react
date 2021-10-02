import React from 'react';
import Clock from './Clock.jsx';
import './clock.scss';
import './index.scss';

const city = {
  location: '',
  offset: null,
};

const App = () => {
  const app = (
    <>
      <Clock location={(city.location = 'London')} offset={(city.offset = 0)} />
      <Clock location={(city.location = 'Kyiv')} offset={(city.offset = 2)} />
      <Clock location={(city.location = 'New York')} offset={(city.offset = -5)} />
    </>
  );
  return app;
};

export default App;

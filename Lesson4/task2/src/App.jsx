import React from 'react';
import Clock from './Clock.jsx';
import './clock.scss';
import './index.scss';

const App = () => {
  const app = (
    <>
      <Clock location={'London'} offset={0} />
      <Clock location={'Kyiv'} offset={2} />
      <Clock location={'New York'} offset={-5} />
    </>
  );
  return app;
};

export default App;

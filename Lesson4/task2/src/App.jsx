import React from 'react';
import Clock from './Clock.jsx';
import './clock.scss';
import './index.scss';

const cityLondon = {
  city: 'London',
  GMT: 0,
};

const cityKyiv = {
  city: 'Kyiv',
  GMT: 2,
};
const cityNewYork = {
  city: 'New York',
  GMT: -5,
};

const App = () => (
  <>
    <Clock location={cityLondon.city} offset={cityLondon.GMT} />
    <Clock location={cityKyiv.city} offset={cityKyiv.GMT} />
    <Clock location={cityNewYork.city} offset={cityNewYork.GMT} />
  </>
);

export default App;

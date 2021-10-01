import React from 'react';
import Clock from './Clock.jsx';
import './clock.scss';
import './index.scss';

const cityLondon = {
  city: 'London',
  time: 0,
};

const cityKyiv = {
  city: 'Kyiv',
  time: 3,
};
const cityNewYork = {
  city: 'New York',
  time: -4,
};

const App = () => (
  <>
    <Clock location={cityLondon.city} offset={cityLondon.time} />
    <Clock location={cityKyiv.city} offset={cityKyiv.time} />
    <Clock location={cityNewYork.city} offset={cityNewYork.time} />
  </>
);

export default App;

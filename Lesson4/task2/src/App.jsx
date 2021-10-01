import React from 'react';
import moment from 'moment';
import Clock from './Clock.jsx';
import './clock.scss';
import './index.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const formatDate = date => moment(date).format('h:mm:ss A');

const cityLondon = {
  city: 'London',
  time: formatDate(getTimeWithOffset(0)),
};

const cityKyiv = {
  city: 'Kyiv',
  time: formatDate(getTimeWithOffset(2)),
};
const cityNewYork = {
  city: 'New York',
  time: formatDate(getTimeWithOffset(-5)),
};

const App = () => (
  <>
    <Clock location={cityLondon.city} offset={cityLondon.time} />
    <Clock location={cityKyiv.city} offset={cityKyiv.time} />
    <Clock location={cityNewYork.city} offset={cityNewYork.time} />
  </>
);

export default App;

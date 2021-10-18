/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const formateTime = offset => moment(offset).format('LTS');
const formatedOffsetTime = offset => formateTime(getTimeWithOffset(offset));

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(formatedOffsetTime(offset));
  console.log(formatedOffsetTime(time));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(formatedOffsetTime(offset));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{time}</div>
    </div>
  );
};

export default Clock;

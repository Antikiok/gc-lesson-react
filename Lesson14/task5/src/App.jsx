import React, { useState } from 'react';

import Clock from './Clock.jsx';
import './index.scss';

const App = ({ localTimeZone }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button className="btn" onClick={toggle}>
        Hide
      </button>
      {isVisible &&
        localTimeZone.map(time => (
          <Clock key={time.id} location={time.location} offset={time.offset} />
        ))}
    </>
  );
};

export default App;

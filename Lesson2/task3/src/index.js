import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const renderSeconds = time => {
  const seconds = new Date(time).getSeconds();
  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const textColor = seconds % 2 !== 0 ? '#fff' : '#000';
  const style = {
    color: textColor,
    backgroundColor,
  };

  const element = (
    <div className="seconds" style={style}>
      {`Now is ${seconds}`}
    </div>
  );

  ReactDOM.render(element, rootElement);
};

setInterval(() => renderSeconds(new Date()), 1000);

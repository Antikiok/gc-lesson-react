import React from 'react';
import Counter from './Counter.jsx';

const App = () => (
  <>
    <Counter start={5} />
    <Counter start={12} />
    <Counter start={-21} />
  </>
);

export default App;

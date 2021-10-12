import React from 'react';

const Filter = ({ filteredText, count, onChange }) => (
  <div className="filter">
    <span className="filter__count">{count}</span>
    <input type="text" className="filter__input" onChange={onChange} value={filteredText} />
  </div>
);

export default Filter;

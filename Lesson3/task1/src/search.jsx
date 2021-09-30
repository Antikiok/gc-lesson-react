import React from 'react';

const Search = props => {
  return (
    <div class="search">
      <h1 class="search__title">{`Hello, ${props.name}. What to search for you?`}</h1>
      <div class="search__field">
        <input type="text" class="search__input" />
        <button class="search__button">Search</button>
      </div>
    </div>
  );
};

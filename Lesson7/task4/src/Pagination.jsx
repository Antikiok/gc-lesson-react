import React from 'react';

const Pagination = (goPrev, goNext) => {
  console.log(goPrev);
  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev}>
        ←
      </button>
      <span className="pagination__page">1</span>
      <button className="btn" onClick={goNext}>
        →
      </button>
    </div>
  );
};

export default Pagination;

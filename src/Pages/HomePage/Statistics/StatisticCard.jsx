import React from 'react';

const StatisticCard = ({ img, count, des }) => {
  return (
    <div className="w-full">
      <div className="d-flex statistics__content w-full">
        <img src={img} alt="" />
        <div className="statistics__text">
          <h3>{count}</h3>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;

import React from 'react';
import submissionLogo from '../../../assets/icons/Group 1000002515.svg';
import dataScientistLogo from '../../../assets/icons/Group 1000002516.svg';
import challengeHostedLogo from '../../../assets/icons/Group 1000002518.svg';
import './ Statistics.css';
import StatisticCard from './StatisticCard';

const Statistics = () => {
  const statisticsData = [
    {
      id: 1,
      img: `${submissionLogo}`,
      count: '100K+',
      des: 'Ai Model Submission',
    },
    {
      id: 2,
      img: `${dataScientistLogo}`,
      count: '50K+',
      des: 'Data Scientist',
    },
    {
      id: 3,
      img: `${challengeHostedLogo}`,
      count: '100+',
      des: 'Ai Challenge Hosted',
    },
  ];
  return (
    <section className="statistics__bg">
      <div className="d-flex align-items-center justify-content-between container mx-auto w-full">
        {statisticsData.map((data) => (
          <StatisticCard img={data.img} count={data.count} des={data.des} />
        ))}
      </div>
    </section>
  );
};

export default Statistics;

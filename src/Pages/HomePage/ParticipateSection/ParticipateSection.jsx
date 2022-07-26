import React from 'react';
import Row from 'react-bootstrap/Row';
import skill from '../../../assets/icons/carbon_notebook-reference.svg';
import recognition from '../../../assets/icons/IdentificationCard.svg';
import challenge from '../../../assets/icons/Robot.svg';
import community from '../../../assets/icons/Vector.svg';
import ParticipateCard from './ParticipateCard';
import './ParticipateSection.css';

const ParticipateSection = () => {
  const participateCardData = [
    {
      id: 1,
      icon: `${skill}`,
      heading: `Prove your skills`,
      description: `Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.`,
    },
    {
      id: 2,
      icon: `${community}`,
      heading: `Learn from community`,
      description: `One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.`,
    },
    {
      id: 3,
      icon: `${challenge}`,
      heading: `Challenge yourself`,
      description: `There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.`,
    },
    {
      id: 4,
      icon: `${recognition}`,
      heading: `Earn recognition`,
      description: ` You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.`,
    },
  ];
  return (
    <section className="container mx-auto my-5">
      <h2 className="text-center my-5">
        Why Participate in{' '}
        <span style={{ color: '#44924C' }}>AI Challenges?</span>
      </h2>
      <Row xs={1} md={2} className="g-4">
        {participateCardData.map((participate) => (
          <ParticipateCard
            key={participate.id}
            icon={participate.icon}
            description={participate.description}
            heading={participate.heading}
          />
        ))}
      </Row>
    </section>
  );
};

export default ParticipateSection;

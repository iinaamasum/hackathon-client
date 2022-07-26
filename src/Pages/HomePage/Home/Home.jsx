import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import ParticipateSection from '../ParticipateSection/ParticipateSection';
import Statistics from '../Statistics/ Statistics';

const Home = () => {
  return (
    <section>
      <HeroSection />
      <Statistics />
      <ParticipateSection />
    </section>
  );
};

export default Home;

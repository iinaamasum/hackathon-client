import React from 'react';
import ExploreChallenge from '../ExploreChallengeSection/ExploreChallenge';
import HeroSection from '../HeroSection/HeroSection';
import ParticipateSection from '../ParticipateSection/ParticipateSection';
import Statistics from '../Statistics/ Statistics';

const Home = () => {
  return (
    <section>
      <HeroSection />
      <Statistics />
      <ParticipateSection />
      <ExploreChallenge />
    </section>
  );
};

export default Home;

import React from 'react';
import { Button } from 'react-bootstrap';
import heroImg from '../../../assets/icons/PicsArt_04-14-04.42 1.svg';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero__section pt-5 pt-md-0">
      <div className="d-md-flex mt-5 mt-md-0 justify-content-between align-items-center container mx-auto hero__heading">
        {/* header text  */}
        <div className="hero__text">
          <h1>
            <span>Accelerate Innovation</span> <br />
            <span>with Global AI Challenges</span>
          </h1>
          <p>
            AI Challenges at DPhi simulate real-world problems. It is a great
            place to put your AI/Data Science skills to test on diverse datasets
            allowing you to foster learning through competitions.{' '}
          </p>
          <Button className="hero__btn">Create Challenge</Button>
        </div>
        {/* image section  */}
        <div className="hero__img">
          <img className="" src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

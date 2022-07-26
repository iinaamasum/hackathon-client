import React from 'react';
import Col from 'react-bootstrap/Col';

const ParticipateCard = ({ icon, heading, description }) => {
  return (
    <Col>
      <div className="participate__card__body">
        <img src={icon} alt="icon" />
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </Col>
  );
};

export default ParticipateCard;

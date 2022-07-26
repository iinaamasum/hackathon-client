import React from 'react';
import Col from 'react-bootstrap/Col';
import { BsCheck2Circle } from 'react-icons/bs';
import img from '../../../assets/cardimage/Group 1000002466.png';

const SearchResultCard = () => {
  return (
    <Col>
      <Col>
        <div className="search__result__card__body">
          <img src={img} alt="icon" />
          <p className="timing__level">Upcoming</p>
          <h2 className="mb-4">Lorem ipsum dolor sit </h2>
          <div className="timing__clock">Starts in</div>
          <button className="participate__btn">
            <BsCheck2Circle className="me-3" />
            Participate
          </button>
        </div>
      </Col>
    </Col>
  );
};

export default SearchResultCard;

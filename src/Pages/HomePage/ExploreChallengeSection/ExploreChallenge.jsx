import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import './ExploreChallenge.css';

const ExploreChallenge = () => {
  return (
    <section className="py-5 search__section">
      <div className="container mx-auto">
        <h1 className="text-center mb-5 text-white">Explore Challenges</h1>
        {/* search box  */}
        <div className="search__box">
          <Form className="d-flex justify-content-center">
            <Form.Control className="ps-5" type="text" placeholder="Search" />
            <DropdownButton
              as={ButtonGroup}
              className="ms-4"
              variant="light"
              title="Filter"
            >
              <p className="ps-3">Status</p>
              <Dropdown.Item eventKey="1">All</Dropdown.Item>
              <Dropdown.Item eventKey="2">Active</Dropdown.Item>
              <Dropdown.Item eventKey="3">Upcoming</Dropdown.Item>
              <Dropdown.Item eventKey="4">Pass</Dropdown.Item>
              <Dropdown.Divider />
              <p className="ps-3">Level</p>
              <Dropdown.Item eventKey="5">Easy</Dropdown.Item>
              <Dropdown.Item eventKey="6">Medium</Dropdown.Item>
              <Dropdown.Item eventKey="7">Hard</Dropdown.Item>
            </DropdownButton>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ExploreChallenge;

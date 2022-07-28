import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './CreateChallenge.css';

const CreateChallenge = () => {
  return (
    <section className="pt-5 mb-5">
      <div className="create__challenge-details">
        <h2 className="container mx-auto">Challenge Details</h2>
      </div>
      <Container className="mt-2">
        <Form className="form__content">
          {/* challenge name */}
          <Form.Group className="mb-3" controlId="challenge-name">
            <Form.Label>Challenge Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Challenge Name" />
          </Form.Group>
          {/* challenge start time  */}
          <Form.Group className="mb-3" controlId="challenge-name">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" placeholder="Enter Challenge Name" />
          </Form.Group>
          {/* end date  */}
          <Form.Group className="mb-3" controlId="challenge-name">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" placeholder="Enter Challenge Name" />
          </Form.Group>
          {/* challenge description  */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter the description of the hackathon..."
              className=""
              rows={4}
            />
          </Form.Group>
          {/* image description  */}
          <Form.Group className="mb-3" controlId="challenge-name">
            <Form.Label>Image</Form.Label>
            <Form.Control
              className="challenge__img"
              type="image"
              placeholder="Enter Challenge Name"
            />
          </Form.Group>
          {/* level selection */}
          <Form.Group
            className="mb-3 challenge__level"
            controlId="challenge-name"
          >
            <Form.Label>Level</Form.Label>
            <Form.Select name="level" aria-label="Default select example">
              <option selected value="Easy">
                Easy
              </option>
              <option value="Medium">Medium</option>
              <option value="hard">Hard</option>
            </Form.Select>
          </Form.Group>
          {/* submit btn  */}
          <Button>Save Changes</Button>
        </Form>
      </Container>
    </section>
  );
};

export default CreateChallenge;

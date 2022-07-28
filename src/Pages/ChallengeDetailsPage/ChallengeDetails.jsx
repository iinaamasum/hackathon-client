import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { BsClock } from 'react-icons/bs';
import './ChallengeDetails.css';

const ChallengeDetails = () => {
  return (
    <section className="challenge__details">
      {/* challenge details header  */}
      <div className="challenge__details-header">
        <Container>
          <span className="d-flex align-items-center">
            <p className="challenge__details-time">
              <BsClock className="me-2" />
              Starts on 17th Jun'22 09:00 PM (India Standard Time)
            </p>
          </span>
          <h1>Data Sprint 72 - Butterfly Identification</h1>
          <p>Identify the class to which each butterfly belongs to Easy</p>
        </Container>
      </div>
      {/* challenge details action  */}
      <div className="challenge__details-action">
        <Container>
          <div className="action__content pt-2 mb-1">
            <div className="">
              <p>Overview</p>
            </div>
            <div className="pb-1">
              <Button variant="success" className="me-2 px-4">
                Edit
              </Button>
              <Button variant="outline-danger px-3">Delete</Button>
            </div>
          </div>
        </Container>
      </div>
      {/* description of the hackathon  */}
      <Container>
        <div className="py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          alias ipsum excepturi, autem porro officiis repudiandae, iure
          provident necessitatibus iusto quae illum sed consequuntur animi rem
          assumenda accusamus corrupti quis! Autem ea laborum omnis consectetur
          beatae deleniti deserunt officia incidunt nesciunt? Similique numquam
          fugiat rem, doloremque fugit veritatis, eum ex deleniti reiciendis
          aspernatur et voluptatem ratione, iste dolorum suscipit reprehenderit.
          Enim corporis iste ipsa excepturi possimus ut iusto mollitia provident
          perspiciatis. Animi quibusdam deserunt aperiam quis doloremque sunt
          laudantium soluta saepe dicta voluptatibus dolore illo ea
          reprehenderit corporis amet, nihil praesentium beatae. Iusto, fugit?
          Cupiditate blanditiis fuga ipsum vero molestiae accusantium quod,
          perferendis iusto, voluptatibus ex modi! Vel perspiciatis itaque
          beatae est? Minus autem quis sint omnis aliquam id quaerat totam
          suscipit corrupti nulla consectetur inventore, nam placeat commodi
          amet eveniet ut est nisi ea exercitationem impedit perferendis
          accusamus. Fugit non commodi ipsa provident nisi cupiditate, molestiae
          maxime quidem ex assumenda suscipit quam! Quibusdam mollitia accusamus
          velit enim consectetur quae accusantium modi libero? Voluptatem, omnis
          eligendi incidunt molestias sint consectetur corrupti nam nulla
          reiciendis. Culpa quas minus ex, illum impedit commodi perferendis
          nihil omnis nam consequatur numquam laborum vero doloremque nemo
          nesciunt molestiae, aut, aspernatur esse animi. Itaque, deserunt
          velit.
        </div>
      </Container>
    </section>
  );
};

export default ChallengeDetails;

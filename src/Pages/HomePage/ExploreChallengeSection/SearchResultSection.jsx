import React from 'react';
import Row from 'react-bootstrap/Row';
import SearchResultCard from './SearchResultCard';

const SearchResultSection = () => {
  return (
    <section className="search__result-section">
      <div className="container mx-auto">
        <Row xs={1} md={2} lg={3} className="g-5">
          {Array.from({ length: 4 }).map((idx) => (
            <SearchResultCard />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default SearchResultSection;

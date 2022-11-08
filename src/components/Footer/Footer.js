import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import './style.scss';

const ScrollTop = styled.p`
  cursor: pointer;
  &:hover {
    color: #cecece;
  }
`;

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Footer = () => (
  <footer className='container'>
    <Row className='justify-content-between'>
      <Col>
        {/* <ScrollTop onClick={scrollTop}>Back to to</ScrollTop> */}
      </Col>
      <Col className='text-right'>
        <p>© 2022 <a href="http://renatospindola.com.br" target="_blank" rel="noreferrer">RSystems</a></p>
      </Col>
    </Row>
  </footer>
);

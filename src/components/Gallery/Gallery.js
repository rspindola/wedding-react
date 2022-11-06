import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

const photos = [
  'one.jpg',
  'two.jpg',
  'three.jpg',
  'four.jpg',
  'five.jpg',
  'six.jpg',
];

export const Gallery = () => (
  <section className='Gallery'>
    <div className='head'>
      <h2 className='title'>Galeria</h2>
    </div>
    <Container>
      <Row>
        {photos.map((photo, index) => (
          <Col className='my-2' xs={12} md={6} lg={4}>
            <img
              src={`/images/${photo}`}
              className='img-thumbnail hover-shadow rounded'
              alt='...'
            />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

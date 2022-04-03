import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';

const photos = [
  'https://mdbootstrap.com/img/new/standard/city/041.webp',
  'https://mdbootstrap.com/img/new/standard/city/041.webp',
  'https://mdbootstrap.com/img/new/standard/city/041.webp',
  'https://mdbootstrap.com/img/new/standard/city/041.webp',
  'https://mdbootstrap.com/img/new/standard/city/041.webp',
  'https://mdbootstrap.com/img/new/standard/city/041.webp',
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
              src={photo}
              className='img-thumbnail hover-shadow rounded'
              alt='...'
            />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

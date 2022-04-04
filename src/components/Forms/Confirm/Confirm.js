import React from 'react';
import { Form, Container, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import '../style.scss';

export const Confirm = () => (
  <Container className='mt-5'>
    <Row className='d-flex justify-content-center'>
      <Col xs={12} md={12} lg={6}>
        <Form>
          <Row className='mb-3 d-flex justify-content-between align-items-stretch'>
            <Col>Você irá ao evento?</Col>
            <Col className='d-flex justify-content-end'>
              <Form.Check type='switch' id='custom-switch' />
            </Col>
          </Row>
          <FloatingLabel
            controlId='floatingInput'
            label='Nome Completo'
            className='mb-3'
          >
            <Form.Control type='text' placeholder='Nome Completo' />
          </FloatingLabel>
          <Row>
            <Col xs={12} md={12} lg={8}>
              <FloatingLabel
                controlId='floatingInput'
                label='Telefone'
                className='mb-3'
              >
                <Form.Control type='text' placeholder='(00) 00000-0000' />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <FloatingLabel
                controlId='floatingInput'
                label='Adultos'
                className='mb-3'
              >
                <Form.Control type='number' placeholder='0' />
              </FloatingLabel>
            </Col>
          </Row>

          <FloatingLabel
            controlId='floatingInput'
            label='E-mail'
            className='mb-3'
          >
            <Form.Control type='email' placeholder='name@example.com' />
          </FloatingLabel>
          <FloatingLabel controlId='floatingTextarea2' label='Observação'>
            <Form.Control
              as='textarea'
              placeholder='Observação'
              style={{ height: '200px' }}
            />
          </FloatingLabel>
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Enviar
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  </Container>
);

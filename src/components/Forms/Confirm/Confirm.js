import React from 'react';
import { useForm } from "react-hook-form";

import { Form, Container, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import '../style.scss';

export function Confirm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Container className='mt-5'>
      <Row className='d-flex justify-content-center'>
        <Col xs={12} md={12} lg={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='mb-3 d-flex justify-content-between align-items-stretch'>
              <Col>Você irá ao evento?</Col>
              <Col className='d-flex justify-content-end'>
                <Form.Check type='switch' id='custom-switch' {...register("confirm", { required: true })} />
                {errors.confirm && <span className='invalid'>This field is required</span>}
              </Col>
            </Row>
            <FloatingLabel
              controlId='floatingInput'
              label='Nome Completo'
              className='mb-3 '
            >
              <Form.Control type='text' placeholder='Nome Completo' {...register("name", { required: true })} className={`${errors.name ? "input-error" : ""}`} />
              {errors.name && <span className='invalid'>This field is required</span>}

            </FloatingLabel>
            <Row>
              <Col xs={12} md={12} lg={8}>
                <FloatingLabel
                  controlId='floatingInput'
                  label='Telefone'
                  className='mb-3'
                >
                  <Form.Control type='text' placeholder='(00) 00000-0000'  {...register("phone", { required: true })} className={`${errors.phone ? "input-error" : ""}`} />
                  {errors.phone && <span className='invalid'>This field is required</span>}

                </FloatingLabel>
              </Col>
              <Col xs={12} md={12} lg={4}>
                <FloatingLabel
                  controlId='floatingInput'
                  label='Adultos'
                  className='mb-3'
                >
                  <Form.Control type='number' placeholder='0' {...register("adults", { required: true })} className={`${errors.adults ? "input-error" : ""}`} />
                  {errors.adults && <span className='invalid'>This field is required</span>}

                </FloatingLabel>
              </Col>
            </Row>

            <FloatingLabel
              controlId='floatingInput'
              label='E-mail'
              className='mb-3'
            >
              <Form.Control type='email' placeholder='name@example.com' {...register("email", { required: true })} className={`${errors.email ? "input-error" : ""}`} />
              {errors.email && <span className='invalid'>This field is required</span>}

            </FloatingLabel>
            <FloatingLabel controlId='floatingTextarea2' label='Observação'>
              <Form.Control
                as='textarea'
                placeholder='Observação'
                style={{ height: '200px' }}
                {...register("obs", { required: true })}
                className={`${errors.obs ? "input-error" : ""}`}
              />
              {errors.obs && <span className='invalid'>This field is required</span>}
            </FloatingLabel>
            <div className="d-grid gap-2 mt-3">
              <Button type="submit" variant="primary" size="lg">
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
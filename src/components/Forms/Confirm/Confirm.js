import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '../../../validations';
import axios from 'axios'

import { Form, Container, Row, Col, FloatingLabel, Button } from 'react-bootstrap';
import '../style.scss';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required(),
  status: yup.boolean().required().oneOf([true], "Confirme clicando no botão acima"),
  adults: yup.number().min(1).max(9).required(),
  children: yup.number().max(9).required(),
  message: yup.string().max(250)
}).required();

const MySwal = withReactContent(Swal)


export function Confirm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data)
    axios.post('https://wedding.renatospindola.com.br/api/confirmation', data)
      .then(function (response) {
        MySwal.fire({
          title: <strong>Parabéns!</strong>,
          html: <i>Presença confirmada com sucesso. Aguardaremos você lá.</i>,
          icon: 'success'
        })

        reset();
        console.log(response);
      })
      .catch(function (error) {
        MySwal.fire({
          title: <strong>Ops...</strong>,
          html: <i>Ocorreu um erro, tente novamente ou entre em contato com os noivos.</i>,
          icon: 'error'
        })
        console.log(error);
      });
  };

  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <Col xs={12} md={12} lg={6}>
          <Form onSubmit={handleSubmit(onSubmit)} className="mb-3">
            <FloatingLabel
              controlId='floatingInput'
              label='Nome Completo'
              className='mb-3 '
            >
              <Form.Control type='text' placeholder='Nome Completo' {...register("name", { required: true })} isInvalid={errors.name} />
            </FloatingLabel>
            <Row>
              <Col xs={12} md={12} lg={6}>
                <FloatingLabel
                  controlId='floatingInput'
                  label='Telefone'
                  className='mb-3'
                >
                  <Form.Control type='text' placeholder='(00) 00000-0000'  {...register("phone", { required: true, maxLength: 16 })} isInvalid={errors.phone} />
                </FloatingLabel>
              </Col>
              <Col xs={12} md={12} lg={3}>
                <FloatingLabel
                  controlId='floatingInput'
                  label='Adultos'
                  className='mb-3'
                >
                  <Form.Control type='number' placeholder='0' defaultValue={0} {...register("adults", { required: true, min: 0, max: 9 })} min="0" max="9" isInvalid={errors.adults} />
                </FloatingLabel>
              </Col>
              <Col xs={12} md={12} lg={3}>
                <FloatingLabel
                  controlId='floatingInput'
                  label='Crianças*'
                  className='mb-3'
                >
                  <Form.Control type='number' placeholder='0' defaultValue={0} {...register("children", { required: true, min: 0, max: 9 })} min="0" max="9" isInvalid={errors.children} />
                </FloatingLabel>
              </Col>
            </Row>

            <FloatingLabel
              controlId='floatingInput'
              label='E-mail'
              className='mb-3'
            >
              <Form.Control type='email' placeholder='name@example.com' {...register("email", { required: true })} isInvalid={errors.email} />
            </FloatingLabel>
            <FloatingLabel controlId='floatingTextarea2' label='Observação'>
              <Form.Control
                as='textarea'
                placeholder='Observação'
                style={{ height: '200px' }}
                {...register("message")}
                isInvalid={errors.message}
                maxLength="250"
              />
            </FloatingLabel>
            <Row className='my-4'>
              <Col>
                <Form.Check label="Confirmo que irei ao evento" type='switch' id='custom-switch' {...register("status", { required: true })} />
                {errors.status && <span className='invalid'>{errors.status.message}</span>}
              </Col>
            </Row>
            <div className="d-grid gap-2 mt-3">
              <Button type="submit" variant="primary" size="lg">
                Enviar
              </Button>
            </div>
          </Form>

          <span>*Crianças até 7 anos</span>
        </Col>
      </Row>
    </Container>
  );
}
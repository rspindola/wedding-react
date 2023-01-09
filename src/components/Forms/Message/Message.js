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
  text: yup.string().max(250)
}).required();

const MySwal = withReactContent(Swal)

export function Message() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data)
    axios.post('https://api.renatospindola.site/api/message', data)
      .then(function (response) {
        MySwal.fire({
          title: <strong>Obrigado!</strong>,
          html: <i>Agradecemos o carinho de vocês..</i>,
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
    <section className='Message'>
      <div className='head'>
        <h2 className='title'>Deixe sua mensagem de carinho para nós</h2>
        <h3 className='subtitle'>
          PALAVRAS SÃO CARINHOS DOADOS. OBRIGADO POR NOS DAR O SEU CARINHO. IREMOS
          LEMBRAR PARA SEMPRE DESTE MOMENTO TÃO ESPERADO.
        </h3>
      </div>
      <div>
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

                <FloatingLabel
                  controlId='floatingInput'
                  label='E-mail'
                  className='mb-3'
                >
                  <Form.Control type='email' placeholder='name@example.com' {...register("email", { required: true })} isInvalid={errors.email} />
                </FloatingLabel>
                <FloatingLabel controlId='floatingTextarea2' label='Mensagem'>
                  <Form.Control
                    as='textarea'
                    placeholder='Observação'
                    style={{ height: '200px' }}
                    {...register("text")}
                    isInvalid={errors.text}
                    maxLength="250"
                  />
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
      </div>
    </section>
  )
}
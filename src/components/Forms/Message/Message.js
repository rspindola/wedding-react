import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import '../style.scss';

export const Message = () => (
  <section className='Message'>
    <div className='head'>
      <h2 className='title'>Deixe sua mensagem de carinho para nós</h2>
      <h3 className='subtitle'>
        PALAVRAS SÃO CARINHOS DOADOS. OBRIGADO POR NOS DAR O SEU CARINHO. IREMOS
        LEMBRAR PARA SEMPRE DESTE MOMENTO TÃO ESPERADO.
      </h3>
    </div>
    <div>
      <Container className='mt-5'>
        <Row className='d-flex justify-content-center'>
          <Col xs={12} md={12} lg={6}>
            <Form>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Nome</Form.Label>
                <Form.Control type='text' placeholder='Nome Completo' />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>E-mail</Form.Label>
                <Form.Control type='email' placeholder='name@example.com' />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as='textarea' rows={5} />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Enviar
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);
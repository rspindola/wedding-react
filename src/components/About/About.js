import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Content = styled.div`
  margin-top: 30px;
  width: 80%;
  text-align: justify;
  color: var(--grape);

  @media (max-width: 599px) {
    width: 100%;
  }
`;

export const About = () => (
  <section className='About'>
    <div className='head'>
      <h2 className='title'>Sejam bem-vindos ao nosso site!</h2>
      <h3 className='subtitle'>
        A MELHOR FORMA DE COMPARTILHAR ESSE MOMENTO COM VOCÊS É VIVENDO JUNTOS
        ESSE SONHO!
      </h3>
    </div>
    <Container className='d-flex align-items-center justify-content-center'>
      <Content>
        Aqui vamos contar à vocês, queridos amigos e familiares, os momentos
        mais marcantes da nossa história de amor. A contagem regressiva começa,
        o frio na barriga e toda a ansiedade do dia mais esperado de nossas
        vidas nos enche de alegria em tê-los ao nosso lado. Vamos juntos nesse
        grande sonho, o dia em que uniremos nossas almas e corpos para sempre, o
        dia do nosso casamento.
      </Content>
    </Container>
  </section>
);

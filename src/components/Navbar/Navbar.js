import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Outlet, Link } from 'react-router-dom';
import logo from '@assets/logo.svg';
import './style.scss';

const StyledNavbar = styled(Navbar)`
  background-color: #f8f7f0;
`;

export const CustomNavbar = () => (
  <StyledNavbar className='shadow-sm' expand='lg' sticky='top'>
    <Container>
      <Navbar.Brand as={Link} to='/'>
        <img
          alt=''
          src={logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        React Bootstrap
      </Navbar.Brand>{' '}
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end'>
        <Nav.Link as={Link} to='/padrinhos'>
          Padrinhos
        </Nav.Link>
        <Nav.Link as={Link} to='/confirme-presenca'>
          Confirme sua presença
        </Nav.Link>
        <Nav.Link as={Link} to='/lista-de-presentes'>
          Lista de Presentes
        </Nav.Link>
      </Navbar.Collapse>
      <Outlet />
    </Container>
  </StyledNavbar>
);

import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Outlet, Link } from 'react-router-dom';
import logo from '@assets/images/hero.png';
import './style.scss';

const StyledNavbar = styled(Navbar)`
  background-color: #f5f2fe;
`;

const StyledNav = styled(Link)`
  color: var(--grape);
  &:hover {
    color: var(--chateu-rose);
  }
`;

const LogoImg = styled.img`
  margin-right: 0.5rem;
  width:30px;
  height:30px;
`

export const CustomNavbar = () => (
  <StyledNavbar collapseOnSelect className='shadow-sm' expand='lg' sticky='top'>
    <Container>
      <Navbar.Brand as={Link} to='/'>
        <LogoImg
          alt='Logo do site'
          src={logo}
          className='d-inline-block align-top'
        />
        Julianne & Renato
      </Navbar.Brand>{' '}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav.Link as={StyledNav} to='/padrinhos'>
          Padrinhos
        </Nav.Link>
        <Nav.Link as={StyledNav} to='/confirme-presenca'>
          Confirme sua presença
        </Nav.Link>
        <Nav.Link as={StyledNav} to='/lista-de-presentes'>
          Lista de Presentes
        </Nav.Link>
      </Navbar.Collapse>
      <Outlet />
    </Container>
  </StyledNavbar>
);

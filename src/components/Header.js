// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
  color: #fff;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) {
    flex: 1;
    justify-content: center;
  }

  a {
    margin: 0 1rem;
    position: relative;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: yellow;
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -1px;
      left: 0;
      background-color: yellow;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease;
    }

    &.active::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: #000;
  color: #fff;
  z-index: 999;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    margin: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;
    transition: color 0.3s ease;

    &:hover {
      color: yellow;
    }
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const Header = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <Logo src={logo} alt="Logo" />
        <Nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </Nav>
        <MenuIcon onClick={handleMenuClick}>
          <FontAwesomeIcon icon={isOpen ? faBarsStaggered : faBars} size="lg" color="white" />
        </MenuIcon>
      </HeaderWrapper>
      <MobileMenu isOpen={isOpen}>
        <a href="#home" onClick={handleMenuClick}>
          Home
        </a>
        <a href="#about" onClick={handleMenuClick}>
          About
        </a>
        <a href="#projects" onClick={handleMenuClick}>
          Projects
        </a>
        <a href="#skills" onClick={handleMenuClick}>
          Skills
        </a>
        <a href="#contact" onClick={handleMenuClick}>
          Contact
        </a>
      </MobileMenu>
    </>
  );
};

export default Header;

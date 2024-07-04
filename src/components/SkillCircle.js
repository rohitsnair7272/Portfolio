// src/components/SkillCircle.js
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Circle = styled.div`
  background: #fff;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin: 1rem;
  width: 80px;
  height: 80px;
  position: relative;
  cursor: pointer;

  &:hover::before {
    content: "${props => props.name}";
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-size: 1rem;
  }

  &:hover::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #61dafb;
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const SkillLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;

const SkillCircle = ({ logo, name, animateIn }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    if (animateIn) {
      gsap.fromTo(
        circleRef.current,
        { opacity: 0, x: () => Math.random() * 400 - 200, y: () => Math.random() * 400 - 200 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 2.5, // Increase duration for smoother animation
          ease: "power2.out",
          scrollTrigger: {
            trigger: circleRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, [animateIn]);

  return (
    <Circle
      ref={circleRef}
      onMouseEnter={() => {
        gsap.to(circleRef.current, { scale: 1.1, duration: 0.3 });
      }}
      onMouseLeave={() => {
        gsap.to(circleRef.current, { scale: 1, duration: 0.3 });
      }}
      name={name}
    >
      <SkillLogo src={logo} alt={name} />
    </Circle>
  );
};

export default SkillCircle;

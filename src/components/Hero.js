// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #282c34;
  color: #61dafb;
`;

const JobRole = styled(motion.h1)`
  font-size: 3rem;
`;

const jobRoles = ["Developer", "Designer", "Creator"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % jobRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection id="home">
      <JobRole
        key={roleIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {jobRoles[roleIndex]}
      </JobRole>
    </HeroSection>
  );
};

export default Hero;

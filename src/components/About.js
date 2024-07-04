// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 769px) {
    align-items: flex-start;
  }
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutImage = styled(motion.img)`
  width: 300px;
  margin-right: 2rem;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const Description = styled(motion.div)`
  max-width: 600px;
`;

const About = ({ image, description }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <AboutSection id="about" ref={ref}>
      <h2 style={{ textAlign: 'center', width: '100%' }}>About Me</h2>
      <AboutContent>
        <AboutImage
          src={image}
          alt="About me"
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        />
        <Description
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <p>{description}</p>
        </Description>
      </AboutContent>
    </AboutSection>
  );
};

export default About;

// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';
import SkillCircle from './SkillCircle';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logo from '../assets/logo.png';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background: #282c34;
  color: #fff;
  text-align: center;
`;

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;

  @media (min-width: 769px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const skills = [
  { logo, name: 'React' },
  { logo, name: 'JavaScript' },
  { logo, name: 'CSS' },
  { logo, name: 'HTML' },
  { logo, name: 'Node.js' },
  { logo, name: 'Python' },
  // Add more skills as needed
];

const Skills = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          when: "beforeChildren",
        },
      });
    }
  }, [controls, inView]);

  return (
    <SkillsSection id="skills" ref={ref}>
      <h2>Skills</h2>
      <SkillsWrapper
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        {skills.map((skill, index) => (
          <SkillCircle key={index} logo={skill.logo} name={skill.name} animateIn={inView} />
        ))}
      </SkillsWrapper>
    </SkillsSection>
  );
};

export default Skills;

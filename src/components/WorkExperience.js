// src/components/WorkExperience.js
import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceSection = styled.section`
  padding: 5rem 2rem;
  background: #f9f9f9;
`;

const ExperienceContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CompanyLogo = styled(motion.img)`
  width: 100px;
  margin-bottom: 1rem;
`;

const Description = styled(motion.div)`
  max-width: 600px;
  text-align: center;
`;

const WorkExperience = ({ companyLogo, description }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <ExperienceSection id="experience" ref={ref}>
      <h2>Work Experience</h2>
      <ExperienceContent>
        <CompanyLogo
          src={companyLogo}
          alt="Company Logo"
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        />
        <Description
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <p>{description}</p>
        </Description>
      </ExperienceContent>
    </ExperienceSection>
  );
};

export default WorkExperience;

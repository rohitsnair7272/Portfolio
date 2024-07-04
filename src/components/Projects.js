// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import project1 from '../assets/project.png'

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: #f9f9f9;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const projects = [
  {
    image: project1,
    description: 'Project 1 description...',
    tags: ['React', 'JavaScript', 'CSS'],
  },
  {
    image: project1,
    description: 'Project 2 description...',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  // Add more projects as needed
];

const Projects = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { staggerChildren: 0.2 } });
    }
  }, [controls, inView]);

  return (
    <ProjectsSection id="projects" ref={ref}>
      <h2>Projects</h2>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;

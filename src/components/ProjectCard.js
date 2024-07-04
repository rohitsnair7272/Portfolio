// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: #ddd;
  border-radius: 5px;
  padding: 0.5rem;
`;

const ProjectCard = ({ image, description, tags }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src={image} alt="Project" />
      <Content>
        <p>{description}</p>
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      </Content>
    </Card>
  );
};

export default ProjectCard;

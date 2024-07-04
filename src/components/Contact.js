// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import githubLogo from '../assets/github.png';
import linkedinLogo from '../assets/linkedin.png';
import resumePDF from '../assets/resume.pdf';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;

  input, textarea {
    margin: 0.5rem 0;
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  button {
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
    background: #282c34;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #61dafb;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  a {
    margin: 0 1rem;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;

const Contact = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <ContactSection id="contact" ref={ref}>
      <h2>Contact Me</h2>
      <SocialLinks>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
        <a href={resumePDF} download="resume.pdf">
          <button>Download Resume</button>
        </a>
      </SocialLinks>
      <ContactForm
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;

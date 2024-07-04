// src/App.js
import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import logo from './assets/logo.png';
import aboutImage from './assets/about-image.jpg';
import companyLogo from './assets/tata-communications-logo.png';

const aboutDescription = "I am a passionate developer with experience in various technologies. I love creating elegant and dynamic web applications.";
const workDescription = "Currently working as a Project Trainee at Tata Communications. Responsibilities include developing, testing, and deploying web applications. Working closely with the development team to deliver high-quality products.";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header logo={logo} />
      <Hero />
      <About image={aboutImage} description={aboutDescription} />
      <Projects />
      <Skills />
      <WorkExperience companyLogo={companyLogo} description={workDescription} />
      <Contact />
    </>
  );
};

export default App;

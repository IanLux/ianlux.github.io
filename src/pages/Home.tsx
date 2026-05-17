import React from 'react';
import { resumeData } from '../resumeData';
import heroImg from '../assets/hero.png';

const Home: React.FC = () => {
  const { personalInfo } = resumeData;

  return (
    <div className="page home-page">
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="Ian Francesco" />
        </div>
        <div>
          <h1>{personalInfo.name}</h1>
          <p className="subtitle">Senior Game Developer</p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="about" className="content-section">
        <h2>About Me</h2>
        {personalInfo.aboutMe.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <div className="ticks"></div>

      <section id="social" className="content-section">
        <h2>Contact & Socials</h2>
        <ul>
          <li>
            <a href={`mailto:${personalInfo.email}`} target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </li>
          <li>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;

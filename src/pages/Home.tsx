import React from 'react';
import { Link } from 'react-router-dom';
import { resumeData } from '../resumeData';

const Home: React.FC = () => {
  const { personalInfo } = resumeData;

  return (
    <div className="page home-page">
      <section id="center">
        <div>
          <h1>{personalInfo.name}</h1>
          <Link to="/portfolio" className="btn-primary">View Projects</Link>
        </div>
      </section>

      <section id="about" className="content-section">
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

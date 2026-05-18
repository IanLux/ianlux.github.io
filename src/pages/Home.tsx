import React from 'react';
import { Link } from 'react-router-dom';
import { resumeData } from '../resumeData';

const Home: React.FC = () => {
  const { personalInfo } = resumeData;

  return (
    <div className="page home-page">
      <section id="center">
        <img src="/ianphoto.png" alt="Ian Doles" className="profile-pic" />
        <div>
          <div className="page-header">
            <img src="/pageicon.png" alt="Icon" />
            <h1>Ian FDT - About</h1>
          </div>
          <Link to="/portfolio" className="btn-primary">View Projects</Link>
        </div>
      </section>

      <section id="about" className="content-section">
        {personalInfo.aboutMe.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <div className="ticks"></div>
    </div>
  );
};

export default Home;

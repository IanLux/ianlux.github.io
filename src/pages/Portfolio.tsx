import React from 'react';
import { resumeData } from '../resumeData';
import ExperienceCard from '../components/ExperienceCard';

const PortfolioPage: React.FC = () => {
  return (
    <div className="page portfolio-page">
      <section className="content-section">
        <div className="page-header">
          <img src="/pageicon.png" alt="Icon" />
          <h1>Ian FDT - Portfolio</h1>
        </div>
        <div className="experience-list">
          {resumeData.experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;

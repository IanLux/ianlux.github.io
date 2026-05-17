import React from 'react';
import { resumeData } from '../resumeData';
import ExperienceCard from '../components/ExperienceCard';

const ExperiencePage: React.FC = () => {
  return (
    <div className="page experience-page">
      <section className="content-section">
        <h1>Professional History</h1>
        <div className="experience-list">
          {resumeData.experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;

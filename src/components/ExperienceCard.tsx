import React from 'react';
import type { Experience } from '../resumeData';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className="experience-image-placeholder">
        {experience.imagePlaceholder}
      </div>
      <div className="experience-content">
        <h3>{experience.title}</h3>
        <p className="experience-role">{experience.role}</p>
        <p className="experience-company">{experience.company}</p>
        <p className="experience-period">{experience.period}</p>
        <div className="experience-skills">
          {experience.skills.map(skill => (
            <span key={skill} className="skill-badge-small">{skill}</span>
          ))}
        </div>
        <ul className="experience-description">
          {experience.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;

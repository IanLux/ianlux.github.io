import React from 'react';
import type { Experience } from '../resumeData';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className="experience-media">
        <div className="experience-image-container">
          <img src={experience.imagePlaceholder} alt={experience.title} className="experience-image" />
        </div>
        {experience.secondaryMedia && (
          <div className="secondary-media-container">
            {experience.secondaryMedia.endsWith('.mp4') ? (
              <video 
                src={experience.secondaryMedia} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="experience-video"
              />
            ) : (
              <img 
                src={experience.secondaryMedia} 
                alt={`${experience.title} demo`} 
                className="experience-gif" 
              />
            )}
          </div>
        )}
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

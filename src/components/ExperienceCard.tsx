import React, { useState, useEffect } from 'react';
import type { Experience } from '../resumeData';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [secondaryMedia, setSecondaryMedia] = useState<{ url: string; type: 'video' | 'image' } | null>(null);

  useEffect(() => {
    const checkMedia = async () => {
      if (!experience.imagePlaceholder) return;

      // Extract base path without extension (e.g., /pictures/pakinpaks)
      const basePath = experience.imagePlaceholder.substring(0, experience.imagePlaceholder.lastIndexOf('.'));
      
      const mp4Path = `${basePath}.mp4`;
      const gifPath = `${basePath}.gif`;

      try {
        // Try MP4 first
        const mp4Res = await fetch(mp4Path, { method: 'HEAD' });
        if (mp4Res.ok) {
          setSecondaryMedia({ url: mp4Path, type: 'video' });
          return;
        }

        // Try GIF second
        const gifRes = await fetch(gifPath, { method: 'HEAD' });
        if (gifRes.ok) {
          setSecondaryMedia({ url: gifPath, type: 'image' });
          return;
        }
      } catch (err) {
        console.error("Error checking secondary media:", err);
      }
      
      setSecondaryMedia(null);
    };

    checkMedia();
  }, [experience.imagePlaceholder]);

  return (
    <div className="experience-card">
      <div className="experience-media">
        <div className="experience-image-container">
          <img src={experience.imagePlaceholder} alt={experience.title} className="experience-image" />
        </div>
        {secondaryMedia && (
          <div className="secondary-media-container">
            {secondaryMedia.type === 'video' ? (
              <video 
                src={secondaryMedia.url} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="experience-video"
              />
            ) : (
              <img 
                src={secondaryMedia.url} 
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

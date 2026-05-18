import React from 'react';
import { resumeData } from '../resumeData';
import SkillBadge from '../components/SkillBadge';

const SkillsPage: React.FC = () => {
  return (
    <div className="page skills-page">
      <section className="content-section">
        <div className="page-header">
          <img src="/pageicon.png" alt="Icon" />
          <h1>Ian FDT - Skills</h1>
        </div>
        <div className="skills-container">
          {resumeData.skills.map((category, index) => (
            <div key={index} className="skill-category-section">
              <h2>{category.category}</h2>
              <div className="skill-list">
                {category.items.map((skill, sIndex) => (
                  <SkillBadge key={sIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;

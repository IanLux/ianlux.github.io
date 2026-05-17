import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="skill-badge">
      {skill}
    </span>
  );
};

export default SkillBadge;

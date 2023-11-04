import React from 'react';
import './SkillBar.css';

const SkillBar = ({ name, skillValue }: SkillBar) => {
  if (name === null || skillValue === null) return null;

  return (
    <div className="user-skill-container">
      <div className="skill-info-container">
        <p className="skill-name">{name}</p>
        <p className="skill-value">{skillValue}%</p>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar-skeleton"></div>
        <div className="skill-bar-value" style={{ width: `${skillValue}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;

interface SkillBar {
  name: string;
  skillValue: number;
}

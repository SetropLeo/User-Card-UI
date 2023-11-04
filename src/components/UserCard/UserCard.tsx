import React from 'react';
import './UserCard.css';

import { useUserData } from '../../contexts/UserDataContext';
import UserInfo from './UserInfo/UserInfo';
import SkillBar from './SkillBar/SkillBar';
import { SkillType, UserSkill } from '../../interfaces/UserData';

const UserCard = () => {
  const { userData } = useUserData();

  if (userData === null) return <div>Loading...</div>;

  const mappedSoftSkills = userData.skills?.map((skill: UserSkill) => {
    if (skill.category === SkillType.SOFT_SKILLS)
      return <SkillBar name={skill.name} skillValue={skill.score} />;
  });

  const mappedHardSkills = userData.skills?.map((skill: UserSkill) => {
    if (skill.category === SkillType.HARD_SKILLS)
      return <SkillBar name={skill.name} skillValue={skill.score} />;
  });

  const hasSkillData = mappedHardSkills.length && mappedSoftSkills.length;

  // const mappedHardSkills: any = []
  // const mappedSoftSkills: any = []

  return (
    <div className="user-card-container">
      <UserInfo
        name={userData.name}
        title={userData.title}
        score={userData.score}
      />
      {hasSkillData ? (
        <div className="skill-data-container">
          <div className="skill-type-container">
            <h4>Top Hard Skills</h4>
            <h4>Match %</h4>
          </div>
          <div className="skill-list">{mappedHardSkills}</div>
          <div className="skill-type-container">
            <h4 className="">Top Soft Skills</h4>
          </div>
          <div className="skill-list">{mappedSoftSkills}</div>
        </div>
      ) : (
        <p>There is no data available about the candidate.</p>
      )}
    </div>
  );
};

export default UserCard;

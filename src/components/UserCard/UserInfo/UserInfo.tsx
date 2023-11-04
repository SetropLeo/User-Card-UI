import React from 'react';
import './UserInfo.css';

const imageSrc = 'https://i.imgur.com/JNkccpO.png';

const UserInfo = ({ name, title, score }: UserCardProps) => {
  return (
    <div className="user-info-container">
      <div className="avatar-container">
        <div className="avatar-circle">
          <img src={imageSrc} alt=""></img>
        </div>
        <div className="score-container">
          <p className="user-score">{score}</p>
        </div>
      </div>
      <h2 className="user-name">{name}</h2>
      <h3 className="user-title">{title}</h3>
    </div>
  );
};

export default UserInfo;

type UserCardProps = {
  name: string;
  title: string;
  score: number;
};

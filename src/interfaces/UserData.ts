export interface UserData {
  name: string;
  title: string;
  score: number;
  skills: UserSkill[];
}

export interface UserSkill {
  category: SkillType;
  name: string;
  score: number;
}

export enum SkillType {
  HARD_SKILLS = "HARD_SKILLS",
  SOFT_SKILLS = "SOFT_SKILLS"
}

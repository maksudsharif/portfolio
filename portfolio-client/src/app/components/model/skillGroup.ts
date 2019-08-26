import {Skill} from './skill';
import {SkillItemType} from './skillItemType';

export class SkillGroup {
  name: string;
  skills: Skill [];
  type: SkillItemType;


  constructor(name: string, skills: Skill[], type: SkillItemType) {
    this.name = name;
    this.skills = skills;
    this.type = type;
  }

  static from(name: string, skills: any[], type: string) {
    const finalSkills = [];
    for (const skill of skills) {
      finalSkills.push(Skill.of(skill.name, skill.level, skill.years));
    }
    return new SkillGroup(name, finalSkills, SkillItemType[type]);
  }
}

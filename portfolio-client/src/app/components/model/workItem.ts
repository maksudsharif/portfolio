import {Skill} from "./skill";
import {SkillItemType} from "./skillItemType";

export class WorkItem {
  title: string;
  employer: string;
  start: string;
  end: string;
  description: string;
  skillsUsed: Skill[];
  accomplishments: string;


  constructor(title: string, employer: string, start: string, end: string, description: string, skillsUsed: Skill[], accomplishments: string) {
    this.title = title;
    this.employer = employer;
    this.start = start;
    this.end = end;
    this.description = description;
    this.skillsUsed = skillsUsed;
    this.accomplishments = accomplishments;
  }

  static from(workItem: any) {
    const item = new WorkItem(workItem.title
      , workItem.employer
      , workItem.start
      , workItem.end
      , workItem.description
      , workItem.skillsUsed
      , workItem.accomplishments);
    return item;
  }
}

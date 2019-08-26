import {Skill} from "./skill";

export class WorkItem
{
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
}

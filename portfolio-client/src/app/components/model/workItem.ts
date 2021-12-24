import {Skill} from "./skill";
import {OtherPosition} from "./otherPosition";

export class WorkItem {
  title: string;
  employer: string;
  formerly: string;
  start: string;
  end: string;
  description: string;
  skillsUsed: Skill[];
  otherPositions: OtherPosition[];
  accomplishments: string;


  constructor(title: string, employer: string, formerly: string, start: string, end: string, description: string
    , skillsUsed: Skill[], otherPositions: OtherPosition[], accomplishments: string) {
    this.title = title;
    this.employer = employer;
    this.formerly = formerly;
    this.start = start;
    this.end = end;
    this.description = description;
    this.skillsUsed = skillsUsed;
    this.otherPositions = otherPositions;
    this.accomplishments = accomplishments;
  }

  static from(workItem: any) {
    const item = new WorkItem(workItem.title
      , workItem.employer
      , workItem.formerly
      , workItem.start
      , workItem.end
      , workItem.description
      , workItem.skillsUsed
      , workItem.otherPositions
      , workItem.accomplishments);
    return item;
  }
}

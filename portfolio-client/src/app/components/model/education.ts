import {EducationItem} from './educationItem';

export class Education {
  public educations: EducationItem[];

  constructor(education: any[]) {
    this.educations = [];
    for (const ed of education) {
      this.educations.push(EducationItem.of(ed.title, ed.addendum, ed.institution, ed.range));
    }
  }
}

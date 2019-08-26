export class EducationItem {
  title: string;
  addendum: string;
  institution: string;
  range: string;

  constructor(title: string, addendum: string, institution: string, range: string) {
    this.title = title;
    this.addendum = addendum;
    this.institution = institution;
    this.range = range;
  }

  static of(title: string, addendum: string, institution: string, range: string) {
    return new EducationItem(title, addendum, institution, range);
  }
}

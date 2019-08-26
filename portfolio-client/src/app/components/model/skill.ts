export class Skill {


  constructor(name: string, level: string, years: string) {
    this.name = name;
    this.level = level;
    this.years = years;
  }

  name: string;
  level: string;
  years: string;

  static of(name: string, level: string, years: string): Skill {
    if (!level) {
      level = '0';
    }

    if (!name) {
      name = 'N/A';
    }

    if (!years) {
      years = '0';
    }

    return new Skill(name, level, years);
  }

  findLevel() {
    return this.level + '%';
  }
}

export class ProfileHeaderInfo {
  name: string;
  title: string;
  linkedIn: string;
  linkedInTitle: string;
  github: string;
  githubTitle: string;
  email: string;
  site: string;
  showProfileImage: boolean;
  private props;

  // tslint:disable-next-line:max-line-length
  constructor(name: string, title: string, linkedIn: string, linkedInTitle: string, github: string, githubTitle: string, email: string, site: string, showProfileImage: boolean) {
    this.name = name;
    this.title = title;
    this.linkedIn = linkedIn;
    this.linkedInTitle = linkedInTitle;
    this.github = github;
    this.githubTitle = githubTitle;
    this.email = email;
    this.site = site;
    this.showProfileImage = showProfileImage;
  }
}

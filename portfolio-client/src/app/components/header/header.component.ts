import {ProfileService} from '../../services/profile/profile.service';
import {Component, OnInit} from '@angular/core';
import {ProfileInfo} from '../model/profileInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private profileService: ProfileService;
  profileInfo: ProfileInfo;
  showProfileImage: boolean;

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }

  ngOnInit() {
    this.profileService.getProfileInfo().subscribe(value => {
      // tslint:disable-next-line:max-line-length
      this.profileInfo = new ProfileInfo(value.name, value.title, value.clearance, value.linkedIn, value.linkedInTitle, value.github, value.githubTitle, value.email, value.personalSiteTitle, value.showProfileImage);
    });
  }

}

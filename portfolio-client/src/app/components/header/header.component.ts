import {ProfileService} from '../../services/profile/profile.service';
import {Component, OnInit} from '@angular/core';
import {ProfileHeaderInfo} from "../model/profileHeaderInfo";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private profileService: ProfileService;
  profileInfo: ProfileHeaderInfo;
  showProfileImage: boolean;

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }

  ngOnInit() {
    this.profileService.getProfileHeaderInfo().subscribe(value => {
      this.profileInfo = new ProfileHeaderInfo(
        value.name
        , value.title
        , value.linkedIn
        , value.linkedInTitle
        , value.github
        , value.githubTitle
        , value.email
        , value.personalSiteTitle
        , value.showProfileImage);
    });
  }

}

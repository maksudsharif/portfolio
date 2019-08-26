import {Component, OnInit} from '@angular/core';
import {Interest} from '../model/interest';
import {ProfileService} from '../../services/profile/profile.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  private profileService: ProfileService;
  public interests: Interest[];

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }

  ngOnInit() {
    this.interests = [];
    this.profileService.getProfileInfo().subscribe(value => {
      for (const interestValue of value.interests) {
        this.interests.push(new Interest(interestValue));
      }
    });
  }

}

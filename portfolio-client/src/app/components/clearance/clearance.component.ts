import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile/profile.service';

@Component({
  selector: 'app-clearance',
  templateUrl: './clearance.component.html',
  styleUrls: ['./clearance.component.css']
})
export class ClearanceComponent implements OnInit {
  private profileService: ProfileService;
  clearance: string;
  clearanceStatus: string;

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }

  ngOnInit() {
    this.profileService.getProfileInfo().subscribe(value => {
      this.clearance = value.clearance;
      this.clearanceStatus = value.clearanceStatus;
    });
  }

}

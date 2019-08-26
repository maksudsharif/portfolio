import {ProfileService} from '../../services/profile/profile.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  private profileService: ProfileService;
  summary: string;

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }

  ngOnInit() {
    this.summary = '';
    this.profileService.getProfileInfo().subscribe(value => {
      this.summary = value.summary;
    });
  }

}

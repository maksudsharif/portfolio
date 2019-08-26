import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile/profile.service';
import {Education} from '../model/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  private profileService: ProfileService;
  education: Education;

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }

  ngOnInit() {
    this.profileService.getProfileInfo().subscribe(value => {
        this.education = new Education(value.education);
      }
    );
  }

}

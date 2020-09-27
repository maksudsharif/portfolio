import {WorkItem} from '../model/workItem';
import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile/profile.service";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  private profileService: ProfileService;
  workItems: WorkItem[];

  constructor(profileService: ProfileService) {
    this.profileService = profileService
  }

  ngOnInit() {
    this.workItems = [];
    this.profileService.getProfileInfo().subscribe(value => {
      if (value && value.workItems) {
        for (const item of value.workItems) {
          this.workItems.push(WorkItem.from(item))
        }
      }
    })
  }

}

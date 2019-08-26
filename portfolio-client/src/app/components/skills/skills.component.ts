import {SkillGroup} from '../model/skillGroup';
import {ProfileService} from '../../services/profile/profile.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  private profileService: ProfileService;
  skills: SkillGroup[];

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }

  ngOnInit() {
    this.skills = [];
    this.profileService.getProfileInfo().subscribe(value => {
      if (value && value.skills) {
        for (const section of value.skills) {
          this.skills.push(SkillGroup.from(section.name, section.skills, section.type));
        }
      }
    });
  }
}

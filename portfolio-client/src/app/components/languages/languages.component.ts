import {Component, OnInit} from '@angular/core';
import {Language} from '../model/language';
import {ProfileService} from '../../services/profile/profile.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  private profileService: ProfileService;
  languages: Language[];

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }

  ngOnInit() {
    this.languages = [];
    this.profileService.getProfileInfo().subscribe(value => {
      for (const language of value.languages) {
        this.languages.push(new Language(language.name, language.proficiency));
      }
    });
  }

}

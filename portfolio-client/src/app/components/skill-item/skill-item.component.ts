import {SkillGroup} from '../model/skillGroup';
import {SkillItemType} from '../model/skillItemType';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  SkillItemType = SkillItemType;
  @Input() type: SkillItemType;
  @Input() skill: SkillGroup;

  constructor() {
  }

  ngOnInit() {
  }
}



import {Component, Input, OnInit} from '@angular/core';
import {EducationItem} from '../model/educationItem';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {

  @Input() education: EducationItem;
  constructor() { }

  ngOnInit() {
  }

}

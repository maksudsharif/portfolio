import {Component, Input, OnInit} from '@angular/core';
import {WorkItem} from "../model/workItem";

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent implements OnInit {

  @Input() workItem: WorkItem;

  constructor() { }

  ngOnInit() {
  }

}

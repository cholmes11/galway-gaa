import {Component, Input, OnInit} from '@angular/core';
import {AppRoute} from '../../models/AppRoute';

@Component({
  selector: 'gg-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() routes: AppRoute[];

  constructor() { }

  ngOnInit() {
  }

}

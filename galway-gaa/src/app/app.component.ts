import {Component, OnInit} from '@angular/core';
import {AppRoute} from './shared/models/AppRoute';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'galway-gaa';

  appRoutes: AppRoute[];

  ngOnInit() {
    this.appRoutes = [
      new AppRoute('Tables', '/tables')
    ];
  }
}

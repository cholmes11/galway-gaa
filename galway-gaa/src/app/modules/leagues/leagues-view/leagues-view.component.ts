import {Component, OnInit} from '@angular/core';
import {Division} from '../../../shared/models/Division';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'gg-leagues-view',
  templateUrl: './leagues-view.component.html',
  styleUrls: ['./leagues-view.component.scss']
})
export class LeaguesViewComponent implements OnInit {
  divisions: Array<Division>;
  activeDivision: Division;

  mobileQuery: MediaQueryList;
  mobileQueryListener: () => void;

  mockDivisions: Division[] = [{
    name: 'Football Division 1',
    shortName: 'Football D1',
    rank: 'F1'
  }, {
    name: 'Football Division 2',
    shortName: 'Football D2',
    rank: 'F2'
  }, {
    name: 'Football Division 3',
    shortName: 'Football D3',
    rank: 'F3'
  }, {
    name: 'Football Division 4',
    shortName: 'Football D4',
    rank: 'F4'
  }, {
    name: 'Football Division 5',
    shortName: 'Football D5',
    rank: 'F5'
  }, {
    name: 'Football Division 6',
    shortName: 'Football D6',
    rank: 'F6'
  }];

  opened: boolean;
  over: string;
  watcher: Subscription;

  constructor(
    mediaObserver: MediaObserver
  ) {
    this.divisions = this.mockDivisions;
    this.activeDivision = this.divisions[0];
    this.watcher = mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      console.log(changes);

      const index = changes.findIndex(change => change.mqAlias === 'sm' || change.mqAlias === 'xs');

      if (index !== -1) {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
  }

  ngOnInit() {
  }

}

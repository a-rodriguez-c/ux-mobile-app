import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarm',
  templateUrl: 'alarm.page.html',
  styleUrls: ['alarm.page.scss'],
})
export class AlarmPage {

  constructor(private router: Router) {}
}

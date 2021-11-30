import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent implements OnInit {
  @Input() dayname: string = 'LUN';
  @Input() daynumber: number = 1;

  constructor() {}

  ngOnInit(): void {}
}

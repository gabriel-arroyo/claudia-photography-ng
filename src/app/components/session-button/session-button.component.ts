import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-button',
  templateUrl: './session-button.component.html',
  styleUrls: ['./session-button.component.scss'],
})
export class SessionButtonComponent implements OnInit {
  @Input() hour: string = '';
  @Input() name: string = '';
  public occupied: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.occupied = this.name ? true : false;
  }
}

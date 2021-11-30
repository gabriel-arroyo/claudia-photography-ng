import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss'],
})
export class HoursComponent implements OnInit {
  public startDate = new Date('August 19, 2021 09:00:00');
  public endDate = new Date('August 19, 2021 19:00:00');
  @Input() starthour = 9;
  @Input() startminute = 0;
  @Input() endhour = 19;
  @Input() endminute = 30;
  public hoursList: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.startDate = this.updateDate(this.starthour, this.startminute);
    this.endDate = this.updateDate(this.endhour, this.endminute);
    this.createList(this.startDate, this.endDate);
    for (let index = 0; index < this.hoursList.length; index++) {
      const element = this.hoursList[index];
    }
  }

  createList(start: Date, end: Date) {
    let loop = start;
    var now = new Date();
    var daysOfYear = [];
    this.hoursList.push(this.formatHourMinutes(loop));
    while (loop <= end) {
      let newDate = this.addMinutes(loop, 30);
      loop = new Date(newDate);
      this.hoursList.push(this.formatHourMinutes(loop));
    }
  }

  updateDate(hour: number, minutes: number): Date {
    let stringHour = this.formatTimeString(hour);
    let stringMinutes = this.formatTimeString(minutes);
    return new Date(`August 19, 2021 ${stringHour}:${stringMinutes}:00`);
  }

  formatTimeString(time: number): string {
    let stringTime = time.toString();
    while (stringTime.length < 2) stringTime = '0' + stringTime;
    return stringTime;
  }
  formatHourMinutes(date: Date): string {
    let hour = this.formatTimeString(date.getHours());
    let minutes = this.formatTimeString(date.getMinutes());
    return `${hour}:${minutes}`;
  }

  addMinutes(date: Date, minutes: number) {
    return new Date(date.getTime() + minutes * 60000);
  }
}

import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  public monthDays = new Map<number, string>();
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.getDaysArray(2021, 11));
    this.monthDays = this.getDaysArray(2021, 11);
    this.scroll('today');
  }

  scroll(id: string): void {
    let el = document.getElementsByClassName(id)[0];
    el?.scrollIntoView({
      block: 'nearest',
      inline: 'center',
      behavior: 'smooth',
    });
  }

  getDaysArray(year: number, month: number) {
    let numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fry', 'Sat'];
    let daysInWeekEsp = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let daysTranslate: { [key: string]: string } = {
      Sun: 'Dom',
      Mon: 'Lun',
      Tue: 'Mar',
      Wed: 'Mier',
      Thu: 'Jue',
      Fry: 'Vie',
      Sat: 'Sab',
    };
    let daysIndex: { [key: string]: number } = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fry: 5,
      Sat: 6,
    };
    let index: number =
      daysIndex[new Date(year, month - 1, 1).toString().split(' ')[0]];
    let daysArray = new Map<number, string>();

    for (let i = 0, l = numDaysInMonth[month - 1]; i < l; i++) {
      daysArray.set(i + 1, daysInWeekEsp[index++]);
      if (index == 7) index = 0;
    }

    return daysArray;
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-list-sesiones',
  templateUrl: './list-sesiones.component.html',
  styleUrls: ['./list-sesiones.component.scss'],
})
export class ListSesionesComponent implements OnInit {
  items: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('sesiones').valueChanges();
  }
  ngOnInit(): void {}
}

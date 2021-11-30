import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSesionComponent } from './components/create-sesion/create-sesion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListSesionesComponent } from './components/list-sesiones/list-sesiones.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgendaComponent } from './components/agenda/agenda.component';
import { DayComponent } from './components/day/day.component';
import { HoursComponent } from './components/hours/hours.component';
import { SessionButtonComponent } from './components/session-button/session-button.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateSesionComponent,
    NavbarComponent,
    ListSesionesComponent,
    AgendaComponent,
    DayComponent,
    HoursComponent,
    SessionButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

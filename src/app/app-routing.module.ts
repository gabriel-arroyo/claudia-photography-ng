import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSesionComponent } from './components/create-sesion/create-sesion.component';
import { ListSesionesComponent } from './components/list-sesiones/list-sesiones.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-sesiones', pathMatch: 'full' },
  { path: 'list-sesiones', component: ListSesionesComponent },
  { path: 'createSesion', component: CreateSesionComponent },
  { path: '**', redirectTo: 'list-sesiones', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

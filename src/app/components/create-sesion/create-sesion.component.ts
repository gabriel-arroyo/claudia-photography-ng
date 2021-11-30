import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-sesion',
  templateUrl: './create-sesion.component.html',
  styleUrls: ['./create-sesion.component.scss'],
})
export class CreateSesionComponent implements OnInit {
  createSesion: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.createSesion = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      personas: ['', Validators.required],
      telefono: ['', Validators.required],
    });
  }

  addSesion() {
    console.log('creado sesion');
    console.log(this.createSesion);
  }

  ngOnInit(): void {}
}

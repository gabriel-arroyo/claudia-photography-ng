import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSesionesComponent } from './list-sesiones.component';

describe('ListSesionesComponent', () => {
  let component: ListSesionesComponent;
  let fixture: ComponentFixture<ListSesionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSesionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

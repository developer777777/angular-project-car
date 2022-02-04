import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditVehiculeComponent } from './modal-edit-vehicule.component';

describe('ModalEditVehiculeComponent', () => {
  let component: ModalEditVehiculeComponent;
  let fixture: ComponentFixture<ModalEditVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditVehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

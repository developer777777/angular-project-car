import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateVehiculeComponent } from './modal-create-vehicule.component';

describe('ModalCreateVehiculeComponent', () => {
  let component: ModalCreateVehiculeComponent;
  let fixture: ComponentFixture<ModalCreateVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateVehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

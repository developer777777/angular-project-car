import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditModeleComponent } from './modal-edit-modele.component';

describe('ModalEditModeleComponent', () => {
  let component: ModalEditModeleComponent;
  let fixture: ComponentFixture<ModalEditModeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditModeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

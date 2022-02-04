import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateModeleComponent } from './modal-create-modele.component';

describe('ModalCreateModeleComponent', () => {
  let component: ModalCreateModeleComponent;
  let fixture: ComponentFixture<ModalCreateModeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateModeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

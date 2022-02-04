import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditMarqueComponent } from './modal-edit-marque.component';

describe('ModalEditMarqueComponent', () => {
  let component: ModalEditMarqueComponent;
  let fixture: ComponentFixture<ModalEditMarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditMarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

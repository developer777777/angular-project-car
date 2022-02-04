import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateMarqueComponent } from './modal-create-marque.component';

describe('ModalCreateMarqueComponent', () => {
  let component: ModalCreateMarqueComponent;
  let fixture: ComponentFixture<ModalCreateMarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateMarqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

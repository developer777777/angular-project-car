import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-create-marque',
  templateUrl: './modal-create-marque.component.html',
  styleUrls: ['./modal-create-marque.component.scss']
})
export class ModalCreateMarqueComponent implements OnInit {
  @Output() private passEntry = new EventEmitter<any>()

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  save(data:any){
    this.passEntry.emit(data)
    this.activeModal.close()
  }

}

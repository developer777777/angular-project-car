import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-edit-marque',
  templateUrl: './modal-edit-marque.component.html',
  styleUrls: ['./modal-edit-marque.component.scss']
})
export class ModalEditMarqueComponent implements OnInit {
  @Input() public marque:any
  @Output() private passEntry = new EventEmitter<any>()

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  update(){
    this.passEntry.emit(this.marque)
    this.activeModal.close()
  }

}

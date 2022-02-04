import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-edit-modele',
  templateUrl: './modal-edit-modele.component.html',
  styleUrls: ['./modal-edit-modele.component.scss']
})
export class ModalEditModeleComponent implements OnInit {
  @Input() public marques:any
  @Input() public modele:any
  @Output() private passEntry = new EventEmitter<any>()
  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  update(){
    this.passEntry.emit(this.modele)
    this.activeModal.close()
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-create-modele',
  templateUrl: './modal-create-modele.component.html',
  styleUrls: ['./modal-create-modele.component.scss']
})
export class ModalCreateModeleComponent implements OnInit {
  @Input() public marques:any
  @Output() private passEntry = new EventEmitter<any>()

  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  save(data:any){
    this.passEntry.emit(data)
    this.activeModal.close()
  }
}

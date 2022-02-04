import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VehiculeService } from './../vehicule.service';

@Component({
  selector: 'app-modal-create-vehicule',
  templateUrl: './modal-create-vehicule.component.html',
  styleUrls: ['./modal-create-vehicule.component.scss']
})
export class ModalCreateVehiculeComponent implements OnInit {
  @Input() public marques:any
  modeles:any
  @Output() private passEntry = new EventEmitter<any>()

  constructor(public activeModal:NgbActiveModal,private vehihiculeService:VehiculeService) { }

  ngOnInit(): void {
  }
  save(data:any){
    this.passEntry.emit(data)
    this.activeModal.close()
  }

  onSelect(event:any):void{
    console.log(event.target.value)
    this.vehihiculeService.findMarque(event.target.value).subscribe((data:any)=>{
      this.modeles = data.data.modeles
      console.log(this.modeles)
    })
  }
}

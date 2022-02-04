import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VehiculeService } from '../vehicule.service';

@Component({
  selector: 'app-modal-edit-vehicule',
  templateUrl: './modal-edit-vehicule.component.html',
  styleUrls: ['./modal-edit-vehicule.component.scss']
})
export class ModalEditVehiculeComponent implements OnInit {
  @Input() public marques:any
  @Input() public car:any
  modeles:any
  @Output() private passEntry = new EventEmitter<any>()
  constructor(public activeModal:NgbActiveModal,private vehiculeService:VehiculeService) { }

  ngOnInit(): void {
    this.vehiculeService.allMarques().subscribe(data=>{
      this.marques = data.data
    })
    console.log(this.car)
    this.vehiculeService.findMarque(this.car.marque.id).subscribe((data:any)=>{
      this.modeles = data.data.modeles
      console.log(this.modeles)
    })
  }
  update(){
    this.passEntry.emit(this.car)
    this.activeModal.close()
  }
  onSelect(event:any):void{
    var mm;
    for(var i = 0; i< this.marques.length;i++){
      if(this.marques[i].id == event.target.value){
        mm = this.marques[i]
      }
    }
    this.car.marque = mm
    this.car.libelleMarque = mm.libelle
    this.vehiculeService.findMarque(event.target.value).subscribe((data:any)=>{
      this.modeles = data.data.modeles
      console.log(this.modeles)
    })
  }
  getSelect(event:any):void{
    var mm;
    for(var i = 0; i< this.modeles.length;i++){
      if(this.modeles[i].id == event.target.value){
        mm = this.modeles[i]
      }
    }
    this.car.modele = mm
    this.car.libelleModele = mm.libelle
    // this.vehiculeService.findMarque(event.target.value).subscribe((data:any)=>{
    //   this.modeles = data.data.modeles
    //   console.log(this.modeles)
    // })
  }
}

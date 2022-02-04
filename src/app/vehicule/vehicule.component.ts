import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmDialogComponent } from '../modal-confirm-dialog/modal-confirm-dialog.component';
import { VehiculeService } from '../vehicule.service';
import { ModalCreateVehiculeComponent } from './../modal-create-vehicule/modal-create-vehicule.component';
import { ModalEditVehiculeComponent } from './../modal-edit-vehicule/modal-edit-vehicule.component';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.scss']
})
export class VehiculeComponent implements OnInit {
  cars:any
  marques:any
  modeles:any

  constructor(private vehiculeService:VehiculeService,public modalService:NgbModal) { }

  ngOnInit(): void {
    this.vehiculeService.allCars().subscribe(data=>{
      console.log(data)
      this.cars = data.data
    })
    this.vehiculeService.allMarques().subscribe(data=>{
      this.marques = data.data
    })
  }

  addCars():void{
    const modalRef = this.modalService.open(ModalCreateVehiculeComponent)
      modalRef.componentInstance.marques = this.marques
     // modalRef.componentInstance.modeles = this.modeles
      modalRef.componentInstance.passEntry.subscribe((data:any) =>{
        this.vehiculeService.addCar(data).subscribe((data:any)=>{
          this.cars.push(data.data)
          console.log(data)
      })
    })
  }
  editCar(car:any):void{
    const modalRef = this.modalService.open(ModalEditVehiculeComponent)
    //  modalRef.componentInstance.marques = this.marques
      modalRef.componentInstance.modeles = this.modeles
      modalRef.componentInstance.car = car
      modalRef.componentInstance.passEntry.subscribe((data:any) =>{
        this.vehiculeService.updateCar(data).subscribe((data:any)=>{
          console.log(data)
      })
    })
  }
  deleteCar(car:any):void{
    const modalRef = this.modalService.open(ModalConfirmDialogComponent)
      modalRef.componentInstance.title = "Suppression d'un vehicule"
      modalRef.componentInstance.content = "Etes-vous sur de vouloir supprimer ce vehicule "+car.modele.libelle+" ?"
      modalRef.componentInstance.passEntry.subscribe(() =>{
        this.vehiculeService.deleteCar(car.id).subscribe((data:any)=>{
          const pos = this.cars.indexOf(car)
          this.cars.splice(pos,1)
      })
    })
  }

}

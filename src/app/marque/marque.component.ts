import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MarqueService } from '../marque.service';
import { ModalConfirmDialogComponent } from '../modal-confirm-dialog/modal-confirm-dialog.component';
import { ModalEditMarqueComponent } from '../modal-edit-marque/modal-edit-marque.component';
import { ModalCreateMarqueComponent } from './../modal-create-marque/modal-create-marque.component';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.scss']
})
export class MarqueComponent implements OnInit {
  marques:any

  constructor(private marqueService:MarqueService,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.marqueService.allMarques().subscribe(data=>{
      console.log(data)
      this.marques = data.data
    })
  }
  addMarque():void{
    const modalRef = this.modalService.open(ModalCreateMarqueComponent)
      modalRef.componentInstance.passEntry.subscribe((data:any) =>{
        this.marqueService.addMarque(data).subscribe((data:any)=>{
          this.marques.push(data.data)
          console.log(data)
      })
    })
  }
  editMarque(marque:any):void{
    const modalRef = this.modalService.open(ModalEditMarqueComponent)
      modalRef.componentInstance.marque = marque
      modalRef.componentInstance.passEntry.subscribe((data:any) =>{
        this.marqueService.updateMarque(data).subscribe((data:any)=>{
          console.log(data)
      })
    })
  }
  deleteMarque(marque:any):void{
    const modalRef = this.modalService.open(ModalConfirmDialogComponent)
      modalRef.componentInstance.title = "Suppression d'une marque"
      modalRef.componentInstance.content = "Etes-vous sur de vouloir supprimer la marque "+marque.libelle+" ?"
      modalRef.componentInstance.passEntry.subscribe(() =>{
        this.marqueService.deleteMarque(marque.id).subscribe((data:any)=>{
          const pos = this.marques.indexOf(marque)
          this.marques.splice(pos,1)
      })
    })
  }

}

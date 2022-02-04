import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmDialogComponent } from '../modal-confirm-dialog/modal-confirm-dialog.component';
import { ModalCreateModeleComponent } from '../modal-create-modele/modal-create-modele.component';
import { ModeleService } from '../modele.service';
import { ModalEditModeleComponent } from './../modal-edit-modele/modal-edit-modele.component';


@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.scss']
})
export class ModeleComponent implements OnInit {
  modeles:any
  marques:any

  constructor(private modeleService:ModeleService,public modalService:NgbModal) { }

  ngOnInit(): void {
    this.modeleService.allModeles().subscribe(data=>{
      console.log(data)
      this.modeles = data.data
    })
    this.modeleService.allMarques().subscribe(data=>{
      this.marques = data.data
    })
  }
  addModele():void{
    const modalRef = this.modalService.open(ModalCreateModeleComponent)
      modalRef.componentInstance.marques = this.marques
      modalRef.componentInstance.passEntry.subscribe((data:any) =>{
        this.modeleService.addModele(data).subscribe((data:any)=>{
          this.modeles.push(data.data)
          console.log(data)
      })
    })
  }
  editModele(modele:any):void{
    const modalRef = this.modalService.open(ModalEditModeleComponent)
      modalRef.componentInstance.marques = this.marques
      modalRef.componentInstance.modele = modele
      modalRef.componentInstance.passEntry.subscribe((data:any) =>{
        this.modeleService.updateModele(data).subscribe((data:any)=>{
          console.log(data)
      })
    })
  }
  deleteModele(modele:any):void{
    const modalRef = this.modalService.open(ModalConfirmDialogComponent)
      modalRef.componentInstance.title = "Suppression d'une modele"
      modalRef.componentInstance.content = "Etes-vous sur de vouloir supprimer la modele "+modele.libelle+" ?"
      modalRef.componentInstance.passEntry.subscribe(() =>{
        this.modeleService.deleteModele(modele.id).subscribe((data:any)=>{
          const pos = this.modeles.indexOf(modele)
          this.modeles.splice(pos,1)
      })
    })
  }

}

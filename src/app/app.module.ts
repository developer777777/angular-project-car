import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarqueComponent } from './marque/marque.component';
import { ModeleComponent } from './modele/modele.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { ModalCreateMarqueComponent } from './modal-create-marque/modal-create-marque.component';
import { ModalEditMarqueComponent } from './modal-edit-marque/modal-edit-marque.component';
import { FormsModule } from '@angular/forms';
import { ModalConfirmDialogComponent } from './modal-confirm-dialog/modal-confirm-dialog.component';
import { ModalCreateModeleComponent } from './modal-create-modele/modal-create-modele.component';
import { ModalEditModeleComponent } from './modal-edit-modele/modal-edit-modele.component';
import { ModalEditVehiculeComponent } from './modal-edit-vehicule/modal-edit-vehicule.component';
import { ModalCreateVehiculeComponent } from './modal-create-vehicule/modal-create-vehicule.component';

@NgModule({
  declarations: [
    AppComponent,
    MarqueComponent,
    ModeleComponent,
    VehiculeComponent,
    ModalCreateMarqueComponent,
    ModalEditMarqueComponent,
    ModalConfirmDialogComponent,
    ModalCreateModeleComponent,
    ModalEditModeleComponent,
    ModalEditVehiculeComponent,
    ModalCreateVehiculeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalCreateVehiculeComponent,ModalEditVehiculeComponent,ModalConfirmDialogComponent,ModalCreateMarqueComponent,ModalEditMarqueComponent,ModalCreateModeleComponent,ModalEditModeleComponent]
})
export class AppModule { }

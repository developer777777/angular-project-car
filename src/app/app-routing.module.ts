import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarqueComponent } from './marque/marque.component';
import { ModeleComponent } from './modele/modele.component';
import { VehiculeComponent } from './vehicule/vehicule.component';

const routes: Routes = [
  {path:'marques',component:MarqueComponent},
  {path:'',component:VehiculeComponent},
  {path:'modeles',component:ModeleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

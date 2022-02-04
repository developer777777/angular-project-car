import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configs } from './shared/configs';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {

  constructor(private http:HttpClient) { }

  allModeles(){
    return this.http.get<any>(configs.url_local+'modeles')
  }
  allMarques(){
    return this.http.get<any>(configs.url_local+'marques')
  }
  addModele(modele:any){
    return this.http.post<any>(configs.url_local+'modeles',modele)
  }
  updateModele(modele:any){
    return this.http.put<any>(configs.url_local+'modeles/'+modele.id,modele)
  }
  deleteModele(id:any){
    return this.http.delete<any>(configs.url_local+'modeles/'+id)
  }
}

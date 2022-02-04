import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configs } from './shared/configs';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  constructor(private http:HttpClient) { }

  allMarques(){
    return this.http.get<any>(configs.url_local+'marques')
  }
  addMarque(marque:any){
    return this.http.post<any>(configs.url_local+'marques',marque)
  }
  updateMarque(marque:any){
    return this.http.put<any>(configs.url_local+'marques/'+marque.id,marque)
  }
  deleteMarque(id:any){
    return this.http.delete<any>(configs.url_local+'marques/'+id)
  }
}

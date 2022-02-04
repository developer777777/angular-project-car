import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configs } from './shared/configs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http:HttpClient) { }

  allCars(){
    return this.http.get<any>(configs.url_local+'cars')
  }
  allModeles(){
    return this.http.get<any>(configs.url_local+'modeles')
  }
  allMarques(){
    return this.http.get<any>(configs.url_local+'marques')
  }
  addCar(car:any){
    return this.http.post<any>(configs.url_local+'cars',car)
  }
  updateCar(car:any){
    return this.http.put<any>(configs.url_local+'cars/'+car.id,car)
  }
  deleteCar(id:any){
    return this.http.delete<any>(configs.url_local+'cars/'+id)
  }
  findMarque(id:any){
    return this.http.get<any>(configs.url_local+'marques/'+id)
  }
}

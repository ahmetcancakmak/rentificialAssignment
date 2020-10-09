import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assets } from '../models/assets';
import { Customers } from '../models/customers';
import { Rents } from '../models/rents';

@Injectable({
  providedIn: 'root'
})
export class RentServiceService {
  path : "https://ssvcv1.rentificial.com/"
  constructor(private http: HttpClient) { 
    this.http.post(this.path+ "Auth/authenticate",{"Username":"fgungor@rentificial.com","Password":"408c3fe418d4e69034a23682ffb08d33"})
    console.log("Giriş yapıldı")
  }

  //Assets
  getAsset():Observable<Assets[]>{
    return this.http.get<Assets[]>(this.path+"Assets/GetAssets/")
  }

  //Customers
  getCustomer():Observable<Customers[]>{
    return this.http.get<Customers[]>(this.path+"Customers/GetCustomers/")
  }
  getCustomerAddress():Observable<Customers[]>{
    return this.http.get<Customers[]>(this.path+"Customers/GetCustomerAddresses/?_CustomerID=7")
  }
  getCustomerPhone():Observable<Customers[]>{
    return this.http.get<Customers[]>(this.path+"Customers/GetCustomerPhones/?_CustomerID=7")
  }

  //Rents
  getRent():Observable<Rents[]>{
    return this.http.get<Rents[]>(this.path+"Rentals/GetRents")
  }
  getRentalStatuse():Observable<Rents[]>{
    return this.http.get<Rents[]>(this.path+"Rentals/GetRentalStatuses")
  }
  getRentalAsset():Observable<Rents[]>{
    return this.http.get<Rents[]>(this.path+"Rentals/GetRentedAssets?_RentalID=46")
  }
  addNewRental():Observable<Rents[]>{
    return this.http.post<Rents[]>(this.path+"Rentals/AddNewRental","")
  }
}

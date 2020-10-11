import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assets } from '../models/assets';
import { Customers } from '../models/customers';
import { Rents } from '../models/rents';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RentServiceService {
  constructor(private http: HttpClient,private auth:AuthServiceService) {
   this.auth.getLogin()
  }

  //Assets
  getAsset(): Observable<Assets[]> {
    return this.http.get<Assets[]>("https://ssvcv1.rentificial.com/Assets/GetAssets/")
  }

  //Customers
  getCustomer(): Observable<Customers[]> {
    return this.http.get<Customers[]>("https://ssvcv1.rentificial.com/Customers/GetCustomers/")
  }
  getCustomerAddress(): Observable<Customers[]> {
    return this.http.get<Customers[]>("https://ssvcv1.rentificial.com/Customers/GetCustomerAddresses/?_CustomerID=7")
  }
  getCustomerPhone(): Observable<Customers[]> {
    return this.http.get<Customers[]>("https://ssvcv1.rentificial.com/Customers/GetCustomerPhones/?_CustomerID=7")
  }

  //Rents
  getRent(): Observable<Rents[]> {
    return this.http.get<Rents[]>("https://ssvcv1.rentificial.com/Rentals/GetRents")
  }
  getRentalStatuse(): Observable<Rents[]> {
    return this.http.get<Rents[]>("https://ssvcv1.rentificial.com/Rentals/GetRentalStatuses")
  }
  getRentalAsset(): Observable<Rents[]> {
    return this.http.get<Rents[]>("https://ssvcv1.rentificial.com/Rentals/GetRentedAssets?_RentalID=46")
  }
  addNewRental(): Observable<Rents[]> {
    return this.http.post<Rents[]>("https://ssvcv1.rentificial.com/Rentals/AddNewRental", "")
  }
}

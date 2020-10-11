import { Component } from '@angular/core';
import { Assets } from './models/assets';
import { Customers } from './models/customers';
import { Rents } from './models/rents';
import { RentServiceService } from './services/rent-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ExtraServiceList = [];
  RentedExtraServices =[];
  assets:Assets[];
  customers:Customers[];
  rents:Rents[];

  constructor(private rentService:RentServiceService){
    this.getAssets()
    this.getCustomers()
    this.getRents()
  }

  getAssets(){
    this.rentService.getAsset().subscribe(data =>{
      this.assets = data;
    })
  }
  getCustomers(){
    this.rentService.getCustomer().subscribe(data =>{
      this.customers = data
    })
  }
  getCustomerAddress(){
    this.rentService.getCustomerAddress().subscribe(data =>{
      this.customers = data;
    })
  }
  getCustomerPhones(){
    this.rentService.getCustomerAddress().subscribe(data =>{
      this.customers = data;
    })
  }
  getRents(){
    this.rentService.getRent().subscribe(data =>{
      this.rents = data;
    })
  }
  getRentalStatuses(){
    this.rentService.getRentalStatuse().subscribe(data =>{
      this.rents = data;
    })
  }
  getRentalAssets(){
    this.rentService.getRentalAsset().subscribe(data =>{
      this.rents = data;
    })
  }

  //post
  addNewRentals(){
    this.rentService.addNewRental().subscribe(data =>{
      this.rents = data;
    })
  }
}


import { Component } from '@angular/core';
import { Assets } from './models/assets';
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
  constructor(private rentService:RentServiceService){}

  getAssets(){
    this.rentService.getAsset().subscribe(data =>{
      this.assets = data;
      console.log(this.assets)
    })
  }
}


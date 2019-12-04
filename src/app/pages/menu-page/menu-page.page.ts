import { Component, OnInit, ViewChild } from '@angular/core';
import { Car, StorageService } from 'src/app/services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.page.html',
  styleUrls: ['./menu-page.page.scss'],
})
export class MenuPagePage implements OnInit {

  cars: Car[] = [];

  newCar: Car = {
    id: 0,
    description: '',
    model: ''
  };
  model: String;
  description: String;
  clicked: number = -1;

  @ViewChild('mylist',{static:false}) mylist: IonList;

  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController, public storage: Storage) {
    this.plt.ready().then(() => {
      this.loadCars();
    }
    )
  };

  ngOnInit() {
    this.loadCars();
  }

  async addCar() {
    this.newCar.id = Date.now();
    this.newCar.model = this.model;
    this.newCar.description = this.description;
    await this.storageService.addCar(this.newCar)
    this.loadCars();
    this.model =  "";
    this.description ="";
  }

  async loadCars(){
    let cars = await this.storage.get("my-items");
      this.cars = cars;
  }
  async deleteCar(car: Car){
    await this.storageService.deleteCar(car.id)
    this.mylist.closeSlidingItems();
    this.loadCars();
  }
  onClick(id : number){
    if(this.clicked == id){
      this.clicked = -1;
    }else{
    this.clicked = id;
    }
  }

}

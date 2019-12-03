import { Component, OnInit, ViewChild } from '@angular/core';
import { Car, StorageService } from 'src/app/services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.page.html',
  styleUrls: ['./menu-page.page.scss'],
})
export class MenuPagePage implements OnInit {

  cars: Car[] = [];

  newCar: Car = <Car>{};

  @ViewChild('mylist',{static:false}) mylist: IonList;

  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    this.plt.ready().then(() => {
      this.loadCars();
    }
    )
  };

  ngOnInit() {
  }

  addCar() {
    this.newCar.id = Date.now();

    this.storageService.addCar(this.newCar).then(car => {
      this.newCar = <Car>{};
      this.loadCars();
    });
  }

  loadCars(){
    this.storageService.getCars().then(cars =>{
      this.cars = cars;
    });
  }
  updateCar(car: Car){
    car.model = `UPDATE: ${car.model}`;
    car.description = `UPDATE: ${car.description}`;

    this.storageService.updateCar(car).then(car => {
      this.mylist.closeSlidingItems();
      this.loadCars();
    });
  }
  deleteCar(car: Car){
    this.storageService.deleteCar(car.id).then( car =>{
      this.mylist.closeSlidingItems();
      this.loadCars();
    });
  }

}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


export class Car {
  id: number;
  model: String;
  description: String;
}

const CARS_KEY = "my-items";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) { 
    
  }

  async addCar(car: Car) {
    let cars = await this.storage.get("my-items");
    cars.push(car);
    this.storage.set(CARS_KEY, cars);
    return cars;
  }

  async deleteCar(id: number){
    let cars = await this.storage.get("my-items");
    cars = cars.filter(car => id != car.id);
    this.storage.set(CARS_KEY, cars);
  }
  async getCars() {
    let cars = await this.storage.get(CARS_KEY);
    return cars;
  }
}

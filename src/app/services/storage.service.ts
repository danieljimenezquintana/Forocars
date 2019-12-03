import { Injectable } from '@angular/core';

export interface Car {
  id: number;
  model: String;
  description: String;
}

const CARS_KEY = "my-items";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }
  addCar(car: Car): Promise<any> {
    return this.storage.get(CARS_KEY).then((cars: Car[]) => {
      if (cars) {
        cars.push(car);
        return this.storage.set(CARS_KEY, cars);
      } else {
        return this.storage.set(CARS_KEY, cars);
      }
    });
  }

  async deleteCar(id: number): Promise<any>{
    let aux = await this.storage.get(CARS_KEY).filter(c => c.id != id);
    return this.storage.set(CARS_KEY,aux);
  }
  getCars(): Promise<Car[]> {
    return this.storage.get(CARS_KEY);
  }

  updateCar(car: Car) {
    return this.storage.get(CARS_KEY).then((cars: Car[]) => {
      if (!cars || cars.length === 0) {
        return null;
      }

      let newCars: Car[] = [];

      for (let c of cars) {
        if (c.id == car.id) {
          newCars.push(car);
        } else {
          newCars.push(c);
        }
      }
      return this.storage.set(CARS_KEY, newCars);
    });

  }
}

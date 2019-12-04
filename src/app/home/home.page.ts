import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  checkPass: boolean = false;
  user: string;
  password: string;

  constructor(private router: Router ,public toastController: ToastController, public storage: Storage) { }

  ngOnInit(){
    this.storage.set("my-items", []);
  }

  checkPassword() {
    if ((this.password != null) && (this.user != null)) {
      this.checkPass = true;
    } else {
      this.checkPass = false;
    }
  }
  login() {
    if ((this.user == "admin") && (this.password == "admin")) {
      this.router.navigate(["/menu-page"]);
    } else {
      this.presentToastWithOptions();
    }
    this.user ="";
    this.password ="";
  }
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Error',
      message: 'El usuario o la contraseña son incorrectos',
      position: 'top',
      buttons: [
         {
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}

import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  checkPass: boolean = false;
  user: string;
  password: string;

  constructor(private router: Router ,public toastController: ToastController) { }

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

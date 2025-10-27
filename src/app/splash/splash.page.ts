import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage {
  constructor(private navCtrl: NavController) {}

  ionViewDidEnter() {
    // Wait for the curtains to open + logo fade
    setTimeout(() => {
      this.navCtrl.navigateRoot('/login');
    }, 2000);
  }
}

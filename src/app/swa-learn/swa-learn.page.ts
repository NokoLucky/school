import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-swa-learn',
  templateUrl: './swa-learn.page.html',
  styleUrls: ['./swa-learn.page.css'],
})
export class SwaLearnPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  picturesLearn() {
    this.showAlert('Coming Soon', 'This feature will be available soon!');
  }

  async showAlert(header: string, message: string) {
  const alert = await this.alertCtrl.create({
    header,
    message,
    buttons: [
      {
        text: 'OK',
        handler: () => {},
        cssClass: 'alert-ok-btn' // custom button class
      }
    ],
    cssClass: 'custom-alert' // custom alert container class
  });
  await alert.present();
}


}

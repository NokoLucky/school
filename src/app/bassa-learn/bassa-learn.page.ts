import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bassa-learn',
  templateUrl: './bassa-learn.page.html',
  styleUrls: ['./bassa-learn.page.css'],
})
export class BassaLearnPage implements OnInit {

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

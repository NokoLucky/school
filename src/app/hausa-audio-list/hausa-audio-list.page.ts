import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-hausa-audio-list',
  templateUrl: './hausa-audio-list.page.html',
  styleUrls: ['./hausa-audio-list.page.css'],
})
export class HausaAudioListPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  commingSoon() {
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

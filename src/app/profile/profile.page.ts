import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User | null = null;
  joinDate: string = '';
  notificationsEnabled: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.user = this.authService.getCurrentUser();
    
    if (this.user?.metadata.creationTime) {
      const creationDate = new Date(this.user.metadata.creationTime);
      this.joinDate = creationDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long'
      });
    } else {
      this.joinDate = 'Recently';
    }
    
    console.log('👤 User profile loaded:', this.user);
  }

  async logout() {
    const alert = await this.alertCtrl.create({
      header: 'Log Out',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Log Out',
          handler: async () => {
            const loading = await this.loadingCtrl.create({
              message: 'Logging out...',
            });
            await loading.present();

            try {
              await this.authService.logout();
              await loading.dismiss();
              this.router.navigate(['/login']);
            } catch (error) {
              await loading.dismiss();
              this.showAlert('Logout Failed', 'An error occurred while logging out');
            }
          }
        }
      ]
    });

    await alert.present();
  }

  // Profile Actions
  editProfile() {
    this.showAlert('Coming Soon', 'Profile editing feature will be available soon!');
  }

  changePassword() {
    this.showAlert('Coming Soon', 'Password change feature will be available soon!');
  }

  viewProgress() {
    this.showAlert('Learning Progress', 'Track your language learning journey here!');
  }

  toggleNotifications() {
    this.notificationsEnabled = !this.notificationsEnabled;
    this.showAlert(
      'Notifications', 
      `Notifications ${this.notificationsEnabled ? 'enabled' : 'disabled'}`
    );
  }

  changeLanguage() {
    this.showAlert('App Language', 'Choose your preferred app language');
  }

  contactSupport() {
    this.showAlert('Support', 'Contact us at support@extralingual.com');
  }

  viewPrivacyPolicy() {
    this.showAlert('Privacy Policy', 'Our privacy policy details');
  }

  viewTerms() {
    this.showAlert('Terms of Service', 'Our terms and conditions');
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
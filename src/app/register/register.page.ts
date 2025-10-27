import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('🔐 RegisterPage initialized');
  }

  async register() {
    if (!this.email || !this.password || !this.confirmPassword) {
      this.showAlert('Error', 'Please fill in all fields');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.showAlert('Error', 'Passwords do not match');
      return;
    }

    if (this.password.length < 6) {
      this.showAlert('Error', 'Password should be at least 6 characters');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Creating account...',
    });
    await loading.present();

    try {
      const result = await this.authService.register(this.email, this.password);
      await loading.dismiss();

      if (result.success) {
        this.showAlert('Success', 'Account created successfully!');
        this.router.navigate(['/home']);
      } else {
        this.showAlert('Registration Failed', result.error);
      }
    } catch (error) {
      await loading.dismiss();
      this.showAlert('Registration Failed', 'An unexpected error occurred');
    }
  }

  async registerWithGoogle() {
    const loading = await this.loadingCtrl.create({
      message: 'Signing up with Google...',
    });
    await loading.present();

    try {
      const result = await this.authService.loginWithGoogle();
      await loading.dismiss();

      if (result.success) {
        this.router.navigate(['/home']);
      } else {
        this.showAlert('Google Sign Up Failed', result.error);
      }
    } catch (error) {
      await loading.dismiss();
      this.showAlert('Google Sign Up Failed', 'An unexpected error occurred');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
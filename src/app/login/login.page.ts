import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('🔐 LoginPage initialized');
  }

  // Email/Password Login
  async login() {
    if (!this.email || !this.password) {
      this.showToast('Please enter both email and password', 'warning');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Signing in...',
      spinner: 'crescent',
      cssClass: 'custom-loader',
    });
    //await loading.present();

    try {
      const result = await this.authService.login(this.email, this.password);
     // await loading.dismiss();

      if (result.success) {
        this.showToast('Welcome back!', 'success');
        this.router.navigate(['/home']);
      } else {
        this.showToast(result.error, 'danger');
      }
    } catch (error) {
      //await loading.dismiss();
      this.showToast('An unexpected error occurred. Please try again.', 'danger');
    }
  }

  // Google Login
  async loginWithGoogle() {
    const loading = await this.loadingCtrl.create({
      message: 'Signing in with Google...',
      spinner: 'crescent',
      cssClass: 'custom-loader',
    });
    //await loading.present();

    try {
      const result = await this.authService.loginWithGoogle();
      //await loading.dismiss();

      if (result.success) {
        this.showToast('Welcome!', 'success');
        this.router.navigate(['/home']);
      } else {
        this.showToast(result.error, 'danger');
      }
    } catch (error) {
      //await loading.dismiss();
      this.showToast('An unexpected error occurred. Please try again.', 'danger');
    }
  }

  // Toast Notification
  async showToast(message: string, color: string = 'dark') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color,
      position: 'bottom',
      cssClass: 'custom-toast',
    });
    await toast.present();
  }
}

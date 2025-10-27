import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');

      // Hide the native splash screen immediately
      this.splashScreen.hide();

      // Jump straight to login
      this.router.navigateByUrl('/login', { replaceUrl: true })
        .then(() => console.log('✅ Navigated to /login'))
        .catch(err => console.error('❌ Navigation error', err));
    });
  }
}

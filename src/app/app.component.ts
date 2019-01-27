import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'User',
      url: '/user',
      icon: 'contacts'
    },
    {
      title: 'Education',
      url: '/education',
      icon: 'school'
    },
    {
      title: 'Document',
      url: '/document',
      icon: 'document'
    },
    {
      title: 'Advisor',
      url: '/advisor',
      icon: 'text'
    },
    {
      title: 'Tracking',
      url: '/tracking',
      icon: 'filing'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

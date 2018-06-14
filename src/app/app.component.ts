import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
// import { RegisterPage } from '../pages/register/register';
import { EventsPage } from '../pages/events/events';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { FavoritePlacePage } from '../pages/favorite-place/favorite-place';
// import { MyReviewsPage } from '../pages/my-reviews/my-reviews';
import { WillGoPage } from '../pages/will-go/will-go';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  name = "";
  email = "";

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Главная', component: EventsPage , icon: 'star'},
      { title: 'Профиль', component: ProfilePage , icon: 'person'},
      { title: 'Мои места', component: FavoritePlacePage, icon: 'home' },
      // { title: 'Мои события', component: MyReviewsPage, icon: 'color-palette' },
      { title: 'Куда пойду', component: WillGoPage, icon: 'subway' },
    ];

  }

  initializeApp() {

    this.storage.get('name').then((data)=>{this.name=data;});
    this.storage.get('email').then((data)=>{this.email=data;});

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

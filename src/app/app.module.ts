import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { EventsPage } from '../pages/events/events';
import { EventPage } from '../pages/event/event';
import { PlacePage } from '../pages/place/place';
import { ProfilePage } from '../pages/profile/profile';
import { FavoritePlacePage } from '../pages/favorite-place/favorite-place';
import { MyReviewsPage } from '../pages/my-reviews/my-reviews';
import { WillGoPage } from '../pages/will-go/will-go';

import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    EventsPage,
    EventPage,
    PlacePage,
    ProfilePage,
    FavoritePlacePage,
    MyReviewsPage,
    WillGoPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    EventsPage,
    EventPage, 
    PlacePage,
    ProfilePage,
    FavoritePlacePage,
    MyReviewsPage,
    WillGoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}

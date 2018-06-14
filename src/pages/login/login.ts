import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { RegisterPage } from "../register/register";
import { AlertController } from 'ionic-angular';
import { EventsPage} from '../events/events';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // @ViewChild('myNav') nav: NavController
  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public menu: MenuController, 
    public authService: AuthServiceProvider,
    private alertCtrl: AlertController,
    private storage: Storage
    ) {
   this.menu.enable(false)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn(){
    let userData = {    
      'email' : this.email.value,
      'password' : this.password.value, 
    };

    this.authService.postData(userData,"auth/login").then((result) => {
        if(result.token){
          this.storage.set('token',result.token);
        }
        if(result.user.name){
          this.storage.set('name',result.user.name);
        }
        if(result.user.email){
          this.storage.set('email',result.user.email);
        }        

        this.navCtrl.push(EventsPage);
      },(err) => {
        let alert = this.alertCtrl.create({
          title: 'Ошибка',
          subTitle: 'Неправильный логин или пароль',
          buttons: ['Отмена']
        });
        alert.present();
      });

  }


  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

}

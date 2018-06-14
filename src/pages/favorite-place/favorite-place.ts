import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacePage } from '../place/place';

/**
 * Generated class for the FavoritePlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite-place',
  templateUrl: 'favorite-place.html',
})
export class FavoritePlacePage {

    places_list = [
      { id: 2, name: 'Fabrika.space', adress: 'ул.Дарвина 33', work_time: 'С 12:00 до 23:00' },  
      { id: 3, name: 'Фельдман Экопарк', adress: 'ул. Окружная 34', work_time: 'С 10:00 до 20:00' }, 
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePlacePage');
  }

  pushToPlace(place_id){
    this.navCtrl.push(PlacePage, {
      id: place_id
    });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

    places_list = [
      { id: 1, name: 'Інформаційно-виставковий центр "БУЗОК"', adress: 'ул.Сумская 25', work_time: 'С 11:00 до 19:00', description: 'В программе фестиваля: выставка-ярмарка натуральных камней и изделий ручной работы, многообразие украшений из серебра, камней, натуральная косметика и многое другое.', },
      { id: 2, name: 'Fabrika.space', adress: 'ул.Дарвина 33', work_time: 'С 12:00 до 23:00', description: 'В программе фестиваля: выставка-ярмарка натуральных камней и изделий ручной работы, многообразие украшений из серебра, камней, натуральная косметика и многое другое.', },      
      { id: 3, name: 'Фельдман Экопарк', adress: 'ул. Окружная 34', work_time: 'С 10:00 до 20:00' , description: 'В программе фестиваля: выставка-ярмарка натуральных камней и изделий ручной работы, многообразие украшений из серебра, камней, натуральная косметика и многое другое.', },          
    ];

    place = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	  let id = navParams.get('id');
  	  if(this.places_list.length > 0){
		this.place = this.places_list.filter(places => places.id == id)[0];
  	  }  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

}

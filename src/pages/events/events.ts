import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventPage} from '../event/event';
import { PlacePage } from '../place/place';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

	tabs: string = "events";

	  events_list = [
	    { id: 1, name: 'Event 1', price: '100 - 200', image: "assets/imgs/events/1.jpeg", place: 'Fabrika.space', date: '12.08.2018' },
	    { id: 2, name: 'Event 2', price: '120 - 200', image: "assets/imgs/events/2.jpg", place: 'Бузок', date: '01.09.2018' },
	    { id: 3, name: 'Event 3', price: '150 - 300', image: "assets/imgs/events/3.jpg", place: 'Fabrika.space', date: '11.10.2018' },
	  ];

    places_list = [
      { id: 1, name: 'Інформаційно-виставковий центр "БУЗОК"', adress: 'ул.Сумская 25', work_time: 'С 11:00 до 19:00' },
      { id: 2, name: 'Fabrika.space', adress: 'ул.Дарвина 33', work_time: 'С 12:00 до 23:00' },      
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  pushToEvent(event_id){
    this.navCtrl.push(EventPage, {
      id: event_id
    });
  }

  pushToPlace(place_id){
    this.navCtrl.push(PlacePage, {
      id: place_id
    });
  }

}

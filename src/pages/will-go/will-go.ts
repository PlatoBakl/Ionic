import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventPage} from '../event/event';

/**
 * Generated class for the WillGoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-will-go',
  templateUrl: 'will-go.html',
})
export class WillGoPage {

	  events_list = [
	    { id: 1, name: 'Event 1', price: '100 - 200', image: "assets/imgs/events/1.jpeg", place: 'Fabrika.space', date: '12.08.2018' },
	    { id: 3, name: 'Event 3', price: '150 - 300', image: "assets/imgs/events/3.jpg", place: 'Fabrika.space', date: '11.10.2018' },
	  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WillGoPage');
  }

  pushToEvent(event_id){
    this.navCtrl.push(EventPage, {
      id: event_id
    });
  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

	events_list = [
		{ 
			id: 1,
			name: 'Event 1',
			price: '100 - 200', 
			image: "assets/imgs/events/1.jpeg", 
			place: 'Fabrika.space', 
			date: '12.08.2018 18:00:00',
			description: 'В программе фестиваля: выставка-ярмарка натуральных камней и изделий ручной работы, многообразие украшений из серебра, камней, натуральная косметика и многое другое.',
			url: 'http://buzok.kh.ua/index.php/afisha',			
		},
	    { 
	    	id: 2, 
	    	name: 'Event 2', 
	    	price: '120 - 200', 
	    	image: "assets/imgs/events/2.jpg", 
	    	place: 'Бузок', 
	    	date: '01.09.2018 18:00:00',
			description: 'В программе фестиваля: выставка-ярмарка натуральных камней и изделий ручной работы, многообразие украшений из серебра, камней, натуральная косметика и многое другое.',
			url: 'http://buzok.kh.ua/index.php/afisha',			    	
	    },
	    { 
	    	id: 3, 
	    	name: 'Event 3', 
	    	price: '150 - 300', 
	    	image: "assets/imgs/events/3.jpg", 
	    	place: 'Fabrika.space', 
	    	date: '11.10.2018 18:00:00',
			description: 'В программе фестиваля: выставка-ярмарка натуральных камней и изделий ручной работы, многообразие украшений из серебра, камней, натуральная косметика и многое другое.',
			url: 'http://buzok.kh.ua/index.php/afisha',			    	
	    },
	];

	event = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	  let id = navParams.get('id');
  	  if(this.events_list.length > 0){
		this.event = this.events_list.filter(events => events.id == id)[0];
  	  }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

}

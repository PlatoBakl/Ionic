import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  apiUrl = 'http://fathomless-castle-92888.herokuapp.com/public/api/';

  constructor(public http: HttpClient) {

  }



  postData(credentials,type){

    console.log(credentials);
  		// return credentials
  	return new Promise((resolve, reject) => {
  		this.http.post(this.apiUrl + type, credentials).subscribe((res) => {

  				resolve(res)
  			}, (err) => {
  				reject(err);
  			});
  	});

  }
  

  getData(type){
  		// return credentials
  	return new Promise((resolve, reject) => {
  		this.http.get(this.apiUrl + type).subscribe((res) => {
  				resolve(res)
  			}, (err) => {
  				reject(err);
  			});
  	});

  }

}

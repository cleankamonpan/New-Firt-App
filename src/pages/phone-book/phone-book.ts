import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class phoneBookPage{

  contactArray = [
    {name: 'Aileen', telephone: '0873979385', imageUrl: 'assets/imgs/1.jpg'}
    ,{name: 'Dan', telephone: '0873979385', imageUrl: 'assets/imgs/2.jpg'}
    ,{name: 'Lina', telephone: '0873979385', imageUrl: 'assets/imgs/6.jpg'}
    ,{name: 'Gina', telephone: '0873979385', imageUrl: 'assets/imgs/7.jpg'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);

  }

}//end class

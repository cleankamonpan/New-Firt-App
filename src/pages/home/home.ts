import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   loginResult;
  

  constructor(public navCtrl: NavController) {

  }

  signIn(_username,_password){
   if(_password == '1234'){
    this.loginResult ="hello "+_username+"ยินดีต้อนรับ";
    this.navCtrl.push("phoneBookPage");
   }else{
    this.loginResult ="login failed ";
   }
   
   
  }


}//end class

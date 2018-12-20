import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';

/**
 * Generated class for the GMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google: any;
@IonicPage()
@Component({
  selector: 'page-g-map',
  templateUrl: 'g-map.html',
})
export class GMapPage {
  myLatitude = 0;
  myLongitude = 0;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController
    , public geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GMapPage');
  }
  getCurrentLocation() {  
    let loader = this.loadingCtrl.create();  
    loader.present();  
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {  
      this.myLatitude = resp.coords.latitude;  
      this.myLongitude = resp.coords.longitude;  
        
      let accuracy = resp.coords.accuracy;  
      alert(this.myLatitude + ' ' + this.myLongitude + ', accuracy: ' + accuracy);  
    
      let latLng = new google.maps.LatLng(this.myLatitude, this.myLongitude);  
    
      let mapOptions = {  
        center: latLng,  
        zoom: 15,  
        mapTypeId: google.maps.MapTypeId.ROADMAP  
      }  
    
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);  
    
      let marker = new google.maps.Marker({  
        map: this.map,  
        animation: google.maps.Animation.DROP,  
        position: latLng  
      });  
      
         var trafficLayer = new google.maps.TrafficLayer();  
        trafficLayer.setMap(this.map); 
    
      loader.dismiss();  
    });  
  } 
  
}//end class

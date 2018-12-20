import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialInfoPage } from '../pages/social-info/social-info';
import { SMS } from '@ionic-native/sms';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation'
import { GMapPage } from '../pages/g-map/g-map';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SocialInfoPage,
    BarcodeScannerPage,
    GMapPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SocialInfoPage,
    BarcodeScannerPage,
    GMapPage,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    BarcodeScanner,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

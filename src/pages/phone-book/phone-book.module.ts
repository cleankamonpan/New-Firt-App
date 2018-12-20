import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { phoneBookPage } from './phone-book';

@NgModule({
  declarations: [
    phoneBookPage,
  ],
  imports: [
    IonicPageModule.forChild(phoneBookPage),
  ],
})
export class PhoneBookPageModule {}

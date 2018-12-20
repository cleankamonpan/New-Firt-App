import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneBookDetailPage } from './phone-book-detail';

@NgModule({
  declarations: [
    PhoneBookDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneBookDetailPage),
  ],
})
export class PhoneBookDetailPageModule {}

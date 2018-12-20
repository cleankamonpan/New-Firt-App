import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GMapPage } from './g-map';

@NgModule({
  declarations: [
    GMapPage,
  ],
  imports: [
    IonicPageModule.forChild(GMapPage),
  ],
})
export class GMapPageModule {}

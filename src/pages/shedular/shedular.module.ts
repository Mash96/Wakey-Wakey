import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShedularPage } from './shedular';

@NgModule({
  declarations: [
    ShedularPage,
  ],
  imports: [
    IonicPageModule.forChild(ShedularPage),
  ],
})
export class ShedularPageModule {}
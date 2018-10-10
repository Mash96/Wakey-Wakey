import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTaskNextPage } from './add-task-next';

@NgModule({
  declarations: [
    AddTaskNextPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTaskNextPage),
  ],
})
export class AddTaskNextPageModule {}

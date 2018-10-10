import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddTaskNextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-task-next',
  templateUrl: 'add-task-next.html',
})
export class AddTaskNextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private newMethod() {
    return this;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskNextPage');
  }

}

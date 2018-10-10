import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Calendar} from '@ionic-native/calendar';

/**
 * Generated class for the ShedularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shedular',
  templateUrl: 'shedular.html',
})
export class ShedularPage {
  calendars = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShedularPage');
  }

  cancel(){
    this.navCtrl.push('AddTaskPage');
  }

}

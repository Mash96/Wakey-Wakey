import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Calendar } from '@ionic-native/calendar';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  
  addTask(){
    this.navCtrl.push('AddTaskPage');
  }

  viewShedular(){
    this.navCtrl.push('AddTaskNextPage');
  }
  

  /*addmytask(){
    //this.navCtrl.push('AddTaskPage');
  }*/

  
}

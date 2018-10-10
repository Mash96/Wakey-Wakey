import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabaseModule , AngularFireDatabase} from 'angularfire2/database';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
//user: AngularFireList<any>
@ViewChild('name') name;
@ViewChild('username') username;
@ViewChild('familyname') fname;
@ViewChild('phone') phone;
@ViewChild('password') password;
//RegisterPagee
  constructor( public navCtrl: NavController, public alertCtrl:AlertController, public navParams: NavParams, afDatabase: AngularFireDatabase) {
    //this.RegisterPagee().user = afDatabase.list('/users').valueChanges();
  }

  private newMethod() {
    return this;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  SignUp(){
    //this.navCtrl.push('LoginPage');
    //this.fire.AngularFireDatabaseModule.
    console.log(this.name.value, this.username.value);
    console.log(this.fname.value, this.phone.value, this.password.value);
      //const newUser = this.RegisterPage().user.push({});
      /*newUser.set({
        name: this.name.value,
        username: this.username.value,
        familyname: this.fname.value,
        phone: this.phone.value,
        password: this.password.value

      })*/
    

  }

}

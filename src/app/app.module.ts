import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { AddTaskNextPage } from '../pages/add-task-next/add-task-next';
//import { ShedularPage } from '../pages/shedular/shedular';
import { AngularFireModule } from 'angularfire2';
//import {AngularFireAuth} from ''
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {Calendar} from '@ionic-native/calendar';


var firebase = {
  apiKey: "AIzaSyBzaJf42Y6G6i_qiOEF39gC2ZSsE6-TFG4",
  authDomain: "wakeywakeyionic.firebaseapp.com",
  databaseURL: "https://wakeywakeyionic.firebaseio.com",
  projectId: "wakeywakeyionic",
  storageBucket: "wakeywakeyionic.appspot.com",
  messagingSenderId: "50047832514"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
   // AddTaskNextPage,
   // ShedularPage
  
    //RegisterPage
  ],
  imports: [
    BrowserModule,
    
    IonicModule.forRoot(MyApp),
    
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
   // AddTaskNextPage,
   // ShedularPage
   // RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

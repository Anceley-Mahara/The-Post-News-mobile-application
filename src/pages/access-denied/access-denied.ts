import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingListPage } from '../shopping-list/shopping-list';

/**
 * Generated class for the AccessDeniedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-access-denied',
  templateUrl: 'access-denied.html',
})
export class AccessDeniedPage {
security:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
   public database: AngularFireDatabase) {

    database.database.ref('/accounts/').orderByChild('owner').equalTo(JSON.parse(localStorage.getItem('omeyaemail'))).once('value', (snapshot) => {
      snapshot.forEach(function(child) {
      console.log('this is the retrieved access '+child.val().access);
     // this.security = child.val().access;
      localStorage.setItem('omeyaSecurity', child.val().access); 
         });
        })

        this.ionViewDidLoad();
  }


  ionViewDidLoad() {
   // console.log('ionViewDidLoad AccessDeniedPage');
    console.log('view did load access denied page:: '+localStorage.getItem('omeyaSecurity'))
    if (localStorage.getItem('omeyaSecurity') == 'granted') {
      this.navCtrl.setRoot(ShoppingListPage);
    }
    else {
      
    } 

  }

  retry(){
 //   this.security = this.database.database.ref('/accounts/').orderByChild('owner').equalTo(JSON.parse(localStorage.getItem('omeyaemail'))).once('value', (snapshot) => {
   //   snapshot.forEach(function(child) {
   //   console.log('this is the retrieved access '+child.val().access);
    // this.security = child.val().access;
   //   localStorage.setItem('omeyaSecurity', child.val().access); 
      this.navCtrl.setRoot(ShoppingListPage);
     
   //      });
 // })

  }

}

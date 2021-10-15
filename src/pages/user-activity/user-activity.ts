import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the UserActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-user-activity',
  templateUrl: 'user-activity.html',
})
export class UserActivityPage {
  public allList:Array<any>;
  public loadedAllList:Array<any>;
  public allRef:firebase.database.Reference;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.allRef = firebase.database().ref('/reports');
      this.allRef.orderByChild("submitdate").on('value', allList => {
    //  this.allRef.on('value', allList => {
          let props = [];
          allList.forEach( property => {
              props.push(property.val());
              return false;
          });
   
          this.allList = props.slice().reverse();
          this.loadedAllList = props;
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserActivityPage');
  }

}

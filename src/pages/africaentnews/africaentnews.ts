import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Firebase } from '@ionic-native/firebase';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { EditShoppingItemPage } from '../edit-shopping-item/edit-shopping-item';
import { IssueDetailPage } from '../issue-detail/issue-detail';

/**
 * Generated class for the AfricaentnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-africaentnews',
  templateUrl: 'africaentnews.html',
})
export class AfricaentnewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfricaentnewsPage');
  }

}

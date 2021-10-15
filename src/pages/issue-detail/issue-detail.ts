
import { NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
//import firebase from 'firebase';
//import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the IssueDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-issue-detail',
  templateUrl: 'issue-detail.html',
})
export class IssueDetailPage {
  selectedItem: any;
  shoppingListOpen: Observable<any[]>;
  shoppingListOpenRef$: any;
  shopListOpenAsync:any;
  key:any;

  constructor(public navParams: NavParams, database: AngularFireDatabase) {
      // If we navigated to this page, we will have an item available as a nav param
      this.selectedItem = navParams.get('item');
 //     console.log('This is the navparam output '+JSON.stringify(this.selectedItem.key));
  //this.key = JSON.stringify(this.selectedItem.key)
  this.key = this.selectedItem.key
    
      this.shoppingListOpenRef$ = database.list('comments', ref => {
        return ref.orderByChild('reportkey').equalTo(this.key)
      })
      this.shopListOpenAsync = this.shoppingListOpenRef$.snapshotChanges();
      console.log('This is the shopListAsync '+JSON.stringify(this.shopListOpenAsync))
      
    }



  ionViewDidLoad() {
    console.log('ionViewDidLoad IssueDetailPage');
  }

}

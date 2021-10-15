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
 * Generated class for the InternationalentnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-internationalentnews',
  templateUrl: 'internationalentnews.html',
})
export class InternationalentnewsPage {


  shoppingList: Observable<any[]>;
  shoppingListRef$: any;
  shopListAsync:Array<any>;
public advertsList:Array<any>;
public loadedAdvertsList:Array<any>;
public advertsRef:firebase.database.Reference;
public showFooter = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fbase: Firebase,
    public database: AngularFireDatabase, public afAuth: AngularFireAuth,) {

        //Open Issues


  }
  @ViewChild(Content) content: Content;
  ionViewDidLoad() {
    console.log('ionViewDidLoad LatestNewsPage');
    console.log(this.advertsList);
  this.initializeItems();


  }



initializeItems(){



  this.shoppingListRef$ = this.database.list('news', ref => {
    return ref.orderByChild('newslabel').equalTo('IntLatest') 
    })
  

  this.shopListAsync = this.shoppingListRef$.snapshotChanges();
  console.log('This is the shopListAsync'+this.shopListAsync)

  //this.advertsRef = firebase.database().ref('/adverts/');
  

  this.shopListAsync = this.shoppingListRef$.snapshotChanges();
  console.log('This is the shopListAsync'+this.shopListAsync)

  this.advertsRef = firebase.database().ref('/adverts/');
  this.content.resize();
  this.advertsRef
  //.orderByChild('newslabel')
  //.equalTo('Latest')
  .on('value', advertsList => {
    let adverts = [];
    advertsList.forEach( advertisement => {
      adverts.push(advertisement.val());
      return false;
    });

    this.advertsList = adverts;
    this.loadedAdvertsList = adverts;
});


}

  selectShoppingItem(item){
    this.navCtrl.push(IssueDetailPage,{item})
  }

  commentItem(item){
    this.navCtrl.push(EditShoppingItemPage,{shoppingItemId: item.key})
  }



  onInput(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
        return;
    }

    this.shopListAsync = this.shopListAsync.filter((v) => {
        if(v.exerpt && v.story && v.headline && q) {
            if (v.exerpt.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            if (v.story.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            if (v.headline.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            return false;
        }
    });

 //   console.log(q, this.advertsList.length);

//this.presentToast('results found '+this.advertsList.length);

}


}

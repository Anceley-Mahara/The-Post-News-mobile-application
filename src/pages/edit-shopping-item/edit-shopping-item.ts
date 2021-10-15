import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
//import { Observable } from 'rxjs';
import firebase from 'firebase';
import { Subscription} from 'rxjs/Subscription';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})



export class EditShoppingItemPage {
shoppingItemSubscription : Subscription;
shoppingItemRef$: AngularFireObject<ShoppingItem>;
shoppingItem = {} as ShoppingItem;
key:any;
timestamp: any;
activityDB:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase) {
      const shoppingItemId = this.navParams.get('shoppingItemId')
      console.log('this is edit id'+shoppingItemId);
      this.key = shoppingItemId;
      this.shoppingItemRef$ = this.database.object(`news/${shoppingItemId}`)
      this.timestamp = firebase.database.ServerValue.TIMESTAMP;
      this.activityDB = this.database.list('/comments');
      this.shoppingItemSubscription = this.shoppingItemRef$.valueChanges().subscribe(shoppingItem => this.shoppingItem = shoppingItem)
      //console.log(shoppingItem.payload.val().$key);

      
    }

    @ViewChild('myInput') myInput: ElementRef;

    resize() {
        this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    }

editShoppingItem(shoppingItem: ShoppingItem){
  this.shoppingItemRef$.update(shoppingItem);
 // this.shoppingItemRef$.update(this.key {});
 console.log(shoppingItem);
 this.activity(shoppingItem)
  this.navCtrl.pop();
}

activity(shoppingItem){
  console.log(shoppingItem.headline);
  Promise.resolve(this.activityDB.push
    ({       report: shoppingItem.headline,
      reportkey: this.key,
      status: shoppingItem.status,
      exerpt: shoppingItem.exerpt,
      locale: shoppingItem.locale,
      comment: shoppingItem.comment,
        timestamp: this.timestamp,
        owner: (JSON.parse(localStorage.getItem('omeyaemail')))
    })
    )
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditShoppingItemPage');
  }

ionViewWillLeave(){
  this.shoppingItemSubscription.unsubscribe();
}

}

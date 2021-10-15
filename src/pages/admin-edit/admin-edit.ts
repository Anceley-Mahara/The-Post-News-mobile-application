import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
//import { Observable, } from 'rxjs';
import { Subscription} from 'rxjs/Subscription';
import { UsersItem } from '../../models/users/users-interface';

/**
 * Generated class for the AdminEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-admin-edit',
  templateUrl: 'admin-edit.html',
})
export class AdminEditPage {
  shoppingItemSubscription : Subscription;
  shoppingItemRef$: AngularFireObject<UsersItem>;
  shoppingItem = {} as UsersItem;
  
    constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private database: AngularFireDatabase) {
        const shoppingItemId = this.navParams.get('shoppingItemId')
        console.log(shoppingItemId);
        this.shoppingItemRef$ = this.database.object(`accounts/${shoppingItemId}`)
        this.shoppingItemSubscription = this.shoppingItemRef$.valueChanges().subscribe(shoppingItem => this.shoppingItem = shoppingItem)
      }
  
  editShoppingItem(shoppingItem: UsersItem){
    this.shoppingItemRef$.update(shoppingItem)
    this.navCtrl.pop();
  }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad EditShoppingItemPage');
    }
  
  ionViewWillLeave(){
    this.shoppingItemSubscription.unsubscribe();
  }
  

}

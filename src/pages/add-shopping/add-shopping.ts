import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingItem} from '../../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase} from 'angularfire2/database'
/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {
shoppingItem = {} as ShoppingItem
shoppingItemRef$: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase) {
       this.shoppingItemRef$ = this.database.list('shopping-list');
/* 
shopping-list:
0:
itemName: 'Pizza'
itemNumber: 1
*/
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingPage');
  }

  addShoppingItem(shoppingItem: ShoppingItem){
    
    this.shoppingItemRef$.push({itemName : this.shoppingItem.itemName,
    itemNumber: Number(this.shoppingItem.itemNumber)})
   this.shoppingItem = {} as ShoppingItem;

   //Nav back to shopping list page
   this.navCtrl.pop();
  }

}

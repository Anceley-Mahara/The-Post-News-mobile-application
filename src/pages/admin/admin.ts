import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController , AlertController} from 'ionic-angular';
import { AdminAddPage} from '../admin-add/admin-add';
import { AngularFireDatabase } from 'angularfire2/database';
//import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
//import { ShoppingServiceProvider} from '../../providers/shopping-service/shopping-service';
//import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { Observable } from 'rxjs';
import { AdminEditPage } from '../admin-edit/admin-edit';
import { LoginPage } from '../login/login';
import { AccessDeniedPage } from '../access-denied/access-denied';
import { ShoppingListPage} from '../shopping-list/shopping-list';
//import { UsersItem } from '../../models/users/users-interface';
/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  reports:any;

  shoppingList: Observable<any[]>;
  shoppingListRef$: any;
  shopListAsync:any;

  shoppingListOpen: Observable<any[]>;
  shoppingListOpenRef$: any;
  shopListOpenAsync:any;

  shoppingListClosed: Observable<any[]>;
  shoppingListClosedRef$: any;
  shopListClosedAsync:any;

  shoppingListMy: Observable<any[]>;
  shoppingListMyRef$: any;
  shopListMyAsync:any;

  loader:any;

  shoppingListMyToken: Observable<any[]>;
  shoppingListMyTokenRef$: any;
  shopListMyTokenAsync:any;

  securityList: Observable<any[]>;
  securityListRef$: any;
  securityListAsync:any;
  //shoppingItem = {} as UsersItem;

  constructor(public navCtrl: NavController, 
  private actionSheetCtrl: ActionSheetController,
    public database: AngularFireDatabase,
    public alertCtrl: AlertController,
    //public shoppinglistDB: ShoppingServiceProvider,
    public navParams: NavParams) {

    //  You can update your code

 //Open Issues

console.log('This is the shopListAsync'+this.shopListOpenAsync)
//Closed Issues
this.shoppingListClosedRef$ = database.list('accounts', ref => {
  return ref.orderByChild('access').equalTo('granted')
})
this.shopListClosedAsync = this.shoppingListClosedRef$.snapshotChanges();
//My Issues
this.shoppingListMyRef$ = database.list('accounts', ref => {
  return ref.orderByChild('access').equalTo('suspended')
})
this.shopListMyAsync = this.shoppingListMyRef$.snapshotChanges();


//this.shoppingList = database.list('shopping-list').valueChanges();
this.shoppingListRef$ = database.list('accounts');
//, ref => { return ref.orderByChild('email').equalTo('l@l.com')  })//Returns specific content
this.shopListAsync = this.shoppingListRef$.snapshotChanges();
console.log(this.shopListAsync)
this.reports = "denied";
        //  this.shoppingListRef$.subscribe(x +)
    }

selectShoppingItem(ShoppingItem){
this.actionSheetCtrl.create({
  title: 'Manage Users',
  buttons: [
    {  text: 'Edit',
    handler: () => {
console.log(ShoppingItem.key)
this.navCtrl.push(AdminEditPage,{shoppingItemId: ShoppingItem.key})
    }
  },
    {  text: 'Delete',
    handler: () => {
this.shoppingListRef$.remove(ShoppingItem.key);
    }
  },
    {  text: 'Cancel',
    handler: () => {

    }
  }
  
  ]
}).present();

}

getData(){
  this.shoppingListOpenRef$ = this.database.list('accounts', ref => {
    return ref.orderByChild('access').equalTo('denied')
  })
  this.shopListOpenAsync = this.shoppingListOpenRef$.snapshotChanges();

}

    
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
    
  }

  ionViewDidEnter(){
    //this.loadData();
if (localStorage.getItem('omeyaemail') == null) {
    this.navCtrl.setRoot(LoginPage);
} else {
   // this.alertLogin()
}

if (localStorage.getItem('omeyaSecurity') == 'denied') {
  this.navCtrl.setRoot(AccessDeniedPage);
}
else {
//  this.navCtrl.setRoot(HomePage);//

  console.log('nothing found')
}       if (JSON.parse(localStorage.getItem('omeyaemail')) == 'admin@omeyaestate.com') {
  //this.presentAlertConfirm(ShoppingItem);
  this.getData();
} else
if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security@omeyaestate.com') {
  //this.presentAlertConfirm(ShoppingItem);
  this.getData();
} else {
  this.alertLogin();
}     
  }

  navigateToAddShoppingPage()
  {
    this.navCtrl.push(AdminAddPage);
  }

  alertLogin(){
    let alert = this.alertCtrl.create({
      title: 'Access Denied!',
      subTitle: 'Only the administrators can edit user authorizations',
      buttons: [    {  text: 'OK',
      handler: () => {
       // this.shopListOpenAsync = "";
    this.navCtrl.setRoot(ShoppingListPage)
      }
    }]
  });

  alert.present();
  
  }

}

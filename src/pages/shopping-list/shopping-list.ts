import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Nav, NavController, NavParams, ActionSheetController, AlertController, LoadingController } from 'ionic-angular';
import { AddShoppingPage} from '../add-shopping/add-shopping';

import { IssueDetailPage } from '../issue-detail/issue-detail';
import { HttpClient } from '@angular/common/http';

//import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
//import { ShoppingServiceProvider} from '../../providers/shopping-service/shopping-service';
//import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { Observable } from 'rxjs';
import { EditShoppingItemPage } from '../edit-shopping-item/edit-shopping-item';

import { AngularFireDatabase } from 'angularfire2/database';
import { Firebase } from '@ionic-native/firebase';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AccessDeniedPage } from '../access-denied/access-denied';
declare var FCMPlugin;
//import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  notificationcount:any;

  shoppingList: Observable<any[]>;
  shoppingListRef$: any;
  shopListAsync:any;

  shoppingListOpen: Observable<any[]>;
  shoppingListOpenRef$: any;
  shopListOpenAsync:any;

  shoppingListClosed: Observable<any[]>;
  shoppingListClosedRef$: any;
  shopListClosedAsync:any;

  shoppingListBack: Observable<any[]>;
  shoppingListBackRef$: any;
  shopListBackAsync:any;

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

  timestamp:any;
  items: any;
  activity:any;
  logs: any;
  Users:any;
  temp:any;
  reports:any;
  adminmessage: any;
  security: any;

  public profileList:Array<any>;
  public loadedProfileList:Array<any>;
  public profileRef:firebase.database.Reference;

  constructor(public navCtrl: NavController, 
  private actionSheetCtrl: ActionSheetController,private fbase: Firebase,
    public database: AngularFireDatabase, public afAuth: AngularFireAuth,
    public nav: Nav,public platform: Platform,
    private alertCtrl: AlertController,private http: HttpClient
    //, private alertCtrl: AlertController
    , public loadingCtrl: LoadingController,
    //public shoppinglistDB: ShoppingServiceProvider,
    public navParams: NavParams) {

    //  You can update your code


    database.database.ref('/accounts/').orderByChild('owner').equalTo(JSON.parse(localStorage.getItem('omeyaemail'))).once('value', (snapshot) => {
      snapshot.forEach(function(child) {
      
     // this.security = child.val().access;
      localStorage.setItem('omeyaSecurity', child.val().access); 
      
      console.log('initial this is the retrieved access '+localStorage.getItem('omeyaSecurity'));
   
    });
    if (localStorage.getItem('omeyaSecurity') == 'denied') {
    this.navCtrl.setRoot(AccessDeniedPage);
  }
  else {
  //  this.navCtrl.setRoot(HomePage);//

    console.log('nothing found')
  }       
  


//this.loadAccess();
//  });

})

//this.shoppingList = database.list('shopping-list').valueChanges();
        this.shoppingListRef$ = database.list('reports')
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        //console.log('This is the shopListAsync'+this.shopListAsync)
        //  this.shoppingListRef$.subscribe(x +)

        //Open Issues
        this.shoppingListOpenRef$ = database.list('reports', ref => {
          return ref.orderByChild('status').equalTo('Open')
        })
        this.shopListOpenAsync = this.shoppingListOpenRef$.snapshotChanges();
        console.log('This is the shopListAsync'+this.shopListOpenAsync)
        //Closed Issues
        this.shoppingListClosedRef$ = database.list('reports', ref => {
          return ref.orderByChild('status').equalTo('Closed')
        })
        this.shopListClosedAsync = this.shoppingListClosedRef$.snapshotChanges();
        //Back Reporting
        
        this.shoppingListBackRef$ = database.list('reports', ref => {
          return ref.orderByChild('status').equalTo('Back Report')
        })
        this.shopListBackAsync = this.shoppingListBackRef$.snapshotChanges();
        //My Issues
        this.shoppingListMyRef$ = database.list('reports', ref => {
          return ref.orderByChild('status').equalTo('In Progress')
        })
        this.shopListMyAsync = this.shoppingListMyRef$.snapshotChanges();

        this.securityListRef$ = database.list('accounts', ref => {
          return ref.orderByChild('email').equalTo(JSON.parse(localStorage.getItem('omeyaemail')))//.orderByChild('submitdate')
        })
       // this.temp = th
        this.securityListAsync = this.securityListRef$.snapshotChanges()//.orderByChild('submitdate');
        

        this.profileRef = firebase.database().ref('/accounts');
        //console.log(JSON.parse(localStorage.getItem('email')))
   //     console.log(JSON.stringify(this.updateAccount));
        this.profileRef
        .orderByChild('email')
        .equalTo(JSON.parse(localStorage.getItem('omeyaemail')))
        .on('value', profileList => {
          let profile = [];
          profileList.forEach( profiles => {
            profile.push(profiles.val());
            return false;
          });
      
          this.profileList = profile;
          this.loadedProfileList = profile;
        //  console.log(JSON.parse(localStorage.getItem('email')))
        //  console.log(JSON.stringify(this.profileList));
          
      });

        this.items = database.list('/ratings');
        this.logs = database.list('/activitylog');
        this.Users = database.list('/Users');
        this.adminmessage = database.list('/adminmessage');


//this.security = this.securityListRef$.snapshotChanges().firstname
//console.log('this is the result of security '+ JSON.parse(this.security))

      this.timestamp = firebase.database.ServerValue.TIMESTAMP;
      this.countObj();
     
    }


getData(){

// this.hideloading();

  this.shoppingListRef$ = this.database.list('reports')
this.shopListAsync = this.shoppingListRef$.snapshotChanges();
//console.log('This is the shopListAsync'+this.shopListAsync)
//this.hideLoading();
//this.loader.dismiss();
}

getToken(){
  this.fbase.getToken()
  .then(token => {
    console.log(`The token is ${token}`)
    this.saveToken(`${token}`)}
) // save the token server-side and use it to push notifications to this device
  .catch(error => console.error('Error getting token', error));
 

  /* Promise.resolve(this.logs.push
    ({       user_id: (JSON.parse(localStorage.getItem('email'))),
      device_token:token,
        timestamp: this.timestamp,
        owner: (JSON.parse(localStorage.getItem('email')))
    })
    )


  */
}
          saveToken(device_token){
            if (localStorage.getItem('fbtk') == null ) {Promise.resolve(this.Users.push
              ({       device_token,
                       user_id: (JSON.parse(localStorage.getItem('omeyaemail')))
              })
              )
              localStorage.setItem('fbtk', JSON.stringify(device_token)); 
            } else {}
      
          
     }



    async onNotification() {
      try {
          await this.platform.ready();
  
          FCMPlugin.onNotification((data) => {
            this.alertCtrl.create({
                message: data.message
            }).present();
          }, (error) => console.error(error));
      }
      catch(e) {
          console.error(e);
      }
    }


selectShoppingItem(ShoppingItem){

  
  if (localStorage.getItem('omeyaemail') == null) {
    this.promptAuthenticate()
} else {
   // this.alertLogin()
}
/*
if (localStorage.getItem('omeyaauthorized') == null) {
  this.promptAuthorize()
} else {
  this.alertLogin()
}*/

console.log("This is the report "+ShoppingItem.payload.val().report);
this.actionSheetCtrl.create({
  title: `${ShoppingItem.payload.val().report}`,
  buttons: [
    {  text: 'Edit',
    handler: () => {
//console.log("this is the key"+ShoppingItem.key)
if (JSON.parse(localStorage.getItem('omeyaemail')) == 'admin@omeyaestate.com') {
  this.navCtrl.push(EditShoppingItemPage,{shoppingItemId: ShoppingItem.key})
} else
if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security@omeyaestate.com') {
  this.navCtrl.push(EditShoppingItemPage,{shoppingItemId: ShoppingItem.key})
} else
if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security1@omeyaestate.com') {
  this.navCtrl.push(EditShoppingItemPage,{shoppingItemId: ShoppingItem.key})
} else
if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security2@omeyaestate.com') {
  this.navCtrl.push(EditShoppingItemPage,{shoppingItemId: ShoppingItem.key})
} else
if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security3@omeyaestate.com') {
  this.navCtrl.push(EditShoppingItemPage,{shoppingItemId: ShoppingItem.key})
} else
if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security4@omeyaestate.com') {
  this.navCtrl.push(EditShoppingItemPage,{shoppingItemId: ShoppingItem.key})
} else
if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security5@omeyaestate.com') {
  this.navCtrl.push(EditShoppingItemPage,{shoppingItemId: ShoppingItem.key})
} else
if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security6@omeyaestate.com') {
  this.navCtrl.push(EditShoppingItemPage,{shoppingItemId: ShoppingItem.key})
} else
if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security7@omeyaestate.com') {
  this.navCtrl.push(EditShoppingItemPage,{shoppingItemId: ShoppingItem.key})
} else
if (JSON.parse(localStorage.getItem('omeyaemail')) == 'l@l.com') {
  this.navCtrl.push(EditShoppingItemPage,{shoppingItemId: ShoppingItem.key})
} else {
  this.alertLogin()
}


    }
  },
    {  text: 'Delete',
    handler: () => {
      if (JSON.parse(localStorage.getItem('omeyaemail')) == 'admin@omeyaestate.com') {
        this.presentAlertConfirm(ShoppingItem);
      } else
      if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security@omeyaestate.com') {
        this.presentAlertConfirm(ShoppingItem);
      } else {
        this.alertLogin();
    }
    }
  },
    {  text: 'Cancel',
    handler: () => {

    }
  }
  
  ]
}).present();

}


hideLoading(){
  this.loader.dismiss();
}

presentLoading() {
  this.loader = this.loadingCtrl.create({
      content: "Issues loading, Please wait..."
      ,duration: 30000
  });
  this.loader.present();
 // this.hideloading();
}
    
itemTapped(item) {
  this.navCtrl.push(IssueDetailPage, {
      item: item
  });
}

async presentAlertConfirm(ShoppingItem) {
  const alert = await this.alertCtrl.create({
    title: 'Confirm!',
    message: 'Are you sure you want to <strong>delete</strong>!!!',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Yes',
        handler: () => {
          console.log('Confirm Okay');
          this.shoppingListRef$.remove(ShoppingItem.key);
          this.countObj();
        }
      }
    ]
  });

  await alert.present();
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingListPage');
    this.reports = "all";
    this.security = this.navParams.get('profile.authorized');
    console.log(this.navParams.get('profile.authorized'));
    this.presentLoading();
    this.getData();
  }
/*
  promptAuthorize(){
    const prompt = this.alertCtrl.create({
        title: 'Authorization Required',
        message: "The systems administrator must authorize your access first. Send a message to the admin as reminder",
        inputs: [
          {
            name: 'email',
            placeholder: 'Your Email',
            type: 'email'
          }, {
            name: 'message',
            placeholder: 'Message to Admin',
            type: 'text'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
              this.nav.setRoot(ShoppingListPage);
            }
          },
          {
            text: 'Message',
            handler: data => {
              console.log('Saved clicked'+ data.email+data.password);
              
              this.message(data.email, data.message)
            }
          }
        ]
      });
      prompt.present();
    }
    */

message(email, message){
  Promise.resolve(this.adminmessage.push
    ({       email: email,
      message:message,
        timestamp: this.timestamp,
        owner: (JSON.parse(localStorage.getItem('omeyaemail')))
    })
    )
}

  promptAuthenticate(){
    const prompt = this.alertCtrl.create({
        title: 'Login Required',
        message: "To add a report, you need to be registered and logged in. Use a valid email and password",
        inputs: [
          {
            name: 'email',
            placeholder: 'Email',
            type: 'email'
          }, {
            name: 'password',
            placeholder: 'Password',
            type: 'password'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
              this.nav.setRoot(ShoppingListPage);
            }
          },
          {
            text: 'Register',
            handler: data => {
              console.log('Saved clicked'+ data.email+data.password);
              
              this.signup(data.email, data.password)
            }
          },
          {
            text: 'Login',
            handler: data => {
              console.log('Login clicked');
              this.login(data.email, data.password)
            }
          },
          {
            text: 'Forgot',
            handler: data => {
              console.log('Login clicked');
              this.resetPassword(data.email)
            }
          }
        ]
      });
      prompt.present();
    }
  
  

  alertLogin(){
    let alert = this.alertCtrl.create({
      title: 'Access Denied!',
      subTitle: 'Only the administrator can edit/delete issues',
      buttons: ['OK']
  });
  alert.present();
  }


  ionViewDidEnter(){
    //this.loadData();
    this.hideLoading();
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
}       
  }

  signup(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        localStorage.setItem('omeyaemail', JSON.stringify(email)); 
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        this.ionViewDidEnter();
      });    
  }

  login(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        localStorage.setItem('omeyaemail', JSON.stringify(email)); 
        this.getToken();
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        this.ionViewDidEnter();
      });
  }

  resetPassword(email: string) {
    //var auth = firebase.auth();
    this.afAuth.auth.sendPasswordResetEmail(email)
      .then(() => {this.passwordResetAlert(email)})
      .catch((error) => {this.ionViewDidEnter()})

  }

  passwordResetAlert(email) {
    let alert = this.alertCtrl.create({
        title: 'Reset Email Sent!',
        subTitle: 'Please check your email '+email+' for a reset email, If you did not receive the email check the email spelling and try again',
        buttons: ['OK']
    });
    alert.present();
    this.activity = "Password reset for"+email;
    this.logActivity(this.activity);
    this.ionViewDidEnter();
}

userRegisteredAlert(email) {
  let alert = this.alertCtrl.create({
      title: 'User Registration Successful!',
      subTitle: 'Email '+email+' has been registered successfully, enjoy coffeetimes',
      buttons: ['OK']
  });
  alert.present();
  this.activity = "Password reset for"+email;
  this.logActivity(this.activity);
}


logActivity(activity){
  Promise.resolve(this.logs.push
      ({       activity: "rating submitted",
          timestamp: this.timestamp,
          owner: (JSON.parse(localStorage.getItem('email')))
      })
      )
 }

  logout() {
    this.afAuth
      .auth
      .signOut();
  }

  countObj(){
    this.http.get('https://omeya-6b5c8.firebaseio.com/reports.json?shallow=true')
    //.map(res => res.json())
    .subscribe(data => {
      this.notificationcount = Object.keys(data).length;
    //  console.log("The "+this.notificationcount);
  });
}

  navigateToAddShoppingPage()
  {
    this.navCtrl.push(AddShoppingPage);
  }



}

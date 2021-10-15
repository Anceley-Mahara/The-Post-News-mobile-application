import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireDatabase} from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IssueDetailPage } from '../issue-detail/issue-detail';
import { Firebase } from '@ionic-native/firebase';
/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
 // issues:AngularFireList<any>;
  loader:any;
  fbtk:any;
  reportcount:any;
  public allList:Array<any>;
  public loadedAllList:Array<any>;
  public allRef:firebase.database.Reference;
  Users:any;

  shoppingListMyToken: Observable<any[]>;
  shoppingListMyTokenRef$: any;
  shopListMyTokenAsync:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase,
    private http: HttpClient,database: AngularFireDatabase,private fbase: Firebase,
    public loadingCtrl: LoadingController) {

      this.shoppingListMyTokenRef$ = database.list('Users', ref => {
        return ref.orderByChild('user_id').equalTo(JSON.parse(localStorage.getItem('omeyaemail')))
      })
      this.shopListMyTokenAsync = this.shoppingListMyTokenRef$.snapshotChanges();
  this.Users = database.list('/Users');

  }

 
getData() {
  this.allRef = firebase.database().ref('/Users');
    this.allRef.orderByChild("status").equalTo("active").on('value', allList => {
  //  this.allRef.on('value', allList => {
        let props = [];
        allList.forEach( property => {
            props.push(property.val());
            return false;
        });
 
        this.allList = props;
        this.loadedAllList = props;
    });
    this.countObj();
    
}

changeSettings(setting){
  //console.log('Notification settings set to: '+setting);
  if (setting == true) {
    console.log('Notification settings set to: true');
    //this.removeToken();
} else {console.log('Notification settings set to: false');}
}

itemTapped(item) {
  this.navCtrl.push(IssueDetailPage, {
      item: item
  });
}

ionViewDidLoad() {
  console.log('ionViewDidLoad ComingUpPage');
  this.presentLoading();
  this.getData();
  this.countObj();
  this.hideLoading();
}

hideLoading(){
  this.loader.dismiss();
}

presentLoading() {
  this.loader = this.loadingCtrl.create({
      content: "Reports loading, Please wait..."
     // ,duration: 3000
  });
  this.loader.present();
 // this.hideloading();
}

countObj(){

  this.http.get('https://omeya-6b5c8.firebaseio.com/notification.json?shallow=true')
  //.map(res => res.json())
  .subscribe(data => {
    this.reportcount = Object.keys(data).length;
    console.log(this.reportcount);
     
});
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
            if (localStorage.getItem('fbtk') == null ) {
              Promise.resolve(this.Users.push
              ({       device_token,
                       user_id: (JSON.parse(localStorage.getItem('omeyaemail')))
              })
              )
              localStorage.setItem('fbtk', JSON.stringify(device_token)); 
              this.fbtk = localStorage.getItem('fbtk') 
            } else {}
      
          
     }

     removeToken(){
      localStorage.removeItem('fbtk'); 
     }

}

import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

//import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import firebase from 'firebase';
import { IssueDetailPage } from '../issue-detail/issue-detail';
import { ShoppingListPage } from '../shopping-list/shopping-list';
/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
issues:AngularFireList<any>;
loader:any;
submitdate:any;
reportcount:any;
countObj:any;
adminArray: any;
userArray: any;
managerArray: any;
securityArray: any;

resolved: any;

public allList:Array<any>;
public loadedAllList:Array<any>;
public allRef:firebase.database.Reference;

public profileList:Array<any>;
public loadedProfileList:Array<any>;
public profileRef:firebase.database.Reference;
reports:any;
logs:any;
timestamp:any;
userrole:any;
activity:any;
updateAccount:any;
accounts:any;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    db: AngularFireDatabase,
    //private http: HttpClient,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

    this.issues = db.list('/reports/');

    this.adminArray = ['Send Someone to investigate','Sent Someone to Fix']
    this.userArray = ['Submit Issue','Update']
    this.managerArray = ['Escalate','Close','Submit Report']
    this.securityArray = ['Approved','Authorized','Denied']

}

  



  updateFunction(submitdate, status, comment){

    this.submitdate = submitdate.toString();
         console.log(this.submitdate);
         console.log(status);
         console.log(comment);
    this.issues.update(this.submitdate, { status: status });
  /*  this.issues.list('/reports', ref => ref.orderByChild('reportId').equalTo(item.key)).snapshotChanges()
    .subscribe(actions => {
        actions.forEach(action => {
          // here you get the key
          console.log(action.key);
          this.issues.update(action.key, { status: status });
          */

         /* this.issues.set(key, {
                        status: status,
                        comment: comment
        });*/
    
}

getData() {
  this.allRef = firebase.database().ref('/reports/');
    this.allRef.orderByChild("status").equalTo("User Submitted").on('value', allList => {
  //  this.allRef.on('value', allList => {
        let props = [];
        allList.forEach( property => {
            props.push(property.val());
             console.log(props); 
             return false;
          
        });
 
        this.allList = props.slice().reverse();
        this.loadedAllList = props;
    });

 this.loadarray();
   // this.countObj();
    
}

onInput(select) {
  if (window.localStorage.getItem('omeyaemail') == "security@omeya.com.na")
  {

  } else
  if (window.localStorage.getItem('omeyaemail') == "security1@omeya.com.na"){

  } else
  {}
}

itemTapped(item) {
  this.navCtrl.push(IssueDetailPage, {
      item: item
  });
}

ionViewDidLoad() {
  console.log('ionViewDidLoad ComingUpPage');
 // this.presentLoading();
  

  if (window.localStorage.getItem('omeyasecurity') == 'guest' ) 
  { 
    this.presentUnauthorized();
  }
  else 
  {  
    if (window.localStorage.getItem('omeyasecurity') == '' ) 
  { 
    this.presentUnauthorized();
  }
  else 
  {
    if (window.localStorage.getItem('omeyasecurity') == 'admin' ) 
    {
      this.getData();
    } else
    {
      
    if (window.localStorage.getItem('omeyasecurity') == 'security' ) 
    {
      this.getData();
    } else
    {
      if (window.localStorage.getItem('omeyasecurity') == 'Management')
      {
        this.getData();
      } else
      {
        this.presentUnauthorized();
      
    
  
   //return this.adminArray;
  
  //this.loadarray();  
      }
    }
  }
}
}

  
 // this.countObj();


//  this.hideLoading();
}

loadarray(){
 
  //console.log(this.profileRef);
    if (window.localStorage.getItem('omeyasecurity') == 'guest' ) 
    { 
      this.presentUnauthorized();
    }
    else 
    { if (window.localStorage.getItem('omeyasecurity') == 'admin' ) 
    {
      this.resolved = this.adminArray;
    } else
    {
      if (window.localStorage.getItem('omeyasecurity') == 'Management')
      {
        this.resolved = this.managerArray;
      } else
      {
        this.presentUnauthorized();
      }
    }
     //return this.adminArray;
    
    }
  }

hideLoading(){
  this.loader.dismiss();
}

presentUnauthorized(){

    let alert = this.alertCtrl.create({
        title: 'Access denied!',
        subTitle: 'You do not have the correct security clearance to update issue status',
        buttons: [{
          text: 'OK',
        handler: data => {
          console.log('Cancel clicked');
          this.navCtrl.setRoot(ShoppingListPage);
        }
        }]
    });
    alert.present();
 
}


presentLoading() {
  this.loader = this.loadingCtrl.create({
      content: "Reports loading, Please wait..."
     // ,duration: 3000
  });
  this.loader.present();
 // this.hideloading();
}



}

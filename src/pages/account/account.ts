import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
//import { Camera, CameraOptions } from '@ionic-native/camera';
//import { ImagePicker } from '@ionic-native/image-picker';
//import { Crop } from '@ionic-native/crop';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
 
 // username:any;
  firstname:any;
  lastname:any;
  erf:any;
  authorized:any;
  usertype:any;
  public profileList:Array<any>;
  public loadedProfileList:Array<any>;
  public profileRef:firebase.database.Reference;
reports:any;
logs:any;
timestamp:any;
activity:any;
updateAccount:any;
accounts:any;
loader:any;

  constructor(public alertCtrl: AlertController, public nav: NavController,
    db: AngularFireDatabase, public params: NavParams, public loadingCtrl: LoadingController
  //  public alertCtrl: AlertController,              
   // public imagePicker: ImagePicker,
  //  public camera: Camera,    
 //   public cropService: Crop
  ) {

      this.accounts = db.list('/accounts');
      this.logs = db.list('/log');
      this.updateAccount = db.list('/accounts').query.orderByChild('email').equalTo(JSON.parse(localStorage.getItem('omeyaemail')));
      this.timestamp = firebase.database.ServerValue.TIMESTAMP;
   //   this.mypicref=firebase.storage().ref('/images')
     // this.storageReference = firebase.storage().ref('/images')
  
      this.updateAccount.id = this.params.get('key');
//      this.updateAccount.username = this.params.get('username');
//      this.updateAccount.firstname = this.params.get('firstname');
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComingUpPage');
    this.presentLoading();
    if (window.localStorage.getItem('omeyaemail') == null){
      this.hideLoading();
      this.nav.setRoot(LoginPage);
    } else
    this.getData();
    
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

  getData(){
    this.profileRef = firebase.database().ref('/accounts');
    //console.log(JSON.parse(localStorage.getItem('email')))
    console.log(JSON.stringify(this.updateAccount));
    this.profileRef
    .orderByChild('owner')
    .equalTo(JSON.parse(localStorage.getItem('omeyaemail')))
    .on('value', profileList => {
      let profile = [];
      profileList.forEach( profiles => {
        profile.push(profiles.val());
        return false;
      });
  
      this.profileList = profile;
      this.loadedProfileList = profile;
      console.log(JSON.parse(localStorage.getItem('email')))
      console.log(JSON.stringify(this.profileList));
      this.hideLoading();
  });
  }

  updateProfile(username, firstname,lastname,erf){
    Promise.resolve(this.accounts.push
        ({       username: username,
            firstname: firstname,
            lastname: lastname,
            status: "Unauthorized",
            erf: erf,
            timestamp: this.timestamp,
            email: (JSON.parse(localStorage.getItem('email')))
        })
        )
      //  this.issuePostedAlert(type);
   }


 /* ngAfterViewInit() {
 //   this.getUsername();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }
*/
  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
 /* changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        this.userData.setUsername(data.username);
        this.getUsername();
      }
    });

    alert.present();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.userData.logout();
    this.nav.setRoot('LoginPage');
  }

  support() {
    this.nav.push('SupportPage');
  }*/
}

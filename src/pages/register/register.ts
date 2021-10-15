import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase
    } from 'angularfire2/database';
import firebase from 'firebase';
//import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ShoppingListPage } from '../shopping-list/shopping-list';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  timestamp:any;
  logs:any;
  accounts:any;
  activity:any;
  //acc:any;
  
    constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public alertCtrl: AlertController,
      public af:AngularFireDatabase, public loadingCtrl: LoadingController,
      public afAuth: AngularFireAuth) {
  
        this.timestamp = firebase.database.ServerValue.TIMESTAMP;
        this.logs = af.list('/activitylog');
        this.accounts = af.list('/accounts');
       // this.promo = af.list('/promo');
    }
  
    ionViewDidEnter(){
      //this.loadData();
  
    }
  
    signin(){
      this.navCtrl.setRoot(LoginPage);
    }
  
   
    reg(firstname, lastname, email, password, phone, address, role){
  
  this.signup(email,password, firstname, lastname, phone, address, role);
  
  
    }
  
    alertLogin(){
        
    }
  
    signup(email: string, password: string, firstname, lastname, phone, address, role) {
      let loading = this.loadingCtrl.create({
        content: 'Registration in Progress, please wait...'
      });
    
      loading.present();
  
      this.afAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Success!', value);
          localStorage.setItem('thepostemail', JSON.stringify(email)); 
          loading.dismiss();
          this.acc(email,firstname, lastname, phone, address, role);
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
          loading.dismiss();
          this.errorAlert(email, err.message);
          //this.ionViewDidEnter();
         // loading.dismiss();
        });    
    }
  
    login(email: string, password: string) {
      this.afAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Nice, it worked!');
          localStorage.setItem('thepostemail', JSON.stringify(email)); 
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
          this.errorAlert(email, err.message);
          
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
  
  
  acc(email, firstname, lastname, phone, address, role){
    let loading = this.loadingCtrl.create({
      content: 'Updating your profile, please wait...'
    });
  
    loading.present();  
    
    Promise.resolve(this.accounts.push
        ({ firstname: firstname,
          lastname: lastname,
          email:email,
          phone:phone,
          address:address,
          role: role,
          access: "denied",
          authorized: "false",
          usertype: role,
                    timestamp: this.timestamp,
            owner: (JSON.parse(localStorage.getItem('thepostemail')))
        })
        
        )
        loading.dismiss();
   }
  
  userRegisteredAlert(email,firstname, lastname, phone, address, role) 
  
  {
  
  this.acc(lastname, email,firstname, phone, address, role);
    let alert = this.alertCtrl.create({
        title: 'User Registration Successful!',
        subTitle: 'Email '+email+' has been registered successfully.',
        buttons: [{text:'OK', 
        handler: data => {
          console.log(data);
          
                 this.navCtrl.setRoot(ShoppingListPage);
        }
        }],
        
    });
    alert.present();
    this.activity = "Password reset for"+email;
    
    this.logActivity(this.activity);
    
    
  }
    
  logActivity(activity){
    Promise.resolve(this.logs.push
        ({       activity: activity,
                    timestamp: this.timestamp,
            owner: (JSON.parse(localStorage.getItem('email')))
        })
        )
   }
  
   errorAlert(email, err) {
    let alert = this.alertCtrl.create({
        title: 'Error During Login!',
        subTitle: 'Please check your email '+email+' the following error occured "'+err+'"',
        buttons: ['OK']
    });
    alert.present();
   // this.activity = "Password reset for"+email;
    //this.logActivity(this.activity);
   // this.ionViewDidEnter();

}

    logout() {
      this.afAuth
        .auth
        .signOut();
    }
  
}

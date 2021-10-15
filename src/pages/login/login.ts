import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController, ToastController } from 'ionic-angular';
import { RegisterPage} from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { ShoppingListPage} from '../shopping-list/shopping-list';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  account: any;
  accountItem: Observable<any>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public forgotCtrl:AlertController,
  public afAuth: AngularFireAuth,public database: AngularFireDatabase,
public toastCtrl: ToastController,
public alertCtrl: AlertController) {
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    window.localStorage.clear();
  }


  onSignup(){
    this.navCtrl.push(RegisterPage)
  }

  promptAuthenticate(){
    const prompt = this.alertCtrl.create({
        title: 'Reset Password',
        message: "Enter your email address to receive a link to reset your password",
        inputs: [
          {
            name: 'email',
            placeholder: 'Email',
            type: 'email'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            //  this.nav.setRoot(TabsPage);
            }
          },
          {
            text: 'Forgot',
            handler: data => {
              console.log('Login clicked');
              this.afAuth.auth.sendPasswordResetEmail(data.email);
            let toast = this.toastCtrl.create({
              message: 'Email was sent successfully',
              duration: 3000,
              position: 'middle',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
            }
          }
        ]
      });
      prompt.present();
    }
  
  forgotPass(email) {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            this.afAuth.auth.sendPasswordResetEmail(email);
            let toast = this.toastCtrl.create({
              message: 'Email was sent successfully, Check your email for a reset password link',
              duration: 3000,
              position: 'middle',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

  onLogin(email: string, password: string) {
    if (localStorage.getItem('thepostemail') !== null) {
      let alert = this.alertCtrl.create({
        title: 'Already logged in',
        message: 'You are currently logged in as '+localStorage.getItem('thepostemail'),
        buttons: [
            {
                text: 'OK',
                handler: () => {

                }
            }
        ]
    });
    alert.present();
    } 
    else {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        localStorage.setItem('thepostemail', JSON.stringify(email)); 
           let toast = this.toastCtrl.create({
                  message: 'login successful',
                  duration: 3000,
                  position: 'middle',
                  cssClass: 'dark-trans',
                  closeButtonText: 'OK',
                  showCloseButton: true
                });
                toast.present();
                this.navCtrl.setRoot(ShoppingListPage);
               // this.loadLocalStorage();
            
      })
      .catch(err => {

        let loginerror = this.forgotCtrl.create({
          title: 'An Error Occured?',
          message: "Please check your username and password, or choose forgot password ErrorCode: "+ err,
          buttons: [
            {
              text: 'Ok',
              handler: data => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        loginerror.present();
      

        console.log('Something went wrong:',err.message);
      //  this.ionViewDidEnter();
      });
    }
  }



  loadLocalStorage(){
    this.account = JSON.stringify(this.database.list('accounts'
, ref => { return ref.orderByChild('email').equalTo('l@l.com')  }));
//Returns specific content
//console.log('This is the account object '+JSON.parse(this.account));
    this.navCtrl.setRoot(LoginPage);
  }

}

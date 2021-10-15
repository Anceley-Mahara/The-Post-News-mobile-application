import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database'
/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {
  shoppingItemRef$: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    private database: AngularFireDatabase,
    public navParams: NavParams) {
    this.shoppingItemRef$ = this.database.list('/support');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupportPage');
  }

  submit(supportMessage){
    
    this.shoppingItemRef$.push({
      supportMessage : supportMessage,
    user: JSON.parse(localStorage.getItem('omeyaemail'))
  })
  // this.shoppingItem = {} as ShoppingItem;

   //Nav back to shopping list page
  // this.navCtrl.pop();
  this.issuePostedAlert(supportMessage);
  }

  issuePostedAlert(type) {
    let alert = this.alertCtrl.create({
        title: 'Support Message Submitted Successfully!',
        subTitle: 'Your message: '+type+' has been saved. The security admin will contact you for details shortly',
        buttons: ['OK']
    });
    alert.present();
   
}

}

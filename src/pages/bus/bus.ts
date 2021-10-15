import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase
} from 'angularfire2/database';
import firebase from 'firebase';
/**
 * Generated class for the BusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-bus',
  templateUrl: 'bus.html',
})
export class BusPage {
bus:any;
timestamp:any;
logs:any;
accounts:any;
activity:any;

  constructor(public navCtrl: NavController, public af:AngularFireDatabase,public navParams: NavParams, public alertCtrl: AlertController) {
    this.timestamp = firebase.database.ServerValue.TIMESTAMP;
    this.logs = af.list('/activitylog');
    this.bus = af.list('/bus');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusPage');
  }

  bookseat(){
    const prompt = this.alertCtrl.create({
        title: 'Bus Seat Booking',
        message: "You are about to book this seat",
        inputs: [
          {
            name: 'passenger',
            placeholder: 'Passenger Name',
            type: 'text'
          }, {
            name: 'destination',
            placeholder: 'Destination',
            type: 'text'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
              //this.nav.setRoot(TabsPage);
            }
          },
          {
            text: 'Confirm',
            handler: data => {
              console.log('Saved clicked'+ data.email+data.password);
              
              this.book(data.passenger, data.destination)
            }
          }
        ]
      });
      prompt.present();
    }

book(passenger, destination){
  Promise.resolve(this.bus.push
    ({       passenger: passenger,
      destination:destination,
                timestamp: this.timestamp,
        owner: (JSON.parse(localStorage.getItem('email')))
    })
    )
}


logActivity(activity){
  Promise.resolve(this.logs.push
      ({       activity: activity,
                  timestamp: this.timestamp,
          owner: (JSON.parse(localStorage.getItem('email')))
      })
      )
 }
}

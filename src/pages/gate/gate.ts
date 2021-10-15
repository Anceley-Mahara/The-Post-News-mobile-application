import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
//import { Observable } from 'rxjs';
/**
 * Generated class for the GatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-gate',
  templateUrl: 'gate.html',
})
export class GatePage {
  gate:any;
  public gateRef:firebase.database.Reference;
  public gateList:Array<any>;
  public loadedGateList:Array<any>;

  gateLoad: any;
  timestamp:any;
  today
  public event = {
   month: 'today',
   timeStarts: '08:00',
   timeEnds: '2018-12-31'
 }

  constructor(public navCtrl: NavController, public navParams: NavParams,db: AngularFireDatabase,
    public alertCtrl: AlertController) {
    this.today = new Date().toISOString();
    this.gate = db.list('/gate/');
    this.timestamp = firebase.database.ServerValue.TIMESTAMP;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GatePage');
  }

  reserve(firstname, surname, contactnumber, passengers,vehicleregistration,vehiclemake,vehiclecolor, timestarts, timeEnds){
    Promise.resolve(this.gate.push
        ({       activity: "gate reserved",
        firstname:firstname,
        surname:surname,
        contactnumber:contactnumber,
        passengers:passengers,
        vehicleregistration:vehicleregistration,
        vehiclemake:vehiclemake,
        vehiclecolor:vehiclecolor,
        timestarts:timestarts,
        timeEnds:timeEnds,
            timestamp: this.timestamp,
            owner: (JSON.parse(localStorage.getItem('omeyaemail')))
        })
        )
        this.issuePostedAlert(firstname,surname,timestarts,timeEnds)
   }

   issuePostedAlert(firstname,surname,timestarts,timeEnds) {
    let alert = this.alertCtrl.create({
        title: 'Gate Pass Submitted Successfully!',
        subTitle: 'You have submitted a gatepass for '+firstname +' '+surname+' for the period '+timestarts+' to '+timeEnds,
        buttons: ['OK']
    });
    alert.present();
  //  this.activity = "Issue "+type+" posted";
  //  this.logActivity(this.activity);
}

gateRes(){
  //this.gateLoad = firebase.database().ref('/gate');
  if (JSON.parse(localStorage.getItem('omeyaemail')) == 'admin@omeyaestate.com') {
    this.gateRef = firebase.database().ref('/gate');
    //console.log(JSON.parse(localStorage.getItem('email')))
  //     console.log(JSON.stringify(this.updateAccount));
    this.gateRef
    .orderByChild('timestarts')
    //.equalTo(JSON.parse(localStorage.getItem('omeyaemail')))
    .on('value', gateList => {
      let profile = [];
      gateList.forEach( profiles => {
        profile.push(profiles.val());
        return false;
      });
  
      this.gateList = profile;
      this.loadedGateList = profile;
  })
  
  } else
  if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security@omeyaestate.com') {
    this.gateRef = firebase.database().ref('/gate');
    //console.log(JSON.parse(localStorage.getItem('email')))
  //     console.log(JSON.stringify(this.updateAccount));
    this.gateRef
    .orderByChild('timestarts')
    //.equalTo(JSON.parse(localStorage.getItem('omeyaemail')))
    .on('value', gateList => {
      let profile = [];
      gateList.forEach( profiles => {
        profile.push(profiles.val());
        return false;
      });
  
      this.gateList = profile;
      this.loadedGateList = profile;
  })
  } else
  if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security1@omeyaestate.com') {
    this.gateRef = firebase.database().ref('/gate');
    //console.log(JSON.parse(localStorage.getItem('email')))
  //     console.log(JSON.stringify(this.updateAccount));
    this.gateRef
    .orderByChild('timestarts')
    //.equalTo(JSON.parse(localStorage.getItem('omeyaemail')))
    .on('value', gateList => {
      let profile = [];
      gateList.forEach( profiles => {
        profile.push(profiles.val());
        return false;
      });
  
      this.gateList = profile;
      this.loadedGateList = profile;
  })
  } else
  if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security2@omeyaestate.com') {
    this.gateRef = firebase.database().ref('/gate');
    //console.log(JSON.parse(localStorage.getItem('email')))
  //     console.log(JSON.stringify(this.updateAccount));
    this.gateRef
    .orderByChild('timestarts')
    //.equalTo(JSON.parse(localStorage.getItem('omeyaemail')))
    .on('value', gateList => {
      let profile = [];
      gateList.forEach( profiles => {
        profile.push(profiles.val());
        return false;
      });
  
      this.gateList = profile;
      this.loadedGateList = profile;
  })
  } else
  if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security3@omeyaestate.com') {
    this.gateRef = firebase.database().ref('/gate');
    //console.log(JSON.parse(localStorage.getItem('email')))
  //     console.log(JSON.stringify(this.updateAccount));
    this.gateRef
    .orderByChild('timestarts')
    //.equalTo(JSON.parse(localStorage.getItem('omeyaemail')))
    .on('value', gateList => {
      let profile = [];
      gateList.forEach( profiles => {
        profile.push(profiles.val());
        return false;
      });
  
      this.gateList = profile;
      this.loadedGateList = profile;
  })
  } else
  if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security4@omeyaestate.com') {
    this.gateRef = firebase.database().ref('/gate');
    //console.log(JSON.parse(localStorage.getItem('email')))
  //     console.log(JSON.stringify(this.updateAccount));
    this.gateRef
    .orderByChild('timestarts')
    //.equalTo(JSON.parse(localStorage.getItem('omeyaemail')))
    .on('value', gateList => {
      let profile = [];
      gateList.forEach( profiles => {
        profile.push(profiles.val());
        return false;
      });
  
      this.gateList = profile;
      this.loadedGateList = profile;
  })
  } else
  if (JSON.parse(localStorage.getItem('omeyaemail')) == 'l@l.com') {
    this.gateRef = firebase.database().ref('/gate');
    //console.log(JSON.parse(localStorage.getItem('email')))
  //     console.log(JSON.stringify(this.updateAccount));
    this.gateRef
    .orderByChild('timestarts')
    //.equalTo(JSON.parse(localStorage.getItem('omeyaemail')))
    .on('value', gateList => {
      let profile = [];
      gateList.forEach( profiles => {
        profile.push(profiles.val());
        return false;
      });
  
      this.gateList = profile;
      this.loadedGateList = profile;
  })
  } else {
    this.alertLogin()
  }

}

alertLogin(){
  let alert = this.alertCtrl.create({
    title: 'Access Denied!',
    subTitle: 'Only the administrator can view gate reservations',
    buttons: ['OK']
});
alert.present();
}

}

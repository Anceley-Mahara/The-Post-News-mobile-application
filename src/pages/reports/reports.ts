import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { AccessDeniedPage } from '../access-denied/access-denied';
import { LatestNewsPage } from '../latest-news/latest-news';

/**
 * Generated class for the ReportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {
    public propertyList:Array<any>;
    public loadedPropertyList:Array<any>;
    public propertyRef:firebase.database.Reference;


reports:any;
logs:any;
timestamp:any;
activity:any;
lengthLeft:any;
storageReference:any;
captureDataUrl: string;
captureDataUrl2: string;
captureDataUrl3: string;
captureDataUrl4: string;
photos : Array<string>;
public cameraImage : string;
public cameraImage2 : string;
public cameraImage3 : string;
public cameraImage4 : string;
picurl:any;
picurl2:any;
picurl3:any;
picurl4:any;

picdata:any;
mypicref:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,  
    db: AngularFireDatabase,
  public alertCtrl: AlertController,              
  public imagePicker: ImagePicker,
  public camera: Camera,    
  public cropService: Crop,
  public af:AngularFireDatabase,
  public afAuth: AngularFireAuth) {
    
    this.reports = db.list('/news');
    this.logs = db.list('/log');
    this.timestamp = firebase.database.ServerValue.TIMESTAMP;
    this.mypicref=firebase.storage().ref('/images')
    this.storageReference = firebase.storage().ref('/images')

    this.propertyRef = firebase.database().ref('/competitions');
   // this.propertyRef.orderByChild("type").equalTo("APP").on('value', propertyList => {
    this.propertyRef.on('value', propertyList => {
        let props = [];
        propertyList.forEach( property => {
            props.push(property.val());
            return false;
        });
 
        this.propertyList = props;
        this.loadedPropertyList = props;
    });
  }

 /* ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
  }
*/
  selectImage() : Promise<any>
  {
      return new Promise(resolve =>
      {
          let cameraOptions : CameraOptions = {
              sourceType         : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
              destinationType    : this.camera.DestinationType.DATA_URL,
              encodingType       : this.camera.EncodingType.JPEG,
              quality            : 100,
              targetWidth        : 320,
              targetHeight       : 240,
              correctOrientation : true
          };

          this.camera.getPicture(cameraOptions)
              .then((data) =>
              {
                  this.captureDataUrl 	= "data:image/jpeg;base64," + data;
                  resolve(this.captureDataUrl);
            //      this.submitimage(this.captureDataUrl);
              
        
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);
    //const filename1 = Math.floor(Date.now() / 1001);
 
    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);
   // const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
 
    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL)
        .then((snapshot)=> {
            snapshot.ref.getDownloadURL().then((url) => {
                this.picurl = url;
            })
            // Do something here when the data is succesfully uploaded!
       });
        });


      });
  }

  capture()  : Promise<any>
   {
    return new Promise(resolve =>
        {
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
      resolve(this.captureDataUrl);
      //this.picurl = this.captureDataUrl;
      //this.submitimage(this.captureDataUrl);
      

      let storageRef = firebase.storage().ref();
      // Create a timestamp as filename
      const filename = Math.floor(Date.now() / 1000);
      //const filename1 = Math.floor(Date.now() / 1001);
   
      // Create a reference to 'images/todays-date.jpg'
      const imageRef = storageRef.child(`images/${filename}.jpg`);
     // const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
   
      imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL)
          .then((snapshot)=> {
            snapshot.ref.getDownloadURL().then((url) => {
                this.picurl = url;
                // do something with url here
            });
              // Do something here when the data is succesfully uploaded!
         });


     }, (err) => {
      // Handle error
    });

});
  }
  

  selectImage2() : Promise<any>
  {
      return new Promise(resolve =>
      {
          let cameraOptions : CameraOptions = {
              sourceType         : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
              destinationType    : this.camera.DestinationType.DATA_URL,
              encodingType       : this.camera.EncodingType.JPEG,
              quality            : 100,
              targetWidth        : 320,
              targetHeight       : 240,
              correctOrientation : true
          };

          this.camera.getPicture(cameraOptions)
              .then((data) =>
              {
                  this.captureDataUrl2 	= "data:image/jpeg;base64," + data;
                  resolve(this.captureDataUrl2);
            //      this.submitimage(this.captureDataUrl);
              
        
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    //const filename = Math.floor(Date.now() / 1000);
    const filename1 = Math.floor(Date.now() / 1000);
 
    // Create a reference to 'images/todays-date.jpg'
    //const imageRef = storageRef.child(`images/${filename}.jpg`);
    const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
 
    imageRef1.putString(this.captureDataUrl2, firebase.storage.StringFormat.DATA_URL)
        .then((snapshot)=> {
             snapshot.ref.getDownloadURL().then((url) =>{
                 this.picurl2 = url
             }) ;
            // Do something here when the data is succesfully uploaded!
       });
        });


      });
  }

  capture2()  : Promise<any>
   {
    return new Promise(resolve =>
        {
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl2 = 'data:image/jpeg;base64,' + imageData;
      resolve(this.captureDataUrl2);
      //this.picurl = this.captureDataUrl;
      //this.submitimage(this.captureDataUrl);
      

      let storageRef = firebase.storage().ref();
      // Create a timestamp as filename
      //const filename = Math.floor(Date.now() / 1000);
      const filename2 = Math.floor(Date.now() / 1000);
   
      // Create a reference to 'images/todays-date.jpg'
      //const imageRef = storageRef.child(`images/${filename1}.jpg`);
      const imageRef2 = storageRef.child(`images/${filename2}.jpg`);
   
      imageRef2.putString(this.captureDataUrl2, firebase.storage.StringFormat.DATA_URL)
          .then((snapshot)=> {
              snapshot.ref.getDownloadURL().then((url) => {
                this.picurl2 = url;
              }) ;
              // Do something here when the data is succesfully uploaded!
         });


     }, (err) => {
      // Handle error
    });

});
  }
  
  selectImage3() : Promise<any>
  {
      return new Promise(resolve =>
      {
          let cameraOptions : CameraOptions = {
              sourceType         : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
              destinationType    : this.camera.DestinationType.DATA_URL,
              encodingType       : this.camera.EncodingType.JPEG,
              quality            : 100,
              targetWidth        : 320,
              targetHeight       : 240,
              correctOrientation : true
          };

          this.camera.getPicture(cameraOptions)
              .then((data) =>
              {
                  this.captureDataUrl3 	= "data:image/jpeg;base64," + data;
                  resolve(this.captureDataUrl3);
            //      this.submitimage(this.captureDataUrl);
              
        
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename3 = Math.floor(Date.now() / 1000);
    //const filename1 = Math.floor(Date.now() / 1001);
 
    // Create a reference to 'images/todays-date.jpg'
    const imageRef3 = storageRef.child(`images/${filename3}.jpg`);
   // const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
 
    imageRef3.putString(this.captureDataUrl3, firebase.storage.StringFormat.DATA_URL)
        .then((snapshot)=> {
            snapshot.ref.getDownloadURL().then((url) => {
                this.picurl3 = url;
              }) ;
            // Do something here when the data is succesfully uploaded!
       });
        });


      });
  }

  capture3()  : Promise<any>
   {
    return new Promise(resolve =>
        {
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl3 = 'data:image/jpeg;base64,' + imageData;
      resolve(this.captureDataUrl3);
      //this.picurl = this.captureDataUrl;
      //this.submitimage(this.captureDataUrl);
      

      let storageRef = firebase.storage().ref();
      // Create a timestamp as filename
      const filename3 = Math.floor(Date.now() / 1000);
      //const filename1 = Math.floor(Date.now() / 1001);
   
      // Create a reference to 'images/todays-date.jpg'
      const imageRef3 = storageRef.child(`images/${filename3}.jpg`);
     // const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
   
      imageRef3.putString(this.captureDataUrl3, firebase.storage.StringFormat.DATA_URL)
          .then((snapshot)=> {
            snapshot.ref.getDownloadURL().then((url) => {
                this.picurl3 = url;
              }) ;
              // Do something here when the data is succesfully uploaded!
         });


     }, (err) => {
      // Handle error
    });

});
  }

  
  selectImage4() : Promise<any>
  {
      return new Promise(resolve =>
      {
          let cameraOptions : CameraOptions = {
              sourceType         : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
              destinationType    : this.camera.DestinationType.DATA_URL,
              encodingType       : this.camera.EncodingType.JPEG,
              quality            : 100,
              targetWidth        : 320,
              targetHeight       : 240,
              correctOrientation : true
          };

          this.camera.getPicture(cameraOptions)
              .then((data) =>
              {
                  this.captureDataUrl4 	= "data:image/jpeg;base64," + data;
                  resolve(this.captureDataUrl4);
            //      this.submitimage(this.captureDataUrl);
              
        
    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename4 = Math.floor(Date.now() / 1000);
    //const filename1 = Math.floor(Date.now() / 1001);
 
    // Create a reference to 'images/todays-date.jpg'
    const imageRef4 = storageRef.child(`images/${filename4}.jpg`);
   // const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
 
    imageRef4.putString(this.captureDataUrl4, firebase.storage.StringFormat.DATA_URL)
        .then((snapshot)=> {
            snapshot.ref.getDownloadURL().then((url) => {
                this.picurl4 = url;
              }) ;
            // Do something here when the data is succesfully uploaded!
       });
        });


      });
  }

  capture4()  : Promise<any>
   {
    return new Promise(resolve =>
        {
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl4 = 'data:image/jpeg;base64,' + imageData;
      resolve(this.captureDataUrl4);
      //this.picurl = this.captureDataUrl;
      //this.submitimage(this.captureDataUrl);
      

      let storageRef = firebase.storage().ref();
      // Create a timestamp as filename
      const filename4 = Math.floor(Date.now() / 1000);
      //const filename1 = Math.floor(Date.now() / 1001);
   
      // Create a reference to 'images/todays-date.jpg'
      const imageRef4 = storageRef.child(`images/${filename4}.jpg`);
     // const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
   
      imageRef4.putString(this.captureDataUrl4, firebase.storage.StringFormat.DATA_URL)
          .then((snapshot)=> {
            snapshot.ref.getDownloadURL().then((url) => {
                this.picurl4 = url;
              }) ;
              // Do something here when the data is succesfully uploaded!
         });


     }, (err) => {
      // Handle error
    });

});
  }


/*  submitimage(captureDataUrl) {
     



    if (this.cameraImage == null) 
    { this.cameraImage = 'www.coffeetimes.marketing' }
    else
    this.cameraImage

    if (this.cameraImage1 == null) 
    { this.cameraImage1 = 'www.coffeetimes.marketing' }
    else
    this.cameraImage1

    let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);
    //const filename1 = Math.floor(Date.now() / 1001);
 
    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);
   // const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
 
    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL)
        .then((snapshot)=> {
            this.picurl = snapshot.downloadURL;
            // Do something here when the data is succesfully uploaded!
       });

     /*  imageRef1.putString(this.cameraImage1, firebase.storage.StringFormat.DATA_URL)
       .then((snapshot)=> {
           this.picurl1 = snapshot.downloadURL;
           // Do something here when the data is succesfully uploaded!
      });

       

*/

submitreport(headline, exerpt,story, label )
{
   if (this.picurl == null) 
    { this.picurl = 'https://firebasestorage.googleapis.com/v0/b/taxi-63ca5.appspot.com/o/images%2FHiResIcon.png?alt=media&token=74e03caf-9e39-4b21-ad4c-16adc56ce6ec' }
    else
    this.picurl

    if (this.picurl2 == null) 
    { this.picurl2 = 'https://firebasestorage.googleapis.com/v0/b/taxi-63ca5.appspot.com/o/images%2FHiResIcon.png?alt=media&token=74e03caf-9e39-4b21-ad4c-16adc56ce6ec' }
    else
    this.picurl2

    if (this.picurl3 == null) 
    { this.picurl3 = 'https://firebasestorage.googleapis.com/v0/b/taxi-63ca5.appspot.com/o/images%2FHiResIcon.png?alt=media&token=74e03caf-9e39-4b21-ad4c-16adc56ce6ec' }
    else
    this.picurl3

    if (this.picurl4 == null) 
    { this.picurl4 = 'https://firebasestorage.googleapis.com/v0/b/taxi-63ca5.appspot.com/o/images%2FHiResIcon.png?alt=media&token=74e03caf-9e39-4b21-ad4c-16adc56ce6ec' }
    else
    this.picurl4

      this.reports.push({
     //   owner: (JSON.parse(window.localStorage.getItem('ictemail'))),
        issuedate: this.timestamp,
        locale: label,
        story: story,
        leadimg: this.picurl,
        captureDataUrl2: this.picurl2,
        captureDataUrl3: this.picurl3,
        captureDataUrl4: this.picurl4,
headline: headline,
exerpt: exerpt,
user: (JSON.parse(window.localStorage.getItem('thepostemail'))),
        authorized: "no"
      }).then( newReport => {
          this.issuePostedAlert(label);
  //          this.navCtrl.pop();
      }, error => {
          console.log(error);
      });
    

    //this.showSuccesfulUploadAlert();
    //this.presentModal();

    //let x = 500;
   // this.presentAlert()
}


 /* submitreport(type, report){
    Promise.resolve(this.reports.push
        ({       type: type,
            report: report,
            status: "User Submitted",
            timestamp: this.timestamp,
            owner: (JSON.parse(localStorage.getItem('email')))
        })
        )
        this.issuePostedAlert(type);
   }
*/
   issuePostedAlert(type) {
    let alert = this.alertCtrl.create({
        title: 'Issue Posted Successfully!',
        subTitle: 'You have submitted a '+type+' issue successfully. The security admin will contact you for details shortly',
        buttons: ['OK']
    });
    alert.present();
    this.activity = "Issue "+type+" posted";
    this.logActivity(this.activity);
}

logActivity(activity){
  Promise.resolve(this.logs.push
      ({       activity: "rating submitted",
          timestamp: this.timestamp,
          owner: (JSON.parse(localStorage.getItem('thepostemail')))
      })
      )
 }

 checkLength(question){
  this.lengthLeft =  350 - question.length;
  //console.log(question.length)
}

ionViewDidEnter(){
  //this.loadData();
if (localStorage.getItem('thepostemail') == null) {
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
}       if (JSON.parse(localStorage.getItem('thepostemail')) == 'editor@thepost.com') {
//this.presentAlertConfirm(ShoppingItem);
//this.getData();
} else
if (JSON.parse(localStorage.getItem('thepostemail')) == 'admin@thepost.com') {
//this.presentAlertConfirm(ShoppingItem);
//this.getData();
} else {
this.alertLogin();
}     
}

navigateToAddShoppingPage()
{
 // this.navCtrl.push(AdminAddPage);
}

alertLogin(){
  let alert = this.alertCtrl.create({
    title: 'Access Denied!',
    subTitle: 'Only The Post Editors can post new stories',
    buttons: [    {  text: 'OK',
    handler: () => {
     // this.shopListOpenAsync = "";
  this.navCtrl.setRoot(LatestNewsPage)
    }
  }]
});

alert.present();

}



    promptAuthenticate(){
        const prompt = this.alertCtrl.create({
            title: 'Login Required',
            message: "To make a report, you need to be registered, approved and logged in. Use a valid email and password",
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
                  //this.nav.setRoot(TabsPage);
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
              }
            ]
          });
          prompt.present();
        }
      
      
    
   /*   alertLogin(){
          
      }*/
    
      signup(email: string, password: string) {
        this.afAuth
          .auth
          .createUserWithEmailAndPassword(email, password)
          .then(value => {
            console.log('Success!', value);
            localStorage.setItem('email', JSON.stringify(email)); 
          })
          .catch(err => {
            console.log('Something went wrong:',err.message);
            //this.ionViewDidEnter();
          });    
      }
    
      login(email: string, password: string) {
        this.afAuth
          .auth
          .signInWithEmailAndPassword(email, password)
          .then(value => {
            console.log('Nice, it worked!');
            localStorage.setItem('email', JSON.stringify(email)); 
          })
          .catch(err => {
            console.log('Something went wrong:',err.message);
            
          });
      }
    
      logout() {
        this.afAuth
          .auth
          .signOut();
      }
    
 /*     ionViewDidEnter(){
        //this.loadData();
    if (localStorage.getItem('thepostemail') == null) {
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
      }*/


}

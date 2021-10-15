import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { MyApp } from './app.component';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { AddShoppingPage } from '../pages/add-shopping/add-shopping';

import { AdminPage} from '../pages/admin/admin';
import { AdminAddPage} from '../pages/admin-add/admin-add';
import { AdminEditPage} from '../pages/admin-edit/admin-edit';
import { IssueDetailPage } from '../pages/issue-detail/issue-detail';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ReportsPage } from '../pages/reports/reports';
import { GatePage } from '../pages/gate/gate';
import { Firebase } from '@ionic-native/firebase';
import { ChartsModule } from 'ng2-charts';


import { InternationalnewsPage } from '../pages/internationalnews/internationalnews';
import { AfricanewsPage } from '../pages/africanews/africanews';
import { LocalnewsPage } from '../pages/localnews/localnews';

import { InternationalsportPage } from '../pages/internationalsport/internationalsport';
import { LatestsportPage } from '../pages/latestsport/latestsport';
import { LocalsportPage } from '../pages/localsport/localsport';
import { WhatsonPage } from '../pages/whatson/whatson'

import { InternationalentnewsPage } from '../pages/internationalentnews/internationalentnews';
import { AfricaentnewsPage } from '../pages/africaentnews/africaentnews';
import { LocalentnewsPage } from '../pages/localentnews/localentnews';
import { LatestentnewsPage } from '../pages/latestentnews/latestentnews';

import { AccountPage } from '../pages/account/account';
import { LatestNewsPage } from '../pages/latest-news/latest-news'
import { SupportPage } from '../pages/support/support';
import { UserActivityPage } from '../pages/user-activity/user-activity';
import { StatusPage } from '../pages/status/status';
import { BusPage } from '../pages/bus/bus';
import { AccessDeniedPage } from '../pages/access-denied/access-denied';
import { AdminReportPage } from '../pages/admin-report/admin-report';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { Http } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

import { LoginPage} from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { EditShoppingItemPage } from '../pages/edit-shopping-item/edit-shopping-item';
import { FIREBASE_CONFIG} from './firebase.credentials';
import { ShoppingServiceProvider } from '../providers/shopping-service/shopping-service';
//EditShoppingItemPage
@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    LoginPage,RegisterPage,
    InternationalnewsPage,
    AfricanewsPage,
    LocalnewsPage,LatestentnewsPage,
    InternationalentnewsPage,
    AfricaentnewsPage,
    LocalentnewsPage,

    InternationalsportPage,
    LatestsportPage,
    LocalsportPage,

    IssueDetailPage,LatestNewsPage,
    NotificationsPage,AdminReportPage,
    GatePage,AccessDeniedPage,
    AccountPage,
    LoginPage,IssueDetailPage,
    BusPage,
    SupportPage,WhatsonPage,
    ReportsPage,
    UserActivityPage,
    StatusPage,
    AddShoppingPage,AdminPage
    ,AdminAddPage,AdminEditPage,
    EditShoppingItemPage
  ],
  imports: [
    BrowserModule, HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,LoginPage,RegisterPage,IssueDetailPage,
    NotificationsPage,InternationalnewsPage,
    GatePage,AdminReportPage,LatestNewsPage,
    AccountPage,AccessDeniedPage,
    LoginPage,IssueDetailPage,
    BusPage,LocalnewsPage,LatestentnewsPage,
    SupportPage,AfricanewsPage,
    InternationalentnewsPage,
    AfricaentnewsPage,
    LocalentnewsPage,WhatsonPage,
    ReportsPage,
    InternationalsportPage,
    LatestsportPage,
    LocalsportPage,
    UserActivityPage,
    StatusPage,
    AddShoppingPage,AdminPage,AdminAddPage,AdminEditPage,
    EditShoppingItemPage
  ],
  providers: [
    StatusBar,Firebase,AngularFireAuth,
    SplashScreen,Camera,ImagePicker, Crop,Http,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingServiceProvider
  ]
})
export class AppModule {}

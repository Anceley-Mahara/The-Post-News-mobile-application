import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClient } from '@angular/common/http';

import { GatePage } from '../pages/gate/gate';
//import { ReportsPage } from '../pages/reports/reports';
import { NotificationsPage } from '../pages/notifications/notifications';
import { LocalnewsPage } from '../pages/localnews/localnews';
//import { SigninPage } from '../pages/signin/signin';
//import { GalleryPage } from '../pages/gallery/gallery';
//import { AdminReportPage} from '../pages/admin-report/admin-report';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
//import { RegisterPage } from '../pages/register/register';
import { SupportPage } from '../pages/support/support';
//import { BusPage } from '../pages/bus/bus';
//import { UserActivityPage } from '../pages/user-activity/user-activity';
import { ReportsPage } from '../pages/reports/reports';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { LatestNewsPage } from '../pages/latest-news/latest-news';
import { AdminPage} from '../pages/admin/admin';
import { WhatsonPage} from '../pages/whatson/whatson';

import { InternationalnewsPage } from '../pages/internationalnews/internationalnews';
import { AfricanewsPage } from '../pages/africanews/africanews';
import { InternationalentnewsPage } from '../pages/internationalentnews/internationalentnews';
import { InternationalsportPage } from '../pages/internationalsport/internationalsport';
import { LatestsportPage } from '../pages/latestsport/latestsport';
import { LocalsportPage } from '../pages/localsport/localsport';
import { LocalentnewsPage } from '../pages/localentnews/localentnews';
import { LatestentnewsPage } from '../pages/latestentnews/latestentnews';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  email:any;
  securityprofile:any;
  
    notificationcount:any;
    
    
    @ViewChild(Nav) nav: Nav;
  
    // List of pages that can be navigated to from the left menu
    // the left menu only works after login
    // the login page disables the left menu
    appPages: PageInterface[] = [
      { title: 'All Issues', name: 'TabsPage', component: ShoppingListPage, tabComponent: ShoppingListPage, index: 0, icon: 'home' },
      { title: 'Report An Issue', name: 'TabsPage', component: ReportsPage, tabComponent: ReportsPage, index: 1, icon: 'contacts' },
     //  { title: 'Store', name: 'TabsPage', component: ProductdPage, tabComponent: ProductdPage, index: 3, icon: 'md-cart' },
      { title: 'Settings', name: 'TabsPage', component: NotificationsPage, tabComponent: NotificationsPage, index:4, icon: 'settings' },
  //    { title: 'Reporting', name: 'AdminReportPage', component: AdminReportPage, tabComponent: AdminReportPage, index: 5, icon: 'stats' }
     // { title: 'Activities', name: 'TabsPage', component: UserActivityPage, tabComponent: UserActivityPage, index: 6, icon: 'logo-buffer' },
    //  { title: 'Status Update', name: 'TabsPage', component: StatusPage, tabComponent: StatusPage, index: 7, icon: 'sync' }
    ];
  
    newsPages: PageInterface[] = [
      { title: 'Latest News', name: 'LatestNewsPage', component: LatestNewsPage, tabComponent: LatestNewsPage, index: 2, icon: 'md-paper' },
      { title: 'Local News', name: 'LocalnewsPage', component: LocalnewsPage, tabComponent: LocalnewsPage, index: 2, icon: 'custom-ls-icon' },
      { title: 'Africa News', name: 'AfricanewsPage', component: AfricanewsPage, tabComponent: AfricanewsPage, index: 2, icon: 'custom-africa-icon' },
      { title: 'International News', name: 'InternationalnewsPage', component: InternationalnewsPage, tabComponent: InternationalnewsPage, index: 2, icon: 'custom-earth-icon' }
    //  { title: 'Bus reservation', name: 'BusPage', component: BusPage, icon: 'bus' }
    ];

    //Business
    businessPages: PageInterface[] = [
      { title: 'Latest News', name: 'AdminPage', component: AdminPage, tabComponent: AdminPage, index: 2, icon: 'md-paper' },
      { title: 'Local News', name: 'AdminPage', component: AdminPage, tabComponent: AdminPage, index: 2, icon: 'custom-ls-icon' },
      { title: 'International', name: 'AdminPage', component: AdminPage, tabComponent: AdminPage, index: 2, icon: 'md-globe' },
   //  { title: 'Bus reservation', name: 'BusPage', component: BusPage, icon: 'bus' }
    ];

    //Sports
    sportsPages: PageInterface[] = [
      { title: 'Latest News', name: 'LatestsportPage', component: LatestsportPage, tabComponent: LatestsportPage, index: 2, icon: 'md-paper' },
      { title: 'Local News', name: 'LocalsportPage', component: LocalsportPage, tabComponent: LocalsportPage, index: 2, icon: 'custom-ls-icon' },
      { title: 'international', name: 'InternationalsportPage', component: InternationalsportPage, icon: 'md-globe' }
    ];

    //Entertainment
    entertainmentPages: PageInterface[] = [
      { title: 'Latest News', name: 'LatestentnewsPage', component: LatestentnewsPage, tabComponent: LatestentnewsPage, index: 2, icon: 'md-paper' },
      { title: 'Local News', name: 'LocalentnewsPage', component: LocalentnewsPage, tabComponent: LocalentnewsPage, index: 2, icon: 'custom-ls-icon' },
      { title: 'International', name: 'InternationalentnewsPage', component: InternationalentnewsPage, tabComponent: InternationalentnewsPage, index: 2, icon: 'md-globe' },
      { title: 'Whats on', name: 'WhatsonPage', component: WhatsonPage, tabComponent: WhatsonPage, index: 2, icon: 'custom-cheers-icon' }
    //  { title: 'Bus reservation', name: 'BusPage', component: BusPage, icon: 'bus' }
    ];
  
    //Classifieds
    classifiedPages: PageInterface[] = [
      { title: 'Listings', name: 'AdminPage', component: AdminPage, tabComponent: AdminPage, index: 2, icon: 'md-list' }
    ];

    //Administration
    adminPages: PageInterface[] = [
      { title: 'Post a Report', name: 'AdminPage', component: ReportsPage, tabComponent: ReportsPage, index: 2, icon: 'custom-news-icon' }
    ];

        //Opinion
        opinionPages: PageInterface[] = [
          { title: 'Listings', name: 'AdminPage', component: AdminPage, tabComponent: AdminPage, index: 2, icon: 'md-chatboxes' }
        ];

    loggedInPages: PageInterface[] = [
      { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
  
    ];
  
    loggedOutPages: PageInterface[] = [
    //  { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
    { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
    { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },    
    { title: 'Log Out', name: 'TabsPage', component: LoginPage, icon: 'md-log-out'}
   //   { title: 'Signup', name: 'SignupPage', component: SignupPage, icon: 'person-add' }
    ];
  
    //Add if statement to manage users logged in
  
  
    rootPage:any = LatestNewsPage;
  
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private http: HttpClient) {
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
      });
      this.email = localStorage.getItem('omeyaemail');
      this.securityprofile=localStorage.getItem('omeyasecurity');
      this.countObj();
    }
  
    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
    }
    isActive(page: PageInterface) {
      let childNav = this.nav.getActiveChildNavs()[0];
  
      // Tabs are a special case because they have their own navigation
      if (childNav) {
        if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
          return 'primary';
        }
        return;
      }
  
      if (this.nav.getActive() && this.nav.getActive().name === page.name) {
        return 'primary';
      }
      return;
    }
  
    countObj(){
      this.http.get('https://omeya-6b5c8.firebaseio.com/notification.json?shallow=true')
      //.map(res => res.json())
      .subscribe(data => {
        this.notificationcount = Object.keys(data).length;
        console.log(this.notificationcount);
    });
  }
  
  }


webpackJsonp([0],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessDeniedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AccessDeniedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccessDeniedPage = /** @class */ (function () {
    function AccessDeniedPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        database.database.ref('/accounts/').orderByChild('owner').equalTo(JSON.parse(localStorage.getItem('omeyaemail'))).once('value', function (snapshot) {
            snapshot.forEach(function (child) {
                console.log('this is the retrieved access ' + child.val().access);
                // this.security = child.val().access;
                localStorage.setItem('omeyaSecurity', child.val().access);
            });
        });
        this.ionViewDidLoad();
    }
    AccessDeniedPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad AccessDeniedPage');
        console.log('view did load access denied page:: ' + localStorage.getItem('omeyaSecurity'));
        if (localStorage.getItem('omeyaSecurity') == 'granted') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list__["a" /* ShoppingListPage */]);
        }
        else {
        }
    };
    AccessDeniedPage.prototype.retry = function () {
        //   this.security = this.database.database.ref('/accounts/').orderByChild('owner').equalTo(JSON.parse(localStorage.getItem('omeyaemail'))).once('value', (snapshot) => {
        //   snapshot.forEach(function(child) {
        //   console.log('this is the retrieved access '+child.val().access);
        // this.security = child.val().access;
        //   localStorage.setItem('omeyaSecurity', child.val().access); 
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list__["a" /* ShoppingListPage */]);
        //      });
        // })
    };
    AccessDeniedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-access-denied',template:/*ion-inline-start:"C:\apps\thepost\src\pages\access-denied\access-denied.html"*/'<!--\n  Generated template for the AccessDeniedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Access-Denied</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p>Access Denied</p>\n  <p>Contact the Systems Administrator to grant Appropriate Access</p>\n \n  <button ion-button round (click)="retry()">Retry</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\access-denied\access-denied.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], AccessDeniedPage);
    return AccessDeniedPage;
}());

//# sourceMappingURL=access-denied.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestNewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LatestNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LatestNewsPage = /** @class */ (function () {
    function LatestNewsPage(navCtrl, navParams, fbase, database, afAuth) {
        //Open Issues
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbase = fbase;
        this.database = database;
        this.afAuth = afAuth;
        this.showFooter = false;
    }
    LatestNewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LatestNewsPage');
        console.log(this.advertsList);
        this.initializeItems();
    };
    LatestNewsPage.prototype.initializeItems = function () {
        var _this = this;
        this.shoppingListRef$ = this.database.list('news', function (ref) {
            return ref.orderByChild('newslabel').equalTo('Latest');
        });
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        //this.advertsRef = firebase.database().ref('/adverts/');
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        this.advertsRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/adverts/');
        this.content.resize();
        this.advertsRef
            .on('value', function (advertsList) {
            var adverts = [];
            advertsList.forEach(function (advertisement) {
                adverts.push(advertisement.val());
                return false;
            });
            _this.advertsList = adverts;
            _this.loadedAdvertsList = adverts;
        });
    };
    LatestNewsPage.prototype.selectShoppingItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__["a" /* IssueDetailPage */], { item: item });
    };
    LatestNewsPage.prototype.commentItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: item.key });
    };
    LatestNewsPage.prototype.onInput = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.shopListAsync = this.shopListAsync.filter(function (v) {
            if (v.exerpt && v.story && v.headline && q) {
                if (v.exerpt.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.story.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.headline.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        //   console.log(q, this.advertsList.length);
        //this.presentToast('results found '+this.advertsList.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], LatestNewsPage.prototype, "content", void 0);
    LatestNewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-latest-news',template:/*ion-inline-start:"C:\apps\thepost\src\pages\latest-news\latest-news.html"*/'<!--\n  Generated template for the LatestNewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Latest News</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding  has-bouncing="true">\n <ion-list    *ngFor="let item of shopListAsync | async">\n  <ion-card>\n    <ion-item (click)="selectShoppingItem(item)">   \n      \n                <img class="img" src={{item.payload.val().leadimg}}/>\n\n\n      \n        \n      <h2 text-wrap [innerHTML]="item.payload.val().headline"></h2>\n      <h4>{{item.payload.val().issuedate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n    <p text-wrap [innerHTML]="item.payload.val().exerpt"></p>\n     Author: <p [innerHTML]="item.payload.val().author"></p>\n     \n    </ion-item>\n    <button ion-button (click)="commentItem(item)" ion-icon="chatboxes">Comment</button>\n  </ion-card>\n</ion-list>\n</ion-content>\n<ion-footer  class="dynamic-height" *ngFor="let slider of advertsList">\n  <ion-toolbar>\n  <ion-slides class="slid" autoplay="3000" loop="true" speed="1000">\n\n  <ion-slide>\n        <img class="img" src={{slider.url}}/>\n    </ion-slide>\n\n</ion-slides>\n</ion-toolbar>\n \n</ion-footer>  \n<ion-searchbar color="primary" [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n</ion-searchbar>'/*ion-inline-end:"C:\apps\thepost\src\pages\latest-news\latest-news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], LatestNewsPage);
    return LatestNewsPage;
}());

//# sourceMappingURL=latest-news.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssueDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import firebase from 'firebase';
//import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the IssueDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssueDetailPage = /** @class */ (function () {
    function IssueDetailPage(navParams, database) {
        var _this = this;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        //     console.log('This is the navparam output '+JSON.stringify(this.selectedItem.key));
        //this.key = JSON.stringify(this.selectedItem.key)
        this.key = this.selectedItem.key;
        this.shoppingListOpenRef$ = database.list('comments', function (ref) {
            return ref.orderByChild('reportkey').equalTo(_this.key);
        });
        this.shopListOpenAsync = this.shoppingListOpenRef$.snapshotChanges();
        console.log('This is the shopListAsync ' + JSON.stringify(this.shopListOpenAsync));
    }
    IssueDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IssueDetailPage');
    };
    IssueDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-issue-detail',template:/*ion-inline-start:"C:\apps\thepost\src\pages\issue-detail\issue-detail.html"*/'<!--\n  Generated template for the IssueDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom color="primary">\n    <ion-title>{{selectedItem.payload.val().report}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n<div *ngIf="selectedItem">\n    <ion-card>\n        <ion-item>   \n          \n            <ion-slides pager class="slid" no-padding>\n\n                <ion-slide>\n                    <img class="img" src={{selectedItem.payload.val().leadimg}}/>\n                </ion-slide>\n                <ion-slide >\n                    <img class="img" src={{selectedItem.payload.val().captureDataUrl2}}/>\n                </ion-slide>\n                <ion-slide >\n                    <img class="img" src={{selectedItem.payload.val().captureDataUrl3}}/>\n                </ion-slide>\n                <ion-slide >\n                    <img class="img" src={{selectedItem.payload.val().captureDataUrl4}}/>\n                </ion-slide>\n            </ion-slides>\n\n          \n            \n          <h2 [innerHTML]="selectedItem.payload.val().headline"></h2>\n          <h4>\n              {{selectedItem.payload.val().issuedate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n         <p text-wrap [innerHTML]="selectedItem.payload.val().story"></p>\n         Author: <p [innerHTML]="selectedItem.payload.val().author"></p>\n               </ion-item>\n      </ion-card>\n\n    </div>\n\n    <ion-list   *ngFor="let item of shopListOpenAsync | async">\n        <ion-grid>  \n          <ion-row>\n           <ion-col>\n            <ion-item>\n         \n          <h4>{{item.payload.val().timestamp | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n          <p text-wrap>{{item.payload.val().report}}</p>\n          <p text-wrap>Updated by: {{item.payload.val().owner}}</p>\n          <p>Status: {{item.payload.val().status}}</p>\n              \n         \n          <textarea rows="5" maxLength="500" [(ngModel)]="item.payload.val().comment"></textarea>\n        \n        </ion-item>\n        </ion-col>\n    </ion-row>\n      </ion-grid>  \n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\issue-detail\issue-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], IssueDetailPage);
    return IssueDetailPage;
}());

//# sourceMappingURL=issue-detail.js.map

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 274;

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 316;

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditShoppingItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from 'rxjs';

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditShoppingItemPage = /** @class */ (function () {
    function EditShoppingItemPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.shoppingItem = {};
        var shoppingItemId = this.navParams.get('shoppingItemId');
        console.log('this is edit id' + shoppingItemId);
        this.key = shoppingItemId;
        this.shoppingItemRef$ = this.database.object("news/" + shoppingItemId);
        this.timestamp = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP;
        this.activityDB = this.database.list('/comments');
        this.shoppingItemSubscription = this.shoppingItemRef$.valueChanges().subscribe(function (shoppingItem) { return _this.shoppingItem = shoppingItem; });
        //console.log(shoppingItem.payload.val().$key);
    }
    EditShoppingItemPage.prototype.resize = function () {
        this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    };
    EditShoppingItemPage.prototype.editShoppingItem = function (shoppingItem) {
        this.shoppingItemRef$.update(shoppingItem);
        // this.shoppingItemRef$.update(this.key {});
        console.log(shoppingItem);
        this.activity(shoppingItem);
        this.navCtrl.pop();
    };
    EditShoppingItemPage.prototype.activity = function (shoppingItem) {
        console.log(shoppingItem.headline);
        Promise.resolve(this.activityDB.push({ report: shoppingItem.headline,
            reportkey: this.key,
            status: shoppingItem.status,
            exerpt: shoppingItem.exerpt,
            locale: shoppingItem.locale,
            comment: shoppingItem.comment,
            timestamp: this.timestamp,
            owner: (JSON.parse(localStorage.getItem('omeyaemail')))
        }));
    };
    EditShoppingItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditShoppingItemPage');
    };
    EditShoppingItemPage.prototype.ionViewWillLeave = function () {
        this.shoppingItemSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EditShoppingItemPage.prototype, "myInput", void 0);
    EditShoppingItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-shopping-item',template:/*ion-inline-start:"C:\apps\thepost\src\pages\edit-shopping-item\edit-shopping-item.html"*/'<!--\n  Generated template for the EditShoppingItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title wrap-text >{{shoppingItem.headline}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Report:</ion-label>\n    <ion-input type="text" text-wrap [(ngModel)]="shoppingItem.exerpt"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label floating>News Status:</ion-label>\n    <ion-select [(ngModel)]="shoppingItem.locale" >\n      <ion-option value="LatestNews">Latest News</ion-option>\n      <ion-option value="LocalNews">Local News</ion-option>\n      <ion-option value="RegionalNews">Regional News</ion-option>\n      <ion-option value="InternationalNews">International News</ion-option>\n      <ion-option value="LatestEntertainment">Latest Entertainment</ion-option>\n      <ion-option value="LocalEntertainment">Local Entertainment</ion-option>\n      <ion-option value="InternationalEntertainment">International Entertainment</ion-option>\n      <ion-option value="Whatson">Whats On</ion-option>\n      <ion-option value="LatestSports">Latest Sports</ion-option>\n      <ion-option value="LocalSports">Local Sports</ion-option>\n      <ion-option value="InternationalSports">International Sports</ion-option>\n      <ion-option value="Archive">Archive</ion-option>\n      </ion-select>\n\n  </ion-item>\n\n\n  <ion-label>Created on:</ion-label>\n  <p color="danger">{{shoppingItem.issuedate | date:\'yyyy-MM-dd HH:mm:ss\'}}</p>\n  \n  <ion-label>Comment:</ion-label>\n  <textarea placeholder="Type in a comment here" #myInput id="myInput" rows="5" maxLength="500" (keyup)="resize()" [(ngModel)]="shoppingItem.comment"></textarea>\n\n  <ion-item>\n      <ion-label floating>Posted By:</ion-label>\n      <ion-input disabled type="text" [(ngModel)]="shoppingItem.user"></ion-input>\n    </ion-item>\n\n      <ion-item>\n          <ion-label>Status</ion-label>\n          <ion-select [(ngModel)]="shoppingItem.status" >\n            <ion-option value="Open">Open</ion-option>\n                <ion-option value="In Progress">In Progress</ion-option>\n                <ion-option value="Back Report">Back Report</ion-option>  \n                <ion-option value="Escalated">Escalated</ion-option>\n                <ion-option value="Closed">Closed</ion-option>         \n         </ion-select>\n        </ion-item>\n <button ion-button round color="danger" (click)="editShoppingItem(shoppingItem)">Save Changes</button>\n  \n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\edit-shopping-item\edit-shopping-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], EditShoppingItemPage);
    return EditShoppingItemPage;
}());

//# sourceMappingURL=edit-shopping-item.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__issue_detail_issue_detail__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_firebase__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(navCtrl, navParams, db, http, database, fbase, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.fbase = fbase;
        this.loadingCtrl = loadingCtrl;
        this.shoppingListMyTokenRef$ = database.list('Users', function (ref) {
            return ref.orderByChild('user_id').equalTo(JSON.parse(localStorage.getItem('omeyaemail')));
        });
        this.shopListMyTokenAsync = this.shoppingListMyTokenRef$.snapshotChanges();
        this.Users = database.list('/Users');
    }
    NotificationsPage.prototype.getData = function () {
        var _this = this;
        this.allRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/Users');
        this.allRef.orderByChild("status").equalTo("active").on('value', function (allList) {
            //  this.allRef.on('value', allList => {
            var props = [];
            allList.forEach(function (property) {
                props.push(property.val());
                return false;
            });
            _this.allList = props;
            _this.loadedAllList = props;
        });
        this.countObj();
    };
    NotificationsPage.prototype.changeSettings = function (setting) {
        //console.log('Notification settings set to: '+setting);
        if (setting == true) {
            console.log('Notification settings set to: true');
            //this.removeToken();
        }
        else {
            console.log('Notification settings set to: false');
        }
    };
    NotificationsPage.prototype.itemTapped = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__issue_detail_issue_detail__["a" /* IssueDetailPage */], {
            item: item
        });
    };
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComingUpPage');
        this.presentLoading();
        this.getData();
        this.countObj();
        this.hideLoading();
    };
    NotificationsPage.prototype.hideLoading = function () {
        this.loader.dismiss();
    };
    NotificationsPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Reports loading, Please wait..."
            // ,duration: 3000
        });
        this.loader.present();
        // this.hideloading();
    };
    NotificationsPage.prototype.countObj = function () {
        var _this = this;
        this.http.get('https://omeya-6b5c8.firebaseio.com/notification.json?shallow=true')
            .subscribe(function (data) {
            _this.reportcount = Object.keys(data).length;
            console.log(_this.reportcount);
        });
    };
    NotificationsPage.prototype.getToken = function () {
        var _this = this;
        this.fbase.getToken()
            .then(function (token) {
            console.log("The token is " + token);
            _this.saveToken("" + token);
        }) // save the token server-side and use it to push notifications to this device
            .catch(function (error) { return console.error('Error getting token', error); });
        /* Promise.resolve(this.logs.push
          ({       user_id: (JSON.parse(localStorage.getItem('email'))),
            device_token:token,
              timestamp: this.timestamp,
              owner: (JSON.parse(localStorage.getItem('email')))
          })
          )
      
      
        */
    };
    NotificationsPage.prototype.saveToken = function (device_token) {
        if (localStorage.getItem('fbtk') == null) {
            Promise.resolve(this.Users.push({ device_token: device_token,
                user_id: (JSON.parse(localStorage.getItem('omeyaemail')))
            }));
            localStorage.setItem('fbtk', JSON.stringify(device_token));
            this.fbtk = localStorage.getItem('fbtk');
        }
        else { }
    };
    NotificationsPage.prototype.removeToken = function () {
        localStorage.removeItem('fbtk');
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\apps\thepost\src\pages\notifications\notifications.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-item>\n    \n\n  </ion-item>\n   <ion-grid> \n     <ion-row><ion-label>Activate Notifications:</ion-label></ion-row>\n     <ion-row>			\n       <ion-item no-padding>\n        <ion-col col-6>\n                <button ion-button color="secondary" small round (click)="getToken()">\n                  <ion-icon name="checkmark" padding ></ion-icon> Enable\n                  </button>\n        </ion-col>\n        \n        <ion-col col-6>\n                <button ion-button color="danger" small round (click)="removeToken()">\n                  <ion-icon name="close" padding ></ion-icon> Disable\n                  </button>\n        </ion-col>\n       </ion-item>\n            <ion-card>\n           <p>{{fbtk}}</p>    \n          </ion-card>\n               \n        </ion-row>   \n      </ion-grid>\n\n  \n\n \n  <!--  <ion-list *ngFor="let item of allList">\n  <ion-item>\n    <ion-thumbnail item-start>\n      <img src="{{item.captureDataUrl}}">\n    </ion-thumbnail>\n    <ion-toggle [(ngModel)]="setting"></ion-toggle> \n    <h2>{{item.heading}}</h2>\n    <p text-wrap>{{item.detail}}</p>\n    <button ion-button clear item-end  (click)="itemTapped(item)">View</button>\n  </ion-item>\n\n</ion-list>-->\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_6__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalnewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LocalnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocalnewsPage = /** @class */ (function () {
    function LocalnewsPage(navCtrl, navParams, fbase, database, afAuth) {
        //Open Issues
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbase = fbase;
        this.database = database;
        this.afAuth = afAuth;
        this.showFooter = false;
    }
    LocalnewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LatestNewsPage');
        console.log(this.advertsList);
        this.initializeItems();
    };
    LocalnewsPage.prototype.initializeItems = function () {
        var _this = this;
        this.shoppingListRef$ = this.database.list('news', function (ref) {
            return ref.orderByChild('locale').equalTo('LocalNews');
        });
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        //this.advertsRef = firebase.database().ref('/adverts/');
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        this.advertsRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/adverts/');
        this.content.resize();
        this.advertsRef
            .on('value', function (advertsList) {
            var adverts = [];
            advertsList.forEach(function (advertisement) {
                adverts.push(advertisement.val());
                return false;
            });
            _this.advertsList = adverts;
            _this.loadedAdvertsList = adverts;
        });
    };
    LocalnewsPage.prototype.selectShoppingItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__["a" /* IssueDetailPage */], { item: item });
    };
    LocalnewsPage.prototype.commentItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: item.key });
    };
    LocalnewsPage.prototype.onInput = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.shopListAsync = this.shopListAsync.filter(function (v) {
            if (v.exerpt && v.story && v.headline && q) {
                if (v.exerpt.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.story.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.headline.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        //   console.log(q, this.advertsList.length);
        //this.presentToast('results found '+this.advertsList.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], LocalnewsPage.prototype, "content", void 0);
    LocalnewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-localnews',template:/*ion-inline-start:"C:\apps\thepost\src\pages\localnews\localnews.html"*/'<!--\n  Generated template for the LocalnewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Local News</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding  has-bouncing="true">\n  <ion-list    *ngFor="let item of shopListAsync | async">\n   <ion-card>\n     <ion-item (click)="selectShoppingItem(item)">   \n       \n                 <img class="img" src={{item.payload.val().leadimg}}/>\n \n \n       \n         \n       <h2 text-wrap [innerHTML]="item.payload.val().headline"></h2>\n       <h4>{{item.payload.val().issuedate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n     <p text-wrap [innerHTML]="item.payload.val().exerpt"></p>\n      Author: <p [innerHTML]="item.payload.val().author"></p>\n      \n     </ion-item>\n     <button ion-button (click)="commentItem(item)" ion-icon="chatboxes">Comment</button>\n   </ion-card>\n </ion-list>\n </ion-content>\n <ion-footer  class="dynamic-height" *ngFor="let slider of advertsList">\n   <ion-toolbar>\n   <ion-slides class="slid" autoplay="3000" loop="true" speed="1000">\n \n   <ion-slide>\n         <img class="img" src={{slider.url}}/>\n     </ion-slide>\n \n </ion-slides>\n </ion-toolbar>\n  \n </ion-footer>  \n <ion-searchbar color="primary" [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n </ion-searchbar>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\localnews\localnews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], LocalnewsPage);
    return LocalnewsPage;
}());

//# sourceMappingURL=localnews.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Camera, CameraOptions } from '@ionic-native/camera';
//import { ImagePicker } from '@ionic-native/image-picker';
//import { Crop } from '@ionic-native/crop';

var AccountPage = /** @class */ (function () {
    function AccountPage(alertCtrl, nav, db, params, loadingCtrl
        //  public alertCtrl: AlertController,              
        // public imagePicker: ImagePicker,
        //  public camera: Camera,    
        //   public cropService: Crop
    ) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.params = params;
        this.loadingCtrl = loadingCtrl;
        this.accounts = db.list('/accounts');
        this.logs = db.list('/log');
        this.updateAccount = db.list('/accounts').query.orderByChild('email').equalTo(JSON.parse(localStorage.getItem('omeyaemail')));
        this.timestamp = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP;
        //   this.mypicref=firebase.storage().ref('/images')
        // this.storageReference = firebase.storage().ref('/images')
        this.updateAccount.id = this.params.get('key');
        //      this.updateAccount.username = this.params.get('username');
        //      this.updateAccount.firstname = this.params.get('firstname');
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComingUpPage');
        this.presentLoading();
        if (window.localStorage.getItem('omeyaemail') == null) {
            this.hideLoading();
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
        else
            this.getData();
    };
    AccountPage.prototype.hideLoading = function () {
        this.loader.dismiss();
    };
    AccountPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Reports loading, Please wait..."
            // ,duration: 3000
        });
        this.loader.present();
        // this.hideloading();
    };
    AccountPage.prototype.getData = function () {
        var _this = this;
        this.profileRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/accounts');
        //console.log(JSON.parse(localStorage.getItem('email')))
        console.log(JSON.stringify(this.updateAccount));
        this.profileRef
            .orderByChild('owner')
            .equalTo(JSON.parse(localStorage.getItem('omeyaemail')))
            .on('value', function (profileList) {
            var profile = [];
            profileList.forEach(function (profiles) {
                profile.push(profiles.val());
                return false;
            });
            _this.profileList = profile;
            _this.loadedProfileList = profile;
            console.log(JSON.parse(localStorage.getItem('email')));
            console.log(JSON.stringify(_this.profileList));
            _this.hideLoading();
        });
    };
    AccountPage.prototype.updateProfile = function (username, firstname, lastname, erf) {
        Promise.resolve(this.accounts.push({ username: username,
            firstname: firstname,
            lastname: lastname,
            status: "Unauthorized",
            erf: erf,
            timestamp: this.timestamp,
            email: (JSON.parse(localStorage.getItem('email')))
        }));
        //  this.issuePostedAlert(type);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"C:\apps\thepost\src\pages\account\account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <div padding-top text-center >\n    \n  \n    <ion-list inset *ngFor="let profile of profileList">\n     <img src="{{profile.captureDataUrl}}" alt="avatar"> \n     \n       \n    \n        <input hidden [(ngModel)]="profile.role"/>\n     \n\n      <ion-item>\n        <ion-label floating>E-mail</ion-label>\n        <ion-input type="text"  [(ngModel)]="profile.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input type="text"  [(ngModel)]="profile.firstname"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input type="text"  [(ngModel)]="profile.lastname"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label floating>Telephone</ion-label>\n          <ion-input type="text"  [(ngModel)]="profile.phone"></ion-input>\n        </ion-item>\n      <ion-item>\n        <ion-label floating>Address</ion-label>\n        <ion-input type="text" [(ngModel)]="profile.address"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label> Authorized</ion-label>\n        <!--<input type="text" placeholder="Authorized*" [(ngModel)]="authorized"/>-->\n      <ion-checkbox disabled color="danger" checked="true" [(ngModel)]="profile.authorized"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>User Type</ion-label>\n        <ion-input disabled type="text"  [(ngModel)]="profile.usertype"></ion-input>\n    </ion-item>      \n    </ion-list>\n  </div>\n\n  <!--<ion-list><ion-item *ngFor="let profile of profileList"> test profile\n{{profile.role}}\n  </ion-item></ion-list>-->\n</ion-content>\n<ion-footer>    \n<!--    <div><button ion-button full color="secondary" (click)="updateProfile(username, firstname,lastname,erf)">Submit/Update Advert</button>\n    </div>-->\n</ion-footer>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]
            //  public alertCtrl: AlertController,              
            // public imagePicker: ImagePicker,
            //  public camera: Camera,    
            //   public cropService: Crop
        ])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shopping_list_shopping_list__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { HomePage } from '../home/home';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    //acc:any;
    function RegisterPage(navCtrl, navParams, alertCtrl, af, loadingCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.af = af;
        this.loadingCtrl = loadingCtrl;
        this.afAuth = afAuth;
        this.timestamp = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database.ServerValue.TIMESTAMP;
        this.logs = af.list('/activitylog');
        this.accounts = af.list('/accounts');
        // this.promo = af.list('/promo');
    }
    RegisterPage.prototype.ionViewDidEnter = function () {
        //this.loadData();
    };
    RegisterPage.prototype.signin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.reg = function (firstname, lastname, email, password, phone, address, role) {
        this.signup(email, password, firstname, lastname, phone, address, role);
    };
    RegisterPage.prototype.alertLogin = function () {
    };
    RegisterPage.prototype.signup = function (email, password, firstname, lastname, phone, address, role) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Registration in Progress, please wait...'
        });
        loading.present();
        this.afAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
            localStorage.setItem('thepostemail', JSON.stringify(email));
            loading.dismiss();
            _this.acc(email, firstname, lastname, phone, address, role);
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            loading.dismiss();
            _this.errorAlert(email, err.message);
            //this.ionViewDidEnter();
            // loading.dismiss();
        });
    };
    RegisterPage.prototype.login = function (email, password) {
        var _this = this;
        this.afAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
            localStorage.setItem('thepostemail', JSON.stringify(email));
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            _this.errorAlert(email, err.message);
        });
    };
    RegisterPage.prototype.resetPassword = function (email) {
        var _this = this;
        //var auth = firebase.auth();
        this.afAuth.auth.sendPasswordResetEmail(email)
            .then(function () { _this.passwordResetAlert(email); })
            .catch(function (error) { _this.ionViewDidEnter(); });
    };
    RegisterPage.prototype.passwordResetAlert = function (email) {
        var alert = this.alertCtrl.create({
            title: 'Reset Email Sent!',
            subTitle: 'Please check your email ' + email + ' for a reset email, If you did not receive the email check the email spelling and try again',
            buttons: ['OK']
        });
        alert.present();
        this.activity = "Password reset for" + email;
        this.logActivity(this.activity);
        this.ionViewDidEnter();
    };
    RegisterPage.prototype.acc = function (email, firstname, lastname, phone, address, role) {
        var loading = this.loadingCtrl.create({
            content: 'Updating your profile, please wait...'
        });
        loading.present();
        Promise.resolve(this.accounts.push({ firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            address: address,
            role: role,
            access: "denied",
            authorized: "false",
            usertype: role,
            timestamp: this.timestamp,
            owner: (JSON.parse(localStorage.getItem('thepostemail')))
        }));
        loading.dismiss();
    };
    RegisterPage.prototype.userRegisteredAlert = function (email, firstname, lastname, phone, address, role) {
        var _this = this;
        this.acc(lastname, email, firstname, phone, address, role);
        var alert = this.alertCtrl.create({
            title: 'User Registration Successful!',
            subTitle: 'Email ' + email + ' has been registered successfully.',
            buttons: [{ text: 'OK',
                    handler: function (data) {
                        console.log(data);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__shopping_list_shopping_list__["a" /* ShoppingListPage */]);
                    }
                }],
        });
        alert.present();
        this.activity = "Password reset for" + email;
        this.logActivity(this.activity);
    };
    RegisterPage.prototype.logActivity = function (activity) {
        Promise.resolve(this.logs.push({ activity: activity,
            timestamp: this.timestamp,
            owner: (JSON.parse(localStorage.getItem('email')))
        }));
    };
    RegisterPage.prototype.errorAlert = function (email, err) {
        var alert = this.alertCtrl.create({
            title: 'Error During Login!',
            subTitle: 'Please check your email ' + email + ' the following error occured "' + err + '"',
            buttons: ['OK']
        });
        alert.present();
        // this.activity = "Password reset for"+email;
        //this.logActivity(this.activity);
        // this.ionViewDidEnter();
    };
    RegisterPage.prototype.logout = function () {
        this.afAuth
            .auth
            .signOut();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\apps\thepost\src\pages\register\register.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content class="login-page">\n    <div class="logo">\n      <img no-padding src="assets/imgs/ologo.png"/>\n    </div>\n  \n  \n      <ion-list>\n        <ion-item>\n          <ion-row text-wrap>\n           <p>Image 1: Select an image that will provide more information about your report</p> \n          </ion-row>\n        <ion-row>			\n        <ion-col col-6>\n                <button ion-button  small (click)="capture()" type="camera"  round>\n                  <ion-icon name="md-camera" no-padding ></ion-icon> Camera\n                  </button>\n        </ion-col>\n        \n        <ion-col col-6>\n                <button ion-button  small (click)="selectImage()" color="clear"  round>\n                  <ion-icon name="md-image" no-padding ></ion-icon> Gallery\n                  </button>\n        </ion-col>\n            <ion-col col-12>\n            <ion-card>\n              <img [src]="captureDataUrl" *ngIf="captureDataUrl"/>\n          </ion-card>\n        </ion-col>             \n        </ion-row>\n        </ion-item>\n\n          <ion-item>\n              <ion-label stacked>First Name</ion-label>\n              <ion-input type="text" [(ngModel)]="firstname"></ion-input>\n            </ion-item>\n  \n            <ion-item>\n                <ion-label stacked>Last Name</ion-label>\n                <ion-input type="text" [(ngModel)]="lastname"></ion-input>\n              </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Enter your email address</ion-label>\n      <ion-input type="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password"  [(ngModel)]="password"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Phone Number</ion-label>\n      <ion-input type="tel" [(ngModel)]="phone"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Address</ion-label>\n      <ion-input type="text" [(ngModel)]="address"></ion-input>\n    </ion-item>\n  \n  \n    </ion-list>\n    \n    <ion-item>\n        <ion-label>Signup as</ion-label>\n        <ion-select [(ngModel)]="role" >\n          <ion-option value="Guest">Guest</ion-option>\n          <ion-option value="Resident">Resident</ion-option>\n          <ion-option value="Management">Management</ion-option>\n          <ion-option value="Admin">Admin</ion-option>\n          <ion-option value="Tenant">Tenant</ion-option>\n          <ion-option value="Security Personnel">Security Personnel</ion-option>\n        </ion-select>\n      </ion-item>\n  \n    <div padding>\n        <button ion-button round [disabled]="!firstname || !lastname || !email || !password || !phone || !address || !role"  (click)="reg(firstname, lastname, email, password, phone, address, role, captureDataUrl)" type="submit" block>Sign Up</button>\n      </div>\n      <div> <button ion-button clear (click)="signin()" type="submit">Already have an account?</button></div>\n      <div class="logo">\n        <img no-padding src="assets/imgs/omeya.jpg">\n      </div>\n  </ion-content>\n  '/*ion-inline-end:"C:\apps\thepost\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var AddShoppingPage = /** @class */ (function () {
    function AddShoppingPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.shoppingItem = {};
        this.shoppingItemRef$ = this.database.list('shopping-list');
        /*
        shopping-list:
        0:
        itemName: 'Pizza'
        itemNumber: 1
        */
    }
    AddShoppingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddShoppingPage');
    };
    AddShoppingPage.prototype.addShoppingItem = function (shoppingItem) {
        this.shoppingItemRef$.push({ itemName: this.shoppingItem.itemName,
            itemNumber: Number(this.shoppingItem.itemNumber) });
        this.shoppingItem = {};
        //Nav back to shopping list page
        this.navCtrl.pop();
    };
    AddShoppingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-shopping',template:/*ion-inline-start:"C:\apps\thepost\src\pages\add-shopping\add-shopping.html"*/'<!--\n  Generated template for the AddShoppingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Add Shopping</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-item>\n  <ion-label floating>Item Name</ion-label>\n  <ion-input type="text" [(ngModel)]="shoppingItem.itemName"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Quantity</ion-label>\n  <ion-input type="number" [(ngModel)]="shoppingItem.itemNumber"></ion-input>\n</ion-item>\n\n<button ion-button block (click)="addShoppingItem(shoppingItem)">Add item</button>\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\add-shopping\add-shopping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], AddShoppingPage);
    return AddShoppingPage;
}());

//# sourceMappingURL=add-shopping.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupportPage = /** @class */ (function () {
    function SupportPage(navCtrl, alertCtrl, database, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.navParams = navParams;
        this.shoppingItemRef$ = this.database.list('/support');
    }
    SupportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupportPage');
    };
    SupportPage.prototype.submit = function (supportMessage) {
        this.shoppingItemRef$.push({
            supportMessage: supportMessage,
            user: JSON.parse(localStorage.getItem('omeyaemail'))
        });
        // this.shoppingItem = {} as ShoppingItem;
        //Nav back to shopping list page
        // this.navCtrl.pop();
        this.issuePostedAlert(supportMessage);
    };
    SupportPage.prototype.issuePostedAlert = function (type) {
        var alert = this.alertCtrl.create({
            title: 'Support Message Submitted Successfully!',
            subTitle: 'Your message: ' + type + ' has been saved. The security admin will contact you for details shortly',
            buttons: ['OK']
        });
        alert.present();
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-support',template:/*ion-inline-start:"C:\apps\thepost\src\pages\support\support.html"*/'<!--\n  Generated template for the SupportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Support</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="logo">\n  <img no-padding src="assets/imgs/ologo.png"/>\n</div>\n\n\n  <ion-list no-lines>\n    <ion-item>\n      <ion-label stacked color="primary">Enter your support message below</ion-label>\n      <ion-textarea [(ngModel)]="supportMessage" rows="6" required></ion-textarea>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button block (click)="submit(supportMessage)">Submit</button>\n  </div>\n\n  <div class="logo">\n    <img no-padding src="assets/imgs/omeya.jpg">\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\support\support.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_crop__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__access_denied_access_denied__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__latest_news_latest_news__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the ReportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportsPage = /** @class */ (function () {
    function ReportsPage(navCtrl, navParams, db, alertCtrl, imagePicker, camera, cropService, af, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.cropService = cropService;
        this.af = af;
        this.afAuth = afAuth;
        this.reports = db.list('/news');
        this.logs = db.list('/log');
        this.timestamp = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP;
        this.mypicref = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref('/images');
        this.storageReference = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref('/images');
        this.propertyRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/competitions');
        // this.propertyRef.orderByChild("type").equalTo("APP").on('value', propertyList => {
        this.propertyRef.on('value', function (propertyList) {
            var props = [];
            propertyList.forEach(function (property) {
                props.push(property.val());
                return false;
            });
            _this.propertyList = props;
            _this.loadedPropertyList = props;
        });
    }
    /* ionViewDidLoad() {
       console.log('ionViewDidLoad ReportsPage');
     }
   */
    ReportsPage.prototype.selectImage = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cameraOptions = {
                sourceType: _this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                quality: 100,
                targetWidth: 320,
                targetHeight: 240,
                correctOrientation: true
            };
            _this.camera.getPicture(cameraOptions)
                .then(function (data) {
                _this.captureDataUrl = "data:image/jpeg;base64," + data;
                resolve(_this.captureDataUrl);
                //      this.submitimage(this.captureDataUrl);
                var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                // Create a timestamp as filename
                var filename = Math.floor(Date.now() / 1000);
                //const filename1 = Math.floor(Date.now() / 1001);
                // Create a reference to 'images/todays-date.jpg'
                var imageRef = storageRef.child("images/" + filename + ".jpg");
                // const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
                imageRef.putString(_this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage.StringFormat.DATA_URL)
                    .then(function (snapshot) {
                    snapshot.ref.getDownloadURL().then(function (url) {
                        _this.picurl = url;
                    });
                    // Do something here when the data is succesfully uploaded!
                });
            });
        });
    };
    ReportsPage.prototype.capture = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cameraOptions = {
                quality: 50,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
            };
            _this.camera.getPicture(cameraOptions).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
                resolve(_this.captureDataUrl);
                //this.picurl = this.captureDataUrl;
                //this.submitimage(this.captureDataUrl);
                var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                // Create a timestamp as filename
                var filename = Math.floor(Date.now() / 1000);
                //const filename1 = Math.floor(Date.now() / 1001);
                // Create a reference to 'images/todays-date.jpg'
                var imageRef = storageRef.child("images/" + filename + ".jpg");
                // const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
                imageRef.putString(_this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage.StringFormat.DATA_URL)
                    .then(function (snapshot) {
                    snapshot.ref.getDownloadURL().then(function (url) {
                        _this.picurl = url;
                        // do something with url here
                    });
                    // Do something here when the data is succesfully uploaded!
                });
            }, function (err) {
                // Handle error
            });
        });
    };
    ReportsPage.prototype.selectImage2 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cameraOptions = {
                sourceType: _this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                quality: 100,
                targetWidth: 320,
                targetHeight: 240,
                correctOrientation: true
            };
            _this.camera.getPicture(cameraOptions)
                .then(function (data) {
                _this.captureDataUrl2 = "data:image/jpeg;base64," + data;
                resolve(_this.captureDataUrl2);
                //      this.submitimage(this.captureDataUrl);
                var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                // Create a timestamp as filename
                //const filename = Math.floor(Date.now() / 1000);
                var filename1 = Math.floor(Date.now() / 1000);
                // Create a reference to 'images/todays-date.jpg'
                //const imageRef = storageRef.child(`images/${filename}.jpg`);
                var imageRef1 = storageRef.child("images/" + filename1 + ".jpg");
                imageRef1.putString(_this.captureDataUrl2, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage.StringFormat.DATA_URL)
                    .then(function (snapshot) {
                    snapshot.ref.getDownloadURL().then(function (url) {
                        _this.picurl2 = url;
                    });
                    // Do something here when the data is succesfully uploaded!
                });
            });
        });
    };
    ReportsPage.prototype.capture2 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cameraOptions = {
                quality: 50,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
            };
            _this.camera.getPicture(cameraOptions).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                _this.captureDataUrl2 = 'data:image/jpeg;base64,' + imageData;
                resolve(_this.captureDataUrl2);
                //this.picurl = this.captureDataUrl;
                //this.submitimage(this.captureDataUrl);
                var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                // Create a timestamp as filename
                //const filename = Math.floor(Date.now() / 1000);
                var filename2 = Math.floor(Date.now() / 1000);
                // Create a reference to 'images/todays-date.jpg'
                //const imageRef = storageRef.child(`images/${filename1}.jpg`);
                var imageRef2 = storageRef.child("images/" + filename2 + ".jpg");
                imageRef2.putString(_this.captureDataUrl2, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage.StringFormat.DATA_URL)
                    .then(function (snapshot) {
                    snapshot.ref.getDownloadURL().then(function (url) {
                        _this.picurl2 = url;
                    });
                    // Do something here when the data is succesfully uploaded!
                });
            }, function (err) {
                // Handle error
            });
        });
    };
    ReportsPage.prototype.selectImage3 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cameraOptions = {
                sourceType: _this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                quality: 100,
                targetWidth: 320,
                targetHeight: 240,
                correctOrientation: true
            };
            _this.camera.getPicture(cameraOptions)
                .then(function (data) {
                _this.captureDataUrl3 = "data:image/jpeg;base64," + data;
                resolve(_this.captureDataUrl3);
                //      this.submitimage(this.captureDataUrl);
                var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                // Create a timestamp as filename
                var filename3 = Math.floor(Date.now() / 1000);
                //const filename1 = Math.floor(Date.now() / 1001);
                // Create a reference to 'images/todays-date.jpg'
                var imageRef3 = storageRef.child("images/" + filename3 + ".jpg");
                // const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
                imageRef3.putString(_this.captureDataUrl3, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage.StringFormat.DATA_URL)
                    .then(function (snapshot) {
                    snapshot.ref.getDownloadURL().then(function (url) {
                        _this.picurl3 = url;
                    });
                    // Do something here when the data is succesfully uploaded!
                });
            });
        });
    };
    ReportsPage.prototype.capture3 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cameraOptions = {
                quality: 50,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
            };
            _this.camera.getPicture(cameraOptions).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                _this.captureDataUrl3 = 'data:image/jpeg;base64,' + imageData;
                resolve(_this.captureDataUrl3);
                //this.picurl = this.captureDataUrl;
                //this.submitimage(this.captureDataUrl);
                var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                // Create a timestamp as filename
                var filename3 = Math.floor(Date.now() / 1000);
                //const filename1 = Math.floor(Date.now() / 1001);
                // Create a reference to 'images/todays-date.jpg'
                var imageRef3 = storageRef.child("images/" + filename3 + ".jpg");
                // const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
                imageRef3.putString(_this.captureDataUrl3, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage.StringFormat.DATA_URL)
                    .then(function (snapshot) {
                    snapshot.ref.getDownloadURL().then(function (url) {
                        _this.picurl3 = url;
                    });
                    // Do something here when the data is succesfully uploaded!
                });
            }, function (err) {
                // Handle error
            });
        });
    };
    ReportsPage.prototype.selectImage4 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cameraOptions = {
                sourceType: _this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                quality: 100,
                targetWidth: 320,
                targetHeight: 240,
                correctOrientation: true
            };
            _this.camera.getPicture(cameraOptions)
                .then(function (data) {
                _this.captureDataUrl4 = "data:image/jpeg;base64," + data;
                resolve(_this.captureDataUrl4);
                //      this.submitimage(this.captureDataUrl);
                var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                // Create a timestamp as filename
                var filename4 = Math.floor(Date.now() / 1000);
                //const filename1 = Math.floor(Date.now() / 1001);
                // Create a reference to 'images/todays-date.jpg'
                var imageRef4 = storageRef.child("images/" + filename4 + ".jpg");
                // const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
                imageRef4.putString(_this.captureDataUrl4, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage.StringFormat.DATA_URL)
                    .then(function (snapshot) {
                    snapshot.ref.getDownloadURL().then(function (url) {
                        _this.picurl4 = url;
                    });
                    // Do something here when the data is succesfully uploaded!
                });
            });
        });
    };
    ReportsPage.prototype.capture4 = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cameraOptions = {
                quality: 50,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
            };
            _this.camera.getPicture(cameraOptions).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                _this.captureDataUrl4 = 'data:image/jpeg;base64,' + imageData;
                resolve(_this.captureDataUrl4);
                //this.picurl = this.captureDataUrl;
                //this.submitimage(this.captureDataUrl);
                var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage().ref();
                // Create a timestamp as filename
                var filename4 = Math.floor(Date.now() / 1000);
                //const filename1 = Math.floor(Date.now() / 1001);
                // Create a reference to 'images/todays-date.jpg'
                var imageRef4 = storageRef.child("images/" + filename4 + ".jpg");
                // const imageRef1 = storageRef.child(`images/${filename1}.jpg`);
                imageRef4.putString(_this.captureDataUrl4, __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.storage.StringFormat.DATA_URL)
                    .then(function (snapshot) {
                    snapshot.ref.getDownloadURL().then(function (url) {
                        _this.picurl4 = url;
                    });
                    // Do something here when the data is succesfully uploaded!
                });
            }, function (err) {
                // Handle error
            });
        });
    };
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
    ReportsPage.prototype.submitreport = function (headline, exerpt, story, label) {
        var _this = this;
        if (this.picurl == null) {
            this.picurl = 'https://firebasestorage.googleapis.com/v0/b/taxi-63ca5.appspot.com/o/images%2FHiResIcon.png?alt=media&token=74e03caf-9e39-4b21-ad4c-16adc56ce6ec';
        }
        else
            this.picurl;
        if (this.picurl2 == null) {
            this.picurl2 = 'https://firebasestorage.googleapis.com/v0/b/taxi-63ca5.appspot.com/o/images%2FHiResIcon.png?alt=media&token=74e03caf-9e39-4b21-ad4c-16adc56ce6ec';
        }
        else
            this.picurl2;
        if (this.picurl3 == null) {
            this.picurl3 = 'https://firebasestorage.googleapis.com/v0/b/taxi-63ca5.appspot.com/o/images%2FHiResIcon.png?alt=media&token=74e03caf-9e39-4b21-ad4c-16adc56ce6ec';
        }
        else
            this.picurl3;
        if (this.picurl4 == null) {
            this.picurl4 = 'https://firebasestorage.googleapis.com/v0/b/taxi-63ca5.appspot.com/o/images%2FHiResIcon.png?alt=media&token=74e03caf-9e39-4b21-ad4c-16adc56ce6ec';
        }
        else
            this.picurl4;
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
        }).then(function (newReport) {
            _this.issuePostedAlert(label);
            //          this.navCtrl.pop();
        }, function (error) {
            console.log(error);
        });
        //this.showSuccesfulUploadAlert();
        //this.presentModal();
        //let x = 500;
        // this.presentAlert()
    };
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
    ReportsPage.prototype.issuePostedAlert = function (type) {
        var alert = this.alertCtrl.create({
            title: 'Issue Posted Successfully!',
            subTitle: 'You have submitted a ' + type + ' issue successfully. The security admin will contact you for details shortly',
            buttons: ['OK']
        });
        alert.present();
        this.activity = "Issue " + type + " posted";
        this.logActivity(this.activity);
    };
    ReportsPage.prototype.logActivity = function (activity) {
        Promise.resolve(this.logs.push({ activity: "rating submitted",
            timestamp: this.timestamp,
            owner: (JSON.parse(localStorage.getItem('thepostemail')))
        }));
    };
    ReportsPage.prototype.checkLength = function (question) {
        this.lengthLeft = 350 - question.length;
        //console.log(question.length)
    };
    ReportsPage.prototype.ionViewDidEnter = function () {
        //this.loadData();
        if (localStorage.getItem('thepostemail') == null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        }
        else {
            // this.alertLogin()
        }
        if (localStorage.getItem('omeyaSecurity') == 'denied') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__access_denied_access_denied__["a" /* AccessDeniedPage */]);
        }
        else {
            //  this.navCtrl.setRoot(HomePage);//
            console.log('nothing found');
        }
        if (JSON.parse(localStorage.getItem('thepostemail')) == 'editor@thepost.com') {
            //this.presentAlertConfirm(ShoppingItem);
            //this.getData();
        }
        else if (JSON.parse(localStorage.getItem('thepostemail')) == 'admin@thepost.com') {
            //this.presentAlertConfirm(ShoppingItem);
            //this.getData();
        }
        else {
            this.alertLogin();
        }
    };
    ReportsPage.prototype.navigateToAddShoppingPage = function () {
        // this.navCtrl.push(AdminAddPage);
    };
    ReportsPage.prototype.alertLogin = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Access Denied!',
            subTitle: 'Only The Post Editors can post new stories',
            buttons: [{ text: 'OK',
                    handler: function () {
                        // this.shopListOpenAsync = "";
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__latest_news_latest_news__["a" /* LatestNewsPage */]);
                    }
                }]
        });
        alert.present();
    };
    ReportsPage.prototype.promptAuthenticate = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                        //this.nav.setRoot(TabsPage);
                    }
                },
                {
                    text: 'Register',
                    handler: function (data) {
                        console.log('Saved clicked' + data.email + data.password);
                        _this.signup(data.email, data.password);
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        console.log('Login clicked');
                        _this.login(data.email, data.password);
                    }
                }
            ]
        });
        prompt.present();
    };
    /*   alertLogin(){
           
       }*/
    ReportsPage.prototype.signup = function (email, password) {
        this.afAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
            localStorage.setItem('email', JSON.stringify(email));
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            //this.ionViewDidEnter();
        });
    };
    ReportsPage.prototype.login = function (email, password) {
        this.afAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
            localStorage.setItem('email', JSON.stringify(email));
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    ReportsPage.prototype.logout = function () {
        this.afAuth
            .auth
            .signOut();
    };
    ReportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reports',template:/*ion-inline-start:"C:\apps\thepost\src\pages\reports\reports.html"*/'<!--\n  Generated template for the ReportsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Submit A Report</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="logo">\n    <img no-padding src="assets/imgs/ologo.png"/>\n  </div>\n  <br>\n  <br>\n<ion-item>\n  <ion-row text-wrap>\n   <p>Featured Image: Select an image that will provide more information about your report</p> \n  </ion-row>\n<ion-row>			\n<ion-col col-6>\n        <button ion-button  small (click)="capture()" type="camera"  round>\n          <ion-icon name="md-camera" no-padding ></ion-icon> Camera\n          </button>\n</ion-col>\n\n<ion-col col-6>\n				<button ion-button  small (click)="selectImage()" color="clear"  round>\n          <ion-icon name="md-image" no-padding ></ion-icon> Gallery\n          </button>\n</ion-col>\n    <ion-col col-12>\n    <ion-card>\n      <img [src]="captureDataUrl" *ngIf="captureDataUrl"/>\n  </ion-card>\n</ion-col>             \n</ion-row>\n</ion-item>\n\n\n<ion-item>\n    <ion-row text-wrap>\n        <p>Additional Image: Select an image that will provide additional information about your report</p> \n       </ion-row>\n       <ion-row>			\n          <ion-col col-6>\n                  <button ion-button  small (click)="capture2()" type="camera"  round>\n                    <ion-icon name="md-camera" no-padding ></ion-icon> Camera\n                    </button>\n          </ion-col>\n          \n          <ion-col col-6>\n                  <button ion-button  small (click)="selectImage2()" color="clear"  round>\n                    <ion-icon name="md-image" no-padding ></ion-icon> Gallery\n                    </button>\n          </ion-col>\n              <ion-col col-12>\n              <ion-card>\n                <img [src]="captureDataUrl2" *ngIf="captureDataUrl2"/>\n            </ion-card>\n          </ion-col>             \n          </ion-row>\n        </ion-item>\n\n\n<!--\n<ion-item>\n    <ion-row text-wrap>\n        <p>Image 3: Select an image that will provide more information about your report</p> \n       </ion-row>\n       <ion-row>			\n          <ion-col col-6>\n                  <button ion-button  small (click)="capture3()" type="camera"  round>\n                    <ion-icon name="md-camera" no-padding ></ion-icon> Camera\n                    </button>\n          </ion-col>\n          \n          <ion-col col-6>\n                  <button ion-button  small (click)="selectImage3()" color="clear"  round>\n                    <ion-icon name="md-image" no-padding ></ion-icon> Gallery\n                    </button>\n          </ion-col>\n              <ion-col col-12>\n              <ion-card>\n                <img [src]="captureDataUrl3" *ngIf="captureDataUrl3"/>\n            </ion-card>\n          </ion-col>             \n          </ion-row>\n        </ion-item>\n\n\n<ion-item>\n    <ion-row text-wrap>\n        <p>Image 4: Select an image that will provide more information about your report</p> \n       </ion-row>\n       <ion-row>			\n          <ion-col col-6>\n                  <button ion-button  small (click)="capture4()" type="camera"  round>\n                    <ion-icon name="md-camera" no-padding ></ion-icon> Camera\n                    </button>\n          </ion-col>\n          \n          <ion-col col-6>\n                  <button ion-button  small (click)="selectImage4()" color="clear"  round>\n                    <ion-icon name="md-image" no-padding ></ion-icon> Gallery\n                    </button>\n          </ion-col>\n              <ion-col col-12>\n              <ion-card>\n                <img [src]="captureDataUrl4" *ngIf="captureDataUrl4"/>\n            </ion-card>\n          </ion-col>             \n          </ion-row>\n        </ion-item>\n-->\n\n<ion-list no-lines>\n  <ion-label padding stacked color="primary">Headline</ion-label>\n<!--  <ion-item>\n    <ion-textarea padding [(ngModel)]="report" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n  </ion-item>\n-->\n  <div style="display:flex">\n    <ion-item id="rounded">\n\n\n       <textarea wrap-text  cols="28" style="width:auto; font-family:monospace;" placeholder="Type in a brief description, max 100 characters" #myInput id="myInput" rows="2" maxLength="100" ng-trim="false"  (input)="checkLength(headline)" [(ngModel)]="headline"></textarea>\n       <p>{{lengthLeft}} left</p>\n    </ion-item>\n    </div>\n</ion-list>\n\n<ion-list no-lines>\n  <ion-label padding stacked color="primary">Exerpt</ion-label>\n<!--  <ion-item>\n    <ion-textarea padding [(ngModel)]="report" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n  </ion-item>\n-->\n  <div style="display:flex">\n    <ion-item id="rounded">\n\n\n       <textarea wrap-text  cols="28" style="width:auto; font-family:monospace;" placeholder="Type in a brief description, max 150 characters" #myInput id="myInput" rows="3" maxLength="150" ng-trim="false"  (input)="checkLength(exerpt)" [(ngModel)]="exerpt"></textarea>\n       <p>{{lengthLeft}} left</p>\n    </ion-item>\n    </div>\n</ion-list>\n\n<ion-list no-lines>\n  <ion-label padding stacked color="primary">Story</ion-label>\n<!--  <ion-item>\n    <ion-textarea padding [(ngModel)]="report" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n  </ion-item>\n-->\n  <div style="display:flex">\n    <ion-item id="rounded">\n\n\n       <textarea wrap-text  cols="28" style="width:auto; font-family:monospace;" placeholder="Type in a brief description, max 500 characters" #myInput id="myInput" rows="6" maxLength="500" ng-trim="false"  (input)="checkLength(story)" [(ngModel)]="story"></textarea>\n       <p>{{lengthLeft}} left</p>\n    </ion-item>\n    </div>\n</ion-list>\n\n  <ion-item>\n      <ion-label>News Label</ion-label>\n      <ion-select [(ngModel)]="label" >\n        <ion-option value="LatestNews">Latest News</ion-option>\n        <ion-option value="LocalNews">Local News</ion-option>\n        <ion-option value="RegionalNews">Regional News</ion-option>\n        <ion-option value="InternationalNews">International News</ion-option>\n        <ion-option value="LatestEntertainment">Latest Entertainment</ion-option>\n        <ion-option value="LocalEntertainment">Local Entertainment</ion-option>\n        <ion-option value="InternationalEntertainment">International Entertainment</ion-option>\n        <ion-option value="Whatson">Whats On</ion-option>\n        <ion-option value="LatestSports">Latest Sports</ion-option>\n        <ion-option value="LocalSports">Local Sports</ion-option>\n        <ion-option value="InternationalSports">International Sports</ion-option>\n        </ion-select>\n    </ion-item>\n\n\n <!--   <ion-card>\n    <ion-row>\n      Please make my matter\n      <ion-col>\n    <ion-item>\n      <ion-label>Private</ion-label>\n      <ion-checkbox color="dark" checked="false"></ion-checkbox>\n    </ion-item>\n  </ion-col>\n\n  <ion-col>\n    <ion-item>\n      <ion-label>Public</ion-label>\n      <ion-checkbox color="dark" checked="true"></ion-checkbox>\n    </ion-item>\n  </ion-col>\n  </ion-row>\n  </ion-card>-->\n\n  <div padding>\n    <button ion-button block round type="submit" [disabled]="!headline || !exerpt || !story || !label" (click)="submitreport(headline, exerpt,story, label)">Submit</button>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\reports\reports.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["AngularFireAuth"]])
    ], ReportsPage);
    return ReportsPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_add_admin_add__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_edit_admin_edit__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__access_denied_access_denied__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shopping_list_shopping_list__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { UsersItem } from '../../models/users/users-interface';
/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    //shoppingItem = {} as UsersItem;
    function AdminPage(navCtrl, actionSheetCtrl, database, alertCtrl, 
        //public shoppinglistDB: ShoppingServiceProvider,
        navParams) {
        //  You can update your code
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        //Open Issues
        console.log('This is the shopListAsync' + this.shopListOpenAsync);
        //Closed Issues
        this.shoppingListClosedRef$ = database.list('accounts', function (ref) {
            return ref.orderByChild('access').equalTo('granted');
        });
        this.shopListClosedAsync = this.shoppingListClosedRef$.snapshotChanges();
        //My Issues
        this.shoppingListMyRef$ = database.list('accounts', function (ref) {
            return ref.orderByChild('access').equalTo('suspended');
        });
        this.shopListMyAsync = this.shoppingListMyRef$.snapshotChanges();
        //this.shoppingList = database.list('shopping-list').valueChanges();
        this.shoppingListRef$ = database.list('accounts');
        //, ref => { return ref.orderByChild('email').equalTo('l@l.com')  })//Returns specific content
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log(this.shopListAsync);
        this.reports = "denied";
        //  this.shoppingListRef$.subscribe(x +)
    }
    AdminPage.prototype.selectShoppingItem = function (ShoppingItem) {
        var _this = this;
        this.actionSheetCtrl.create({
            title: 'Manage Users',
            buttons: [
                { text: 'Edit',
                    handler: function () {
                        console.log(ShoppingItem.key);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__admin_edit_admin_edit__["a" /* AdminEditPage */], { shoppingItemId: ShoppingItem.key });
                    }
                },
                { text: 'Delete',
                    handler: function () {
                        _this.shoppingListRef$.remove(ShoppingItem.key);
                    }
                },
                { text: 'Cancel',
                    handler: function () {
                    }
                }
            ]
        }).present();
    };
    AdminPage.prototype.getData = function () {
        this.shoppingListOpenRef$ = this.database.list('accounts', function (ref) {
            return ref.orderByChild('access').equalTo('denied');
        });
        this.shopListOpenAsync = this.shoppingListOpenRef$.snapshotChanges();
    };
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoppingListPage');
    };
    AdminPage.prototype.ionViewDidEnter = function () {
        //this.loadData();
        if (localStorage.getItem('omeyaemail') == null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }
        else {
            // this.alertLogin()
        }
        if (localStorage.getItem('omeyaSecurity') == 'denied') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__access_denied_access_denied__["a" /* AccessDeniedPage */]);
        }
        else {
            //  this.navCtrl.setRoot(HomePage);//
            console.log('nothing found');
        }
        if (JSON.parse(localStorage.getItem('omeyaemail')) == 'admin@omeyaestate.com') {
            //this.presentAlertConfirm(ShoppingItem);
            this.getData();
        }
        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security@omeyaestate.com') {
            //this.presentAlertConfirm(ShoppingItem);
            this.getData();
        }
        else {
            this.alertLogin();
        }
    };
    AdminPage.prototype.navigateToAddShoppingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__admin_add_admin_add__["a" /* AdminAddPage */]);
    };
    AdminPage.prototype.alertLogin = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Access Denied!',
            subTitle: 'Only the administrators can edit user authorizations',
            buttons: [{ text: 'OK',
                    handler: function () {
                        // this.shopListOpenAsync = "";
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__shopping_list_shopping_list__["a" /* ShoppingListPage */]);
                    }
                }]
        });
        alert.present();
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\apps\thepost\src\pages\admin\admin.html"*/'<!--\n  Generated template for the AdminPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle item-start>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>User Administration</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="reports">\n      <ion-segment-button value="denied">\n        Denied <span>{{(shopListOpenAsync | async)?.length}}</span>\n      </ion-segment-button>\n      <ion-segment-button value="granted">\n        Granted <span>{{(shopListClosedAsync | async)?.length}}</span>\n      </ion-segment-button>\n      <ion-segment-button value="suspended">\n        Susp <span>{{(shopListMyAsync | async)?.length}}</span>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div [ngSwitch]="reports">\n\n        <ion-list *ngSwitchCase="\'denied\'"> \n\n    <ion-list no-padding *ngFor="let item of (shopListOpenAsync | async)?.slice().reverse()">\n      <ion-card (click)="selectShoppingItem(item)">\n      <ion-item>\n      \n            <h2>First Name:{{item.payload.val().firstname}}</h2>\n            <p>Last Name:{{item.payload.val().lastname}}</p>\n            <p style="color:red">Access Granted?:{{item.payload.val().access}}</p>\n            <p>Email:{{item.payload.val().email}}</p>\n            <p>User Role:{{item.payload.val().role}}</p>\n            <p>Phone Number:{{item.payload.val().phone}}</p>\n            <p>Address:{{item.payload.val().address}}</p>\n                 <ion-item>\n              <span item-start><p>Date Created: {{item.payload.val().timestamp | date:\'yyyy-MM-dd HH:mm:ss\'}} </p></span>   \n          </ion-item>    \n          </ion-item>\n</ion-card> \n\n</ion-list>\n</ion-list>\n\n<ion-list *ngSwitchCase="\'granted\'"> \n\n    <ion-list no-padding *ngFor="let item of (shopListClosedAsync | async)?.slice().reverse()">\n      <ion-card (click)="selectShoppingItem(item)">\n      <ion-item>\n      \n            <h2>First Name:{{item.payload.val().firstname}}</h2>\n            <p>Last Name:{{item.payload.val().lastname}}</p>\n            <p style="color:red">Access Granted?:{{item.payload.val().access}}</p>\n            <p>Email:{{item.payload.val().email}}</p>\n            <p>User Role:{{item.payload.val().role}}</p>\n            <p>Phone Number:{{item.payload.val().phone}}</p>\n            <p>Address:{{item.payload.val().address}}</p>\n                 <ion-item>\n              <span item-start><p>Date Created: {{item.payload.val().timestamp | date:\'yyyy-MM-dd HH:mm:ss\'}} </p></span>   \n          </ion-item>    \n          </ion-item>\n</ion-card> \n\n</ion-list>\n</ion-list>\n\n<ion-list *ngSwitchCase="\'suspended\'"> \n\n    <ion-list no-padding *ngFor="let item of (shopListMyAsync | async)?.slice().reverse()">\n      <ion-card (click)="selectShoppingItem(item)">\n      <ion-item>\n      \n            <h2>First Name:{{item.payload.val().firstname}}</h2>\n            <p>Last Name:{{item.payload.val().lastname}}</p>\n            <p style="color:red">Access Granted?:{{item.payload.val().access}}</p>\n            <p>Email:{{item.payload.val().email}}</p>\n            <p>User Role:{{item.payload.val().role}}</p>\n            <p>Phone Number:{{item.payload.val().phone}}</p>\n            <p>Address:{{item.payload.val().address}}</p>\n                 <ion-item>\n              <span item-start><p>Date Created: {{item.payload.val().timestamp | date:\'yyyy-MM-dd HH:mm:ss\'}} </p></span>   \n          </ion-item>    \n          </ion-item>\n</ion-card> \n\n</ion-list>\n</ion-list>\n\n</div>\n    \n\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AdminAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminAddPage = /** @class */ (function () {
    function AdminAddPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdminAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminAddPage');
    };
    AdminAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-add',template:/*ion-inline-start:"C:\apps\thepost\src\pages\admin-add\admin-add.html"*/'<!--\n  Generated template for the AdminAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>admin-add</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\admin-add\admin-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AdminAddPage);
    return AdminAddPage;
}());

//# sourceMappingURL=admin-add.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AdminEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminEditPage = /** @class */ (function () {
    function AdminEditPage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.shoppingItem = {};
        var shoppingItemId = this.navParams.get('shoppingItemId');
        console.log(shoppingItemId);
        this.shoppingItemRef$ = this.database.object("accounts/" + shoppingItemId);
        this.shoppingItemSubscription = this.shoppingItemRef$.valueChanges().subscribe(function (shoppingItem) { return _this.shoppingItem = shoppingItem; });
    }
    AdminEditPage.prototype.editShoppingItem = function (shoppingItem) {
        this.shoppingItemRef$.update(shoppingItem);
        this.navCtrl.pop();
    };
    AdminEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditShoppingItemPage');
    };
    AdminEditPage.prototype.ionViewWillLeave = function () {
        this.shoppingItemSubscription.unsubscribe();
    };
    AdminEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-edit',template:/*ion-inline-start:"C:\apps\thepost\src\pages\admin-edit\admin-edit.html"*/'<!--\n  Generated template for the EditShoppingItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>{{shoppingItem.firstname}}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-item>\n      <ion-label floating>First Name</ion-label>\n      <ion-input disabled type="text" [(ngModel)]="shoppingItem.firstname"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label floating>Last Name</ion-label>\n      <ion-input disabled type="text" [(ngModel)]="shoppingItem.lastname"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating>E-mail</ion-label>\n        <ion-input disabled type="text" [(ngModel)]="shoppingItem.email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label floating>User Role</ion-label>\n          <ion-input disabled type="text" [(ngModel)]="shoppingItem.role"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Phone Number</ion-label>\n            <ion-input disabled type="text" [(ngModel)]="shoppingItem.phone"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label floating>Address</ion-label>\n              <ion-input disabled type="text" [(ngModel)]="shoppingItem.address"></ion-input>\n            </ion-item>\n    <ion-item>\n        <ion-label floating>Edit Access</ion-label>\n    <ion-select [(ngModel)]="shoppingItem.access">\n        <ion-option value="denied">Denied</ion-option>\n        <ion-option value="granted">Granted</ion-option>\n        <ion-option value="suspended">Suspended</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <button color="danger" ion-button round (click)="editShoppingItem(shoppingItem)">Edit User Access</button>\n    \n  </ion-content>\n  \n'/*ion-inline-end:"C:\apps\thepost\src\pages\admin-edit\admin-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], AdminEditPage);
    return AdminEditPage;
}());

//# sourceMappingURL=admin-edit.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatsonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the WhatsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhatsonPage = /** @class */ (function () {
    function WhatsonPage(navCtrl, navParams, fbase, database, afAuth) {
        //Open Issues
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbase = fbase;
        this.database = database;
        this.afAuth = afAuth;
        this.showFooter = false;
    }
    WhatsonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LatestNewsPage');
        console.log(this.advertsList);
        this.initializeItems();
    };
    WhatsonPage.prototype.initializeItems = function () {
        var _this = this;
        this.shoppingListRef$ = this.database.list('news', function (ref) {
            return ref.orderByChild('newslabel').equalTo('Latest');
        });
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        //this.advertsRef = firebase.database().ref('/adverts/');
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        this.advertsRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/adverts/');
        this.content.resize();
        this.advertsRef
            .on('value', function (advertsList) {
            var adverts = [];
            advertsList.forEach(function (advertisement) {
                adverts.push(advertisement.val());
                return false;
            });
            _this.advertsList = adverts;
            _this.loadedAdvertsList = adverts;
        });
    };
    WhatsonPage.prototype.selectShoppingItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__["a" /* IssueDetailPage */], { item: item });
    };
    WhatsonPage.prototype.commentItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: item.key });
    };
    WhatsonPage.prototype.onInput = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.shopListAsync = this.shopListAsync.filter(function (v) {
            if (v.exerpt && v.story && v.headline && q) {
                if (v.exerpt.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.story.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.headline.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        //   console.log(q, this.advertsList.length);
        //this.presentToast('results found '+this.advertsList.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], WhatsonPage.prototype, "content", void 0);
    WhatsonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-whatson',template:/*ion-inline-start:"C:\apps\thepost\src\pages\whatson\whatson.html"*/'<!--\n  Generated template for the WhatsonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Whats On</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding  has-bouncing="true">\n  <ion-list    *ngFor="let item of shopListAsync | async">\n   <ion-card>\n     <ion-item (click)="selectShoppingItem(item)">   \n       \n                 <img class="img" src={{item.payload.val().leadimg}}/>\n \n \n       \n         \n       <h2 text-wrap [innerHTML]="item.payload.val().headline"></h2>\n       <h4>{{item.payload.val().issuedate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n     <p text-wrap [innerHTML]="item.payload.val().exerpt"></p>\n      Author: <p [innerHTML]="item.payload.val().author"></p>\n      \n     </ion-item>\n     <button ion-button (click)="commentItem(item)" ion-icon="chatboxes">Comment</button>\n   </ion-card>\n </ion-list>\n </ion-content>\n <ion-footer  class="dynamic-height" *ngFor="let slider of advertsList">\n   <ion-toolbar>\n   <ion-slides class="slid" autoplay="3000" loop="true" speed="1000">\n \n   <ion-slide>\n         <img class="img" src={{slider.url}}/>\n     </ion-slide>\n \n </ion-slides>\n </ion-toolbar>\n  \n </ion-footer>  \n <ion-searchbar color="primary" [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n </ion-searchbar>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\whatson\whatson.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], WhatsonPage);
    return WhatsonPage;
}());

//# sourceMappingURL=whatson.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternationalnewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the InternationalnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InternationalnewsPage = /** @class */ (function () {
    function InternationalnewsPage(navCtrl, navParams, fbase, database, afAuth) {
        //Open Issues
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbase = fbase;
        this.database = database;
        this.afAuth = afAuth;
        this.showFooter = false;
    }
    InternationalnewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LatestNewsPage');
        console.log(this.advertsList);
        this.initializeItems();
    };
    InternationalnewsPage.prototype.initializeItems = function () {
        var _this = this;
        this.shoppingListRef$ = this.database.list('news', function (ref) {
            return ref.orderByChild('locale').equalTo('InternationalNews');
        });
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        //this.advertsRef = firebase.database().ref('/adverts/');
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        this.advertsRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/adverts/');
        this.content.resize();
        this.advertsRef
            .on('value', function (advertsList) {
            var adverts = [];
            advertsList.forEach(function (advertisement) {
                adverts.push(advertisement.val());
                return false;
            });
            _this.advertsList = adverts;
            _this.loadedAdvertsList = adverts;
        });
    };
    InternationalnewsPage.prototype.selectShoppingItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__["a" /* IssueDetailPage */], { item: item });
    };
    InternationalnewsPage.prototype.commentItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: item.key });
    };
    InternationalnewsPage.prototype.onInput = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.shopListAsync = this.shopListAsync.filter(function (v) {
            if (v.exerpt && v.story && v.headline && q) {
                if (v.exerpt.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.story.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.headline.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        //   console.log(q, this.advertsList.length);
        //this.presentToast('results found '+this.advertsList.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], InternationalnewsPage.prototype, "content", void 0);
    InternationalnewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-internationalnews',template:/*ion-inline-start:"C:\apps\thepost\src\pages\internationalnews\internationalnews.html"*/'<!--\n  Generated template for the InternationalnewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>International News</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding  has-bouncing="true">\n  <ion-list    *ngFor="let item of shopListAsync | async">\n   <ion-card>\n     <ion-item (click)="selectShoppingItem(item)">   \n       \n                 <img class="img" src={{item.payload.val().leadimg}}/>\n \n \n       \n         \n       <h2 text-wrap [innerHTML]="item.payload.val().headline"></h2>\n       <h4>{{item.payload.val().issuedate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n     <p text-wrap [innerHTML]="item.payload.val().exerpt"></p>\n      Author: <p [innerHTML]="item.payload.val().author"></p>\n      \n     </ion-item>\n     <button ion-button (click)="commentItem(item)" ion-icon="chatboxes">Comment</button>\n   </ion-card>\n </ion-list>\n </ion-content>\n <ion-footer  class="dynamic-height" *ngFor="let slider of advertsList">\n   <ion-toolbar>\n   <ion-slides class="slid" autoplay="3000" loop="true" speed="1000">\n \n   <ion-slide>\n         <img class="img" src={{slider.url}}/>\n     </ion-slide>\n \n </ion-slides>\n </ion-toolbar>\n  \n </ion-footer>  \n <ion-searchbar color="primary" [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n </ion-searchbar>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\internationalnews\internationalnews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], InternationalnewsPage);
    return InternationalnewsPage;
}());

//# sourceMappingURL=internationalnews.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfricanewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the AfricanewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AfricanewsPage = /** @class */ (function () {
    function AfricanewsPage(navCtrl, navParams, fbase, database, afAuth) {
        //Open Issues
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbase = fbase;
        this.database = database;
        this.afAuth = afAuth;
        this.showFooter = false;
    }
    AfricanewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LatestNewsPage');
        console.log(this.advertsList);
        this.initializeItems();
    };
    AfricanewsPage.prototype.initializeItems = function () {
        var _this = this;
        this.shoppingListRef$ = this.database.list('news', function (ref) {
            return ref.orderByChild('locale').equalTo('RegionalNews');
        });
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        //this.advertsRef = firebase.database().ref('/adverts/');
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        this.advertsRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/adverts/');
        this.content.resize();
        this.advertsRef
            .on('value', function (advertsList) {
            var adverts = [];
            advertsList.forEach(function (advertisement) {
                adverts.push(advertisement.val());
                return false;
            });
            _this.advertsList = adverts;
            _this.loadedAdvertsList = adverts;
        });
    };
    AfricanewsPage.prototype.selectShoppingItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__["a" /* IssueDetailPage */], { item: item });
    };
    AfricanewsPage.prototype.commentItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: item.key });
    };
    AfricanewsPage.prototype.onInput = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.shopListAsync = this.shopListAsync.filter(function (v) {
            if (v.exerpt && v.story && v.headline && q) {
                if (v.exerpt.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.story.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.headline.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        //   console.log(q, this.advertsList.length);
        //this.presentToast('results found '+this.advertsList.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], AfricanewsPage.prototype, "content", void 0);
    AfricanewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-africanews',template:/*ion-inline-start:"C:\apps\thepost\src\pages\africanews\africanews.html"*/'<!--\n  Generated template for the AfricanewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Africa News</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding  has-bouncing="true">\n  <ion-list    *ngFor="let item of shopListAsync | async">\n   <ion-card>\n     <ion-item (click)="selectShoppingItem(item)">   \n       \n                 <img class="img" src={{item.payload.val().leadimg}}/>\n \n \n       \n         \n       <h2 text-wrap [innerHTML]="item.payload.val().headline"></h2>\n       <h4>{{item.payload.val().issuedate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n     <p text-wrap [innerHTML]="item.payload.val().exerpt"></p>\n      Author: <p [innerHTML]="item.payload.val().author"></p>\n      \n     </ion-item>\n     <button ion-button (click)="commentItem(item)" ion-icon="chatboxes">Comment</button>\n   </ion-card>\n </ion-list>\n </ion-content>\n <ion-footer  class="dynamic-height" *ngFor="let slider of advertsList">\n   <ion-toolbar>\n   <ion-slides class="slid" autoplay="3000" loop="true" speed="1000">\n \n   <ion-slide>\n         <img class="img" src={{slider.url}}/>\n     </ion-slide>\n \n </ion-slides>\n </ion-toolbar>\n  \n </ion-footer>  \n <ion-searchbar color="primary" [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n </ion-searchbar>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\africanews\africanews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], AfricanewsPage);
    return AfricanewsPage;
}());

//# sourceMappingURL=africanews.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternationalentnewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the InternationalentnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InternationalentnewsPage = /** @class */ (function () {
    function InternationalentnewsPage(navCtrl, navParams, fbase, database, afAuth) {
        //Open Issues
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbase = fbase;
        this.database = database;
        this.afAuth = afAuth;
        this.showFooter = false;
    }
    InternationalentnewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LatestNewsPage');
        console.log(this.advertsList);
        this.initializeItems();
    };
    InternationalentnewsPage.prototype.initializeItems = function () {
        var _this = this;
        this.shoppingListRef$ = this.database.list('news', function (ref) {
            return ref.orderByChild('newslabel').equalTo('IntLatest');
        });
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        //this.advertsRef = firebase.database().ref('/adverts/');
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        this.advertsRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/adverts/');
        this.content.resize();
        this.advertsRef
            .on('value', function (advertsList) {
            var adverts = [];
            advertsList.forEach(function (advertisement) {
                adverts.push(advertisement.val());
                return false;
            });
            _this.advertsList = adverts;
            _this.loadedAdvertsList = adverts;
        });
    };
    InternationalentnewsPage.prototype.selectShoppingItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__["a" /* IssueDetailPage */], { item: item });
    };
    InternationalentnewsPage.prototype.commentItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: item.key });
    };
    InternationalentnewsPage.prototype.onInput = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.shopListAsync = this.shopListAsync.filter(function (v) {
            if (v.exerpt && v.story && v.headline && q) {
                if (v.exerpt.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.story.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.headline.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        //   console.log(q, this.advertsList.length);
        //this.presentToast('results found '+this.advertsList.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], InternationalentnewsPage.prototype, "content", void 0);
    InternationalentnewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-internationalentnews',template:/*ion-inline-start:"C:\apps\thepost\src\pages\internationalentnews\internationalentnews.html"*/'<!--\n  Generated template for the InternationalentnewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>International Entertainment News</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding  has-bouncing="true">\n  <ion-list    *ngFor="let item of shopListAsync | async">\n   <ion-card>\n     <ion-item (click)="selectShoppingItem(item)">   \n       \n                 <img class="img" src={{item.payload.val().leadimg}}/>\n \n \n       \n         \n       <h2 text-wrap [innerHTML]="item.payload.val().headline"></h2>\n       <h4>{{item.payload.val().issuedate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n     <p text-wrap [innerHTML]="item.payload.val().exerpt"></p>\n      Author: <p [innerHTML]="item.payload.val().author"></p>\n      \n     </ion-item>\n     <button ion-button (click)="commentItem(item)" ion-icon="chatboxes">Comment</button>\n   </ion-card>\n </ion-list>\n </ion-content>\n <ion-footer  class="dynamic-height" *ngFor="let slider of advertsList">\n   <ion-toolbar>\n   <ion-slides class="slid" autoplay="3000" loop="true" speed="1000">\n \n   <ion-slide>\n         <img class="img" src={{slider.url}}/>\n     </ion-slide>\n \n </ion-slides>\n </ion-toolbar>\n  \n </ion-footer>  \n <ion-searchbar color="primary" [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n </ion-searchbar>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\internationalentnews\internationalentnews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], InternationalentnewsPage);
    return InternationalentnewsPage;
}());

//# sourceMappingURL=internationalentnews.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternationalsportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the InternationalsportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InternationalsportPage = /** @class */ (function () {
    function InternationalsportPage(navCtrl, navParams, fbase, database, afAuth) {
        //Open Issues
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbase = fbase;
        this.database = database;
        this.afAuth = afAuth;
        this.showFooter = false;
    }
    InternationalsportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LatestNewsPage');
        console.log(this.advertsList);
        this.initializeItems();
    };
    InternationalsportPage.prototype.initializeItems = function () {
        var _this = this;
        this.shoppingListRef$ = this.database.list('news', function (ref) {
            return ref.orderByChild('newslabel').equalTo('Latest');
        });
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        //this.advertsRef = firebase.database().ref('/adverts/');
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        this.advertsRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/adverts/');
        this.content.resize();
        this.advertsRef
            .on('value', function (advertsList) {
            var adverts = [];
            advertsList.forEach(function (advertisement) {
                adverts.push(advertisement.val());
                return false;
            });
            _this.advertsList = adverts;
            _this.loadedAdvertsList = adverts;
        });
    };
    InternationalsportPage.prototype.selectShoppingItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__["a" /* IssueDetailPage */], { item: item });
    };
    InternationalsportPage.prototype.commentItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: item.key });
    };
    InternationalsportPage.prototype.onInput = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.shopListAsync = this.shopListAsync.filter(function (v) {
            if (v.exerpt && v.story && v.headline && q) {
                if (v.exerpt.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.story.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.headline.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        //   console.log(q, this.advertsList.length);
        //this.presentToast('results found '+this.advertsList.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], InternationalsportPage.prototype, "content", void 0);
    InternationalsportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-internationalsport',template:/*ion-inline-start:"C:\apps\thepost\src\pages\internationalsport\internationalsport.html"*/'<!--\n  Generated template for the InternationalsportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>International Sport</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding  has-bouncing="true">\n  <ion-list    *ngFor="let item of shopListAsync | async">\n   <ion-card>\n     <ion-item (click)="selectShoppingItem(item)">   \n       \n                 <img class="img" src={{item.payload.val().leadimg}}/>\n \n \n       \n         \n       <h2 text-wrap [innerHTML]="item.payload.val().headline"></h2>\n       <h4>{{item.payload.val().issuedate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n     <p text-wrap [innerHTML]="item.payload.val().exerpt"></p>\n      Author: <p [innerHTML]="item.payload.val().author"></p>\n      \n     </ion-item>\n     <button ion-button (click)="commentItem(item)" ion-icon="chatboxes">Comment</button>\n   </ion-card>\n </ion-list>\n </ion-content>\n <ion-footer  class="dynamic-height" *ngFor="let slider of advertsList">\n   <ion-toolbar>\n   <ion-slides class="slid" autoplay="3000" loop="true" speed="1000">\n \n   <ion-slide>\n         <img class="img" src={{slider.url}}/>\n     </ion-slide>\n \n </ion-slides>\n </ion-toolbar>\n  \n </ion-footer>  \n <ion-searchbar color="primary" [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n </ion-searchbar>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\internationalsport\internationalsport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], InternationalsportPage);
    return InternationalsportPage;
}());

//# sourceMappingURL=internationalsport.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestsportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LatestsportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LatestsportPage = /** @class */ (function () {
    function LatestsportPage(navCtrl, navParams, fbase, database, afAuth) {
        //Open Issues
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbase = fbase;
        this.database = database;
        this.afAuth = afAuth;
        this.showFooter = false;
    }
    LatestsportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LatestNewsPage');
        console.log(this.advertsList);
        this.initializeItems();
    };
    LatestsportPage.prototype.initializeItems = function () {
        var _this = this;
        this.shoppingListRef$ = this.database.list('news', function (ref) {
            return ref.orderByChild('newslabel').equalTo('Latest');
        });
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        //this.advertsRef = firebase.database().ref('/adverts/');
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        this.advertsRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/adverts/');
        this.content.resize();
        this.advertsRef
            .on('value', function (advertsList) {
            var adverts = [];
            advertsList.forEach(function (advertisement) {
                adverts.push(advertisement.val());
                return false;
            });
            _this.advertsList = adverts;
            _this.loadedAdvertsList = adverts;
        });
    };
    LatestsportPage.prototype.selectShoppingItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__["a" /* IssueDetailPage */], { item: item });
    };
    LatestsportPage.prototype.commentItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: item.key });
    };
    LatestsportPage.prototype.onInput = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.shopListAsync = this.shopListAsync.filter(function (v) {
            if (v.exerpt && v.story && v.headline && q) {
                if (v.exerpt.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.story.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.headline.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        //   console.log(q, this.advertsList.length);
        //this.presentToast('results found '+this.advertsList.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], LatestsportPage.prototype, "content", void 0);
    LatestsportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-latestsport',template:/*ion-inline-start:"C:\apps\thepost\src\pages\latestsport\latestsport.html"*/'<!--\n  Generated template for the LatestsportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Latest Sport</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding  has-bouncing="true">\n  <ion-list    *ngFor="let item of shopListAsync | async">\n   <ion-card>\n     <ion-item (click)="selectShoppingItem(item)">   \n       \n                 <img class="img" src={{item.payload.val().leadimg}}/>\n \n \n       \n         \n       <h2 text-wrap [innerHTML]="item.payload.val().headline"></h2>\n       <h4>{{item.payload.val().issuedate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n     <p text-wrap [innerHTML]="item.payload.val().exerpt"></p>\n      Author: <p [innerHTML]="item.payload.val().author"></p>\n      \n     </ion-item>\n     <button ion-button (click)="commentItem(item)" ion-icon="chatboxes">Comment</button>\n   </ion-card>\n </ion-list>\n </ion-content>\n <ion-footer  class="dynamic-height" *ngFor="let slider of advertsList">\n   <ion-toolbar>\n   <ion-slides class="slid" autoplay="3000" loop="true" speed="1000">\n \n   <ion-slide>\n         <img class="img" src={{slider.url}}/>\n     </ion-slide>\n \n </ion-slides>\n </ion-toolbar>\n  \n </ion-footer>  \n <ion-searchbar color="primary" [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n </ion-searchbar>'/*ion-inline-end:"C:\apps\thepost\src\pages\latestsport\latestsport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], LatestsportPage);
    return LatestsportPage;
}());

//# sourceMappingURL=latestsport.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalsportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LocalsportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocalsportPage = /** @class */ (function () {
    function LocalsportPage(navCtrl, navParams, fbase, database, afAuth) {
        //Open Issues
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbase = fbase;
        this.database = database;
        this.afAuth = afAuth;
        this.showFooter = false;
    }
    LocalsportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LatestNewsPage');
        console.log(this.advertsList);
        this.initializeItems();
    };
    LocalsportPage.prototype.initializeItems = function () {
        var _this = this;
        this.shoppingListRef$ = this.database.list('news', function (ref) {
            return ref.orderByChild('newslabel').equalTo('Latest');
        });
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        //this.advertsRef = firebase.database().ref('/adverts/');
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        this.advertsRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/adverts/');
        this.content.resize();
        this.advertsRef
            .on('value', function (advertsList) {
            var adverts = [];
            advertsList.forEach(function (advertisement) {
                adverts.push(advertisement.val());
                return false;
            });
            _this.advertsList = adverts;
            _this.loadedAdvertsList = adverts;
        });
    };
    LocalsportPage.prototype.selectShoppingItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__["a" /* IssueDetailPage */], { item: item });
    };
    LocalsportPage.prototype.commentItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: item.key });
    };
    LocalsportPage.prototype.onInput = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.shopListAsync = this.shopListAsync.filter(function (v) {
            if (v.exerpt && v.story && v.headline && q) {
                if (v.exerpt.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.story.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.headline.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        //   console.log(q, this.advertsList.length);
        //this.presentToast('results found '+this.advertsList.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], LocalsportPage.prototype, "content", void 0);
    LocalsportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-localsport',template:/*ion-inline-start:"C:\apps\thepost\src\pages\localsport\localsport.html"*/'<!--\n  Generated template for the LocalsportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Local Sport</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding  has-bouncing="true">\n  <ion-list    *ngFor="let item of shopListAsync | async">\n   <ion-card>\n     <ion-item (click)="selectShoppingItem(item)">   \n       \n                 <img class="img" src={{item.payload.val().leadimg}}/>\n \n \n       \n         \n       <h2 text-wrap [innerHTML]="item.payload.val().headline"></h2>\n       <h4>{{item.payload.val().issuedate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n     <p text-wrap [innerHTML]="item.payload.val().exerpt"></p>\n      Author: <p [innerHTML]="item.payload.val().author"></p>\n      \n     </ion-item>\n     <button ion-button (click)="commentItem(item)" ion-icon="chatboxes">Comment</button>\n   </ion-card>\n </ion-list>\n </ion-content>\n <ion-footer  class="dynamic-height" *ngFor="let slider of advertsList">\n   <ion-toolbar>\n   <ion-slides class="slid" autoplay="3000" loop="true" speed="1000">\n \n   <ion-slide>\n         <img class="img" src={{slider.url}}/>\n     </ion-slide>\n \n </ion-slides>\n </ion-toolbar>\n  \n </ion-footer>  \n <ion-searchbar color="primary" [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n </ion-searchbar>'/*ion-inline-end:"C:\apps\thepost\src\pages\localsport\localsport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], LocalsportPage);
    return LocalsportPage;
}());

//# sourceMappingURL=localsport.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalentnewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LocalentnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocalentnewsPage = /** @class */ (function () {
    function LocalentnewsPage(navCtrl, navParams, fbase, database, afAuth) {
        //Open Issues
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbase = fbase;
        this.database = database;
        this.afAuth = afAuth;
        this.showFooter = false;
    }
    LocalentnewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LatestNewsPage');
        console.log(this.advertsList);
        this.initializeItems();
    };
    LocalentnewsPage.prototype.initializeItems = function () {
        var _this = this;
        this.shoppingListRef$ = this.database.list('news', function (ref) {
            return ref.orderByChild('newslabel').equalTo('Latest');
        });
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        //this.advertsRef = firebase.database().ref('/adverts/');
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        this.advertsRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/adverts/');
        this.content.resize();
        this.advertsRef
            .on('value', function (advertsList) {
            var adverts = [];
            advertsList.forEach(function (advertisement) {
                adverts.push(advertisement.val());
                return false;
            });
            _this.advertsList = adverts;
            _this.loadedAdvertsList = adverts;
        });
    };
    LocalentnewsPage.prototype.selectShoppingItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__["a" /* IssueDetailPage */], { item: item });
    };
    LocalentnewsPage.prototype.commentItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: item.key });
    };
    LocalentnewsPage.prototype.onInput = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.shopListAsync = this.shopListAsync.filter(function (v) {
            if (v.exerpt && v.story && v.headline && q) {
                if (v.exerpt.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.story.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.headline.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        //   console.log(q, this.advertsList.length);
        //this.presentToast('results found '+this.advertsList.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], LocalentnewsPage.prototype, "content", void 0);
    LocalentnewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-localentnews',template:/*ion-inline-start:"C:\apps\thepost\src\pages\localentnews\localentnews.html"*/'<!--\n  Generated template for the LocalentnewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Local Entertainment News</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding  has-bouncing="true">\n  <ion-list    *ngFor="let item of shopListAsync | async">\n   <ion-card>\n     <ion-item (click)="selectShoppingItem(item)">   \n       \n                 <img class="img" src={{item.payload.val().leadimg}}/>\n \n \n       \n         \n       <h2 text-wrap [innerHTML]="item.payload.val().headline"></h2>\n       <h4>{{item.payload.val().issuedate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n     <p text-wrap [innerHTML]="item.payload.val().exerpt"></p>\n      Author: <p [innerHTML]="item.payload.val().author"></p>\n      \n     </ion-item>\n     <button ion-button (click)="commentItem(item)" ion-icon="chatboxes">Comment</button>\n   </ion-card>\n </ion-list>\n </ion-content>\n <ion-footer  class="dynamic-height" *ngFor="let slider of advertsList">\n   <ion-toolbar>\n   <ion-slides class="slid" autoplay="3000" loop="true" speed="1000">\n \n   <ion-slide>\n         <img class="img" src={{slider.url}}/>\n     </ion-slide>\n \n </ion-slides>\n </ion-toolbar>\n  \n </ion-footer>  \n <ion-searchbar color="primary" [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n </ion-searchbar>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\localentnews\localentnews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], LocalentnewsPage);
    return LocalentnewsPage;
}());

//# sourceMappingURL=localentnews.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestentnewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LatestentnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LatestentnewsPage = /** @class */ (function () {
    function LatestentnewsPage(navCtrl, navParams, fbase, database, afAuth) {
        //Open Issues
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbase = fbase;
        this.database = database;
        this.afAuth = afAuth;
        this.showFooter = false;
    }
    LatestentnewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LatestNewsPage');
        console.log(this.advertsList);
        this.initializeItems();
    };
    LatestentnewsPage.prototype.initializeItems = function () {
        var _this = this;
        this.shoppingListRef$ = this.database.list('news', function (ref) {
            return ref.orderByChild('newslabel').equalTo('Latest');
        });
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        //this.advertsRef = firebase.database().ref('/adverts/');
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListAsync);
        this.advertsRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/adverts/');
        this.content.resize();
        this.advertsRef
            .on('value', function (advertsList) {
            var adverts = [];
            advertsList.forEach(function (advertisement) {
                adverts.push(advertisement.val());
                return false;
            });
            _this.advertsList = adverts;
            _this.loadedAdvertsList = adverts;
        });
    };
    LatestentnewsPage.prototype.selectShoppingItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__issue_detail_issue_detail__["a" /* IssueDetailPage */], { item: item });
    };
    LatestentnewsPage.prototype.commentItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: item.key });
    };
    LatestentnewsPage.prototype.onInput = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.shopListAsync = this.shopListAsync.filter(function (v) {
            if (v.exerpt && v.story && v.headline && q) {
                if (v.exerpt.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.story.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.headline.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        //   console.log(q, this.advertsList.length);
        //this.presentToast('results found '+this.advertsList.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], LatestentnewsPage.prototype, "content", void 0);
    LatestentnewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-latestentnews',template:/*ion-inline-start:"C:\apps\thepost\src\pages\latestentnews\latestentnews.html"*/'<!--\n  Generated template for the LatestentnewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Latest Entertainment News</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding  has-bouncing="true">\n  <ion-list    *ngFor="let item of shopListAsync | async">\n   <ion-card>\n     <ion-item (click)="selectShoppingItem(item)">   \n       \n                 <img class="img" src={{item.payload.val().leadimg}}/>\n \n \n       \n         \n       <h2 text-wrap [innerHTML]="item.payload.val().headline"></h2>\n       <h4>{{item.payload.val().issuedate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n     <p text-wrap [innerHTML]="item.payload.val().exerpt"></p>\n      Author: <p [innerHTML]="item.payload.val().author"></p>\n      \n     </ion-item>\n     <button ion-button (click)="commentItem(item)" ion-icon="chatboxes">Comment</button>\n   </ion-card>\n </ion-list>\n </ion-content>\n <ion-footer  class="dynamic-height" *ngFor="let slider of advertsList">\n   <ion-toolbar>\n   <ion-slides class="slid" autoplay="3000" loop="true" speed="1000">\n \n   <ion-slide>\n         <img class="img" src={{slider.url}}/>\n     </ion-slide>\n \n </ion-slides>\n </ion-toolbar>\n  \n </ion-footer>  \n <ion-searchbar color="primary" [(ngModel)]="searchKey" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n </ion-searchbar>'/*ion-inline-end:"C:\apps\thepost\src\pages\latestentnews\latestentnews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], LatestentnewsPage);
    return LatestentnewsPage;
}());

//# sourceMappingURL=latestentnews.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(700);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_shopping_add_shopping__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_admin_add_admin_add__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admin_edit_admin_edit__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_issue_detail_issue_detail__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_notifications_notifications__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reports_reports__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_gate_gate__ = __webpack_require__(866);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts__ = __webpack_require__(867);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_internationalnews_internationalnews__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_africanews_africanews__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_localnews_localnews__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_internationalsport_internationalsport__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_latestsport_latestsport__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_localsport_localsport__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_whatson_whatson__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_internationalentnews_internationalentnews__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_africaentnews_africaentnews__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_localentnews_localentnews__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_latestentnews_latestentnews__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_account_account__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_latest_news_latest_news__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_support_support__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_user_activity_user_activity__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_status_status__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_bus_bus__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_access_denied_access_denied__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_admin_report_admin_report__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_camera__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_image_picker__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_crop__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_http__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_common_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_register_register__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_edit_shopping_item_edit_shopping_item__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__firebase_credentials__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_shopping_service_shopping_service__ = __webpack_require__(919);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































//EditShoppingItemPage
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_45__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_internationalnews_internationalnews__["a" /* InternationalnewsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_africanews_africanews__["a" /* AfricanewsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_localnews_localnews__["a" /* LocalnewsPage */], __WEBPACK_IMPORTED_MODULE_30__pages_latestentnews_latestentnews__["a" /* LatestentnewsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_internationalentnews_internationalentnews__["a" /* InternationalentnewsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_africaentnews_africaentnews__["a" /* AfricaentnewsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_localentnews_localentnews__["a" /* LocalentnewsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_internationalsport_internationalsport__["a" /* InternationalsportPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_latestsport_latestsport__["a" /* LatestsportPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_localsport_localsport__["a" /* LocalsportPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_issue_detail_issue_detail__["a" /* IssueDetailPage */], __WEBPACK_IMPORTED_MODULE_32__pages_latest_news_latest_news__["a" /* LatestNewsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_notifications_notifications__["a" /* NotificationsPage */], __WEBPACK_IMPORTED_MODULE_38__pages_admin_report_admin_report__["a" /* AdminReportPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_gate_gate__["a" /* GatePage */], __WEBPACK_IMPORTED_MODULE_37__pages_access_denied_access_denied__["a" /* AccessDeniedPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_14__pages_issue_detail_issue_detail__["a" /* IssueDetailPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_bus_bus__["a" /* BusPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_support_support__["a" /* SupportPage */], __WEBPACK_IMPORTED_MODULE_26__pages_whatson_whatson__["a" /* WhatsonPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reports_reports__["a" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_user_activity_user_activity__["a" /* UserActivityPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_status_status__["a" /* StatusPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_shopping_add_shopping__["a" /* AddShoppingPage */], __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_add_admin_add__["a" /* AdminAddPage */], __WEBPACK_IMPORTED_MODULE_13__pages_admin_edit_admin_edit__["a" /* AdminEditPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_43__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_47__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabaseModule"], __WEBPACK_IMPORTED_MODULE_19_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */], __WEBPACK_IMPORTED_MODULE_44__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_45__pages_register_register__["a" /* RegisterPage */], __WEBPACK_IMPORTED_MODULE_14__pages_issue_detail_issue_detail__["a" /* IssueDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_notifications_notifications__["a" /* NotificationsPage */], __WEBPACK_IMPORTED_MODULE_20__pages_internationalnews_internationalnews__["a" /* InternationalnewsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_gate_gate__["a" /* GatePage */], __WEBPACK_IMPORTED_MODULE_38__pages_admin_report_admin_report__["a" /* AdminReportPage */], __WEBPACK_IMPORTED_MODULE_32__pages_latest_news_latest_news__["a" /* LatestNewsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_account_account__["a" /* AccountPage */], __WEBPACK_IMPORTED_MODULE_37__pages_access_denied_access_denied__["a" /* AccessDeniedPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_14__pages_issue_detail_issue_detail__["a" /* IssueDetailPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_bus_bus__["a" /* BusPage */], __WEBPACK_IMPORTED_MODULE_22__pages_localnews_localnews__["a" /* LocalnewsPage */], __WEBPACK_IMPORTED_MODULE_30__pages_latestentnews_latestentnews__["a" /* LatestentnewsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_support_support__["a" /* SupportPage */], __WEBPACK_IMPORTED_MODULE_21__pages_africanews_africanews__["a" /* AfricanewsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_internationalentnews_internationalentnews__["a" /* InternationalentnewsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_africaentnews_africaentnews__["a" /* AfricaentnewsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_localentnews_localentnews__["a" /* LocalentnewsPage */], __WEBPACK_IMPORTED_MODULE_26__pages_whatson_whatson__["a" /* WhatsonPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reports_reports__["a" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_internationalsport_internationalsport__["a" /* InternationalsportPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_latestsport_latestsport__["a" /* LatestsportPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_localsport_localsport__["a" /* LocalsportPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_user_activity_user_activity__["a" /* UserActivityPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_status_status__["a" /* StatusPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_shopping_add_shopping__["a" /* AddShoppingPage */], __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__["a" /* AdminPage */], __WEBPACK_IMPORTED_MODULE_12__pages_admin_add_admin_add__["a" /* AdminAddPage */], __WEBPACK_IMPORTED_MODULE_13__pages_admin_edit_admin_edit__["a" /* AdminEditPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_18__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_39__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_40__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_41__ionic_native_crop__["a" /* Crop */], __WEBPACK_IMPORTED_MODULE_42__angular_http__["a" /* Http */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_48__providers_shopping_service_shopping_service__["a" /* ShoppingServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_list_shopping_list__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, forgotCtrl, afAuth, database, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.forgotCtrl = forgotCtrl;
        this.afAuth = afAuth;
        this.database = database;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        window.localStorage.clear();
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.promptAuthenticate = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                        //  this.nav.setRoot(TabsPage);
                    }
                },
                {
                    text: 'Forgot',
                    handler: function (data) {
                        console.log('Login clicked');
                        _this.afAuth.auth.sendPasswordResetEmail(data.email);
                        var toast = _this.toastCtrl.create({
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
    };
    LoginPage.prototype.forgotPass = function (email) {
        var _this = this;
        var forgot = this.forgotCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        _this.afAuth.auth.sendPasswordResetEmail(email);
                        var toast = _this.toastCtrl.create({
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
    };
    LoginPage.prototype.onLogin = function (email, password) {
        var _this = this;
        if (localStorage.getItem('thepostemail') !== null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Already logged in',
                message: 'You are currently logged in as ' + localStorage.getItem('thepostemail'),
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.afAuth
                .auth
                .signInWithEmailAndPassword(email, password)
                .then(function (value) {
                console.log('Nice, it worked!');
                localStorage.setItem('thepostemail', JSON.stringify(email));
                var toast = _this.toastCtrl.create({
                    message: 'login successful',
                    duration: 3000,
                    position: 'middle',
                    cssClass: 'dark-trans',
                    closeButtonText: 'OK',
                    showCloseButton: true
                });
                toast.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__shopping_list_shopping_list__["a" /* ShoppingListPage */]);
                // this.loadLocalStorage();
            })
                .catch(function (err) {
                var loginerror = _this.forgotCtrl.create({
                    title: 'An Error Occured?',
                    message: "Please check your username and password, or choose forgot password ErrorCode: " + err,
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function (data) {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                });
                loginerror.present();
                console.log('Something went wrong:', err.message);
                //  this.ionViewDidEnter();
            });
        }
    };
    LoginPage.prototype.loadLocalStorage = function () {
        this.account = JSON.stringify(this.database.list('accounts', function (ref) { return ref.orderByChild('email').equalTo('l@l.com'); }));
        //Returns specific content
        //console.log('This is the account object '+JSON.parse(this.account));
        this.navCtrl.setRoot(LoginPage_1);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\apps\thepost\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n    <div class="logo">\n      <img no-padding src="assets/imgs/ologo.png"/>\n    </div>\n  \n    \n      <ion-list>\n  \n    <ion-item>\n      <ion-label stacked>Enter your email address</ion-label>\n      <ion-input type="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n    <ion-item *ngFor="let item of account">\n        <ion-label stacked>role</ion-label>\n        <ion-input type="text" [(ngModel)]="item.role"></ion-input>\n      </ion-item>\n  \n    </ion-list>\n  \n    <ion-row responsive-sm>\n        <ion-col>\n          <button ion-button (click)="onLogin(email,password)" type="submit" block>Login</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button (click)="onSignup(email,password)" color="light" block>Signup</button>\n        </ion-col>\n      </ion-row>\n  <ion-row>\n    <div> <button ion-button clear (click)="promptAuthenticate()" type="submit">Forgot Password?</button></div>\n  </ion-row>\n      <div class="logo">\n        <img no-padding src="assets/imgs/omeya.jpg">\n      </div>\n    \n  </ion-content>\n  '/*ion-inline-end:"C:\apps\thepost\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_shopping_add_shopping__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__issue_detail_issue_detail__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_shopping_item_edit_shopping_item__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__access_denied_access_denied__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













//import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShoppingListPage = /** @class */ (function () {
    function ShoppingListPage(navCtrl, actionSheetCtrl, fbase, database, afAuth, nav, platform, alertCtrl, http
        //, private alertCtrl: AlertController
        , loadingCtrl, 
        //public shoppinglistDB: ShoppingServiceProvider,
        navParams) {
        //  You can update your code
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.fbase = fbase;
        this.database = database;
        this.afAuth = afAuth;
        this.nav = nav;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        database.database.ref('/accounts/').orderByChild('owner').equalTo(JSON.parse(localStorage.getItem('omeyaemail'))).once('value', function (snapshot) {
            snapshot.forEach(function (child) {
                // this.security = child.val().access;
                localStorage.setItem('omeyaSecurity', child.val().access);
                console.log('initial this is the retrieved access ' + localStorage.getItem('omeyaSecurity'));
            });
            if (localStorage.getItem('omeyaSecurity') == 'denied') {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__access_denied_access_denied__["a" /* AccessDeniedPage */]);
            }
            else {
                //  this.navCtrl.setRoot(HomePage);//
                console.log('nothing found');
            }
            //this.loadAccess();
            //  });
        });
        //this.shoppingList = database.list('shopping-list').valueChanges();
        this.shoppingListRef$ = database.list('reports');
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        //console.log('This is the shopListAsync'+this.shopListAsync)
        //  this.shoppingListRef$.subscribe(x +)
        //Open Issues
        this.shoppingListOpenRef$ = database.list('reports', function (ref) {
            return ref.orderByChild('status').equalTo('Open');
        });
        this.shopListOpenAsync = this.shoppingListOpenRef$.snapshotChanges();
        console.log('This is the shopListAsync' + this.shopListOpenAsync);
        //Closed Issues
        this.shoppingListClosedRef$ = database.list('reports', function (ref) {
            return ref.orderByChild('status').equalTo('Closed');
        });
        this.shopListClosedAsync = this.shoppingListClosedRef$.snapshotChanges();
        //Back Reporting
        this.shoppingListBackRef$ = database.list('reports', function (ref) {
            return ref.orderByChild('status').equalTo('Back Report');
        });
        this.shopListBackAsync = this.shoppingListBackRef$.snapshotChanges();
        //My Issues
        this.shoppingListMyRef$ = database.list('reports', function (ref) {
            return ref.orderByChild('status').equalTo('In Progress');
        });
        this.shopListMyAsync = this.shoppingListMyRef$.snapshotChanges();
        this.securityListRef$ = database.list('accounts', function (ref) {
            return ref.orderByChild('email').equalTo(JSON.parse(localStorage.getItem('omeyaemail'))); //.orderByChild('submitdate')
        });
        // this.temp = th
        this.securityListAsync = this.securityListRef$.snapshotChanges(); //.orderByChild('submitdate');
        this.profileRef = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/accounts');
        //console.log(JSON.parse(localStorage.getItem('email')))
        //     console.log(JSON.stringify(this.updateAccount));
        this.profileRef
            .orderByChild('email')
            .equalTo(JSON.parse(localStorage.getItem('omeyaemail')))
            .on('value', function (profileList) {
            var profile = [];
            profileList.forEach(function (profiles) {
                profile.push(profiles.val());
                return false;
            });
            _this.profileList = profile;
            _this.loadedProfileList = profile;
            //  console.log(JSON.parse(localStorage.getItem('email')))
            //  console.log(JSON.stringify(this.profileList));
        });
        this.items = database.list('/ratings');
        this.logs = database.list('/activitylog');
        this.Users = database.list('/Users');
        this.adminmessage = database.list('/adminmessage');
        //this.security = this.securityListRef$.snapshotChanges().firstname
        //console.log('this is the result of security '+ JSON.parse(this.security))
        this.timestamp = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database.ServerValue.TIMESTAMP;
        this.countObj();
    }
    ShoppingListPage_1 = ShoppingListPage;
    ShoppingListPage.prototype.getData = function () {
        // this.hideloading();
        this.shoppingListRef$ = this.database.list('reports');
        this.shopListAsync = this.shoppingListRef$.snapshotChanges();
        //console.log('This is the shopListAsync'+this.shopListAsync)
        //this.hideLoading();
        //this.loader.dismiss();
    };
    ShoppingListPage.prototype.getToken = function () {
        var _this = this;
        this.fbase.getToken()
            .then(function (token) {
            console.log("The token is " + token);
            _this.saveToken("" + token);
        }) // save the token server-side and use it to push notifications to this device
            .catch(function (error) { return console.error('Error getting token', error); });
        /* Promise.resolve(this.logs.push
          ({       user_id: (JSON.parse(localStorage.getItem('email'))),
            device_token:token,
              timestamp: this.timestamp,
              owner: (JSON.parse(localStorage.getItem('email')))
          })
          )
      
      
        */
    };
    ShoppingListPage.prototype.saveToken = function (device_token) {
        if (localStorage.getItem('fbtk') == null) {
            Promise.resolve(this.Users.push({ device_token: device_token,
                user_id: (JSON.parse(localStorage.getItem('omeyaemail')))
            }));
            localStorage.setItem('fbtk', JSON.stringify(device_token));
        }
        else { }
    };
    ShoppingListPage.prototype.onNotification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        FCMPlugin.onNotification(function (data) {
                            _this.alertCtrl.create({
                                message: data.message
                            }).present();
                        }, function (error) { return console.error(error); });
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ShoppingListPage.prototype.selectShoppingItem = function (ShoppingItem) {
        var _this = this;
        if (localStorage.getItem('omeyaemail') == null) {
            this.promptAuthenticate();
        }
        else {
            // this.alertLogin()
        }
        /*
        if (localStorage.getItem('omeyaauthorized') == null) {
          this.promptAuthorize()
        } else {
          this.alertLogin()
        }*/
        console.log("This is the report " + ShoppingItem.payload.val().report);
        this.actionSheetCtrl.create({
            title: "" + ShoppingItem.payload.val().report,
            buttons: [
                { text: 'Edit',
                    handler: function () {
                        //console.log("this is the key"+ShoppingItem.key)
                        if (JSON.parse(localStorage.getItem('omeyaemail')) == 'admin@omeyaestate.com') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: ShoppingItem.key });
                        }
                        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security@omeyaestate.com') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: ShoppingItem.key });
                        }
                        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security1@omeyaestate.com') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: ShoppingItem.key });
                        }
                        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security2@omeyaestate.com') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: ShoppingItem.key });
                        }
                        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security3@omeyaestate.com') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: ShoppingItem.key });
                        }
                        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security4@omeyaestate.com') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: ShoppingItem.key });
                        }
                        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security5@omeyaestate.com') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: ShoppingItem.key });
                        }
                        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security6@omeyaestate.com') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: ShoppingItem.key });
                        }
                        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security7@omeyaestate.com') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: ShoppingItem.key });
                        }
                        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'l@l.com') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: ShoppingItem.key });
                        }
                        else {
                            _this.alertLogin();
                        }
                    }
                },
                { text: 'Delete',
                    handler: function () {
                        if (JSON.parse(localStorage.getItem('omeyaemail')) == 'admin@omeyaestate.com') {
                            _this.presentAlertConfirm(ShoppingItem);
                        }
                        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security@omeyaestate.com') {
                            _this.presentAlertConfirm(ShoppingItem);
                        }
                        else {
                            _this.alertLogin();
                        }
                    }
                },
                { text: 'Cancel',
                    handler: function () {
                    }
                }
            ]
        }).present();
    };
    ShoppingListPage.prototype.hideLoading = function () {
        this.loader.dismiss();
    };
    ShoppingListPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Issues loading, Please wait...",
            duration: 30000
        });
        this.loader.present();
        // this.hideloading();
    };
    ShoppingListPage.prototype.itemTapped = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__issue_detail_issue_detail__["a" /* IssueDetailPage */], {
            item: item
        });
    };
    ShoppingListPage.prototype.presentAlertConfirm = function (ShoppingItem) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: 'Confirm!',
                            message: 'Are you sure you want to <strong>delete</strong>!!!',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        _this.shoppingListRef$.remove(ShoppingItem.key);
                                        _this.countObj();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoppingListPage');
        this.reports = "all";
        this.security = this.navParams.get('profile.authorized');
        console.log(this.navParams.get('profile.authorized'));
        this.presentLoading();
        this.getData();
    };
    /*
      promptAuthorize(){
        const prompt = this.alertCtrl.create({
            title: 'Authorization Required',
            message: "The systems administrator must authorize your access first. Send a message to the admin as reminder",
            inputs: [
              {
                name: 'email',
                placeholder: 'Your Email',
                type: 'email'
              }, {
                name: 'message',
                placeholder: 'Message to Admin',
                type: 'text'
              },
            ],
            buttons: [
              {
                text: 'Cancel',
                handler: data => {
                  console.log('Cancel clicked');
                  this.nav.setRoot(ShoppingListPage);
                }
              },
              {
                text: 'Message',
                handler: data => {
                  console.log('Saved clicked'+ data.email+data.password);
                  
                  this.message(data.email, data.message)
                }
              }
            ]
          });
          prompt.present();
        }
        */
    ShoppingListPage.prototype.message = function (email, message) {
        Promise.resolve(this.adminmessage.push({ email: email,
            message: message,
            timestamp: this.timestamp,
            owner: (JSON.parse(localStorage.getItem('omeyaemail')))
        }));
    };
    ShoppingListPage.prototype.promptAuthenticate = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Login Required',
            message: "To add a report, you need to be registered and logged in. Use a valid email and password",
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                        _this.nav.setRoot(ShoppingListPage_1);
                    }
                },
                {
                    text: 'Register',
                    handler: function (data) {
                        console.log('Saved clicked' + data.email + data.password);
                        _this.signup(data.email, data.password);
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        console.log('Login clicked');
                        _this.login(data.email, data.password);
                    }
                },
                {
                    text: 'Forgot',
                    handler: function (data) {
                        console.log('Login clicked');
                        _this.resetPassword(data.email);
                    }
                }
            ]
        });
        prompt.present();
    };
    ShoppingListPage.prototype.alertLogin = function () {
        var alert = this.alertCtrl.create({
            title: 'Access Denied!',
            subTitle: 'Only the administrator can edit/delete issues',
            buttons: ['OK']
        });
        alert.present();
    };
    ShoppingListPage.prototype.ionViewDidEnter = function () {
        //this.loadData();
        this.hideLoading();
        if (localStorage.getItem('omeyaemail') == null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
        }
        else {
            // this.alertLogin()
        }
        if (localStorage.getItem('omeyaSecurity') == 'denied') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__access_denied_access_denied__["a" /* AccessDeniedPage */]);
        }
        else {
            //  this.navCtrl.setRoot(HomePage);//
            console.log('nothing found');
        }
    };
    ShoppingListPage.prototype.signup = function (email, password) {
        var _this = this;
        this.afAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
            localStorage.setItem('omeyaemail', JSON.stringify(email));
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            _this.ionViewDidEnter();
        });
    };
    ShoppingListPage.prototype.login = function (email, password) {
        var _this = this;
        this.afAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
            localStorage.setItem('omeyaemail', JSON.stringify(email));
            _this.getToken();
        })
            .catch(function (err) {
            console.log('Something went wrong:', err.message);
            _this.ionViewDidEnter();
        });
    };
    ShoppingListPage.prototype.resetPassword = function (email) {
        var _this = this;
        //var auth = firebase.auth();
        this.afAuth.auth.sendPasswordResetEmail(email)
            .then(function () { _this.passwordResetAlert(email); })
            .catch(function (error) { _this.ionViewDidEnter(); });
    };
    ShoppingListPage.prototype.passwordResetAlert = function (email) {
        var alert = this.alertCtrl.create({
            title: 'Reset Email Sent!',
            subTitle: 'Please check your email ' + email + ' for a reset email, If you did not receive the email check the email spelling and try again',
            buttons: ['OK']
        });
        alert.present();
        this.activity = "Password reset for" + email;
        this.logActivity(this.activity);
        this.ionViewDidEnter();
    };
    ShoppingListPage.prototype.userRegisteredAlert = function (email) {
        var alert = this.alertCtrl.create({
            title: 'User Registration Successful!',
            subTitle: 'Email ' + email + ' has been registered successfully, enjoy coffeetimes',
            buttons: ['OK']
        });
        alert.present();
        this.activity = "Password reset for" + email;
        this.logActivity(this.activity);
    };
    ShoppingListPage.prototype.logActivity = function (activity) {
        Promise.resolve(this.logs.push({ activity: "rating submitted",
            timestamp: this.timestamp,
            owner: (JSON.parse(localStorage.getItem('email')))
        }));
    };
    ShoppingListPage.prototype.logout = function () {
        this.afAuth
            .auth
            .signOut();
    };
    ShoppingListPage.prototype.countObj = function () {
        var _this = this;
        this.http.get('https://omeya-6b5c8.firebaseio.com/reports.json?shallow=true')
            .subscribe(function (data) {
            _this.notificationcount = Object.keys(data).length;
            //  console.log("The "+this.notificationcount);
        });
    };
    ShoppingListPage.prototype.navigateToAddShoppingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_shopping_add_shopping__["a" /* AddShoppingPage */]);
    };
    ShoppingListPage = ShoppingListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-shopping-list',template:/*ion-inline-start:"C:\apps\thepost\src\pages\shopping-list\shopping-list.html"*/'<!--\n  Generated template for the ShoppingListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar no-border-bottom color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      News\n    </ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="reports">\n      <ion-segment-button value="all">\n        All {{notificationcount}}\n      </ion-segment-button>\n      <ion-segment-button value="open">\n        Open <span>{{(shopListOpenAsync | async)?.length}}</span>\n      </ion-segment-button>\n      <ion-segment-button value="my">\n        Prog. <span>{{(shopListMyAsync | async)?.length}} + {{(shopListBackAsync | async)?.length}}</span>\n      </ion-segment-button>\n      <ion-segment-button value="closed">\n        Closed <span>{{(shopListClosedAsync | async)?.length}}</span>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-list inset *ngFor="let profile of profileList">\n        <input hidden [(ngModel)]="profile.authorized"/>\n</ion-list>\n\n <div>\n  <div [ngSwitch]="reports">\n\n   <ion-list *ngSwitchCase="\'all\'"> \n\n    \n\n    <ion-list no-padding  *ngFor="let item of (shopListAsync | async)?.slice().reverse(); let odd = odd">\n    <ion-grid >  \n      \n      <ion-row>\n        <ion-col col-2  (click)="selectShoppingItem(item)">\n\n      <ion-thumbnail\n       item-start>\n        <img src="{{item.payload.val().captureDataUrl}}" (click)="selectShoppingItem(item)">\n      </ion-thumbnail>\n    </ion-col>\n      <ion-col col-8 (click)="selectShoppingItem(item)">\n        <ion-item  >\n            <h2>{{item.payload.val().type}}</h2>\n      <h4>{{item.payload.val().submitdate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n      <p text-wrap>{{item.payload.val().report}}</p>\n      <p text-wrap><strong>Posted by: {{item.payload.val().user}}</strong></p>\n      <p>Status: {{item.payload.val().status}}</p>\n      <p>{{item.payload.val().id}}</p>\n    </ion-item>\n </ion-col>\n   <ion-col col-2>\n    <button ion-button clear item-end (click)="itemTapped(item)">View</button>\n  </ion-col>\n</ion-row>\n\n  </ion-grid>  \n</ion-list>\n   </ion-list>\n  \n\n\n  <ion-list *ngSwitchCase="\'open\'">\n    <ion-list  no-padding    *ngFor="let item of shopListOpenAsync | async">\n        <ion-grid  >  \n            <ion-row>\n              <ion-col col-2  (click)="selectShoppingItem(item)">\n      \n            <ion-thumbnail\n             item-start>\n              <img src="{{item.payload.val().captureDataUrl}}" (click)="selectShoppingItem(item)">\n            </ion-thumbnail>\n          </ion-col>\n            <ion-col col-8 (click)="selectShoppingItem(item)">\n              <ion-item >\n                  <h2>{{item.payload.val().type}}</h2>\n            <h4>{{item.payload.val().submitdate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n            <p text-wrap>{{item.payload.val().report}}</p>\n            <p text-wrap><strong>Posted by: {{item.payload.val().user}}</strong></p>\n            <p>Status: {{item.payload.val().status}}</p>\n            <p>{{item.payload.val().id}}</p>\n          </ion-item>\n       </ion-col>\n         <ion-col col-2>\n          <button ion-button clear item-end (click)="itemTapped(item)">View</button>\n        </ion-col>\n      </ion-row>\n        </ion-grid>  \n  </ion-list>\n</ion-list>\n\n<ion-list *ngSwitchCase="\'closed\'">\n  <ion-list  no-padding    *ngFor="let item of shopListClosedAsync | async">\n      <ion-grid>  \n          <ion-row>\n            <ion-col col-2  (click)="selectShoppingItem(item)">\n    \n          <ion-thumbnail\n           item-start>\n            <img src="{{item.payload.val().captureDataUrl}}" (click)="selectShoppingItem(item)">\n          </ion-thumbnail>\n        </ion-col>\n          <ion-col col-8 (click)="selectShoppingItem(item)">\n            <ion-item no-padding  >\n                <h2>{{item.payload.val().type}}</h2>\n          <h4>{{item.payload.val().submitdate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n          <p text-wrap>{{item.payload.val().report}}</p>\n          <p text-wrap><strong>Posted by: {{item.payload.val().user}}</strong></p>\n          <p>Status: {{item.payload.val().status}}</p>\n          <p>{{item.payload.val().id}}</p>\n        </ion-item>\n     </ion-col>\n       <ion-col col-2>\n        <button ion-button clear item-end (click)="itemTapped(item)">View</button>\n      </ion-col>\n    </ion-row>\n      </ion-grid>  \n</ion-list>\n\n</ion-list>\n\n\n<ion-list *ngSwitchCase="\'my\'">\n    <ion-list  no-padding    *ngFor="let item of (shopListMyAsync | async)?.slice().reverse()">\n        <ion-grid>  \n            <ion-row>\n              <ion-col col-2  (click)="selectShoppingItem(item)">\n      \n            <ion-thumbnail\n             item-start>\n              <img src="{{item.payload.val().captureDataUrl}}" (click)="selectShoppingItem(item)">\n            </ion-thumbnail>\n          </ion-col>\n            <ion-col col-8 (click)="selectShoppingItem(item)">\n              <ion-item no-padding  >\n                  <h2>{{item.payload.val().type}}</h2>\n            <h4>{{item.payload.val().submitdate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n            <p text-wrap>{{item.payload.val().report}}</p>\n            <p text-wrap><strong>Posted by: {{item.payload.val().user}}</strong></p>\n            <p>Status: {{item.payload.val().status}}</p>\n            <p>{{item.payload.val().id}}</p>\n          </ion-item>\n       </ion-col>\n         <ion-col col-2>\n          <button ion-button clear item-end (click)="itemTapped(item)">View</button>\n        </ion-col>\n      </ion-row>\n        </ion-grid>  \n  </ion-list>\n\n  \n<ion-list  no-padding    *ngFor="let item of shopListBackAsync | async">\n    <ion-grid>  \n        <ion-row>\n          <ion-col col-2  (click)="selectShoppingItem(item)">\n  \n        <ion-thumbnail\n         item-start>\n          <img src="{{item.payload.val().captureDataUrl}}" (click)="selectShoppingItem(item)">\n        </ion-thumbnail>\n      </ion-col>\n        <ion-col col-8 (click)="selectShoppingItem(item)">\n          <ion-item no-padding  >\n              <h2>{{item.payload.val().type}}</h2>\n        <h4>{{item.payload.val().submitdate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n        <p text-wrap>{{item.payload.val().report}}</p>\n        <p text-wrap><strong>Posted by: {{item.payload.val().user}}</strong></p>\n        <p>Status: {{item.payload.val().status}}</p>\n        <p>{{item.payload.val().id}}</p>\n      </ion-item>\n   </ion-col>\n     <ion-col col-2>\n      <button ion-button clear item-end (click)="itemTapped(item)">View</button>\n    </ion-col>\n  </ion-row>\n    </ion-grid>  \n</ion-list>\n  </ion-list>\n\n</div>\n</div>\n<!--\n<ion-fab right bottom>\n    <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n-->\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\shopping-list\shopping-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]
            //, private alertCtrl: AlertController
            ,
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ShoppingListPage);
    return ShoppingListPage;
    var ShoppingListPage_1;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_notifications_notifications__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_localnews_localnews__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_account__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_support_support__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reports_reports__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_shopping_list_shopping_list__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_latest_news_latest_news__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_whatson_whatson__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_internationalnews_internationalnews__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_africanews_africanews__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_internationalentnews_internationalentnews__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_internationalsport_internationalsport__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_latestsport_latestsport__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_localsport_localsport__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_localentnews_localentnews__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_latestentnews_latestentnews__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { ReportsPage } from '../pages/reports/reports';


//import { SigninPage } from '../pages/signin/signin';
//import { GalleryPage } from '../pages/gallery/gallery';
//import { AdminReportPage} from '../pages/admin-report/admin-report';


//import { RegisterPage } from '../pages/register/register';

//import { BusPage } from '../pages/bus/bus';
//import { UserActivityPage } from '../pages/user-activity/user-activity';













var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, http) {
        this.http = http;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'All Issues', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_11__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */], index: 0, icon: 'home' },
            { title: 'Report An Issue', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_reports_reports__["a" /* ReportsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_10__pages_reports_reports__["a" /* ReportsPage */], index: 1, icon: 'contacts' },
            //  { title: 'Store', name: 'TabsPage', component: ProductdPage, tabComponent: ProductdPage, index: 3, icon: 'md-cart' },
            { title: 'Settings', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_notifications_notifications__["a" /* NotificationsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_5__pages_notifications_notifications__["a" /* NotificationsPage */], index: 4, icon: 'settings' },
        ];
        this.newsPages = [
            { title: 'Latest News', name: 'LatestNewsPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_latest_news_latest_news__["a" /* LatestNewsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_12__pages_latest_news_latest_news__["a" /* LatestNewsPage */], index: 2, icon: 'md-paper' },
            { title: 'Local News', name: 'LocalnewsPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_localnews_localnews__["a" /* LocalnewsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages_localnews_localnews__["a" /* LocalnewsPage */], index: 2, icon: 'custom-ls-icon' },
            { title: 'Africa News', name: 'AfricanewsPage', component: __WEBPACK_IMPORTED_MODULE_16__pages_africanews_africanews__["a" /* AfricanewsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_16__pages_africanews_africanews__["a" /* AfricanewsPage */], index: 2, icon: 'custom-africa-icon' },
            { title: 'International News', name: 'InternationalnewsPage', component: __WEBPACK_IMPORTED_MODULE_15__pages_internationalnews_internationalnews__["a" /* InternationalnewsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_15__pages_internationalnews_internationalnews__["a" /* InternationalnewsPage */], index: 2, icon: 'custom-earth-icon' }
            //  { title: 'Bus reservation', name: 'BusPage', component: BusPage, icon: 'bus' }
        ];
        //Business
        this.businessPages = [
            { title: 'Latest News', name: 'AdminPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__["a" /* AdminPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__["a" /* AdminPage */], index: 2, icon: 'md-paper' },
            { title: 'Local News', name: 'AdminPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__["a" /* AdminPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__["a" /* AdminPage */], index: 2, icon: 'custom-ls-icon' },
            { title: 'International', name: 'AdminPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__["a" /* AdminPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__["a" /* AdminPage */], index: 2, icon: 'md-globe' },
        ];
        //Sports
        this.sportsPages = [
            { title: 'Latest News', name: 'LatestsportPage', component: __WEBPACK_IMPORTED_MODULE_19__pages_latestsport_latestsport__["a" /* LatestsportPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_19__pages_latestsport_latestsport__["a" /* LatestsportPage */], index: 2, icon: 'md-paper' },
            { title: 'Local News', name: 'LocalsportPage', component: __WEBPACK_IMPORTED_MODULE_20__pages_localsport_localsport__["a" /* LocalsportPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_20__pages_localsport_localsport__["a" /* LocalsportPage */], index: 2, icon: 'custom-ls-icon' },
            { title: 'international', name: 'InternationalsportPage', component: __WEBPACK_IMPORTED_MODULE_18__pages_internationalsport_internationalsport__["a" /* InternationalsportPage */], icon: 'md-globe' }
        ];
        //Entertainment
        this.entertainmentPages = [
            { title: 'Latest News', name: 'LatestentnewsPage', component: __WEBPACK_IMPORTED_MODULE_22__pages_latestentnews_latestentnews__["a" /* LatestentnewsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_22__pages_latestentnews_latestentnews__["a" /* LatestentnewsPage */], index: 2, icon: 'md-paper' },
            { title: 'Local News', name: 'LocalentnewsPage', component: __WEBPACK_IMPORTED_MODULE_21__pages_localentnews_localentnews__["a" /* LocalentnewsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_21__pages_localentnews_localentnews__["a" /* LocalentnewsPage */], index: 2, icon: 'custom-ls-icon' },
            { title: 'International', name: 'InternationalentnewsPage', component: __WEBPACK_IMPORTED_MODULE_17__pages_internationalentnews_internationalentnews__["a" /* InternationalentnewsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_17__pages_internationalentnews_internationalentnews__["a" /* InternationalentnewsPage */], index: 2, icon: 'md-globe' },
            { title: 'Whats on', name: 'WhatsonPage', component: __WEBPACK_IMPORTED_MODULE_14__pages_whatson_whatson__["a" /* WhatsonPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_14__pages_whatson_whatson__["a" /* WhatsonPage */], index: 2, icon: 'custom-cheers-icon' }
            //  { title: 'Bus reservation', name: 'BusPage', component: BusPage, icon: 'bus' }
        ];
        //Classifieds
        this.classifiedPages = [
            { title: 'Listings', name: 'AdminPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__["a" /* AdminPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__["a" /* AdminPage */], index: 2, icon: 'md-list' }
        ];
        //Administration
        this.adminPages = [
            { title: 'Post a Report', name: 'AdminPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_reports_reports__["a" /* ReportsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_10__pages_reports_reports__["a" /* ReportsPage */], index: 2, icon: 'custom-news-icon' }
        ];
        //Opinion
        this.opinionPages = [
            { title: 'Listings', name: 'AdminPage', component: __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__["a" /* AdminPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_13__pages_admin_admin__["a" /* AdminPage */], index: 2, icon: 'md-chatboxes' }
        ];
        this.loggedInPages = [
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_support_support__["a" /* SupportPage */], icon: 'help' },
        ];
        this.loggedOutPages = [
            //  { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
            { title: 'Account', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Support', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_9__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Log Out', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */], icon: 'md-log-out' }
            //   { title: 'Signup', name: 'SignupPage', component: SignupPage, icon: 'person-add' }
        ];
        //Add if statement to manage users logged in
        this.rootPage = __WEBPACK_IMPORTED_MODULE_12__pages_latest_news_latest_news__["a" /* LatestNewsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.email = localStorage.getItem('omeyaemail');
        this.securityprofile = localStorage.getItem('omeyasecurity');
        this.countObj();
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
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
    };
    MyApp.prototype.countObj = function () {
        var _this = this;
        this.http.get('https://omeya-6b5c8.firebaseio.com/notification.json?shallow=true')
            .subscribe(function (data) {
            _this.notificationcount = Object.keys(data).length;
            console.log(_this.notificationcount);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\apps\thepost\src\app\app.html"*/'<ion-split-pane>\n\n    <!-- logged out menu -->\n    <ion-menu id="loggedOutMenu" [content]="content">\n  \n      <ion-header class="img" >\n        <img no-padding src="assets/imgs/omeya.jpg"/>\n        <ion-list-header no-margin color="inner_arc" text-center>\n            Currently Registered as:\n            <p>{{email}}</p> \n           \n            <span ion-text class="fw600"><b>The Post Lesotho</b></span>\n        </ion-list-header>\n      </ion-header>\n  \n  \n  \n      <ion-content>\n  \n        <ion-list>\n          <ion-list-header>\n            News\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of newsPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n\n        <ion-list>\n          <ion-list-header>\n            Entertainment\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of entertainmentPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n\n        <ion-list>\n          <ion-list-header>\n            Sport\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of sportsPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n\n        <ion-list>\n          <ion-list-header>\n            Opinion\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of opinionPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n\n        <ion-list>\n          <ion-list-header>\n            Classifieds\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of classifiedPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n\n        <ion-list>\n          <ion-list-header>\n            Administration\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of adminPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n  \n        <ion-list>\n          <ion-list-header>\n            Access\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of accessPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n  \n        <ion-list>\n          <ion-list-header>\n            Settings\n          </ion-list-header>\n          <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n            {{p.title}}\n          </button>\n        </ion-list>\n        <div><img no-padding src="assets/imgs/ologo.png"></div>\n  \n      </ion-content>\n  \n    </ion-menu>\n  \n    <!-- main navigation -->\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n  \n  </ion-split-pane>\n  '/*ion-inline-end:"C:\apps\thepost\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Observable } from 'rxjs';
/**
 * Generated class for the GatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GatePage = /** @class */ (function () {
    function GatePage(navCtrl, navParams, db, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.event = {
            month: 'today',
            timeStarts: '08:00',
            timeEnds: '2018-12-31'
        };
        this.today = new Date().toISOString();
        this.gate = db.list('/gate/');
        this.timestamp = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP;
    }
    GatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GatePage');
    };
    GatePage.prototype.reserve = function (firstname, surname, contactnumber, passengers, vehicleregistration, vehiclemake, vehiclecolor, timestarts, timeEnds) {
        Promise.resolve(this.gate.push({ activity: "gate reserved",
            firstname: firstname,
            surname: surname,
            contactnumber: contactnumber,
            passengers: passengers,
            vehicleregistration: vehicleregistration,
            vehiclemake: vehiclemake,
            vehiclecolor: vehiclecolor,
            timestarts: timestarts,
            timeEnds: timeEnds,
            timestamp: this.timestamp,
            owner: (JSON.parse(localStorage.getItem('omeyaemail')))
        }));
        this.issuePostedAlert(firstname, surname, timestarts, timeEnds);
    };
    GatePage.prototype.issuePostedAlert = function (firstname, surname, timestarts, timeEnds) {
        var alert = this.alertCtrl.create({
            title: 'Gate Pass Submitted Successfully!',
            subTitle: 'You have submitted a gatepass for ' + firstname + ' ' + surname + ' for the period ' + timestarts + ' to ' + timeEnds,
            buttons: ['OK']
        });
        alert.present();
        //  this.activity = "Issue "+type+" posted";
        //  this.logActivity(this.activity);
    };
    GatePage.prototype.gateRes = function () {
        var _this = this;
        //this.gateLoad = firebase.database().ref('/gate');
        if (JSON.parse(localStorage.getItem('omeyaemail')) == 'admin@omeyaestate.com') {
            this.gateRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/gate');
            //console.log(JSON.parse(localStorage.getItem('email')))
            //     console.log(JSON.stringify(this.updateAccount));
            this.gateRef
                .orderByChild('timestarts')
                .on('value', function (gateList) {
                var profile = [];
                gateList.forEach(function (profiles) {
                    profile.push(profiles.val());
                    return false;
                });
                _this.gateList = profile;
                _this.loadedGateList = profile;
            });
        }
        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security@omeyaestate.com') {
            this.gateRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/gate');
            //console.log(JSON.parse(localStorage.getItem('email')))
            //     console.log(JSON.stringify(this.updateAccount));
            this.gateRef
                .orderByChild('timestarts')
                .on('value', function (gateList) {
                var profile = [];
                gateList.forEach(function (profiles) {
                    profile.push(profiles.val());
                    return false;
                });
                _this.gateList = profile;
                _this.loadedGateList = profile;
            });
        }
        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security1@omeyaestate.com') {
            this.gateRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/gate');
            //console.log(JSON.parse(localStorage.getItem('email')))
            //     console.log(JSON.stringify(this.updateAccount));
            this.gateRef
                .orderByChild('timestarts')
                .on('value', function (gateList) {
                var profile = [];
                gateList.forEach(function (profiles) {
                    profile.push(profiles.val());
                    return false;
                });
                _this.gateList = profile;
                _this.loadedGateList = profile;
            });
        }
        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security2@omeyaestate.com') {
            this.gateRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/gate');
            //console.log(JSON.parse(localStorage.getItem('email')))
            //     console.log(JSON.stringify(this.updateAccount));
            this.gateRef
                .orderByChild('timestarts')
                .on('value', function (gateList) {
                var profile = [];
                gateList.forEach(function (profiles) {
                    profile.push(profiles.val());
                    return false;
                });
                _this.gateList = profile;
                _this.loadedGateList = profile;
            });
        }
        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security3@omeyaestate.com') {
            this.gateRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/gate');
            //console.log(JSON.parse(localStorage.getItem('email')))
            //     console.log(JSON.stringify(this.updateAccount));
            this.gateRef
                .orderByChild('timestarts')
                .on('value', function (gateList) {
                var profile = [];
                gateList.forEach(function (profiles) {
                    profile.push(profiles.val());
                    return false;
                });
                _this.gateList = profile;
                _this.loadedGateList = profile;
            });
        }
        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'security4@omeyaestate.com') {
            this.gateRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/gate');
            //console.log(JSON.parse(localStorage.getItem('email')))
            //     console.log(JSON.stringify(this.updateAccount));
            this.gateRef
                .orderByChild('timestarts')
                .on('value', function (gateList) {
                var profile = [];
                gateList.forEach(function (profiles) {
                    profile.push(profiles.val());
                    return false;
                });
                _this.gateList = profile;
                _this.loadedGateList = profile;
            });
        }
        else if (JSON.parse(localStorage.getItem('omeyaemail')) == 'l@l.com') {
            this.gateRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/gate');
            //console.log(JSON.parse(localStorage.getItem('email')))
            //     console.log(JSON.stringify(this.updateAccount));
            this.gateRef
                .orderByChild('timestarts')
                .on('value', function (gateList) {
                var profile = [];
                gateList.forEach(function (profiles) {
                    profile.push(profiles.val());
                    return false;
                });
                _this.gateList = profile;
                _this.loadedGateList = profile;
            });
        }
        else {
            this.alertLogin();
        }
    };
    GatePage.prototype.alertLogin = function () {
        var alert = this.alertCtrl.create({
            title: 'Access Denied!',
            subTitle: 'Only the administrator can view gate reservations',
            buttons: ['OK']
        });
        alert.present();
    };
    GatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-gate',template:/*ion-inline-start:"C:\apps\thepost\src\pages\gate\gate.html"*/'<!--\n  Generated template for the GatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Reserve Gate Pass</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <br>\n    Reserve a gate pass for youself or your friend today. Just fill in your details below!\n  <br>\n\n  <ion-row>\n    <ion-col width-50>\n        <label class="credit-card-input">\n            <input type="text" placeholder="First Name*" [(ngModel)]="firstname"/>\n            <ion-icon class="custom-icon calendar-icon"></ion-icon>\n        </label>\n    </ion-col>\n    <ion-col width-50>\n        <label class="credit-card-input">\n            <input type="text" placeholder="Surname" [(ngModel)]="surname"/>\n            <ion-icon class="custom-icon cvs-icon"></ion-icon>\n        </label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n      <ion-col>\n          <label class="credit-card-input">\n              <input type="numbers" placeholder="Passengers" [(ngModel)]="passengers"/>\n              <ion-icon class="custom-icon calendar-icon"></ion-icon>\n          </label>\n      </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col>\n        <label class="credit-card-input">\n            <input type="numbers" placeholder="Contact Number" [(ngModel)]="contactnumber"/>\n            <ion-icon class="custom-icon calendar-icon"></ion-icon>\n        </label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n        <label class="credit-card-input">\n            <input type="text" placeholder="Vehicle Registration" [(ngModel)]="vehicleregistration"/>\n            <ion-icon class="custom-icon calendar-icon"></ion-icon>\n        </label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col width-50>\n        <label class="credit-card-input">\n            <input type="text" placeholder="Vehicle Make" [(ngModel)]="vehiclemake"/>\n            <ion-icon class="custom-icon calendar-icon"></ion-icon>\n        </label>\n    </ion-col>\n    <ion-col width-50>\n        <label class="credit-card-input">\n            <input type="text" placeholder="Vehicle Color" [(ngModel)]="vehiclecolor"/>\n            <ion-icon class="custom-icon cvs-icon"></ion-icon>\n        </label>\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Start Date</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Ends</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="event.timeEnds"></ion-datetime>\n    </ion-item>\n\n  </ion-list>\n\n    <button ion-button round full color="outer_arc"  [disabled]="!firstname || !surname || !passengers || !contactnumber" \n    (tap)="reserve(firstname, surname, contactnumber,passengers, vehicleregistration,vehiclemake,vehiclecolor, event.month, event.timeEnds)">\n      <ion-icon name="md-checkmark-circle" padding ></ion-icon> Reserve\n  </button>\n\n  <button ion-button round full color="download"  (tap)="gateRes()">\n    <ion-icon name="md-list" padding ></ion-icon> Load Reservations\n</button>\n<ion-list>\n    <ion-grid>\n        <ion-row>\n          <ion-col col-3>\n              <p>    Driver    </p>\n          </ion-col>\n          <ion-col col-3>\n              <p>    Vehicle    </p>\n           \n          </ion-col>\n          <ion-col col-3>\n              <p>    Reg. No     </p>\n            \n          </ion-col>\n          <ion-col col-3>\n              <p>    Entry Date     </p>\n            \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-list>\n\n<ion-list   *ngFor="let item of gateList">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n          <p>    {{item.firstname}}     </p>\n      </ion-col>\n      <ion-col col-3>\n          <p>    {{item.vehiclemake}}     </p>\n       \n      </ion-col>\n      <ion-col col-3>\n          <p>    {{item.vehicleregistration}}     </p>\n        \n      </ion-col>\n      <ion-col col-3>\n          <p>    {{item.timestarts}}      </p>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\gate\gate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], GatePage);
    return GatePage;
}());

//# sourceMappingURL=gate.js.map

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 440,
	"./af.js": 440,
	"./ar": 441,
	"./ar-dz": 442,
	"./ar-dz.js": 442,
	"./ar-kw": 443,
	"./ar-kw.js": 443,
	"./ar-ly": 444,
	"./ar-ly.js": 444,
	"./ar-ma": 445,
	"./ar-ma.js": 445,
	"./ar-sa": 446,
	"./ar-sa.js": 446,
	"./ar-tn": 447,
	"./ar-tn.js": 447,
	"./ar.js": 441,
	"./az": 448,
	"./az.js": 448,
	"./be": 449,
	"./be.js": 449,
	"./bg": 450,
	"./bg.js": 450,
	"./bm": 451,
	"./bm.js": 451,
	"./bn": 452,
	"./bn.js": 452,
	"./bo": 453,
	"./bo.js": 453,
	"./br": 454,
	"./br.js": 454,
	"./bs": 455,
	"./bs.js": 455,
	"./ca": 456,
	"./ca.js": 456,
	"./cs": 457,
	"./cs.js": 457,
	"./cv": 458,
	"./cv.js": 458,
	"./cy": 459,
	"./cy.js": 459,
	"./da": 460,
	"./da.js": 460,
	"./de": 461,
	"./de-at": 462,
	"./de-at.js": 462,
	"./de-ch": 463,
	"./de-ch.js": 463,
	"./de.js": 461,
	"./dv": 464,
	"./dv.js": 464,
	"./el": 465,
	"./el.js": 465,
	"./en-SG": 466,
	"./en-SG.js": 466,
	"./en-au": 467,
	"./en-au.js": 467,
	"./en-ca": 468,
	"./en-ca.js": 468,
	"./en-gb": 469,
	"./en-gb.js": 469,
	"./en-ie": 470,
	"./en-ie.js": 470,
	"./en-il": 471,
	"./en-il.js": 471,
	"./en-nz": 472,
	"./en-nz.js": 472,
	"./eo": 473,
	"./eo.js": 473,
	"./es": 474,
	"./es-do": 475,
	"./es-do.js": 475,
	"./es-us": 476,
	"./es-us.js": 476,
	"./es.js": 474,
	"./et": 477,
	"./et.js": 477,
	"./eu": 478,
	"./eu.js": 478,
	"./fa": 479,
	"./fa.js": 479,
	"./fi": 480,
	"./fi.js": 480,
	"./fo": 481,
	"./fo.js": 481,
	"./fr": 482,
	"./fr-ca": 483,
	"./fr-ca.js": 483,
	"./fr-ch": 484,
	"./fr-ch.js": 484,
	"./fr.js": 482,
	"./fy": 485,
	"./fy.js": 485,
	"./ga": 486,
	"./ga.js": 486,
	"./gd": 487,
	"./gd.js": 487,
	"./gl": 488,
	"./gl.js": 488,
	"./gom-latn": 489,
	"./gom-latn.js": 489,
	"./gu": 490,
	"./gu.js": 490,
	"./he": 491,
	"./he.js": 491,
	"./hi": 492,
	"./hi.js": 492,
	"./hr": 493,
	"./hr.js": 493,
	"./hu": 494,
	"./hu.js": 494,
	"./hy-am": 495,
	"./hy-am.js": 495,
	"./id": 496,
	"./id.js": 496,
	"./is": 497,
	"./is.js": 497,
	"./it": 498,
	"./it-ch": 499,
	"./it-ch.js": 499,
	"./it.js": 498,
	"./ja": 500,
	"./ja.js": 500,
	"./jv": 501,
	"./jv.js": 501,
	"./ka": 502,
	"./ka.js": 502,
	"./kk": 503,
	"./kk.js": 503,
	"./km": 504,
	"./km.js": 504,
	"./kn": 505,
	"./kn.js": 505,
	"./ko": 506,
	"./ko.js": 506,
	"./ku": 507,
	"./ku.js": 507,
	"./ky": 508,
	"./ky.js": 508,
	"./lb": 509,
	"./lb.js": 509,
	"./lo": 510,
	"./lo.js": 510,
	"./lt": 511,
	"./lt.js": 511,
	"./lv": 512,
	"./lv.js": 512,
	"./me": 513,
	"./me.js": 513,
	"./mi": 514,
	"./mi.js": 514,
	"./mk": 515,
	"./mk.js": 515,
	"./ml": 516,
	"./ml.js": 516,
	"./mn": 517,
	"./mn.js": 517,
	"./mr": 518,
	"./mr.js": 518,
	"./ms": 519,
	"./ms-my": 520,
	"./ms-my.js": 520,
	"./ms.js": 519,
	"./mt": 521,
	"./mt.js": 521,
	"./my": 522,
	"./my.js": 522,
	"./nb": 523,
	"./nb.js": 523,
	"./ne": 524,
	"./ne.js": 524,
	"./nl": 525,
	"./nl-be": 526,
	"./nl-be.js": 526,
	"./nl.js": 525,
	"./nn": 527,
	"./nn.js": 527,
	"./pa-in": 528,
	"./pa-in.js": 528,
	"./pl": 529,
	"./pl.js": 529,
	"./pt": 530,
	"./pt-br": 531,
	"./pt-br.js": 531,
	"./pt.js": 530,
	"./ro": 532,
	"./ro.js": 532,
	"./ru": 533,
	"./ru.js": 533,
	"./sd": 534,
	"./sd.js": 534,
	"./se": 535,
	"./se.js": 535,
	"./si": 536,
	"./si.js": 536,
	"./sk": 537,
	"./sk.js": 537,
	"./sl": 538,
	"./sl.js": 538,
	"./sq": 539,
	"./sq.js": 539,
	"./sr": 540,
	"./sr-cyrl": 541,
	"./sr-cyrl.js": 541,
	"./sr.js": 540,
	"./ss": 542,
	"./ss.js": 542,
	"./sv": 543,
	"./sv.js": 543,
	"./sw": 544,
	"./sw.js": 544,
	"./ta": 545,
	"./ta.js": 545,
	"./te": 546,
	"./te.js": 546,
	"./tet": 547,
	"./tet.js": 547,
	"./tg": 548,
	"./tg.js": 548,
	"./th": 549,
	"./th.js": 549,
	"./tl-ph": 550,
	"./tl-ph.js": 550,
	"./tlh": 551,
	"./tlh.js": 551,
	"./tr": 552,
	"./tr.js": 552,
	"./tzl": 553,
	"./tzl.js": 553,
	"./tzm": 554,
	"./tzm-latn": 555,
	"./tzm-latn.js": 555,
	"./tzm.js": 554,
	"./ug-cn": 556,
	"./ug-cn.js": 556,
	"./uk": 557,
	"./uk.js": 557,
	"./ur": 558,
	"./ur.js": 558,
	"./uz": 559,
	"./uz-latn": 560,
	"./uz-latn.js": 560,
	"./uz.js": 559,
	"./vi": 561,
	"./vi.js": 561,
	"./x-pseudo": 562,
	"./x-pseudo.js": 562,
	"./yo": 563,
	"./yo.js": 563,
	"./zh-cn": 564,
	"./zh-cn.js": 564,
	"./zh-hk": 565,
	"./zh-hk.js": 565,
	"./zh-tw": 566,
	"./zh-tw.js": 566
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 893;

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfricaentnewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AfricaentnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AfricaentnewsPage = /** @class */ (function () {
    function AfricaentnewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AfricaentnewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AfricaentnewsPage');
    };
    AfricaentnewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-africaentnews',template:/*ion-inline-start:"C:\apps\thepost\src\pages\africaentnews\africaentnews.html"*/'<!--\n  Generated template for the AfricaentnewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar no-border-bottom color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Africa Entertainment News</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\africaentnews\africaentnews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AfricaentnewsPage);
    return AfricaentnewsPage;
}());

//# sourceMappingURL=africaentnews.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserActivityPage = /** @class */ (function () {
    function UserActivityPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.allRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('/reports');
        this.allRef.orderByChild("submitdate").on('value', function (allList) {
            //  this.allRef.on('value', allList => {
            var props = [];
            allList.forEach(function (property) {
                props.push(property.val());
                return false;
            });
            _this.allList = props.slice().reverse();
            _this.loadedAllList = props;
        });
    }
    UserActivityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserActivityPage');
    };
    UserActivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-activity',template:/*ion-inline-start:"C:\apps\thepost\src\pages\user-activity\user-activity.html"*/'<!--\n  Generated template for the UserActivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>User Activity</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list *ngFor="let item of allList">\n  <ion-card>\n    <ion-item>      \n        <ion-slides pager class="slid" >\n\n            <ion-slide>\n                <img class="img" src={{item.captureDataUrl}}/>\n            </ion-slide>\n            <ion-slide >\n                <img class="img" src={{item.captureDataUrl2}}/>\n            </ion-slide>\n            <ion-slide >\n                <img class="img" src={{item.captureDataUrl3}}/>\n            </ion-slide>\n            <ion-slide >\n                <img class="img" src={{item.captureDataUrl4}}/>\n            </ion-slide>\n        </ion-slides>\n        <h2>{{item.type}}</h2>\n        <h4>{{item.submitdate | date:\'yyyy-MM-dd HH:mm:ss\'}}</h4>\n        <p>{{item.report}}</p>\n        <p>Posted by: {{item.user}}</p>\n        <p>Assessed by: {{item.admin}}</p>\n        <p>Status: {{item.status}}</p>\n        <p>{{item.id}}</p>\n    </ion-item>\n    <div padding>\n      <button ion-button block type="submit">Follow</button>\n    </div>\n  </ion-card>\n\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\user-activity\user-activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UserActivityPage);
    return UserActivityPage;
}());

//# sourceMappingURL=user-activity.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__issue_detail_issue_detail__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopping_list_shopping_list__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HttpClient } from '@angular/common/http';




/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatusPage = /** @class */ (function () {
    function StatusPage(navCtrl, navParams, db, 
        //private http: HttpClient,
        alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.issues = db.list('/reports/');
        this.adminArray = ['Send Someone to investigate', 'Sent Someone to Fix'];
        this.userArray = ['Submit Issue', 'Update'];
        this.managerArray = ['Escalate', 'Close', 'Submit Report'];
        this.securityArray = ['Approved', 'Authorized', 'Denied'];
    }
    StatusPage.prototype.updateFunction = function (submitdate, status, comment) {
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
    };
    StatusPage.prototype.getData = function () {
        var _this = this;
        this.allRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/reports/');
        this.allRef.orderByChild("status").equalTo("User Submitted").on('value', function (allList) {
            //  this.allRef.on('value', allList => {
            var props = [];
            allList.forEach(function (property) {
                props.push(property.val());
                console.log(props);
                return false;
            });
            _this.allList = props.slice().reverse();
            _this.loadedAllList = props;
        });
        this.loadarray();
        // this.countObj();
    };
    StatusPage.prototype.onInput = function (select) {
        if (window.localStorage.getItem('omeyaemail') == "security@omeya.com.na") {
        }
        else if (window.localStorage.getItem('omeyaemail') == "security1@omeya.com.na") {
        }
        else { }
    };
    StatusPage.prototype.itemTapped = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__issue_detail_issue_detail__["a" /* IssueDetailPage */], {
            item: item
        });
    };
    StatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComingUpPage');
        // this.presentLoading();
        if (window.localStorage.getItem('omeyasecurity') == 'guest') {
            this.presentUnauthorized();
        }
        else {
            if (window.localStorage.getItem('omeyasecurity') == '') {
                this.presentUnauthorized();
            }
            else {
                if (window.localStorage.getItem('omeyasecurity') == 'admin') {
                    this.getData();
                }
                else {
                    if (window.localStorage.getItem('omeyasecurity') == 'security') {
                        this.getData();
                    }
                    else {
                        if (window.localStorage.getItem('omeyasecurity') == 'Management') {
                            this.getData();
                        }
                        else {
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
    };
    StatusPage.prototype.loadarray = function () {
        //console.log(this.profileRef);
        if (window.localStorage.getItem('omeyasecurity') == 'guest') {
            this.presentUnauthorized();
        }
        else {
            if (window.localStorage.getItem('omeyasecurity') == 'admin') {
                this.resolved = this.adminArray;
            }
            else {
                if (window.localStorage.getItem('omeyasecurity') == 'Management') {
                    this.resolved = this.managerArray;
                }
                else {
                    this.presentUnauthorized();
                }
            }
            //return this.adminArray;
        }
    };
    StatusPage.prototype.hideLoading = function () {
        this.loader.dismiss();
    };
    StatusPage.prototype.presentUnauthorized = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Access denied!',
            subTitle: 'You do not have the correct security clearance to update issue status',
            buttons: [{
                    text: 'OK',
                    handler: function (data) {
                        console.log('Cancel clicked');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__shopping_list_shopping_list__["a" /* ShoppingListPage */]);
                    }
                }]
        });
        alert.present();
    };
    StatusPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Reports loading, Please wait..."
            // ,duration: 3000
        });
        this.loader.present();
        // this.hideloading();
    };
    StatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-status',template:/*ion-inline-start:"C:\apps\thepost\src\pages\status\status.html"*/'<!--\n  Generated template for the StatusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Status Update</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-list *ngFor="let item of allList">\n  <ion-card>\n    <div>\n\n       \n    <ion-slides pager>\n			<ion-slide>\n				<img src="{{item.captureDataUrl}}">\n			</ion-slide>\n\n			<ion-slide>\n				<img src="{{item.captureDataUrl2}}">\n			</ion-slide>\n\n			<ion-slide>\n				  <img src="{{item.captureDataUrl3}}">\n      </ion-slide>\n      \n      <ion-slide>\n				  <img src="{{item.captureDataUrl4}}">\n			</ion-slide>\n		</ion-slides>\n   </div>\n\n   <div>\n     <p>{{item.report}}</p>\n     <p>{{item.submitdate | date:\'yyyy-MM-dd HH:mm:ss\'}}</p>\n     <ion-item>\n    </ion-item>\n     \n   </div>\n<!--\n    <ion-item>\n\n        <ion-label>Issues Status</ion-label>\n        <ion-select *ngFor="let item of adminArray" [(ngModel)]="item.status" (ionInput)="onInput($event)">\n          <ion-option value="Sent Someone to Investigate">Sent Someone to Investigate</ion-option>\n          <ion-option value="Sent Someone to fix">Sent Someone to fix</ion-option>\n          <ion-option value="Submit Report">Submit Report</ion-option>\n          <ion-option value="Escalation to management">Escalate to Management</ion-option>\n          <ion-option value="Issue closed">Close Issue</ion-option>\n        </ion-select>\n      </ion-item>\n-->\n\n\n\n      <ion-list radio-group *ngFor="let item of resolved"  [(ngModel)]="item.status">\n    \n        <ion-item>\n          <ion-label>{{item}}</ion-label>\n          <ion-radio value="{{item}}"></ion-radio>\n        </ion-item>\n    \n      </ion-list>\n\n      <ion-list radio-group *ngFor="let item of resolved" >\n          <ion-item>\n            <ion-label>Status</ion-label>\n            <ion-select [(ngModel)]="item.status">\n              <ion-option value="{{item}}">{{item}}</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n\n\n          <ion-item>\n            <ion-label stacked color="primary">Enter your comment below</ion-label>\n            <ion-textarea [(ngModel)]="item.comment" name="supportQuestion" #supportQuestion="ngModel" rows="2" required></ion-textarea>\n          </ion-item>\n\n\n        <div padding>\n          <button ion-button block type="submit" (click)="updateFunction(item.submitdate, item.status, item.comment)">Submit</button>\n        </div>\n      \n  </ion-card>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\status\status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], StatusPage);
    return StatusPage;
}());

//# sourceMappingURL=status.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BusPage = /** @class */ (function () {
    function BusPage(navCtrl, af, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.af = af;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.timestamp = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database.ServerValue.TIMESTAMP;
        this.logs = af.list('/activitylog');
        this.bus = af.list('/bus');
    }
    BusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BusPage');
    };
    BusPage.prototype.bookseat = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                        //this.nav.setRoot(TabsPage);
                    }
                },
                {
                    text: 'Confirm',
                    handler: function (data) {
                        console.log('Saved clicked' + data.email + data.password);
                        _this.book(data.passenger, data.destination);
                    }
                }
            ]
        });
        prompt.present();
    };
    BusPage.prototype.book = function (passenger, destination) {
        Promise.resolve(this.bus.push({ passenger: passenger,
            destination: destination,
            timestamp: this.timestamp,
            owner: (JSON.parse(localStorage.getItem('email')))
        }));
    };
    BusPage.prototype.logActivity = function (activity) {
        Promise.resolve(this.logs.push({ activity: activity,
            timestamp: this.timestamp,
            owner: (JSON.parse(localStorage.getItem('email')))
        }));
    };
    BusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bus',template:/*ion-inline-start:"C:\apps\thepost\src\pages\bus\bus.html"*/'<!--\n  Generated template for the BusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle item-start>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Bus Reservations</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-grid>\n  <ion-row>\n    <ion-col><button ion-button clear (click)="bookseat()" type="submit"><img src="assets/imgs/vseat.png"></button></ion-col>\n     <ion-col></ion-col><ion-col></ion-col>\n    <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col><button ion-button clear (click)="bookseat()" type="submit"><img src="assets/imgs/vseat.png"></button></ion-col>\n     <ion-col></ion-col>\n     <ion-col><button ion-button clear (click)="bookseat()" type="submit"><img src="assets/imgs/vseat.png"></button></ion-col>\n    <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col><button ion-button clear (click)="bookseat()" type="submit"><img src="assets/imgs/vseat.png"></button></ion-col>\n     <ion-col></ion-col>\n     <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n    <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col><button ion-button clear (click)="bookseat()" type="submit"><img src="assets/imgs/vseat.png"></button></ion-col>\n     <ion-col></ion-col>\n     <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n    <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col><button ion-button clear (click)="bookseat()" type="submit"><img src="assets/imgs/vseat.png"></button></ion-col>\n     <ion-col></ion-col>\n     <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n    <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col><button ion-button clear (click)="bookseat()" type="submit"><img src="assets/imgs/vseat.png"></button></ion-col>\n     <ion-col></ion-col>\n     <ion-col><button ion-button clear (click)="bookseat()" type="submit"><img src="assets/imgs/vseat.png"></button></ion-col>\n    <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col><button ion-button clear (click)="bookseat()" type="submit"><img src="assets/imgs/vseat.png"></button></ion-col>\n     <ion-col></ion-col>\n     <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n    <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col><button ion-button clear (click)="bookseat()" type="submit"><img src="assets/imgs/vseat.png"></button></ion-col>\n     <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n     <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n    <ion-col><button ion-button clear (click)="viewbooking()" type="submit"><img src="assets/imgs/oseat.png"></button></ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\bus\bus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], BusPage);
    return BusPage;
}());

//# sourceMappingURL=bus.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AdminReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminReportPage = /** @class */ (function () {
    function AdminReportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //Chart 1
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55], label: 'Open' },
            { data: [28, 48, 40, 19, 86, 27], label: 'Closed' }
        ];
        //End Bar Chart 1
        //Begin Bar Chart 2
        this.bar2ChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.bar2ChartLabels = ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.bar2ChartType = 'bar';
        this.bar2ChartLegend = true;
        this.bar2ChartData = [
            { data: [65, 59, 80, 81, 56, 55], label: 'Open' },
            { data: [28, 48, 40, 19, 86, 27], label: 'Closed' }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Open', 'Closed', 'In Progress', 'Escalated'];
        this.doughnutChartData = [4, 11, 10, 2];
        this.doughnutChartType = 'doughnut';
    }
    AdminReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminReportPage');
    };
    // events
    AdminReportPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    AdminReportPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    // events
    AdminReportPage.prototype.chart2Clicked = function (e) {
        console.log(e);
    };
    AdminReportPage.prototype.chart2Hovered = function (e) {
        console.log(e);
    };
    //End Bar Chart 2
    AdminReportPage.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    AdminReportPage.prototype.randomize2 = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.bar2ChartData));
        clone[0].data = data;
        this.bar2ChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    // events
    AdminReportPage.prototype.chartDonutClicked = function (e) {
        console.log(e);
    };
    AdminReportPage.prototype.chartDonutHovered = function (e) {
        console.log(e);
    };
    AdminReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-report',template:/*ion-inline-start:"C:\apps\thepost\src\pages\admin-report\admin-report.html"*/'<!--\n  Generated template for the AdminReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n      <button ion-button menuToggle item-start>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Admin Reporting</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div>\n        <div style="display: block">\n          <canvas baseChart\n                  [datasets]="barChartData"\n                  [labels]="barChartLabels"\n                  [options]="barChartOptions"\n                  [legend]="barChartLegend"\n                  [chartType]="barChartType"\n                  (chartHover)="chartHovered($event)"\n                  (chartClick)="chartClicked($event)"></canvas>\n        </div>\n        <button ion-button round (click)="randomize()">Update</button>\n      </div>\n\n\n      <div>\n          <div style="display: block">\n            <canvas baseChart\n                    [datasets]="bar2ChartData"\n                    [labels]="bar2ChartLabels"\n                    [options]="bar2ChartOptions"\n                    [legend]="bar2ChartLegend"\n                    [chartType]="bar2ChartType"\n                    (chartHover)="chart2Hovered($event)"\n                    (chartClick)="chart2Clicked($event)"></canvas>\n          </div>\n          <button ion-button round (click)="randomize2()">Update</button>\n        </div>\n      \n\n        <div style="display: block">\n          <canvas baseChart\n                      [data]="doughnutChartData"\n                      [labels]="doughnutChartLabels"\n                      [chartType]="doughnutChartType"\n                      (chartHover)="chartDonutHovered($event)"\n                      (chartClick)="chartDonutClicked($event)"></canvas>\n        </div>      \n       \n        <button ion-button round full color="download"  (tap)="gateRes()">\n            <ion-icon name="print" padding ></ion-icon> Print to PDF\n        </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\thepost\src\pages\admin-report\admin-report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AdminReportPage);
    return AdminReportPage;
}());

//# sourceMappingURL=admin-report.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDJgs3iFZvsittGaCMH_v6gk5_MaSZTISs",
    authDomain: "taxi-63ca5.firebaseapp.com",
    databaseURL: "https://taxi-63ca5.firebaseio.com",
    projectId: "taxi-63ca5",
    storageBucket: "taxi-63ca5.appspot.com",
    messagingSenderId: "484838883955"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';


/*
  Generated class for the ShoppingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ShoppingServiceProvider = /** @class */ (function () {
    function ShoppingServiceProvider(db) {
        this.db = db;
        console.log('Hello ShoppingServiceProvider Provider');
    }
    ShoppingServiceProvider.prototype.getShoppingList = function () {
        this.db.list('propertylisting'); //.valueChanges();
    };
    ShoppingServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], ShoppingServiceProvider);
    return ShoppingServiceProvider;
}());

//# sourceMappingURL=shopping-service.js.map

/***/ })

},[567]);
//# sourceMappingURL=main.js.map
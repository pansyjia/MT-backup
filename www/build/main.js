webpackJsonp([6],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entry; });
var Entry = /** @class */ (function () {
    function Entry() {
    }
    return Entry;
}());

//# sourceMappingURL=entry.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChartPage = /** @class */ (function () {
    function ChartPage(navCtrl, navParams, entryService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entryService = entryService;
        this.chartLabels = [];
        this.chartTips = [];
        this.chartValues = [];
        this.chartColours = [];
        this.chartHoverColours = [];
        this.entryService.getObservable().subscribe(function (update) {
            _this.entries = _this.entryService.getEntries();
            //  console.log(this.entries);
            //   console.log('this.entryService.getObservable().subscribe ');
        }, function (err) {
            //   console.log('this.entryService.getObservable().subscribe :', err);
        });
        this.entries = this.entryService.getEntries();
        this.happyCount = this.entryService.moodCount("happy");
        this.angryCount = this.entryService.moodCount("angry");
        this.sadCount = this.entryService.moodCount("sad");
        this.okayCount = this.entryService.moodCount("okay");
    }
    ChartPage.prototype.ionViewDidLoad = function () {
        this.defineChartData();
        this.createBarChart();
    };
    /**
        * Parse the JSON data, push specific keys into selected arrays for use with
        * each chart
        */
    ChartPage.prototype.defineChartData = function () {
        var k;
        for (k in this.entries) {
            var entry = this.entries[k];
            var thisMood = this.entryService.getMood(entry.mood);
            console.log("retrieved mood:", thisMood);
            this.chartTips.push(thisMood.type);
            this.chartLabels.push(entry.location);
            this.chartValues.push(thisMood.score);
            this.chartColours.push(thisMood.color);
            this.chartHoverColours.push(thisMood.hover);
        }
    };
    /**
     * Configure the Bar chart, define configuration options
     */
    ChartPage.prototype.createBarChart = function () {
        console.log("start...");
        this.barChartEl = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barChart.nativeElement, {
            type: 'horizontalBar',
            data: {
                labels: this.chartLabels,
                datasets: [{
                        label: 'Mood Score',
                        data: this.chartValues,
                        duration: 2000,
                        easing: 'easeInQuart',
                        backgroundColor: this.chartColours,
                        hoverBackgroundColor: this.chartHoverColours
                    }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: true,
                    boxWidth: 80,
                    fontSize: 15,
                    padding: 0
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                stepSize: 20,
                                max: 100
                            }
                        }],
                    xAxes: [{
                            ticks: {
                                autoSkip: true
                            }
                        }]
                }
            }
        });
        console.log("safe!");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barChart'),
        __metadata("design:type", Object)
    ], ChartPage.prototype, "barChart", void 0);
    ChartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chart',template:/*ion-inline-start:"/Users/siyujia/Desktop/MT-backup/src/pages/chart/chart.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Mood Chart</ion-title>\n  </ion-navbar>\n       \n</ion-header>\n\n\n <ion-content padding>\n    <section class="chart-wrapper">\n      <canvas #barChart></canvas>\n    </section>\n\n<br>\n<br>\n    <ion-list no-lines class="mood-count">\n      <ion-item class="mood-item">\n       <img id="happy" item-start style="width: 100px; height: 100px; " src="./assets/imgs/Happy.png">\n       <p class="mood-count">Happy: {{happyCount}}</p>\n      </ion-item>\n      \n       <ion-item class="mood-item">\n      <img id="angry" item-start style="width: 100px; height: 100px;" src="./assets/imgs/Angry.png" >\n      <p class="mood-count">Angry: {{angryCount}}</p>\n    </ion-item>\n      \n    <ion-item class="mood-item">\n      <img id="sad" item-start style="width: 100px; height: 100px; " src="./assets/imgs/Sad.png">\n      <p class="mood-count">Sad: {{sadCount}}</p>\n    </ion-item>\n      \n    <ion-item class="mood-item">      \n      <img id="okay" item-start style="width: 100px; height: 100px; " src="./assets/imgs/Okay.png">\n      <p class="mood-count">Okay: {{okayCount}}</p>\n    </ion-item>\n      \n  \n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/siyujia/Desktop/MT-backup/src/pages/chart/chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__["a" /* EntryDataServiceProvider */]])
    ], ChartPage);
    return ChartPage;
}());

//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_entry__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewLocationPage = /** @class */ (function () {
    function NewLocationPage(navCtrl, navParams, toastCtrl, entryDataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.entryDataService = entryDataService;
        this.entry = new __WEBPACK_IMPORTED_MODULE_2__models_entry__["a" /* Entry */]();
        this.entry.id = -1;
        this.entry.text = "";
        this.entry.mood = "happy";
        this.entry.location = "";
        this.entry.timestamp = new Date();
    }
    NewLocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewLocationPage');
    };
    NewLocationPage.prototype.saveEntry = function () {
        ///present toast
        var toast = this.toastCtrl.create({
            message: 'A mood record was added successfully',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
        ///save
        var newEntry = new __WEBPACK_IMPORTED_MODULE_2__models_entry__["a" /* Entry */]();
        // newEntry.mood = this.entry.mood;
        newEntry.location = this.entry.location;
        newEntry.text = this.entry.text;
        console.log("Now I would save the entry: ", newEntry);
        this.entryDataService.addEntry(this.entry);
        this.navCtrl.popToRoot();
        this.navCtrl.parent.select(2);
    };
    NewLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-location',template:/*ion-inline-start:"/Users/siyujia/Desktop/MT-backup/src/pages/new-location/new-location.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Add Location&Text</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-list>\n      <h5 style="text-align:center;">Hi! Where are you now?</h5>\n      <ion-item>\n        <ion-input type="text" placeholder="Your Location" [(ngModel)]="entry.location"></ion-input>\n      </ion-item>\n  \n      <h5 style="text-align:center;">Add Note</h5>\n      <ion-item>\n        <ion-input type="text" placeholder="Today I..." [(ngModel)]="entry.text"></ion-input>\n      </ion-item>\n    </ion-list>\n  \n    <button ion-button item-end (click)="saveEntry()">Done</button>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/siyujia/Desktop/MT-backup/src/pages/new-location/new-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__["a" /* EntryDataServiceProvider */]])
    ], NewLocationPage);
    return NewLocationPage;
}());

//# sourceMappingURL=new-location.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_chart__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__current_current__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ChartView = __WEBPACK_IMPORTED_MODULE_2__chart_chart__["a" /* ChartPage */];
        // AddEntry = EntryDetailPage;
        this.ListView = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.CurrentMood = __WEBPACK_IMPORTED_MODULE_4__current_current__["a" /* CurrentPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/siyujia/Desktop/MT-backup/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title>Tabs</ion-title>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<!-- <ion-content padding> -->\n  <ion-tabs selectedIndex="1">\n    <ion-tab tabIcon="analytics" tabTitle="Chart" [root]="ChartView"></ion-tab>\n    <!-- <ion-tab tabIcon="add-circle" tabTitle="Add" [root]="AddEntry"></ion-tab> -->\n    <ion-tab tabIcon="time" tabTitle="Current" [root]="CurrentMood"></ion-tab>\n    <ion-tab tabIcon="list-box" tabTitle="History" [root]="ListView"></ion-tab>\n    \n</ion-tabs>\n\n<!-- </ion-content> -->\n'/*ion-inline-end:"/Users/siyujia/Desktop/MT-backup/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chart/chart.module": [
		878,
		5
	],
	"../pages/current/current.module": [
		879,
		4
	],
	"../pages/entry-detail/entry-detail.module": [
		880,
		3
	],
	"../pages/new-location/new-location.module": [
		881,
		2
	],
	"../pages/new-mood/new-mood.module": [
		883,
		1
	],
	"../pages/tabs/tabs.module": [
		882,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entry_detail_entry_detail__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, entryService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.entryService = entryService;
        this.entryService.getObservable().subscribe(function (update) {
            _this.entries = _this.entryService.getEntries();
            console.log(_this.entries);
        }, function (err) {
            console.log('this.entryService.getObservable().subscribe :', err);
        });
        this.entries = this.entryService.getEntries();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.editEntry = function (entryID) {
        // console.log("editing entry ", entryID);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__entry_detail_entry_detail__["a" /* EntryDetailPage */], { "entryID": entryID });
    };
    HomePage.prototype.getMood = function (name) {
        var thisMood = this.entryService.getMood(name);
        // console.log('thisMood', thisMood);
        return thisMood;
    };
    HomePage.prototype.deleteEntry = function (entryID) {
        var thisMood = this.entryService.removeEntry(entryID);
        // console.log('thisMood', thisMood);
        return thisMood;
    };
    HomePage.prototype.checkStatus = function () {
        if (this.entryService.getEntries().length == 0) {
            return true;
        }
        return false;
    };
    // add the first or new record
    HomePage.prototype.addNew = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__entry_detail_entry_detail__["a" /* EntryDetailPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/siyujia/Desktop/MT-backup/src/pages/home/home.html"*/'<ion-header>\n  <!-- <ion-navbar>\n    <ion-title>\n      Mood Records\n    </ion-title>\n  </ion-navbar> -->\n  <ion-toolbar>\n    <ion-title>My Toolbar Title</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="card-list">\n\n  <div *ngIf="checkStatus()">\n    <h2 class="empty-title">Welcome to Mood Tracker!</h2>\n    <h4 class="empty-sub">Wherer mood matters!</h4>\n    <br>\n    <br>\n      <button ion-button round color="secondary" class="get-started" (click)="addNew()">\n    START\n    </button>      \n  </div>\n\n  <div *ngIf="!checkStatus()">\n\n      <!-- <ion-fab right top> -->\n          <button ion-button full color="primary" (click)="addNew()">ADD NED</button>\n      <!-- </ion-fab> -->\n  <br>\n  <br>\n    <ion-list no-lines *ngFor="let entry of entries">\n      <ion-item-sliding #item>\n          <ion-item>\n              <img class="card-img" style="width: 120px; height: 120px;" [src]="getMood(entry.mood).image" />\n              <div class="card-title">{{entry.location}}</div>\n              <div class="card-subtitle">{{entry.timestamp}}</div>\n          </ion-item>\n\n          <ion-item-options side="left">\n              <button ion-button expandable color="primary" (click)="editEntry(entry.id)">Edit</button>\n            </ion-item-options>\n          <ion-item-options side="right">\n            <button ion-button expandable color="danger" (click)="deleteEntry(entry.id)">Delete</button>\n          </ion-item-options>\n    </ion-item-sliding>\n      \n    </ion-list>\n  \n\n</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/siyujia/Desktop/MT-backup/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__["a" /* EntryDataServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryDataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mood__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(847);
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




var config = {
    apiKey: "AIzaSyBU4FhZ_0XJF9-GpUxvRCfXFP14PnANb6o",
    authDomain: "moodtracker-b75bd.firebaseapp.com",
    databaseURL: "https://moodtracker-b75bd.firebaseio.com",
    projectId: "moodtracker-b75bd",
    storageBucket: "moodtracker-b75bd.appspot.com",
    messagingSenderId: "587504295484"
};
var EntryDataServiceProvider = /** @class */ (function () {
    function EntryDataServiceProvider() {
        var _this = this;
        this.entries = [];
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.initializeApp(config);
        this.db = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database();
        console.log('test service constructor');
        // this.clientObservable = Observable.create(observer => {
        //   console.log('test this.clientObservable',  this.clientObservable);
        //   this.serviceObserver = observer;
        // });
        this.clientObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this.serviceObserver = this.clientObservable;
        // this.serviceSubject.next(undefined)
        // this.serviceSubject.subscribe();
        var dataRef = this.db.ref('/entries');
        dataRef.on('value', function (snapshot) {
            _this.entries = [];
            snapshot.forEach(function (childSnapshot) {
                var entry = {
                    id: childSnapshot.key,
                    location: childSnapshot.val().location,
                    timestamp: childSnapshot.val().timestamp,
                    text: childSnapshot.val().text,
                    mood: childSnapshot.val().mood,
                };
                _this.entries.push(entry);
            });
            _this.notifySubscribers();
        });
    }
    EntryDataServiceProvider.prototype.getObservable = function () {
        return this.clientObservable;
    };
    EntryDataServiceProvider.prototype.notifySubscribers = function () {
        this.serviceObserver.next(true);
    };
    EntryDataServiceProvider.prototype.getEntries = function () {
        var entriesClone = JSON.parse(JSON.stringify(this.entries));
        return entriesClone.sort(function (a, b) {
            if (a.timestamp > b.timestamp) {
                return -1;
            }
            else {
                return 1;
            }
        });
    };
    EntryDataServiceProvider.prototype.getEntryByID = function (id) {
        for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.id === id) {
                var clone = JSON.parse(JSON.stringify(e));
                return clone;
            }
        }
        return undefined;
    };
    EntryDataServiceProvider.prototype.getMood = function (name) {
        if (name == "happy") {
            return new __WEBPACK_IMPORTED_MODULE_1__models_mood__["a" /* Mood */]("happy", 100, "/assets/imgs/happy.png", "#F0CF75", "#FFE7A3");
        }
        if (name == "angry") {
            return new __WEBPACK_IMPORTED_MODULE_1__models_mood__["a" /* Mood */]("angry", 30, "/assets/imgs/angry.png", "#E6646E", "#E6888D");
        }
        if (name == "sad") {
            return new __WEBPACK_IMPORTED_MODULE_1__models_mood__["a" /* Mood */]("sad", 50, "/assets/imgs/sad.png", "#6DBEFF", "#B7DDFF");
        }
        if (name == "okay") {
            return new __WEBPACK_IMPORTED_MODULE_1__models_mood__["a" /* Mood */]("okay", 80, "/assets/imgs/okay.png", "#F09C4F", "#F0B077");
        }
        return new __WEBPACK_IMPORTED_MODULE_1__models_mood__["a" /* Mood */]("happy", 100, "/assets/imgs/Happy-b.png", "#F0CF75", "#FFE7A3"); // if not applied
    };
    EntryDataServiceProvider.prototype.addEntry = function (entry) {
        var listEntry = this.db.ref('/entries');
        var entryRef = listEntry.push();
        var dataRecord = {
            id: entry.id,
            location: entry.location,
            mood: entry.mood,
            text: entry.text,
            timestamp: new Date().toLocaleString()
        };
        console.log('in service, the new entry is', dataRecord);
        entryRef.set(dataRecord);
        this.notifySubscribers();
    };
    EntryDataServiceProvider.prototype.updateEntry = function (key, newEntry) {
        var parentRef = this.db.ref('/entries');
        var childRef = parentRef.child(key);
        var updateRecord = {
            // id: newEntry.id,
            location: newEntry.location,
            mood: newEntry.mood,
            text: newEntry.text,
            timestamp: new Date(newEntry.timestamp).toLocaleString()
        };
        childRef.set(updateRecord);
        this.notifySubscribers();
    };
    EntryDataServiceProvider.prototype.removeEntry = function (key) {
        var parentRef = this.db.ref('/entries');
        var childRef = parentRef.child(key);
        childRef.remove();
        this.notifySubscribers();
    };
    EntryDataServiceProvider.prototype.moodCount = function (moodtype) {
        var k;
        for (k in this.entries) {
            var entry = this.entries[k];
            var mood = moodtype;
            var count = this.entries.filter(function (obj) { return obj.mood === mood; }).length;
        }
        return count;
    };
    EntryDataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EntryDataServiceProvider);
    return EntryDataServiceProvider;
}());

//# sourceMappingURL=entry-data-service.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_location_new_location__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_entry__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_entry_data_service_entry_data_service__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewMoodPage = /** @class */ (function () {
    function NewMoodPage(navCtrl, navParams, entryDataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entryDataService = entryDataService;
        this.currentTime = new Date();
        this.entry = new __WEBPACK_IMPORTED_MODULE_3__models_entry__["a" /* Entry */]();
        this.entry.id = -1;
        this.entry.text = "";
        this.entry.mood = "happy";
        this.entry.location = "";
        this.entry.timestamp = new Date();
    }
    NewMoodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewMoodPage');
    };
    NewMoodPage.prototype.changeMood = function (name) {
        // this.buttonColor = "blue"; 
        this.entry.mood = name;
    };
    NewMoodPage.prototype.saveEntry = function () {
        ///save
        var newEntry = new __WEBPACK_IMPORTED_MODULE_3__models_entry__["a" /* Entry */]();
        newEntry.id = this.entry.id;
        newEntry.timestamp = this.entry.timestamp;
        newEntry.mood = this.entry.mood;
        // newEntry.location = this.entry.location;
        // newEntry.text = this.entry.text;
        console.log("Now I would save the mood: ", newEntry.mood);
        this.entryDataService.addEntry(this.entry);
        // this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__new_location_new_location__["a" /* NewLocationPage */]);
    };
    NewMoodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-mood',template:/*ion-inline-start:"/Users/siyujia/Desktop/MT-backup/src/pages/new-mood/new-mood.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Select a Mood</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n     \n    <ion-icon name="calendar"  color="primary"> Today, {{currentTime | date : \'short\'}}</ion-icon>\n     \n    <h5 style="text-align:center;">How is your mood?</h5>\n    <ion-row>\n        <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n          <button id="happy" (click)="changeMood(\'happy\')" >\n          <img id="happy" style="width: 125px; height: 125px; background: white;" src="./assets/imgs/Happy.png">\n          </button>\n          <button id="angry" (click)="changeMood(\'angry\')">\n            <img id="angry" style="width: 125px; height: 125px;background: white; " src="./assets/imgs/Angry.png" >\n          </button>\n          <button id="sad"  (click)="changeMood(\'sad\')">\n            <img id="sad" style="width: 125px; height: 125px; background: white;" src="./assets/imgs/Sad.png">\n          </button>\n          <button id="okay"  (click)="changeMood(\'okay\')">\n            <img id="okay" style="width: 125px; height: 125px;background: white; " src="./assets/imgs/Okay.png">\n          </button>\n        </ion-col>\n      </ion-row>\n  \n      <button ion-button item-end (click)="saveEntry()">Next</button>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/siyujia/Desktop/MT-backup/src/pages/new-mood/new-mood.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_entry_data_service_entry_data_service__["a" /* EntryDataServiceProvider */]])
    ], NewMoodPage);
    return NewMoodPage;
}());

//# sourceMappingURL=new-mood.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(499);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(877);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_entry_detail_entry_detail__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chart_chart__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_entry_data_service_entry_data_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_current_current__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_new_location_new_location__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_new_mood_new_mood__ = __webpack_require__(493);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_entry_detail_entry_detail__["a" /* EntryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_current_current__["a" /* CurrentPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_new_mood_new_mood__["a" /* NewMoodPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_new_location_new_location__["a" /* NewLocationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chart/chart.module#ChartPageModule', name: 'ChartPage', segment: 'chart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/current/current.module#CurrentPageModule', name: 'CurrentPage', segment: 'current', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entry-detail/entry-detail.module#EntryDetailPageModule', name: 'EntryDetailPage', segment: 'entry-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-location/new-location.module#NewLocationPageModule', name: 'NewLocationPage', segment: 'new-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-mood/new-mood.module#NewMoodPageModule', name: 'NewMoodPage', segment: 'new-mood', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_entry_detail_entry_detail__["a" /* EntryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_chart_chart__["a" /* ChartPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_current_current__["a" /* CurrentPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_new_mood_new_mood__["a" /* NewMoodPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_new_location_new_location__["a" /* NewLocationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__providers_entry_data_service_entry_data_service__["a" /* EntryDataServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 233,
	"./af.js": 233,
	"./ar": 234,
	"./ar-dz": 235,
	"./ar-dz.js": 235,
	"./ar-kw": 236,
	"./ar-kw.js": 236,
	"./ar-ly": 237,
	"./ar-ly.js": 237,
	"./ar-ma": 238,
	"./ar-ma.js": 238,
	"./ar-sa": 239,
	"./ar-sa.js": 239,
	"./ar-tn": 240,
	"./ar-tn.js": 240,
	"./ar.js": 234,
	"./az": 241,
	"./az.js": 241,
	"./be": 242,
	"./be.js": 242,
	"./bg": 243,
	"./bg.js": 243,
	"./bm": 244,
	"./bm.js": 244,
	"./bn": 245,
	"./bn.js": 245,
	"./bo": 246,
	"./bo.js": 246,
	"./br": 247,
	"./br.js": 247,
	"./bs": 248,
	"./bs.js": 248,
	"./ca": 249,
	"./ca.js": 249,
	"./cs": 250,
	"./cs.js": 250,
	"./cv": 251,
	"./cv.js": 251,
	"./cy": 252,
	"./cy.js": 252,
	"./da": 253,
	"./da.js": 253,
	"./de": 254,
	"./de-at": 255,
	"./de-at.js": 255,
	"./de-ch": 256,
	"./de-ch.js": 256,
	"./de.js": 254,
	"./dv": 257,
	"./dv.js": 257,
	"./el": 258,
	"./el.js": 258,
	"./en-au": 259,
	"./en-au.js": 259,
	"./en-ca": 260,
	"./en-ca.js": 260,
	"./en-gb": 261,
	"./en-gb.js": 261,
	"./en-ie": 262,
	"./en-ie.js": 262,
	"./en-il": 263,
	"./en-il.js": 263,
	"./en-nz": 264,
	"./en-nz.js": 264,
	"./eo": 265,
	"./eo.js": 265,
	"./es": 266,
	"./es-do": 267,
	"./es-do.js": 267,
	"./es-us": 268,
	"./es-us.js": 268,
	"./es.js": 266,
	"./et": 269,
	"./et.js": 269,
	"./eu": 270,
	"./eu.js": 270,
	"./fa": 271,
	"./fa.js": 271,
	"./fi": 272,
	"./fi.js": 272,
	"./fo": 273,
	"./fo.js": 273,
	"./fr": 274,
	"./fr-ca": 275,
	"./fr-ca.js": 275,
	"./fr-ch": 276,
	"./fr-ch.js": 276,
	"./fr.js": 274,
	"./fy": 277,
	"./fy.js": 277,
	"./gd": 278,
	"./gd.js": 278,
	"./gl": 279,
	"./gl.js": 279,
	"./gom-latn": 280,
	"./gom-latn.js": 280,
	"./gu": 281,
	"./gu.js": 281,
	"./he": 282,
	"./he.js": 282,
	"./hi": 283,
	"./hi.js": 283,
	"./hr": 284,
	"./hr.js": 284,
	"./hu": 285,
	"./hu.js": 285,
	"./hy-am": 286,
	"./hy-am.js": 286,
	"./id": 287,
	"./id.js": 287,
	"./is": 288,
	"./is.js": 288,
	"./it": 289,
	"./it.js": 289,
	"./ja": 290,
	"./ja.js": 290,
	"./jv": 291,
	"./jv.js": 291,
	"./ka": 292,
	"./ka.js": 292,
	"./kk": 293,
	"./kk.js": 293,
	"./km": 294,
	"./km.js": 294,
	"./kn": 295,
	"./kn.js": 295,
	"./ko": 296,
	"./ko.js": 296,
	"./ky": 297,
	"./ky.js": 297,
	"./lb": 298,
	"./lb.js": 298,
	"./lo": 299,
	"./lo.js": 299,
	"./lt": 300,
	"./lt.js": 300,
	"./lv": 301,
	"./lv.js": 301,
	"./me": 302,
	"./me.js": 302,
	"./mi": 303,
	"./mi.js": 303,
	"./mk": 304,
	"./mk.js": 304,
	"./ml": 305,
	"./ml.js": 305,
	"./mn": 306,
	"./mn.js": 306,
	"./mr": 307,
	"./mr.js": 307,
	"./ms": 308,
	"./ms-my": 309,
	"./ms-my.js": 309,
	"./ms.js": 308,
	"./mt": 310,
	"./mt.js": 310,
	"./my": 311,
	"./my.js": 311,
	"./nb": 312,
	"./nb.js": 312,
	"./ne": 313,
	"./ne.js": 313,
	"./nl": 314,
	"./nl-be": 315,
	"./nl-be.js": 315,
	"./nl.js": 314,
	"./nn": 316,
	"./nn.js": 316,
	"./pa-in": 317,
	"./pa-in.js": 317,
	"./pl": 318,
	"./pl.js": 318,
	"./pt": 319,
	"./pt-br": 320,
	"./pt-br.js": 320,
	"./pt.js": 319,
	"./ro": 321,
	"./ro.js": 321,
	"./ru": 322,
	"./ru.js": 322,
	"./sd": 323,
	"./sd.js": 323,
	"./se": 324,
	"./se.js": 324,
	"./si": 325,
	"./si.js": 325,
	"./sk": 326,
	"./sk.js": 326,
	"./sl": 327,
	"./sl.js": 327,
	"./sq": 328,
	"./sq.js": 328,
	"./sr": 329,
	"./sr-cyrl": 330,
	"./sr-cyrl.js": 330,
	"./sr.js": 329,
	"./ss": 331,
	"./ss.js": 331,
	"./sv": 332,
	"./sv.js": 332,
	"./sw": 333,
	"./sw.js": 333,
	"./ta": 334,
	"./ta.js": 334,
	"./te": 335,
	"./te.js": 335,
	"./tet": 336,
	"./tet.js": 336,
	"./tg": 337,
	"./tg.js": 337,
	"./th": 338,
	"./th.js": 338,
	"./tl-ph": 339,
	"./tl-ph.js": 339,
	"./tlh": 340,
	"./tlh.js": 340,
	"./tr": 341,
	"./tr.js": 341,
	"./tzl": 342,
	"./tzl.js": 342,
	"./tzm": 343,
	"./tzm-latn": 344,
	"./tzm-latn.js": 344,
	"./tzm.js": 343,
	"./ug-cn": 345,
	"./ug-cn.js": 345,
	"./uk": 346,
	"./uk.js": 346,
	"./ur": 347,
	"./ur.js": 347,
	"./uz": 348,
	"./uz-latn": 349,
	"./uz-latn.js": 349,
	"./uz.js": 348,
	"./vi": 350,
	"./vi.js": 350,
	"./x-pseudo": 351,
	"./x-pseudo.js": 351,
	"./yo": 352,
	"./yo.js": 352,
	"./zh-cn": 353,
	"./zh-cn.js": 353,
	"./zh-hk": 354,
	"./zh-hk.js": 354,
	"./zh-tw": 355,
	"./zh-tw.js": 355
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
webpackContext.id = 543;

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mood; });
var Mood = /** @class */ (function () {
    function Mood(type, score, image, color, hover) {
        this.type = type;
        this.score = score;
        this.image = image;
        this.color = color;
        this.hover = hover;
    }
    return Mood;
}());

//# sourceMappingURL=mood.js.map

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    // rootPage:any = CurrentPage;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/siyujia/Desktop/MT-backup/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/siyujia/Desktop/MT-backup/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_entry_data_service_entry_data_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entry_detail_entry_detail__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrentPage = /** @class */ (function () {
    function CurrentPage(navCtrl, navParams, entryService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entryService = entryService;
        this.entryService.getObservable().subscribe(function (update) {
            _this.entries = _this.entryService.getEntries();
            _this.entry = _this.entries[0];
        }, function (err) {
            console.log('this.entryService.getObservable()[0].subscribe :', err);
        });
        this.entries = this.entryService.getEntries();
        this.entry = this.entries[0];
    }
    CurrentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CurrentPage');
    };
    CurrentPage.prototype.addNew = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__entry_detail_entry_detail__["a" /* EntryDetailPage */]);
    };
    CurrentPage.prototype.getMood = function (name) {
        var thisMood = this.entryService.getMood(name);
        // console.log('thisMood', thisMood);
        return thisMood;
    };
    CurrentPage.prototype.checkStatus = function () {
        if (this.entryService.getEntries().length == 0) {
            return true;
        }
        return false;
    };
    CurrentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-current',template:/*ion-inline-start:"/Users/siyujia/Desktop/MT-backup/src/pages/current/current.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Current Mood</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n\n      <div *ngIf="checkStatus()">\n        <h2 class="empty-title">No Mood Record</h2>\n        <h5 class="empty-sub">Click the button below to record your current mood</h5>\n        <br>\n        <br>\n        <button ion-button round color="secondary" class="get-started" (click)="addNew()">\n    ADD</button>      \n  </div>\n\n    <div *ngIf="!checkStatus()">\n\n         <!-- <h5>{{entry.location}}</h5> -->\n          <!-- <p>{{entry.timestamp | date: "short"}}</p> -->\n      \n          <img style="width: 200px; height: 200px; " class="mood-img" item-start [src]="getMood(entry.mood).image" />  \n\n           <h2 class="mood-text"> I\'m {{entry.mood}}....</h2>\n  \n          <ion-fab right bottom>\n            <button ion-fab color="primary" icon-only (click)="addNew()"><ion-icon name="add"></ion-icon></button>\n        </ion-fab>\n  \n   \n</div>\n\n  </ion-content>\n  '/*ion-inline-end:"/Users/siyujia/Desktop/MT-backup/src/pages/current/current.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_entry_data_service_entry_data_service__["a" /* EntryDataServiceProvider */]])
    ], CurrentPage);
    return CurrentPage;
}());

//# sourceMappingURL=current.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_entry__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__current_current__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EntryDetailPage = /** @class */ (function () {
    function EntryDetailPage(navCtrl, navParams, entryDataService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entryDataService = entryDataService;
        this.toastCtrl = toastCtrl;
        this.happyselected = false;
        this.angryselected = false;
        this.sadselected = false;
        this.okayselected = false;
        var entryID = this.navParams.get("entryID");
        if (entryID === undefined) {
            this.entry = new __WEBPACK_IMPORTED_MODULE_2__models_entry__["a" /* Entry */]();
            this.entry.id = -1;
            this.entry.text = "";
            this.entry.mood = "happy";
            this.entry.location = "";
            this.entry.timestamp = new Date();
        }
        else {
            this.entry = this.entryDataService.getEntryByID(entryID);
        }
        // console.log("retrieved entry:", this.entry.mood.type);
        // console.log("happy is", this.happy);
    }
    EntryDetailPage.prototype.changeMood = function (name) {
        this.entry.mood = name;
        if (name == 'happy') {
            this.happyselected = true;
            this.angryselected = false;
            this.sadselected = false;
            this.okayselected = false;
        }
        if (name == 'angry') {
            this.happyselected = false;
            this.angryselected = true;
            this.sadselected = false;
            this.okayselected = false;
        }
        if (name == 'sad') {
            this.happyselected = false;
            this.angryselected = false;
            this.sadselected = true;
            this.okayselected = false;
        }
        if (name == 'okay') {
            this.happyselected = false;
            this.angryselected = false;
            this.sadselected = false;
            this.okayselected = true;
        }
    };
    EntryDetailPage.prototype.saveEntry = function () {
        ///present toast
        var toast = this.toastCtrl.create({
            message: 'A mood record was added successfully',
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
        ///save
        var newEntry = new __WEBPACK_IMPORTED_MODULE_2__models_entry__["a" /* Entry */]();
        newEntry.mood = this.entry.mood;
        newEntry.location = this.entry.location;
        newEntry.text = this.entry.text;
        console.log("Now I would save the entry: ", newEntry);
        this.entryDataService.addEntry(this.entry);
        // this.navCtrl.pop();
        // this.navCtrl.parent.select(2);
        // this.navCtrl.popToRoot();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__current_current__["a" /* CurrentPage */]);
    };
    EntryDetailPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    EntryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entry-detail',template:/*ion-inline-start:"/Users/siyujia/Desktop/MT-backup/src/pages/entry-detail/entry-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Create a Mood Record</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list no-lines>\n      <!-- <ion-icon name="calendar"  color="primary"> {{currentTime | date : \'short\'}}</ion-icon>  -->\n\n    <h5 style="text-align:center;">Hi! Where are you now?</h5>\n    <ion-item>\n      <ion-input type="text" placeholder="Your Location" [(ngModel)]="entry.location"></ion-input>\n    </ion-item>\n\n    <h5 style="text-align:center;">How is your mood?</h5>\n    <ion-row class="select-mood">\n      <ion-col class="select-mood" col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <button class="select-mood" id="happy" (click)="changeMood(\'happy\')" >\n        <img *ngIf="!happyselected" id="happy" style="width: 120px; height: 120px; " src="./assets/imgs/happy.png">\n        <img *ngIf="happyselected" id="happy" style="width: 120px; height: 120px; " src="./assets/imgs/happy_selected.png">\n        </button>\n\n        <button class="select-mood" id="angry" (click)="changeMood(\'angry\')">\n          <img *ngIf="!angryselected" id="angry" style="width: 120px; height: 120px; " src="./assets/imgs/angry.png" >\n          <img *ngIf="angryselected" id="angry" style="width: 120px; height: 120px; " src="./assets/imgs/angry_selected.png" >\n        </button>\n\n        <button class="select-mood" id="sad"  (click)="changeMood(\'sad\')">\n          <img *ngIf="!sadselected" id="sad" style="width: 120px; height: 120px;  " src="./assets/imgs/sad.png">\n          <img *ngIf="sadselected" id="angry" style="width: 120px; height: 120px; " src="./assets/imgs/sad_selected.png" >\n        </button>\n\n        <button class="select-mood" id="okay"  (click)="changeMood(\'okay\')">\n          <img *ngIf="!okayselected" id="okay" style="width: 120px; height: 120px; " src="./assets/imgs/okay.png">\n          <img *ngIf="okayselected" id="angry" style="width: 120px; height: 120px; " src="./assets/imgs/okay_selected.png" >\n        </button>\n\n      </ion-col>\n    </ion-row>\n    \n\n    <h5 style="text-align:center;">Add some notes?</h5>\n    <ion-item>\n      <ion-input type="text" placeholder="A beautiful day" [(ngModel)]="entry.text"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  \n      <button ion-button outline item-end (click)="cancel()">Cancel </button>\n      <button ion-button item-end (click)="saveEntry()">Save</button>\n \n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/siyujia/Desktop/MT-backup/src/pages/entry-detail/entry-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__["a" /* EntryDataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], EntryDetailPage);
    return EntryDetailPage;
}());

//# sourceMappingURL=entry-detail.js.map

/***/ })

},[494]);
//# sourceMappingURL=main.js.map
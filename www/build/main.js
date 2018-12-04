webpackJsonp([6],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__ = __webpack_require__(36);
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

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_entry__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__ = __webpack_require__(36);
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

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_chart__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__current_current__ = __webpack_require__(63);
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
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/siyujia/Desktop/MT-backup/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title>Tabs</ion-title>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-content padding>\n  <ion-tabs selectedIndex="1">\n    <ion-tab tabIcon="analytics" tabTitle="Chart" [root]="ChartView"></ion-tab>\n    <!-- <ion-tab tabIcon="add-circle" tabTitle="Add" [root]="AddEntry"></ion-tab> -->\n    <ion-tab tabIcon="time" tabTitle="Current" [root]="CurrentMood"></ion-tab>\n    <ion-tab tabIcon="list-box" tabTitle="History" [root]="ListView"></ion-tab>\n    \n</ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/Users/siyujia/Desktop/MT-backup/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 128:
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
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chart/chart.module": [
		478,
		5
	],
	"../pages/current/current.module": [
		479,
		4
	],
	"../pages/entry-detail/entry-detail.module": [
		480,
		3
	],
	"../pages/new-location/new-location.module": [
		483,
		2
	],
	"../pages/new-mood/new-mood.module": [
		481,
		1
	],
	"../pages/tabs/tabs.module": [
		482,
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
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entry_detail_entry_detail__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__ = __webpack_require__(36);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/siyujia/Desktop/MT-backup/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mood Records\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="card-list">\n\n  <div *ngIf="checkStatus()">\n    <h2 class="empty-title">Welcome to Mood Tracker!</h2>\n    <h4 class="empty-sub">Wherer mood matters!</h4>\n    <br>\n    <br>\n      <button ion-button round color="secondary" class="get-started" (click)="addNew()">\n    START\n    </button>      \n  </div>\n\n  <div *ngIf="!checkStatus()">\n\n      <!-- <ion-fab right top> -->\n          <button ion-button full color="primary" (click)="addNew()">ADD NED</button>\n      <!-- </ion-fab> -->\n  <br>\n  <br>\n    <ion-list no-lines *ngFor="let entry of entries">\n      <ion-item-sliding #item>\n          <ion-item>\n              <img class="card-img" style="width: 120px; height: 120px;" [src]="getMood(entry.mood).image" />\n              <div class="card-title">{{entry.location}}</div>\n              <div class="card-subtitle">{{entry.timestamp}}</div>\n          </ion-item>\n\n          <ion-item-options side="left">\n              <button ion-button expandable color="primary" (click)="editEntry(entry.id)">Edit</button>\n            </ion-item-options>\n          <ion-item-options side="right">\n            <button ion-button expandable color="danger" (click)="deleteEntry(entry.id)">Delete</button>\n          </ion-item-options>\n    </ion-item-sliding>\n      \n    </ion-list>\n  \n\n</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/siyujia/Desktop/MT-backup/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__["a" /* EntryDataServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_location_new_location__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_entry__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_entry_data_service_entry_data_service__ = __webpack_require__(36);
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

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(371);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryDataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mood__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(441);
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
        this.clientObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            console.log('test this.clientObservable', _this.clientObservable);
            _this.serviceObserver = observer;
        });
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

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_entry_detail_entry_detail__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chart_chart__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_entry_data_service_entry_data_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_current_current__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_new_location_new_location__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_new_mood_new_mood__ = __webpack_require__(347);
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
                        { loadChildren: '../pages/new-mood/new-mood.module#NewMoodPageModule', name: 'NewMoodPage', segment: 'new-mood', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-location/new-location.module#NewLocationPageModule', name: 'NewLocationPage', segment: 'new-location', priority: 'low', defaultHistory: [] }
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

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 179,
	"./af.js": 179,
	"./ar": 180,
	"./ar-dz": 181,
	"./ar-dz.js": 181,
	"./ar-kw": 182,
	"./ar-kw.js": 182,
	"./ar-ly": 183,
	"./ar-ly.js": 183,
	"./ar-ma": 184,
	"./ar-ma.js": 184,
	"./ar-sa": 185,
	"./ar-sa.js": 185,
	"./ar-tn": 186,
	"./ar-tn.js": 186,
	"./ar.js": 180,
	"./az": 187,
	"./az.js": 187,
	"./be": 188,
	"./be.js": 188,
	"./bg": 189,
	"./bg.js": 189,
	"./bm": 190,
	"./bm.js": 190,
	"./bn": 191,
	"./bn.js": 191,
	"./bo": 192,
	"./bo.js": 192,
	"./br": 193,
	"./br.js": 193,
	"./bs": 194,
	"./bs.js": 194,
	"./ca": 195,
	"./ca.js": 195,
	"./cs": 196,
	"./cs.js": 196,
	"./cv": 197,
	"./cv.js": 197,
	"./cy": 198,
	"./cy.js": 198,
	"./da": 199,
	"./da.js": 199,
	"./de": 200,
	"./de-at": 201,
	"./de-at.js": 201,
	"./de-ch": 202,
	"./de-ch.js": 202,
	"./de.js": 200,
	"./dv": 203,
	"./dv.js": 203,
	"./el": 204,
	"./el.js": 204,
	"./en-au": 205,
	"./en-au.js": 205,
	"./en-ca": 206,
	"./en-ca.js": 206,
	"./en-gb": 207,
	"./en-gb.js": 207,
	"./en-ie": 208,
	"./en-ie.js": 208,
	"./en-il": 209,
	"./en-il.js": 209,
	"./en-nz": 210,
	"./en-nz.js": 210,
	"./eo": 211,
	"./eo.js": 211,
	"./es": 212,
	"./es-do": 213,
	"./es-do.js": 213,
	"./es-us": 214,
	"./es-us.js": 214,
	"./es.js": 212,
	"./et": 215,
	"./et.js": 215,
	"./eu": 216,
	"./eu.js": 216,
	"./fa": 217,
	"./fa.js": 217,
	"./fi": 218,
	"./fi.js": 218,
	"./fo": 219,
	"./fo.js": 219,
	"./fr": 220,
	"./fr-ca": 221,
	"./fr-ca.js": 221,
	"./fr-ch": 222,
	"./fr-ch.js": 222,
	"./fr.js": 220,
	"./fy": 223,
	"./fy.js": 223,
	"./gd": 224,
	"./gd.js": 224,
	"./gl": 225,
	"./gl.js": 225,
	"./gom-latn": 226,
	"./gom-latn.js": 226,
	"./gu": 227,
	"./gu.js": 227,
	"./he": 228,
	"./he.js": 228,
	"./hi": 229,
	"./hi.js": 229,
	"./hr": 230,
	"./hr.js": 230,
	"./hu": 231,
	"./hu.js": 231,
	"./hy-am": 232,
	"./hy-am.js": 232,
	"./id": 233,
	"./id.js": 233,
	"./is": 234,
	"./is.js": 234,
	"./it": 235,
	"./it.js": 235,
	"./ja": 236,
	"./ja.js": 236,
	"./jv": 237,
	"./jv.js": 237,
	"./ka": 238,
	"./ka.js": 238,
	"./kk": 239,
	"./kk.js": 239,
	"./km": 240,
	"./km.js": 240,
	"./kn": 241,
	"./kn.js": 241,
	"./ko": 242,
	"./ko.js": 242,
	"./ky": 243,
	"./ky.js": 243,
	"./lb": 244,
	"./lb.js": 244,
	"./lo": 245,
	"./lo.js": 245,
	"./lt": 246,
	"./lt.js": 246,
	"./lv": 247,
	"./lv.js": 247,
	"./me": 248,
	"./me.js": 248,
	"./mi": 249,
	"./mi.js": 249,
	"./mk": 250,
	"./mk.js": 250,
	"./ml": 251,
	"./ml.js": 251,
	"./mn": 252,
	"./mn.js": 252,
	"./mr": 253,
	"./mr.js": 253,
	"./ms": 254,
	"./ms-my": 255,
	"./ms-my.js": 255,
	"./ms.js": 254,
	"./mt": 256,
	"./mt.js": 256,
	"./my": 257,
	"./my.js": 257,
	"./nb": 258,
	"./nb.js": 258,
	"./ne": 259,
	"./ne.js": 259,
	"./nl": 260,
	"./nl-be": 261,
	"./nl-be.js": 261,
	"./nl.js": 260,
	"./nn": 262,
	"./nn.js": 262,
	"./pa-in": 263,
	"./pa-in.js": 263,
	"./pl": 264,
	"./pl.js": 264,
	"./pt": 265,
	"./pt-br": 266,
	"./pt-br.js": 266,
	"./pt.js": 265,
	"./ro": 267,
	"./ro.js": 267,
	"./ru": 268,
	"./ru.js": 268,
	"./sd": 269,
	"./sd.js": 269,
	"./se": 270,
	"./se.js": 270,
	"./si": 271,
	"./si.js": 271,
	"./sk": 272,
	"./sk.js": 272,
	"./sl": 273,
	"./sl.js": 273,
	"./sq": 274,
	"./sq.js": 274,
	"./sr": 275,
	"./sr-cyrl": 276,
	"./sr-cyrl.js": 276,
	"./sr.js": 275,
	"./ss": 277,
	"./ss.js": 277,
	"./sv": 278,
	"./sv.js": 278,
	"./sw": 279,
	"./sw.js": 279,
	"./ta": 280,
	"./ta.js": 280,
	"./te": 281,
	"./te.js": 281,
	"./tet": 282,
	"./tet.js": 282,
	"./tg": 283,
	"./tg.js": 283,
	"./th": 284,
	"./th.js": 284,
	"./tl-ph": 285,
	"./tl-ph.js": 285,
	"./tlh": 286,
	"./tlh.js": 286,
	"./tr": 287,
	"./tr.js": 287,
	"./tzl": 288,
	"./tzl.js": 288,
	"./tzm": 289,
	"./tzm-latn": 290,
	"./tzm-latn.js": 290,
	"./tzm.js": 289,
	"./ug-cn": 291,
	"./ug-cn.js": 291,
	"./uk": 292,
	"./uk.js": 292,
	"./ur": 293,
	"./ur.js": 293,
	"./uz": 294,
	"./uz-latn": 295,
	"./uz-latn.js": 295,
	"./uz.js": 294,
	"./vi": 296,
	"./vi.js": 296,
	"./x-pseudo": 297,
	"./x-pseudo.js": 297,
	"./yo": 298,
	"./yo.js": 298,
	"./zh-cn": 299,
	"./zh-cn.js": 299,
	"./zh-hk": 300,
	"./zh-hk.js": 300,
	"./zh-tw": 301,
	"./zh-tw.js": 301
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
webpackContext.id = 421;

/***/ }),

/***/ 440:
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

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(119);
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

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_entry_data_service_entry_data_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entry_detail_entry_detail__ = __webpack_require__(64);
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

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_entry__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__current_current__ = __webpack_require__(63);
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

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entry; });
var Entry = /** @class */ (function () {
    function Entry() {
    }
    return Entry;
}());

//# sourceMappingURL=entry.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map
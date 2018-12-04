webpackJsonp([6],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_mood__ = __webpack_require__(303);
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





var ChartPage = /** @class */ (function () {
    function ChartPage(navCtrl, navParams, entryService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entryService = entryService;
        this.happy = new __WEBPACK_IMPORTED_MODULE_3__models_mood__["a" /* Mood */]("happy", 100, "/assets/imgs/Happy-b.png", "#FFCC00", "#fff176");
        this.angry = new __WEBPACK_IMPORTED_MODULE_3__models_mood__["a" /* Mood */]("angry", -10, "/assets/imgs/Angry-b.png", "#DB4437", "#ff7762");
        this.sad = new __WEBPACK_IMPORTED_MODULE_3__models_mood__["a" /* Mood */]("sad", -20, "/assets/imgs/Sad-b.png", "#039BE5", "#63ccff");
        this.okay = new __WEBPACK_IMPORTED_MODULE_3__models_mood__["a" /* Mood */]("okay", 50, "/assets/imgs/Okay-b.png", "#4AAE4E", "#7ee17c");
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
            selector: 'page-chart',template:/*ion-inline-start:"/Users/siyujia/Desktop/MTonGit/src/pages/chart/chart.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Mood Chart</ion-title>\n  </ion-navbar>\n</ion-header>\n <ion-content padding>\n    <section class="chart-wrapper">\n      <canvas #barChart></canvas>\n    </section>\n\n<br>\n<br>\n    <ion-list no-lines class="mood-count">\n      <ion-item class="mood-item">\n       <img id="happy" item-start style="width: 125px; height: 125px; " src="./assets/imgs/Happy.png">\n       <p class="mood-count">Happy: {{happyCount}}</p>\n      </ion-item>\n      \n       <ion-item class="mood-item">\n      <img id="angry" item-start style="width: 125px; height: 125px;" src="./assets/imgs/Angry.png" >\n      <p class="mood-count">Angry: {{angryCount}}</p>\n    </ion-item>\n      \n    <ion-item class="mood-item">\n      <img id="sad" item-start style="width: 125px; height: 125px; " src="./assets/imgs/Sad.png">\n      <p class="mood-count">Sad: {{sadCount}}</p>\n    </ion-item>\n      \n    <ion-item class="mood-item">      \n      <img id="okay" item-start style="width: 125px; height: 125px; " src="./assets/imgs/Okay.png">\n      <p class="mood-count">Okay: {{okayCount}}</p>\n    </ion-item>\n      \n  \n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/siyujia/Desktop/MTonGit/src/pages/chart/chart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_entry_data_service_entry_data_service__["a" /* EntryDataServiceProvider */]])
    ], ChartPage);
    return ChartPage;
}());

// Question: 1. need to calculate avg mood score at the same place next step
//# sourceMappingURL=chart.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_entry_data_service_entry_data_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_mood_new_mood__ = __webpack_require__(63);
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
            _this.entry = _this.entryService.getEntries()[0];
            console.log(_this.entry);
        }, function (err) {
            console.log('this.entryService.getObservable()[0].subscribe :', err);
        });
        this.entry = this.entryService.getEntries()[0];
    }
    CurrentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CurrentPage');
    };
    CurrentPage.prototype.addNew = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__new_mood_new_mood__["a" /* NewMoodPage */]);
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
            selector: 'page-current',template:/*ion-inline-start:"/Users/siyujia/Desktop/MTonGit/src/pages/current/current.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Current Mood</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n        <div *ngIf="checkStatus()">\n                <h4>No Record</h4>\n                <p>Click the button to record your current mood</p>\n                  <button ion-button clear icon-only (click)="addNew()">\n                  <ion-icon name="create"></ion-icon>\n                </button>      \n              </div>\n            \n    <div *ngIf="!checkStatus()">\n\n         <!-- <h5>{{entry.location}}</h5> -->\n          <!-- <p>{{entry.timestamp | date: "short"}}</p> -->\n      \n          <img style="width: 200px; height: 200px; " class="mood-img" item-start [src]="getMood(entry.mood).image" />  \n\n           <h2 class="mood-text"> I\'m {{entry.mood}}....</h2>\n  \n          <ion-fab right bottom>\n            <button ion-fab color="primary" icon-only (click)="addNew()"><ion-icon name="add"></ion-icon></button>\n        </ion-fab>\n  \n   \n</div>\n\n  </ion-content>\n  '/*ion-inline-end:"/Users/siyujia/Desktop/MTonGit/src/pages/current/current.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_entry_data_service_entry_data_service__["a" /* EntryDataServiceProvider */]])
    ], CurrentPage);
    return CurrentPage;
}());

//# sourceMappingURL=current.js.map

/***/ }),

/***/ 119:
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
            selector: 'page-new-location',template:/*ion-inline-start:"/Users/siyujia/Desktop/MTonGit/src/pages/new-location/new-location.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Add Location&Text</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-list>\n      <h5 style="text-align:center;">Hi! Where are you now?</h5>\n      <ion-item>\n        <ion-input type="text" placeholder="Your Location" [(ngModel)]="entry.location"></ion-input>\n      </ion-item>\n  \n      <h5 style="text-align:center;">Add Note</h5>\n      <ion-item>\n        <ion-input type="text" placeholder="Today I..." [(ngModel)]="entry.text"></ion-input>\n      </ion-item>\n    </ion-list>\n  \n    <button ion-button item-end (click)="saveEntry()">Done</button>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/siyujia/Desktop/MTonGit/src/pages/new-location/new-location.html"*/,
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

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart_chart__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entry_detail_entry_detail__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__current_current__ = __webpack_require__(118);
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
        this.AddEntry = __WEBPACK_IMPORTED_MODULE_3__entry_detail_entry_detail__["a" /* EntryDetailPage */];
        this.ListView = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.CurrentMood = __WEBPACK_IMPORTED_MODULE_5__current_current__["a" /* CurrentPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/siyujia/Desktop/MTonGit/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>-->\n\n  <!--<ion-navbar>-->\n    <!--<ion-title>Tabs</ion-title>-->\n  <!--</ion-navbar>-->\n\n<!--</ion-header>-->\n\n\n<ion-content padding>\n  <ion-tabs selectedIndex="2">\n    <ion-tab tabIcon="analytics" tabTitle="Chart" [root]="ChartView"></ion-tab>\n    <ion-tab tabIcon="add-circle" tabTitle="Add" [root]="AddEntry"></ion-tab>\n    <ion-tab tabIcon="home" tabTitle="Current" [root]="CurrentMood"></ion-tab>\n    <ion-tab tabIcon="list-box" tabTitle="History" [root]="ListView"></ion-tab>\n    \n</ion-tabs>\n\n</ion-content>\n'/*ion-inline-end:"/Users/siyujia/Desktop/MTonGit/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 170:
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
		481,
		2
	],
	"../pages/new-mood/new-mood.module": [
		482,
		1
	],
	"../pages/tabs/tabs.module": [
		483,
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
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 303:
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

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entry_detail_entry_detail__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_mood_new_mood__ = __webpack_require__(63);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__new_mood_new_mood__["a" /* NewMoodPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/siyujia/Desktop/MTonGit/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mood Records\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="card-list">\n\n  <div *ngIf="checkStatus()">\n    <h4>Welcome to Mood Tracker!</h4>\n    <p>Wherer mood matters!</p>\n      <button ion-button clear icon-only (click)="addNew()">\n      <ion-icon name="create"></ion-icon>\n    </button>      \n  </div>\n\n  <div *ngIf="!checkStatus()">\n\n      <ion-fab right bottom>\n          <button ion-fab color="primary" icon-only (click)="addNew()"><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n\n \n    <ion-list no-lines *ngFor="let entry of entries">\n\n      <ion-item-sliding #item>\n          <ion-item>\n              <img class="card-img" style="width: 125px; height: 125px;" [src]="getMood(entry.mood).image" />\n              <div class="card-title">{{entry.location}}</div>\n              <!-- <div class="card-subtitle">{{entry.timestamp | date: "short"}}</div> -->\n          </ion-item>\n\n          <ion-item-options side="left">\n              <button ion-button expandable color="primary" (click)="editEntry(entry.id)">Edit</button>\n            </ion-item-options>\n          <ion-item-options side="right">\n            <button ion-button expandable color="danger" (click)="deleteEntry(entry.id)">Delete</button>\n          </ion-item-options>\n    </ion-item-sliding>\n      \n    </ion-list>\n  \n\n</div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/siyujia/Desktop/MTonGit/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_entry_data_service_entry_data_service__["a" /* EntryDataServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(372);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryDataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_mood__ = __webpack_require__(303);
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
            return new __WEBPACK_IMPORTED_MODULE_1__models_mood__["a" /* Mood */]("happy", 100, "/assets/imgs/happy.png", "#f9c849", "#fcde8d");
        }
        if (name == "angry") {
            return new __WEBPACK_IMPORTED_MODULE_1__models_mood__["a" /* Mood */]("angry", 30, "/assets/imgs/angry.png", "#fa4b4f", "#fc8285");
        }
        if (name == "sad") {
            return new __WEBPACK_IMPORTED_MODULE_1__models_mood__["a" /* Mood */]("sad", 50, "/assets/imgs/sad.png", "#77c4fb", "#a3d5f9");
        }
        if (name == "okay") {
            return new __WEBPACK_IMPORTED_MODULE_1__models_mood__["a" /* Mood */]("okay", 80, "/assets/imgs/okay.png", "#f8b563", "#f9c98f");
        }
        return new __WEBPACK_IMPORTED_MODULE_1__models_mood__["a" /* Mood */]("happy", 100, "/assets/imgs/Happy-b.png", "#f9c849", "#fcde8d"); // if not applied
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

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_entry_detail_entry_detail__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_chart_chart__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_entry_data_service_entry_data_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_current_current__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_new_location_new_location__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_new_mood_new_mood__ = __webpack_require__(63);
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
                        { loadChildren: '../pages/new-mood/new-mood.module#NewMoodPageModule', name: 'NewMoodPage', segment: 'new-mood', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
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

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 180,
	"./af.js": 180,
	"./ar": 181,
	"./ar-dz": 182,
	"./ar-dz.js": 182,
	"./ar-kw": 183,
	"./ar-kw.js": 183,
	"./ar-ly": 184,
	"./ar-ly.js": 184,
	"./ar-ma": 185,
	"./ar-ma.js": 185,
	"./ar-sa": 186,
	"./ar-sa.js": 186,
	"./ar-tn": 187,
	"./ar-tn.js": 187,
	"./ar.js": 181,
	"./az": 188,
	"./az.js": 188,
	"./be": 189,
	"./be.js": 189,
	"./bg": 190,
	"./bg.js": 190,
	"./bm": 191,
	"./bm.js": 191,
	"./bn": 192,
	"./bn.js": 192,
	"./bo": 193,
	"./bo.js": 193,
	"./br": 194,
	"./br.js": 194,
	"./bs": 195,
	"./bs.js": 195,
	"./ca": 196,
	"./ca.js": 196,
	"./cs": 197,
	"./cs.js": 197,
	"./cv": 198,
	"./cv.js": 198,
	"./cy": 199,
	"./cy.js": 199,
	"./da": 200,
	"./da.js": 200,
	"./de": 201,
	"./de-at": 202,
	"./de-at.js": 202,
	"./de-ch": 203,
	"./de-ch.js": 203,
	"./de.js": 201,
	"./dv": 204,
	"./dv.js": 204,
	"./el": 205,
	"./el.js": 205,
	"./en-au": 206,
	"./en-au.js": 206,
	"./en-ca": 207,
	"./en-ca.js": 207,
	"./en-gb": 208,
	"./en-gb.js": 208,
	"./en-ie": 209,
	"./en-ie.js": 209,
	"./en-il": 210,
	"./en-il.js": 210,
	"./en-nz": 211,
	"./en-nz.js": 211,
	"./eo": 212,
	"./eo.js": 212,
	"./es": 213,
	"./es-do": 214,
	"./es-do.js": 214,
	"./es-us": 215,
	"./es-us.js": 215,
	"./es.js": 213,
	"./et": 216,
	"./et.js": 216,
	"./eu": 217,
	"./eu.js": 217,
	"./fa": 218,
	"./fa.js": 218,
	"./fi": 219,
	"./fi.js": 219,
	"./fo": 220,
	"./fo.js": 220,
	"./fr": 221,
	"./fr-ca": 222,
	"./fr-ca.js": 222,
	"./fr-ch": 223,
	"./fr-ch.js": 223,
	"./fr.js": 221,
	"./fy": 224,
	"./fy.js": 224,
	"./gd": 225,
	"./gd.js": 225,
	"./gl": 226,
	"./gl.js": 226,
	"./gom-latn": 227,
	"./gom-latn.js": 227,
	"./gu": 228,
	"./gu.js": 228,
	"./he": 229,
	"./he.js": 229,
	"./hi": 230,
	"./hi.js": 230,
	"./hr": 231,
	"./hr.js": 231,
	"./hu": 232,
	"./hu.js": 232,
	"./hy-am": 233,
	"./hy-am.js": 233,
	"./id": 234,
	"./id.js": 234,
	"./is": 235,
	"./is.js": 235,
	"./it": 236,
	"./it.js": 236,
	"./ja": 237,
	"./ja.js": 237,
	"./jv": 238,
	"./jv.js": 238,
	"./ka": 239,
	"./ka.js": 239,
	"./kk": 240,
	"./kk.js": 240,
	"./km": 241,
	"./km.js": 241,
	"./kn": 242,
	"./kn.js": 242,
	"./ko": 243,
	"./ko.js": 243,
	"./ky": 244,
	"./ky.js": 244,
	"./lb": 245,
	"./lb.js": 245,
	"./lo": 246,
	"./lo.js": 246,
	"./lt": 247,
	"./lt.js": 247,
	"./lv": 248,
	"./lv.js": 248,
	"./me": 249,
	"./me.js": 249,
	"./mi": 250,
	"./mi.js": 250,
	"./mk": 251,
	"./mk.js": 251,
	"./ml": 252,
	"./ml.js": 252,
	"./mn": 253,
	"./mn.js": 253,
	"./mr": 254,
	"./mr.js": 254,
	"./ms": 255,
	"./ms-my": 256,
	"./ms-my.js": 256,
	"./ms.js": 255,
	"./mt": 257,
	"./mt.js": 257,
	"./my": 258,
	"./my.js": 258,
	"./nb": 259,
	"./nb.js": 259,
	"./ne": 260,
	"./ne.js": 260,
	"./nl": 261,
	"./nl-be": 262,
	"./nl-be.js": 262,
	"./nl.js": 261,
	"./nn": 263,
	"./nn.js": 263,
	"./pa-in": 264,
	"./pa-in.js": 264,
	"./pl": 265,
	"./pl.js": 265,
	"./pt": 266,
	"./pt-br": 267,
	"./pt-br.js": 267,
	"./pt.js": 266,
	"./ro": 268,
	"./ro.js": 268,
	"./ru": 269,
	"./ru.js": 269,
	"./sd": 270,
	"./sd.js": 270,
	"./se": 271,
	"./se.js": 271,
	"./si": 272,
	"./si.js": 272,
	"./sk": 273,
	"./sk.js": 273,
	"./sl": 274,
	"./sl.js": 274,
	"./sq": 275,
	"./sq.js": 275,
	"./sr": 276,
	"./sr-cyrl": 277,
	"./sr-cyrl.js": 277,
	"./sr.js": 276,
	"./ss": 278,
	"./ss.js": 278,
	"./sv": 279,
	"./sv.js": 279,
	"./sw": 280,
	"./sw.js": 280,
	"./ta": 281,
	"./ta.js": 281,
	"./te": 282,
	"./te.js": 282,
	"./tet": 283,
	"./tet.js": 283,
	"./tg": 284,
	"./tg.js": 284,
	"./th": 285,
	"./th.js": 285,
	"./tl-ph": 286,
	"./tl-ph.js": 286,
	"./tlh": 287,
	"./tlh.js": 287,
	"./tr": 288,
	"./tr.js": 288,
	"./tzl": 289,
	"./tzl.js": 289,
	"./tzm": 290,
	"./tzm-latn": 291,
	"./tzm-latn.js": 291,
	"./tzm.js": 290,
	"./ug-cn": 292,
	"./ug-cn.js": 292,
	"./uk": 293,
	"./uk.js": 293,
	"./ur": 294,
	"./ur.js": 294,
	"./uz": 295,
	"./uz-latn": 296,
	"./uz-latn.js": 296,
	"./uz.js": 295,
	"./vi": 297,
	"./vi.js": 297,
	"./x-pseudo": 298,
	"./x-pseudo.js": 298,
	"./yo": 299,
	"./yo.js": 299,
	"./zh-cn": 300,
	"./zh-cn.js": 300,
	"./zh-hk": 301,
	"./zh-hk.js": 301,
	"./zh-tw": 302,
	"./zh-tw.js": 302
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
webpackContext.id = 422;

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(120);
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
    // rootPage:any = HomePage;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/siyujia/Desktop/MTonGit/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/siyujia/Desktop/MTonGit/src/app/app.html"*/
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_location_new_location__ = __webpack_require__(119);
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
            selector: 'page-new-mood',template:/*ion-inline-start:"/Users/siyujia/Desktop/MTonGit/src/pages/new-mood/new-mood.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Select a Mood</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n     \n    <ion-icon name="calendar"  color="primary"> Today, {{currentTime | date : \'short\'}}</ion-icon>\n     \n    <h5 style="text-align:center;">How is your mood?</h5>\n    <ion-row>\n        <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n          <button id="happy" (click)="changeMood(\'happy\')" >\n          <img id="happy" style="width: 125px; height: 125px; background: white;" src="./assets/imgs/Happy.png">\n          </button>\n          <button id="angry" (click)="changeMood(\'angry\')">\n            <img id="angry" style="width: 125px; height: 125px;background: white; " src="./assets/imgs/Angry.png" >\n          </button>\n          <button id="sad"  (click)="changeMood(\'sad\')">\n            <img id="sad" style="width: 125px; height: 125px; background: white;" src="./assets/imgs/Sad.png">\n          </button>\n          <button id="okay"  (click)="changeMood(\'okay\')">\n            <img id="okay" style="width: 125px; height: 125px;background: white; " src="./assets/imgs/Okay.png">\n          </button>\n        </ion-col>\n      </ion-row>\n  \n      <button ion-button item-end (click)="saveEntry()">Next</button>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/siyujia/Desktop/MTonGit/src/pages/new-mood/new-mood.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_entry_data_service_entry_data_service__["a" /* EntryDataServiceProvider */]])
    ], NewMoodPage);
    return NewMoodPage;
}());

//# sourceMappingURL=new-mood.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryDetailPage; });
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





var EntryDetailPage = /** @class */ (function () {
    function EntryDetailPage(navCtrl, navParams, entryDataService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entryDataService = entryDataService;
        this.toastCtrl = toastCtrl;
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
    };
    EntryDetailPage.prototype.saveEntry = function () {
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
        newEntry.mood = this.entry.mood;
        newEntry.location = this.entry.location;
        newEntry.text = this.entry.text;
        console.log("Now I would save the entry: ", newEntry);
        this.entryDataService.addEntry(this.entry);
        // this.navCtrl.pop();
        this.navCtrl.parent.select(2);
    };
    EntryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entry-detail',template:/*ion-inline-start:"/Users/siyujia/Desktop/MTonGit/src/pages/entry-detail/entry-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Create a Mood Record</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list no-lines>\n      <!-- <ion-icon name="calendar"  color="primary"> {{currentTime | date : \'short\'}}</ion-icon>  -->\n\n    <h5 style="text-align:center;">Hi! Where are you now?</h5>\n    <ion-item>\n      <ion-input type="text" placeholder="Your Location" [(ngModel)]="entry.location"></ion-input>\n    </ion-item>\n\n    <h5 style="text-align:center;">How is your mood?</h5>\n    <ion-row class="select-mood">\n      <ion-col class="select-mood" col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n        <button class="select-mood" id="happy" (click)="changeMood(\'happy\')" >\n        <img id="happy" style="width: 125px; height: 125px; " src="./assets/imgs/Happy.png">\n        </button>\n        <button class="select-mood" id="angry" (click)="changeMood(\'angry\')">\n          <img id="angry" style="width: 125px; height: 125px; " src="./assets/imgs/Angry.png" >\n        </button>\n        <button class="select-mood" id="sad"  (click)="changeMood(\'sad\')">\n          <img id="sad" style="width: 125px; height: 125px;  " src="./assets/imgs/Sad.png">\n        </button>\n        <button class="select-mood" id="okay"  (click)="changeMood(\'okay\')">\n          <img id="okay" style="width: 125px; height: 125px; " src="./assets/imgs/Okay.png">\n        </button>\n      </ion-col>\n    </ion-row>\n      <!-- <ion-item>\n        <ion-img style="width: 132px; height: 132px; background: white;" src="./assets/imgs/Happy.png" ng-click="savemood()"></ion-img>\n        <ion-img style="width: 132px; height: 132px;background: white; " src="./assets/imgs/Angry.png" ></ion-img>\n      </ion-item>\n      <ion-item>\n        <ion-img style="width: 132px; height: 132px; background: white;" src="./assets/imgs/Sad.png"></ion-img>\n        <ion-img style="width: 132px; height: 132px;background: white; " src="./assets/imgs/Okay.png"></ion-img>\n      </ion-item> -->\n\n    <h5 style="text-align:center;">Add some notes?</h5>\n    <ion-item>\n      <ion-input type="text" placeholder="A beautiful day" [(ngModel)]="entry.text"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <!-- <ion-list no-lines>\n    <ion-item> -->\n      <button ion-button outline item-end>Cancel </button>\n      <button ion-button item-end (click)="saveEntry()">Save</button>\n    <!-- </ion-item>\n  </ion-list> -->\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/siyujia/Desktop/MTonGit/src/pages/entry-detail/entry-detail.html"*/
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

},[349]);
//# sourceMappingURL=main.js.map
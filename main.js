(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "echipa", component: _team_team_component__WEBPACK_IMPORTED_MODULE_3__["TeamComponent"] },
    { path: "specialitati", component: _service_service_component__WEBPACK_IMPORTED_MODULE_5__["ServiceComponent"] },
    { path: "contact", component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: "**", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' });


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <app-menu></app-menu>\n</header>\n\n<router-outlet></router-outlet>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_7__["ServiceComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_2__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#heading {\r\n    -ms-flex-align: center;\r\n    -ms-flex-pack: center;\r\n    background-color: #111111;\r\n    color: rgba(255, 255, 255, 0.5);\r\n    -moz-align-items: center;\r\n    -ms-align-items: center;\r\n    align-items: center;\r\n    display: -moz-flex;\r\n    display: -ms-flex;\r\n    display: flex;\r\n    -moz-justify-content: center;\r\n    -ms-justify-content: center;\r\n    justify-content: center;\r\n    background-image: linear-gradient(rgba(17, 17, 17, 0.25), rgba(17, 17, 17, 0.25)), url(/assets/imgs/bg-dark.jpg);\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-top: 0;\r\n    display: -ms-flexbox;\r\n    height: 15rem !important;\r\n    min-height: 15rem;\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n#heading:before {\r\n    background: linear-gradient(135deg, #663399 0%, #05791e 150%);\r\n    content: ' ';\r\n    display: block;\r\n    height: 100%;\r\n    left: 0;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n#heading h1 {\r\n    margin-bottom: 0;\r\n    position: relative;\r\n    z-index: 2;\r\n    color: white;\r\n}\r\n.wrapper {\r\n    padding: 8rem 0 6rem 0;\r\n    position: relative;\r\n    z-index: 1;\r\n\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n    border-width: .2rem;\r\n    margin: 0 auto;\r\n}\r\n.container{\r\n    background: #ffffff;\r\n    border-radius: 4px;\r\n    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.025);\r\n    margin-bottom: 2rem;\r\n    padding: 3rem;\r\n}\r\ninput[type=text], select, textarea {\r\n    width: 100%; /* Full width */\r\n    padding: 12px; /* Some padding */  \r\n    border: 1px solid #ccc; /* Gray border */\r\n    border-radius: 4px; /* Rounded borders */\r\n    box-sizing: border-box; /* Make sure that padding and width stays in place */\r\n    margin-top: 6px; /* Add a top margin */\r\n    margin-bottom: 16px; /* Bottom margin */\r\n    resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */\r\n  }\r\n/* Style the submit button with a specific background color etc */\r\ninput[type=submit] {\r\n    background: linear-gradient(135deg, #663399 0%, #05791e 150%);\r\n    color: white;\r\n    padding: 12px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    width:100%;\r\n  }\r\n/* When moving the mouse over the submit button, add a darker green color */\r\ninput[type=submit]:hover {\r\n    background-color: #45a049;\r\n  }\r\n.inner {\r\n    margin: 0 auto;\r\n    width: 75rem;\r\n    max-width: calc(100% - 6rem);\r\n}\r\n@media only screen and (max-width: 480px){\r\n    .wrapper {\r\n        padding: 2rem 0 0.1rem 0;\r\n    }\r\n    .inner{\r\n        max-width: calc(100% - 2rem);\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBRXpCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBRW5CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsNkJBQTZCO0lBRTdCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsaUhBQWlIO0lBQ2pILDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLDhEQUE4RDtJQUM5RCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYixRQUFRO0lBQ1IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXOztJQUVYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELG9CQUFvQjtJQUNwQixjQUFjO0NBQ2pCO0FBRUQ7SUFDSSxZQUFZLENBQUMsZ0JBQWdCO0lBQzdCLGNBQWMsQ0FBQyxrQkFBa0I7SUFDakMsdUJBQXVCLENBQUMsaUJBQWlCO0lBQ3pDLG1CQUFtQixDQUFDLHFCQUFxQjtJQUN6Qyx1QkFBdUIsQ0FBQyxxREFBcUQ7SUFDN0UsZ0JBQWdCLENBQUMsc0JBQXNCO0lBQ3ZDLG9CQUFvQixDQUFDLG1CQUFtQjtJQUN4QyxnQkFBZ0IsQ0FBQyx5RUFBeUU7R0FDM0Y7QUFFRCxrRUFBa0U7QUFDbEU7SUFDRSw4REFBOEQ7SUFDOUQsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0dBQ1o7QUFFRCw0RUFBNEU7QUFDNUU7SUFDRSwwQkFBMEI7R0FDM0I7QUFDSDtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsNkJBQTZCO0NBQ2hDO0FBQ0Q7SUFDSTtRQUNJLHlCQUF5QjtLQUM1QjtJQUNEO1FBQ0ksNkJBQTZCO0tBQ2hDO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkaW5nIHtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tb3otanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1zLWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgxNywgMTcsIDE3LCAwLjI1KSwgcmdiYSgxNywgMTcsIDE3LCAwLjI1KSksIHVybCgvYXNzZXRzL2ltZ3MvYmctZGFyay5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBoZWlnaHQ6IDE1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxNXJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4jaGVhZGluZzpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2MzM5OSAwJSwgIzA1NzkxZSAxNTAlKTtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4jaGVhZGluZyBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ud3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA4cmVtIDAgNnJlbSAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGJvcmRlci13aWR0aDogLjJyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3QsIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBwYWRkaW5nOiAxMnB4OyAvKiBTb21lIHBhZGRpbmcgKi8gIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogR3JheSBib3JkZXIgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgLyogUm91bmRlZCBib3JkZXJzICovXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBNYWtlIHN1cmUgdGhhdCBwYWRkaW5nIGFuZCB3aWR0aCBzdGF5cyBpbiBwbGFjZSAqL1xyXG4gICAgbWFyZ2luLXRvcDogNnB4OyAvKiBBZGQgYSB0b3AgbWFyZ2luICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4OyAvKiBCb3R0b20gbWFyZ2luICovXHJcbiAgICByZXNpemU6IHZlcnRpY2FsIC8qIEFsbG93IHRoZSB1c2VyIHRvIHZlcnRpY2FsbHkgcmVzaXplIHRoZSB0ZXh0YXJlYSAobm90IGhvcml6b250YWxseSkgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gd2l0aCBhIHNwZWNpZmljIGJhY2tncm91bmQgY29sb3IgZXRjICovXHJcbiAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjMzOTkgMCUsICMwNTc5MWUgMTUwJSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICBcclxuICAvKiBXaGVuIG1vdmluZyB0aGUgbW91c2Ugb3ZlciB0aGUgc3VibWl0IGJ1dHRvbiwgYWRkIGEgZGFya2VyIGdyZWVuIGNvbG9yICovXHJcbiAgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbiAgfVxyXG4uaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNzVyZW07XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDZyZW0pO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMCAwLjFyZW0gMDtcclxuICAgIH1cclxuICAgIC5pbm5lcntcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"heading\">\n    <h1>Clinica Dr. Walter</h1>\n</div> -->\n\n<div class=\"wrapper\">\n  <div class=\"inner\">\n    <div class=\"container\">\n      <h1 style=\"text-align:center\">Contacteaza-ne</h1>\n        <form action=\"\">\n\n            <label for=\"fname\">Nume:</label>\n            <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Nume...\">\n        \n            <label for=\"lname\">Prenume:</label>\n            <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Prenume...\">\n            \n            <label for=\"email\">Email:</label>\n            <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"Email...\">\n        \n            <label for=\"subject\">Subiect</label>\n            <textarea id=\"subject\" name=\"subject\" placeholder=\"Mesajul dumneavoastra...\" style=\"height:200px\"></textarea>\n        \n            <input type=\"submit\" value=\"Trimite\">\n        \n          </form>\n    </div>\n      \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#footer {\r\n    /* background-color: #111111; */\r\n    color: rgba(255, 255, 255, 0.5);\r\n    padding: 8rem 0 6rem 0;\r\n    background: #42275a;\r\n    background: linear-gradient(to left, #734b6d, #42275a);\r\n}\r\n@media screen and (max-width: 480px){\r\n    #footer {\r\n        padding: 2rem 0 0.1rem 0;\r\n    }\r\n}\r\n@media screen and (max-width: 736px){\r\n    #footer {\r\n        padding: 3rem 0 1rem 0;\r\n    }\r\n}\r\n@media screen and (max-width: 1280px){\r\n    #footer {\r\n        padding: 4rem 0 2rem 0;\r\n    }\r\n}\r\n.inner {\r\n    margin: 0 auto;\r\n    width: 75rem;\r\n    max-width: calc(100% - 6rem);\r\n}\r\n#footer .content {\r\n    display: -moz-flex;\r\n    display: -ms-flex;\r\n    display: flex;\r\n}\r\n#footer .content section{\r\n    width: 33.33%;\r\n    padding-right: 4rem;\r\n}\r\n@media screen and (max-width: 736px){\r\n    #footer .content section {\r\n        width: 100%;\r\n        display: block;\r\n        padding-right: 0;\r\n        padding-bottom: 3rem;\r\n    }\r\n    #footer .content {\r\n        display: block;\r\n    }\r\n}\r\n@media screen and (max-width: 980px){\r\n    #footer .content section {\r\n        width: 100%;\r\n        display: block;\r\n        padding-right: 0;\r\n        padding-bottom: 3rem;\r\n    }\r\n    #footer .content {\r\n        display: block;\r\n    }\r\n}\r\n@media screen and (max-width: 480px){\r\n    .inner {\r\n        max-width: calc(100% - 3rem);\r\n    }\r\n}\r\n#footer .copyright {\r\n    border-top: 1px solid;\r\n    font-size: 0.8rem;\r\n    opacity: 0.5;\r\n    padding: 2rem 0;\r\n    text-align: center;\r\n}\r\nul.alt {\r\n    list-style: none;\r\n    padding-left: 0;\r\n}\r\nul {\r\n    list-style: disc;\r\n    margin: 0 0 2rem 0;\r\n    padding-left: 1rem;\r\n}\r\nol, ul {\r\n    list-style: none;\r\n}\r\n#footer ul.alt li {\r\n    border-top-color: rgba(255, 255, 255, 0.25);\r\n}\r\nul.alt li:first-child {\r\n    border-top: 0;\r\n    padding-top: 0;\r\n}\r\nul.alt li {\r\n    border-top-color: rgba(0, 0, 0, 0.25);\r\n}\r\nul.alt li {\r\n    border-top: solid 1px;\r\n    padding: 0.75rem 0;\r\n}\r\nul li {\r\n    padding-left: 0.325rem;\r\n}\r\n#footer a {\r\n    color: rgba(255, 255, 255, 0.5);\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsb0JBQW9CO0lBRXBCLHVEQUF1RDtDQUMxRDtBQUNEO0lBQ0k7UUFDSSx5QkFBeUI7S0FDNUI7Q0FDSjtBQUNEO0lBQ0k7UUFDSSx1QkFBdUI7S0FDMUI7Q0FDSjtBQUNEO0lBQ0k7UUFDSSx1QkFBdUI7S0FDMUI7Q0FDSjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYiw2QkFBNkI7Q0FDaEM7QUFDRDtJQUNJLG1CQUFtQjtJQUVuQixrQkFBa0I7SUFDbEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0k7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7S0FDeEI7SUFDRDtRQUNJLGVBQWU7S0FDbEI7Q0FDSjtBQUNEO0lBQ0k7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7S0FDeEI7SUFDRDtRQUNJLGVBQWU7S0FDbEI7Q0FDSjtBQUNEO0lBQ0k7UUFDSSw2QkFBNkI7S0FDaEM7Q0FDSjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksNENBQTRDO0NBQy9DO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksc0NBQXNDO0NBQ3pDO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSx1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLGdDQUFnQztJQUNoQyxzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVyIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7ICovXHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgcGFkZGluZzogOHJlbSAwIDZyZW0gMDtcclxuICAgIGJhY2tncm91bmQ6ICM0MjI3NWE7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzM0YjZkLCAjNDIyNzVhKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzM0YjZkLCAjNDIyNzVhKTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCl7XHJcbiAgICAjZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtIDAgMC4xcmVtIDA7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpe1xyXG4gICAgI2Zvb3RlciB7XHJcbiAgICAgICAgcGFkZGluZzogM3JlbSAwIDFyZW0gMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpe1xyXG4gICAgI2Zvb3RlciB7XHJcbiAgICAgICAgcGFkZGluZzogNHJlbSAwIDJyZW0gMDtcclxuICAgIH1cclxufVxyXG4uaW5uZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNzVyZW07XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDZyZW0pO1xyXG59XHJcbiNmb290ZXIgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNmb290ZXIgLmNvbnRlbnQgc2VjdGlvbntcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KXtcclxuICAgICNmb290ZXIgLmNvbnRlbnQgc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgIH1cclxuICAgICNmb290ZXIgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KXtcclxuICAgICNmb290ZXIgLmNvbnRlbnQgc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgIH1cclxuICAgICNmb290ZXIgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcclxuICAgIC5pbm5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzcmVtKTtcclxuICAgIH1cclxufVxyXG4jZm9vdGVyIC5jb3B5cmlnaHQge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudWwuYWx0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IGRpc2M7XHJcbiAgICBtYXJnaW46IDAgMCAycmVtIDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxub2wsIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuI2Zvb3RlciB1bC5hbHQgbGkge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxufVxyXG51bC5hbHQgbGk6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcDogMDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcbnVsLmFsdCBsaSB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcbnVsLmFsdCBsaSB7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHg7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XHJcbn1cclxudWwgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjMyNXJlbTtcclxufVxyXG4jZm9vdGVyIGEge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n    <div class=\"inner\">\n      <div class=\"content\">\n          <section>\n              <h4>Harta</h4>\n              <iframe width=\"100%\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.309033310849!2d21.252906315774236!3d45.76499662134228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4745676c2f240cd9%3A0x6bb7549196de2200!2sStrada+Rena%C5%9Fterii+17%2C+Timi%C8%99oara%2C+Romania!5e0!3m2!1sen!2sus!4v1551192077263\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n          </section>\n          <section>\n\t\t\t\t\t\t\t<h4>Orar clinica</h4>\n\t\t\t\t\t\t\t<ul class=\"alt\">\n                <li><span >Luni - Vineri</span><span class=\"float-right\">8:00-20:00</span></li>\n                <li><span >Sambata</span><span class=\"float-right\">Inchis</span></li>\n                <li><span >Duminica</span><span class=\"float-right\">Inchis</span></li>\n\t\t\t\t\t\t\t</ul>\n            </section>\n            <section class=\"float-right\">\n                <h4>Contact</h4>\n                <ul class=\"alt\">\n                  <li><span >Telefon Fix</span><span class=\"float-right\">0256220614</span></li>\n                  <li><span >Telefon Mobil</span><span class=\"float-right\">0728386786</span></li>\n                  <li><span >Email</span><span class=\"float-right\">Placeholder</span></li>\n                </ul>\n              </section>\n              \n      </div>\n      <div class=\"copyright\">\n        © 2019 Clinca Dr. Walter\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.banner{\r\n    -ms-flex-align: center;\r\n    -ms-flex-pack: center;\r\n    background-color: #111111;\r\n    color: rgba(255, 255, 255, 0.5);\r\n    -moz-align-items: center;\r\n    -webkit-align-items: center;\r\n    -ms-align-items: center;\r\n    display: -moz-flex;\r\n    display: -ms-flex;\r\n    display: flex;\r\n    -moz-justify-content: center;\r\n    -ms-justify-content: center;\r\n    justify-content: center;\r\n    background-image: url(/assets/imgs/bg-dark.jpg);\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-top: 0;\r\n    display: -ms-flexbox;\r\n    height: 35rem !important;\r\n    min-height: 35rem;\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-align: center;\r\n    width: 100%;   \r\n}\r\n.banner h1 {\r\n    font-size: 4rem;\r\n    margin-bottom: 1rem;\r\n}\r\n.banner:before {\r\n    transition: opacity 3s ease;\r\n    transition-delay: 1.25s;\r\n    background: #663399 ;\r\n    content: '';\r\n    display: block;\r\n    height: 100%;\r\n    left: 0;\r\n    opacity: 0.45;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n.banner:after {\r\n    /* background: linear-gradient(135deg, #663399 0%, #05791e 74%); */\r\n    background: linear-gradient(to top, #eaafc8 0%, #90EE90\t 74%);\r\n    /* background: #42275a;\r\n    background: -webkit-linear-gradient(to left, #734b6d, #42275a);\r\n    background: linear-gradient(to left, #734b6d, #42275a);\r\n     */\r\n    content: ' ';\r\n    display: block;\r\n    height: 100%;\r\n    left: 0;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    webkit-linear-gradientidth: 100%;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n.banner > .inner {\r\n    -webkit-transform: scale(1.0);\r\n    transform: scale(1.0);\r\n    transition: opacity 1s ease, -webkit-transform 1s ease;\r\n    transition: opacity 1s ease, transform 1s ease;\r\n    transition: opacity 1s ease, transform 1s ease, -webkit-transform 1s ease;\r\n    opacity: 1;\r\n    position: relative;\r\n    z-index: 3;\r\n    color:white;\r\n}\r\n.inner > p{\r\n    color:rgba(255, 255, 255, 0.5);\r\n}\r\n@media only screen and (max-width: 736px){\r\n    .banner {\r\n        height: auto !important;\r\n        min-height: 0;\r\n        padding: 4rem 2rem 4rem 2rem;\r\n    }\r\n    .banner h1 {\r\n        font-size: 1.75rem;\r\n        margin-bottom: 0.5rem;\r\n        padding-bottom: 0;\r\n    }\r\n    .banner .inner {\r\n        width: 100%;\r\n    }\r\n}\r\n.wrapper {\r\n    padding: 8rem 0 6rem 0;\r\n    position: relative;\r\n    z-index: 1;\r\n\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n    border-width: .2rem;\r\n    margin: 0 auto;\r\n}\r\n.wrapper .content {\r\n    background: #ffffff;\r\n    border-radius: 4px;\r\n    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.025);\r\n    margin-bottom: 2rem;\r\n    padding: 3rem;\r\n    min-height: 35rem;\r\n}\r\n@media screen and (max-width: 1280px){\r\n    .wrapper {\r\n        padding: 4rem 0 2rem 0;\r\n    }\r\n}\r\n@media screen and (max-width: 980px){\r\n    .wrapper .content  {\r\n        padding: 2rem;\r\n    }\r\n}\r\n@media screen and (max-width: 736px){\r\n    .wrapper {\r\n        padding: 3rem 0 1rem 0;\r\n    }\r\n}\r\n@media only screen and (max-width: 480px){\r\n    .wrapper {\r\n        padding: 2rem 0 0.1rem 0;\r\n    }\r\n    .inner{\r\n        max-width: calc(100% - 2rem);\r\n    }\r\n}\r\nh2 {\r\n    font-size: 2.25rem;\r\n    line-height: 1.3;\r\n    color: #555555;\r\n}\r\np {\r\n    margin: 0 0 2rem 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFFbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCw2QkFBNkI7SUFFN0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixnREFBZ0Q7SUFDaEQsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2QjtBQUNEO0lBSUksNEJBQTRCO0lBSTVCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsUUFBUTtJQUNSLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0NBQ2Q7QUFDRDtJQUNJLG1FQUFtRTtJQUNuRSw4REFBOEQ7SUFDOUQ7OztPQUdHO0lBQ0gsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0lBQ2IsUUFBUTtJQUNSLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osV0FBVztDQUNkO0FBQ0Q7SUFFSSw4QkFBOEI7SUFFOUIsc0JBQXNCO0lBSXRCLHVEQUErQztJQUEvQywrQ0FBK0M7SUFBL0MsMEVBQStDO0lBQy9DLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksK0JBQStCO0NBQ2xDO0FBQ0Q7SUFDSTtRQUNJLHdCQUF3QjtRQUN4QixjQUFjO1FBQ2QsNkJBQTZCO0tBQ2hDO0lBQ0Q7UUFDSSxtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLGtCQUFrQjtLQUNyQjtJQUNEO1FBQ0ksWUFBWTtLQUNmO0NBQ0o7QUFDRDtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVzs7SUFFWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlEQUFpRDtJQUNqRCxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0k7UUFDSSx1QkFBdUI7S0FDMUI7Q0FDSjtBQUNEO0lBQ0k7UUFDSSxjQUFjO0tBQ2pCO0NBQ0o7QUFDRDtJQUNJO1FBQ0ksdUJBQXVCO0tBQzFCO0NBQ0o7QUFDRDtJQUNJO1FBQ0kseUJBQXlCO0tBQzVCO0lBQ0Q7UUFDSSw2QkFBNkI7S0FDaEM7Q0FDSjtBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmJhbm5lcntcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZ3MvYmctZGFyay5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBoZWlnaHQ6IDM1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAzNXJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTsgICBcclxufVxyXG4uYmFubmVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuLmJhbm5lcjpiZWZvcmUge1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDNzIGVhc2U7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgM3MgZWFzZTtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZGVsYXk6IDEuMjVzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAxLjI1cztcclxuICAgIC1tcy10cmFuc2l0aW9uLWRlbGF5OiAxLjI1cztcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDEuMjVzO1xyXG4gICAgYmFja2dyb3VuZDogIzY2MzM5OSA7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDAuNDU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLmJhbm5lcjphZnRlciB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjYzMzk5IDAlLCAjMDU3OTFlIDc0JSk7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZWFhZmM4IDAlLCAjOTBFRTkwXHQgNzQlKTtcclxuICAgIC8qIGJhY2tncm91bmQ6ICM0MjI3NWE7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzM0YjZkLCAjNDIyNzVhKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzM0YjZkLCAjNDIyNzVhKTtcclxuICAgICAqL1xyXG4gICAgY29udGVudDogJyAnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2Via2l0LWxpbmVhci1ncmFkaWVudGlkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLmJhbm5lciA+IC5pbm5lciB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLCAtbW96LXRyYW5zZm9ybSAxcyBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIDFzIGVhc2U7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLCAtbXMtdHJhbnNmb3JtIDFzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UsIHRyYW5zZm9ybSAxcyBlYXNlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4uaW5uZXIgPiBwe1xyXG4gICAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpe1xyXG4gICAgLmJhbm5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nOiA0cmVtIDJyZW0gNHJlbSAycmVtO1xyXG4gICAgfVxyXG4gICAgLmJhbm5lciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5iYW5uZXIgLmlubmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4ud3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiA4cmVtIDAgNnJlbSAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGJvcmRlci13aWR0aDogLjJyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ud3JhcHBlciAuY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBtaW4taGVpZ2h0OiAzNXJlbTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpe1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDRyZW0gMCAycmVtIDA7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpe1xyXG4gICAgLndyYXBwZXIgLmNvbnRlbnQgIHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KXtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtIDAgMXJlbSAwO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMCAwLjFyZW0gMDtcclxuICAgIH1cclxuICAgIC5pbm5lcntcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbn1cclxucCB7XHJcbiAgICBtYXJnaW46IDAgMCAycmVtIDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n  <div class=\"container inner\">\n    <h1>Clinica Dr. Walter</h1>\n  </div>\n</div>\n<div class=\"wrapper\">\n  <div class=\"inner\">\n    <div class=\"content\">\n      <header>\n        <h2>Clinica Dr. Walter</h2>\n      </header>\n      <hr>\n      <p>CLINICA DR. WALTER  a fost infiintata din dorinta de a pune la dispozitia pacientilor servicii medicale atat alopate cat si alternative intr-un spatiu ce confera confort si inovatie.</p>\n      <hr>\n      <p>Obiectivele muncii noastre reprezinta concretizarea dorintelor dumneavoastra, in reala reprezentare a calitaii serviciilor, printr-o continua pregatire profesionala, sub titulatura colegiilor medicilor dentisti,a cogliului psihologilor, colegiului de medicina generala si nu  in ultimul rand a societatii romane de som, oferind roadele unei continue pregatiri profesionale in congrese de specialitate atat pe plan national cat si international.</p>\n      <hr>\n      <p>CLINICA DR. WALTER  prin traditia deja  bineconturata, isi propune  in continuare  infrumusetarea organismului, atat din punct de vedere medical cat si corporal, urmarind realizarea unei  estetici corespunzatoare pretentiilor dumneavoastra.</p>\n      <hr>\n    </div>\n      \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 4;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n  }\r\n  a{\r\n    color:white;\r\n  }\r\n  .sidenav a {\r\n    padding: 1rem 0;\r\n    text-decoration: none;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n    \r\n    border-bottom: 1px solid;\r\n  }\r\n  .sidenav ul{\r\n    list-style: none;\r\n    padding: 0 2rem 2rem;\r\n  }\r\n  .sidenav a:hover {\r\n    color: #f1f1f1;\r\n  }\r\n  .sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 2rem;\r\n    font-size: 36px;\r\n    padding: 0;\r\n    border-bottom: 0;\r\n  }\r\n  @media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsT0FBTztJQUNQLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7R0FDbkI7RUFDRDtJQUNFLFlBQVk7R0FDYjtFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjs7SUFFakIseUJBQXlCO0dBQzFCO0VBQ0Q7SUFDRSxpQkFBaUI7SUFDakIscUJBQXFCO0dBQ3RCO0VBQ0Q7SUFDRSxlQUFlO0dBQ2hCO0VBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtHQUNsQjtFQUVEO0lBQ0UsVUFBVSxrQkFBa0IsQ0FBQztJQUM3QixZQUFZLGdCQUFnQixDQUFDO0dBQzlCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgfVxyXG4gIGF7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgLnNpZGVuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gIH1cclxuICAuc2lkZW5hdiB1bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwIDJyZW0gMnJlbTtcclxuICB9XHJcbiAgLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYgLmNsb3NlYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAycmVtO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cclxuICAgIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMThweDt9XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar fixed-top navbar-dark bg-dark\">\n    <div class=\"navbar-brand\"><a routerLink=\"/\" >Dr. Walter</a></div>\n    <ul class=\"navbar-nav navbar-collense justify-content-end\">\n      <span style=\"color:white;cursor:pointer\" (click)=triggerSlideBar()>Meniu &#9776;</span>\n    </ul>\n  </nav>\n</header>\n\n<div id=\"mySidenav\" class=\"sidenav bg-dark\" [style.width]=\" slideBar ?'18rem' : '0rem' \">\n  <nav id=\"menu\">\n      <a href=\"javascript:void(0)\" class=\"closebtn\"  (click)=triggerSlideBar()>&times;</a>\n    <ul class=\"links\" (click)=triggerSlideBar()>\n      <li><a routerLink=\"/\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\">Acasa</a></li>\n      <li><a routerLink=\"/specialitati\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\">Specialitati</a></li>\n      <li><a routerLink=\"/echipa\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\">Echipa</a></li>\n      <li><a routerLink=\"/contact\" style=\"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\">Contact</a></li>\n    </ul>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.slideBar = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.triggerSlideBar = function () {
        this.slideBar = !this.slideBar;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.css":
/*!***********************************************!*\
  !*** ./src/app/service/service.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerCards{\r\n    display: inline-block;\r\n    width:100%;\r\n}\r\n.masterCard{ \r\n    width: 100%;\r\n    padding: 3rem;\r\n    background: #ffffff;\r\n    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.025);\r\n    border-radius: 10px;\r\n    height: 100%;\r\n    text-align: center;\r\n    /* margin-bottom: 3rem; */\r\n}\r\n@media only screen and (max-width: 480px){\r\n    .masterCard {\r\n        padding: 2rem;\r\n    }\r\n}\r\n.masterCard img{\r\n    padding: 1rem;\r\n}\r\n.title-card{\r\n    font-size: 1.25rem;\r\n    font-weight: 300;\r\n    line-height: 1.5;\r\n    text-transform: uppercase;\r\n    margin: 0 0 1.5rem 0;\r\n }\r\nheader.special {\r\n  text-align: center;\r\n  margin-bottom: 4rem;\r\n  color: #444444;\r\n}\r\nheader h2{\r\n    font-size: 2.25rem;\r\n    line-height: 1.3;\r\n}\r\nheader.special p {\r\n  max-width: 75%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  color: #444444;\r\n}\r\n.wrapper {\r\n    position: relative;\r\n    z-index: 1;\r\n    padding-bottom: 3rem;\r\n    padding-top: 1.5rem;\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n    border-width: .2rem;\r\n    margin: 0 auto;\r\n    padding: 8rem 0 6rem 0;\r\n  }\r\n@media only screen and (max-width: 480px){\r\n      .wrapper {\r\n          padding: 2rem 0 0.1rem 0;\r\n      }\r\n      .inner{\r\n          max-width: calc(100% - 2rem);\r\n      }\r\n  }\r\n.inner {\r\n    -webkit-transform: scale(1.0);\r\n    transform: scale(1.0);\r\n    transition: opacity 1s ease, -webkit-transform 1s ease;\r\n    transition: opacity 1s ease, transform 1s ease;\r\n    transition: opacity 1s ease, transform 1s ease, -webkit-transform 1s ease;\r\n    opacity: 1;\r\n    position: relative;\r\n    z-index: 3;\r\n    color: #444444;\r\n}\r\n.inner > p{\r\n    color:rgba(255, 255, 255, 0.5);\r\n}\r\nh3{\r\n    color:#555555;\r\n    font-size: 1.25rem;\r\n    font-weight: 300;\r\n    line-height: 1.5;\r\n    text-transform: uppercase;\r\n    margin: 0 0 1.5rem 0;\r\n}\r\np {\r\n    margin: 0 0 2rem 0;\r\n}\r\n#heading {\r\n    -ms-flex-align: center;\r\n    -ms-flex-pack: center;\r\n    background-color: #111111;\r\n    color: rgba(255, 255, 255, 0.5);\r\n    -moz-align-items: center;\r\n    -ms-align-items: center;\r\n    align-items: center;\r\n    display: -moz-flex;\r\n    display: -ms-flex;\r\n    display: flex;\r\n    -moz-justify-content: center;\r\n    -ms-justify-content: center;\r\n    justify-content: center;\r\n    background-image: linear-gradient(rgba(17, 17, 17, 0.25), rgba(17, 17, 17, 0.25)), url(/assets/imgs/bg-dark.jpg);\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    border-top: 0;\r\n    display: -ms-flexbox;\r\n    height: 15rem !important;\r\n    min-height: 15rem;\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n#heading:before {\r\n    background: linear-gradient(135deg, #663399 0%, #05791e 150%);\r\n    content: ' ';\r\n    display: block;\r\n    height: 100%;\r\n    left: 0;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n#heading h1 {\r\n    margin-bottom: 0;\r\n    position: relative;\r\n    z-index: 2;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtJQUNwQixpREFBaUQ7SUFDakQsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSTtRQUNJLGNBQWM7S0FDakI7Q0FDSjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLHFCQUFxQjtFQUN2QjtBQUVGO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHVCQUF1QjtHQUN4QjtBQUNEO01BQ0k7VUFDSSx5QkFBeUI7T0FDNUI7TUFDRDtVQUNJLDZCQUE2QjtPQUNoQztHQUNKO0FBQ0Q7SUFFRSw4QkFBOEI7SUFFOUIsc0JBQXNCO0lBSXRCLHVEQUErQztJQUEvQywrQ0FBK0M7SUFBL0MsMEVBQStDO0lBQy9DLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLCtCQUErQjtDQUNsQztBQUNEO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUV6Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUVuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLDZCQUE2QjtJQUU3Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLGlIQUFpSDtJQUNqSCw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSw4REFBOEQ7SUFDOUQsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0lBQ2IsUUFBUTtJQUNSLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0NBQ2Q7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlL3NlcnZpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJDYXJkc3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLm1hc3RlckNhcmR7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAzcmVtOyAqL1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xyXG4gICAgLm1hc3RlckNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB9XHJcbn1cclxuLm1hc3RlckNhcmQgaW1ne1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG4udGl0bGUtY2FyZHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMCAwIDEuNXJlbSAwO1xyXG4gfVxyXG5cclxuaGVhZGVyLnNwZWNpYWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gIGNvbG9yOiAjNDQ0NDQ0O1xyXG59XHJcbmhlYWRlciBoMntcclxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbn1cclxuaGVhZGVyLnNwZWNpYWwgcCB7XHJcbiAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGNvbG9yOiAjNDQ0NDQ0O1xyXG59XHJcbi53cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGJvcmRlci13aWR0aDogLjJyZW07XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDhyZW0gMCA2cmVtIDA7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xyXG4gICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtIDAgMC4xcmVtIDA7XHJcbiAgICAgIH1cclxuICAgICAgLmlubmVye1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcclxuICAgICAgfVxyXG4gIH1cclxuICAuaW5uZXIge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgLW1vei10cmFuc2Zvcm0gMXMgZWFzZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAxcyBlYXNlO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgLW1zLXRyYW5zZm9ybSAxcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLCB0cmFuc2Zvcm0gMXMgZWFzZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgY29sb3I6ICM0NDQ0NDQ7XHJcbn1cclxuLmlubmVyID4gcHtcclxuICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxufVxyXG5oM3tcclxuICAgIGNvbG9yOiM1NTU1NTU7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDAgMCAxLjVyZW0gMDtcclxufVxyXG5wIHtcclxuICAgIG1hcmdpbjogMCAwIDJyZW0gMDtcclxufVxyXG4jaGVhZGluZyB7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMTcsIDE3LCAxNywgMC4yNSksIHJnYmEoMTcsIDE3LCAxNywgMC4yNSkpLCB1cmwoL2Fzc2V0cy9pbWdzL2JnLWRhcmsuanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXRvcDogMDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgaGVpZ2h0OiAxNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMTVyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI2hlYWRpbmc6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjMzOTkgMCUsICMwNTc5MWUgMTUwJSk7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuI2hlYWRpbmcgaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"heading\">\n  <h1>Clinica Dr. Walter</h1>\n</div> -->\n\n<div class=\"wrapper\">\n  <div class=\"inner\">\n<header class=\"special\">\n    <h2>SPECIALITATI</h2>\n    <p> Placeholder info Placeholder info Placeholder info Placeholder info Placeholder info Placeholder info Placeholder info Placeholder info Placeholder info Placeholder info </p>\n</header>\n<div class=\"container\">\n  <div class=\"row\">\n  <div class=\"col-xs-12 col-sm-6 col-md-4 pt-4 pb-4\" *ngFor=\"let service of services\">\n    <div class=\"masterCard\" (click)=alextest()>\n      <header>\n          <img width=\"50%\" src=\"{{service.img}}\">\n          <h3>{{service.name}}</h3>\n      </header>\n      <p>{{service.des}}</p>  \n      <!-- <div class=\"img-card\"><img width=\"100%\" src=\"{{service.img}}\"></div> -->  \n      <!-- <div class=\"title-card\">{{service.name}}</div> -->\n      <!-- <div class=\"info-card\">{{service.des}}</div> -->\n    </div>\n  </div>\n</div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
        this.services = [
            { id: 1, name: "Stomatologie preventivă", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/stoma-prevent.png" },
            { id: 2, name: "Medicină dentară adulți", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/dental-adulti.png" },
            { id: 3, name: "Medicină dentară copii", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/dental-copii.png" },
            { id: 4, name: "Alinierea dinților", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/stoma.png" },
            { id: 5, name: "Chirurgie maxilo-faciala", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/stoma-chirurgie.png" },
            { id: 6, name: "Medicină de familie", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/med-familie.png" },
            { id: 7, name: "Medicină Internă", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/interne.png" },
            { id: 8, name: "Medicina muncii", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/med-munci.png" },
            { id: 9, name: "Ortopedie", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/orto.png" },
            { id: 10, name: "Traumatologie", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/traumo.png" },
            { id: 11, name: "Alergologie", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/alergo.png" },
            { id: 12, name: "Analize genetice", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/genetic.png" },
            { id: 13, name: "Analize oncogenetice", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/onco.png" },
            { id: 14, name: "Psihologie", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/psiho.png" },
            { id: 15, name: "Logopedie", des: "Placeholder Placeholder Placeholder", img: "/assets/icons/logo.png" }
        ];
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent.prototype.alextest = function () {
        console.log(this);
    };
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/service/service.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#heading {\r\n  -ms-flex-align: center;\r\n  -ms-flex-pack: center;\r\n  background-color: #111111;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  -moz-align-items: center;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  -moz-justify-content: center;\r\n  -ms-justify-content: center;\r\n  justify-content: center;\r\n  background-image: linear-gradient(rgba(17, 17, 17, 0.25), rgba(17, 17, 17, 0.25)), url(/assets/imgs/bg-dark.jpg);\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border-top: 0;\r\n  display: -ms-flexbox;\r\n  height: 15rem !important;\r\n  min-height: 15rem;\r\n  overflow: hidden;\r\n  position: relative;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n  #heading:before {\r\n    /* background: linear-gradient(135deg, #663399 0%, #05791e 150%); */\r\n    background: linear-gradient(to top, #eaafc8 0%, #90EE90\t 74%);\r\n    content: ' ';\r\n    display: block;\r\n    height: 100%;\r\n    left: 0;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 1;\r\n  }\r\n\r\n  #heading h1 {\r\n    margin-bottom: 0;\r\n    position: relative;\r\n    z-index: 2;\r\n    color: white;\r\n  }\r\n\r\n  .wrapper {\r\n  padding: 8rem 0 6rem 0;\r\n  position: relative;\r\n  z-index: 1;\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n  border-width: .2rem;\r\n  margin: 0 auto;\r\n}\r\n\r\n  .inner {\r\n  margin: 0 auto;\r\n  width: 75rem;\r\n  max-width: calc(100% - 6rem);\r\n}\r\n\r\n  @media only screen and (max-width: 480px) {\r\n  .wrapper {\r\n    padding: 2rem 0 0.1rem 0;\r\n  }\r\n\r\n  .inner {\r\n    max-width: calc(100% - 2rem);\r\n  }\r\n}\r\n\r\n  blockquote {\r\n  border-left-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n  blockquote {\r\n  border-left: solid 0.5rem;\r\n  font-style: italic;\r\n  margin: 0 0 2rem 0;\r\n  padding: 1rem 0 1rem 2rem;\r\n}\r\n\r\n  blockquote, q {\r\n  quotes: none;\r\n  max-height: 5rem;\r\n  min-height: 8rem;\r\n}\r\n\r\n  .content .author {\r\n  display: -moz-flex;\r\n  display: -ms-flex;\r\n  display: flex;\r\n  -moz-align-items: center;\r\n  -ms-align-items: center;\r\n  align-items: center;\r\n}\r\n\r\n  .content .author .image {\r\n    margin-right: 2rem;\r\n    width: 20%;\r\n  }\r\n\r\n  .image {\r\n  border-radius: 4px;\r\n  border: 0;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n  .content .author .image img {\r\n  border-radius: 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n  .content .credit {\r\n  font-size: 0.75rem;\r\n}\r\n\r\n  .image img {\r\n  border-radius: 4px;\r\n  display: block;\r\n}\r\n\r\n  .content {\r\n  background: #ffffff;\r\n  color: #444444;\r\n  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.025);\r\n}\r\n\r\n  .content {\r\n  border-radius: 4px;\r\n  height: 100%;\r\n  padding: 3rem;\r\n}\r\n\r\n  .content p {\r\n    margin-top: auto;\r\n  }\r\n\r\n  .content .credit strong {\r\n  color: #ce1b28;\r\n}\r\n\r\n  @media only screen and (max-width: 980px){\r\n  .content {\r\n    padding: 2rem;\r\n  }\r\n}\r\n\r\n  header.special {\r\n  text-align: center;\r\n  margin-bottom: 4rem;\r\n  color: #444444;\r\n}\r\n\r\n  header h2{\r\n    font-size: 2.25rem;\r\n    line-height: 1.3;\r\n}\r\n\r\n  header.special p {\r\n  max-width: 75%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  color: #444444;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBRXpCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBRW5CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsNkJBQTZCO0VBRTdCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsaUhBQWlIO0VBQ2pILDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0VBRUM7SUFDRSxvRUFBb0U7SUFDcEUsOERBQThEO0lBQzlELGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLFFBQVE7SUFDUixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztHQUNaOztFQUVEO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtHQUNkOztFQUVIO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZUFBZTtDQUNoQjs7RUFFRDtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsNkJBQTZCO0NBQzlCOztFQUVEO0VBQ0U7SUFDRSx5QkFBeUI7R0FDMUI7O0VBRUQ7SUFDRSw2QkFBNkI7R0FDOUI7Q0FDRjs7RUFFRDtFQUNFLHVDQUF1QztDQUN4Qzs7RUFFRDtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtDQUMzQjs7RUFFRDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0NBQ2xCOztFQUVEO0VBQ0UsbUJBQW1CO0VBRW5CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QseUJBQXlCO0VBRXpCLHdCQUF3QjtFQUN4QixvQkFBb0I7Q0FDckI7O0VBQ0M7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztHQUNaOztFQUVIO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsbUJBQW1CO0NBQ3BCOztFQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjs7RUFDRDtFQUNFLG1CQUFtQjtDQUNwQjs7RUFFRDtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0NBQ2hCOztFQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixpREFBaUQ7Q0FDbEQ7O0VBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7Q0FDZjs7RUFFRDtJQUNJLGlCQUFpQjtHQUNsQjs7RUFDSDtFQUNFLGVBQWU7Q0FDaEI7O0VBQ0Q7RUFDRTtJQUNFLGNBQWM7R0FDZjtDQUNGOztFQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0NBQ2hCOztFQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7RUFDRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkaW5nIHtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLW1zLWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE3LCAxNywgMTcsIDAuMjUpLCByZ2JhKDE3LCAxNywgMTcsIDAuMjUpKSwgdXJsKC9hc3NldHMvaW1ncy9iZy1kYXJrLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3JkZXItdG9wOiAwO1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGhlaWdodDogMTVyZW0gIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAxNXJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiAgI2hlYWRpbmc6YmVmb3JlIHtcclxuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjMzOTkgMCUsICMwNTc5MWUgMTUwJSk7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjZWFhZmM4IDAlLCAjOTBFRTkwXHQgNzQlKTtcclxuICAgIGNvbnRlbnQ6ICcgJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gICNoZWFkaW5nIGgxIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbi53cmFwcGVyIHtcclxuICBwYWRkaW5nOiA4cmVtIDAgNnJlbSAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBib3JkZXItd2lkdGg6IC4ycmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uaW5uZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA3NXJlbTtcclxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDZyZW0pO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMnJlbSAwIDAuMXJlbSAwO1xyXG4gIH1cclxuXHJcbiAgLmlubmVyIHtcclxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XHJcbiAgfVxyXG59XHJcblxyXG5ibG9ja3F1b3RlIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxufVxyXG5cclxuYmxvY2txdW90ZSB7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuNXJlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbWFyZ2luOiAwIDAgMnJlbSAwO1xyXG4gIHBhZGRpbmc6IDFyZW0gMCAxcmVtIDJyZW07XHJcbn1cclxuXHJcbmJsb2NrcXVvdGUsIHEge1xyXG4gIHF1b3Rlczogbm9uZTtcclxuICBtYXgtaGVpZ2h0OiA1cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDhyZW07XHJcbn1cclxuXHJcbi5jb250ZW50IC5hdXRob3Ige1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuICAuY29udGVudCAuYXV0aG9yIC5pbWFnZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuXHJcbi5pbWFnZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb250ZW50IC5hdXRob3IgLmltYWdlIGltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRlbnQgLmNyZWRpdCB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG59XHJcblxyXG4uaW1hZ2UgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgY29sb3I6ICM0NDQ0NDQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG59XHJcblxyXG4uY29udGVudCBwIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgfVxyXG4uY29udGVudCAuY3JlZGl0IHN0cm9uZyB7XHJcbiAgY29sb3I6ICNjZTFiMjg7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCl7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcbn1cclxuaGVhZGVyLnNwZWNpYWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gIGNvbG9yOiAjNDQ0NDQ0O1xyXG59XHJcbmhlYWRlciBoMntcclxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbn1cclxuaGVhZGVyLnNwZWNpYWwgcCB7XHJcbiAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGNvbG9yOiAjNDQ0NDQ0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"heading\">\r\n  <h1>Clinica Dr. Walter</h1>\r\n</div> -->\r\n<div class=\"wrapper\">\r\n  <div class=\"inner\">\r\n      <header class=\"special\">\r\n          <h2>Echipa CLINICII DR. WALTER</h2>\r\n          <p>Va asteapta in cadrul unui program stabil, asigurand  calitatea serviciilor medicale acordate, a materialelor si nu in ultimul rand tehnicii, aparaturii si intrumentelor  din dotare.</p>\r\n      </header>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-6 col-md-4 pt-4 pb-4\" *ngFor=\"let person of team\">\r\n          <div class=\"content\">\r\n            <blockquote>\r\n              <p>{{person.des}}</p>\r\n            </blockquote>\r\n            <div class=\"author\">\r\n              <div class=\"image\">\r\n                <img src=\"/assets/team/person.png\" alt=\"\">\r\n              </div>\r\n              <p class=\"credit\">- <strong>{{person.name}}</strong></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
        this.team = [
            {
                id: 1, name: "Dr. Simona Bran-Walter", des: "Medic specialist stomatologie generala, competenta in stomatologie preventiva"
            },
            {
                id: 2, name: "Dr. Marcel Mojse", des: "Medic primar  ortodontie si ortopedie dento-faciala"
            },
            {
                id: 3, name: "Dr. Anca Anghel - Lorinți", des: "Medic dentist"
            },
            {
                id: 4, name: "Dr. Marius Crăciun", des: "Medic dentist"
            },
            {
                id: 5, name: "Dr. Daniela David", des: "Medic primar medicina de familie"
            },
            {
                id: 6, name: "Dr. Dragoș Stoicu", des: "Medic specialist medicina interna"
            },
            {
                id: 7, name: "Dr. Ioana Marin", des: "Medic specialist medicina muncii"
            },
            {
                id: 8, name: "Dr. Valentin Duda", des: "Medic medicina muncii"
            },
            {
                id: 9, name: "Dr. Darius Mihart", des: "Medic specialist ortopedie-traumatologie"
            },
            {
                id: 10, name: "Dr. Ramona Mureșan", des: "Medic specialist alergolog"
            },
            {
                id: 11, name: "Psih. Camelia Bordea", des: "Psiholog-logoped- psihoterapeut"
            },
        ];
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alexandru.gheorghe\Desktop\testApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n  <img alt=\"Bank of Evil Logo\" src=\"https://vignette.wikia.nocookie.net/despicableme/images/3/30/Picture.jpg-2012-12-28-at-15.04.53-640x351.jpg/revision/latest?cb=20131020204017\">\n  </div>\n\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Jarda & David Bank of Evil, a bank exclusively for supervillains';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loan_loan_component__ = __webpack_require__("../../../../../src/app/loan/loan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var rootRouting = __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([]);
var homeRouting = __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild([
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
    }
]);
var loanRouting = __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild([
    {
        path: 'loans',
        component: __WEBPACK_IMPORTED_MODULE_7__loan_loan_component__["a" /* LoanComponent */],
    }
]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__loan_loan_component__["a" /* LoanComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["e" /* SharedModule */],
                rootRouting,
                homeRouting,
                loanRouting,
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__shared__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["c" /* JwtService */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["f" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* ClientService */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["d" /* LoanService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "  <p class=\"text-xs-center\">\n    <a [routerLink]=\"['/login']\">Have an account?</a>\n    <a [routerLink]=\"['/register']\">Need an account?</a>\n  </p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/loan/loan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loan/loan.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let loan of loans\"> \n    {{ loan.productName }}\n  </li>\n  </ul>\n"

/***/ }),

/***/ "../../../../../src/app/loan/loan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_loan_service__ = __webpack_require__("../../../../../src/app/shared/services/loan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_client_service__ = __webpack_require__("../../../../../src/app/shared/services/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoanComponent = (function () {
    function LoanComponent(loanService, clientService) {
        this.loanService = loanService;
        this.clientService = clientService;
    }
    LoanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService
            .getClients()
            .subscribe(function (data) {
            console.log(data);
            _this.loanService
                .getLoans(data)
                .subscribe(function (data) {
                console.log(data);
                _this.loans = data;
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    LoanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loan',
            template: __webpack_require__("../../../../../src/app/loan/loan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/loan/loan.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_loan_service__["a" /* LoanService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_client_service__["a" /* ClientService */]])
    ], LoanComponent);
    return LoanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/shared/components/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/shared/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"userName\">User name</label>\n      <input type=\"text\" class=\"form-control\" id=\"userName\" name=\"userName\" aria-describedby=\"userNameHelp\" placeholder=\"Enter user name\" [(ngModel)]=\"userName\">\n      <small id=\"userNameHelp\" class=\"form-text text-muted\">Enter your user name</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" name=\"password\"  placeholder=\"Password\" [(ngModel)]=\"password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">{{submitText}}</button>\n  </form>    \n"

/***/ }),

/***/ "../../../../../src/app/shared/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitText = "Login";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService
            .attemptAuth({ userName: this.userName, password: this.password })
            .subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
            _this.router.navigateByUrl('/loans');
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/shared/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__shared_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["e"]; });




/***/ }),

/***/ "../../../../../src/app/shared/models/client.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Client */
// {"id":1,"accountNo":"000000001","status":{"id":300,"code":"clientStatusType.active","value":"Active"},"subStatus":{"active":false,"mandatory":false},"active":true,"activationDate":[2018,2,5],"firstname":"Test","lastname":"Test","displayName":"Test Test","gender":{"active":false,"mandatory":false},"clientType":{"active":false,"mandatory":false},"clientClassification":{"active":false,"mandatory":false},"isStaff":false,"officeId":1,"officeName":"Head Office","staffId":1,"staffName":"Podhola, David","timeline":{"submittedOnDate":[2018,2,5],"submittedByUsername":"mifos","submittedByFirstname":"App","submittedByLastname":"Administrator","activatedOnDate":[2018,2,5],"activatedByUsername":"mifos","activatedByFirstname":"App","activatedByLastname":"Administrator"},"legalForm":{"id":1,"code":"legalFormType.person","value":"PERSON"},"clientNonPersonDetails":{"constitution":{"active":false,"mandatory":false},"mainBusinessLine":{"active":false,"mandatory":false}}}
var Client = (function () {
    function Client() {
    }
    return Client;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/credentials.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Credentials */
var Credentials = (function () {
    function Credentials() {
    }
    return Credentials;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__("../../../../../src/app/shared/models/user.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__credentials_model__ = __webpack_require__("../../../../../src/app/shared/models/credentials.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keyName_model__ = __webpack_require__("../../../../../src/app/shared/models/keyName.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_model__ = __webpack_require__("../../../../../src/app/shared/models/client.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loan_model__ = __webpack_require__("../../../../../src/app/shared/models/loan.model.ts");
/* unused harmony namespace reexport */







/***/ }),

/***/ "../../../../../src/app/shared/models/keyName.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export KeyName */
var KeyName = (function () {
    function KeyName() {
    }
    return KeyName;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/loan.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Loan */
// {"id":1,"accountNo":"000000001","productId":1,"productName":"Půjčka 1","shortProductName":"PU1","status":{"id":100,"code":"loanStatusType.submitted.and.pending.approval","value":"Submitted and pending approval","pendingApproval":true,"waitingForDisbursal":false,"active":false,"closedObligationsMet":false,"closedWrittenOff":false,"closedRescheduled":false,"closed":false,"overpaid":false},"loanType":{"id":1,"code":"accountType.individual","value":"Individual"},"timeline":{"submittedOnDate":[2018,2,5],"submittedByUsername":"mifos","submittedByFirstname":"App","submittedByLastname":"Administrator","expectedDisbursementDate":[2018,2,14],"expectedMaturityDate":[2019,2,4]},"inArrears":false}
var Loan = (function () {
    function Loan() {
    }
    return Loan;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
// {"username":"test","userId":3,"base64EncodedAuthenticationKey":"dGVzdDp0ZXN0MTIz","authenticated":true,"officeId":1,"officeName":"Head Office","staffId":1,"staffDisplayName":"Podhola, David","roles":[{"id":2,"name":"User","description":"User","disabled":false}],"permissions":["READTRANSACTION_CLIENT","READ_LOAN","READ_CLIENT"],"shouldRenewPassword":false}
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiService = (function () {
    function ApiService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    ApiService.prototype.setHeaders = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Fineract-Platform-TenantId': 'default'
        };
        if (this.jwtService.getToken()) {
            console.log("JWT token found");
            headersConfig['Authorization'] = "Basic " + this.jwtService.getToken();
        }
        return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */](headersConfig);
    };
    ApiService.prototype.formatErrors = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error.json());
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* URLSearchParams */](); }
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders(), search: params })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        console.log("POST to " + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path);
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body), { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { headers: this.setHeaders() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__jwt_service__["a" /* JwtService */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientService = (function () {
    function ClientService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
    }
    ClientService.prototype.getClients = function () {
        // {"totalFilteredRecords":1,"pageItems":[{"id":1,"accountNo":"000000001","status":{"id":300,"code":"clientStatusType.active","value":"Active"},"subStatus":{"active":false,"mandatory":false},"active":true,"activationDate":[2018,2,5],"firstname":"Test","lastname":"Test","displayName":"Test Test","gender":{"active":false,"mandatory":false},"clientType":{"active":false,"mandatory":false},"clientClassification":{"active":false,"mandatory":false},"isStaff":false,"officeId":1,"officeName":"Head Office","staffId":1,"staffName":"Podhola, David","timeline":{"submittedOnDate":[2018,2,5],"submittedByUsername":"mifos","submittedByFirstname":"App","submittedByLastname":"Administrator","activatedOnDate":[2018,2,5],"activatedByUsername":"mifos","activatedByFirstname":"App","activatedByLastname":"Administrator"},"legalForm":{"id":1,"code":"legalFormType.person","value":"PERSON"},"clientNonPersonDetails":{"constitution":{"active":false,"mandatory":false},"mainBusinessLine":{"active":false,"mandatory":false}}}]}
        return this.apiService.get("self/clients")
            .map(function (data) {
            console.log(data);
            return data.pageItems[0];
        });
    };
    ClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* JwtService */]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__jwt_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_service__ = __webpack_require__("../../../../../src/app/shared/services/client.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__client_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loan_service__ = __webpack_require__("../../../../../src/app/shared/services/loan.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__loan_service__["a"]; });







/***/ }),

/***/ "../../../../../src/app/shared/services/jwt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtService = (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage['jwtToken'];
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage['jwtToken'] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwtToken');
    };
    JwtService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/loan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoanService = (function () {
    function LoanService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
    }
    LoanService.prototype.getLoans = function (client) {
        // {"loanAccounts":[{"id":1,"accountNo":"000000001","productId":1,"productName":"Půjčka 1","shortProductName":"PU1","status":{"id":100,"code":"loanStatusType.submitted.and.pending.approval","value":"Submitted and pending approval","pendingApproval":true,"waitingForDisbursal":false,"active":false,"closedObligationsMet":false,"closedWrittenOff":false,"closedRescheduled":false,"closed":false,"overpaid":false},"loanType":{"id":1,"code":"accountType.individual","value":"Individual"},"timeline":{"submittedOnDate":[2018,2,5],"submittedByUsername":"mifos","submittedByFirstname":"App","submittedByLastname":"Administrator","expectedDisbursementDate":[2018,2,14],"expectedMaturityDate":[2019,2,4]},"inArrears":false}]}
        return this.apiService.get("self/clients/" + client.id + "/accounts?limit=5&offset=0")
            .map(function (data) {
            console.log(data);
            return data.loanAccounts;
        });
    };
    LoanService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* JwtService */]])
    ], LoanService);
    return LoanService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jwt_service__ = __webpack_require__("../../../../../src/app/shared/services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models__ = __webpack_require__("../../../../../src/app/shared/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserService = (function () {
    function UserService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_8__models__["a" /* User */]());
        this.currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
        this.isAuthenticatedSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    UserService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(function (data) { return _this.setAuth(data.user); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    UserService.prototype.setAuth = function (user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.base64EncodedAuthenticationKey);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    };
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next(new __WEBPACK_IMPORTED_MODULE_8__models__["a" /* User */]());
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.attemptAuth = function (credentials) {
        var _this = this;
        console.log(credentials);
        // {"username":"test","userId":3,"base64EncodedAuthenticationKey":"dGVzdDp0ZXN0MTIz","authenticated":true,"officeId":1,"officeName":"Head Office","staffId":1,"staffDisplayName":"Podhola, David","roles":[{"id":2,"name":"User","description":"User","disabled":false}],"permissions":["READTRANSACTION_CLIENT","READ_LOAN","READ_CLIENT"],"shouldRenewPassword":false}
        return this.apiService.post("self/authentication?password=" + credentials.password + "&username=" + credentials.userName)
            .map(function (data) {
            console.log(data);
            _this.setAuth(data);
            return data;
        });
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    // Update the user on the server (email, pass, etc)
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.apiService
            .put('/user', { user: user })
            .map(function (data) {
            // Update the currentUser observable
            _this.currentUserSubject.next(data.user);
            return data.user;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__jwt_service__["a" /* JwtService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__("../../../../../src/app/shared/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loan_loan_component__ = __webpack_require__("../../../../../src/app/loan/loan.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var sharedRouting = __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forChild([
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__components__["a" /* LoginComponent */],
    },
    {
        path: 'loan',
        component: __WEBPACK_IMPORTED_MODULE_6__loan_loan_component__["a" /* LoanComponent */],
    }
]);
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                sharedRouting,
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__components__["a" /* LoginComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__components__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api_url: 'https://fineract.westeurope.cloudapp.azure.com/fineract-provider/api/v1/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
var bootstrapPromise = Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
// Logging bootstrap information
bootstrapPromise.then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
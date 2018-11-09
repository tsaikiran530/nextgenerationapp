webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        var _this = this;
        this.alertService = alertService;
        // subscribe to alert messages
        this.subscription = alertService.getMessage().subscribe(function (message) { _this.message = message; });
    }
    AlertComponent.prototype.ngOnDestroy = function () {
        // unsubscribe on destroy to prevent memory leaks
        this.subscription.unsubscribe();
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'alert',
        template: __webpack_require__("../../../../../src/app/_directives/alert.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/_directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__("../../../../../src/app/_directives/alert.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/startingpage'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_helpers/fake-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");
/* unused harmony export fakeBackendFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fakeBackendProvider; });


function fakeBackendFactory(backend, options, realBackend) {
    // array in local storage for registered users
    var users = JSON.parse(localStorage.getItem('users')) || [];
    // configure fake backend
    backend.connections.subscribe(function (connection) {
        // wrap in timeout to simulate server api call
        setTimeout(function () {
            // authenticate
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Post) {
                // get parameters from post request
                var params_1 = JSON.parse(connection.request.getBody());
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === params_1.username && user.password === params_1.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({
                        status: 200,
                        body: {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        }
                    })));
                }
                else {
                    // else return 400 bad request
                    connection.mockError(new Error('Username or password is incorrect'));
                }
                return;
            }
            // get users
            if (connection.request.url.endsWith('/api/users') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Get) {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 200, body: users })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // get user by id
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Get) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    // respond 200 OK with user
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 200, body: user })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // create user
            if (connection.request.url.endsWith('/api/users') && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Post) {
                // get new user object from post body
                var newUser_1 = JSON.parse(connection.request.getBody());
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return connection.mockError(new Error('Username "' + newUser_1.username + '" is already taken'));
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 200 })));
                return;
            }
            // delete user
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestMethod */].Delete) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = connection.request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 200 })));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Response */](new __WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* ResponseOptions */]({ status: 401 })));
                }
                return;
            }
            // pass through any requests not handled above
            var realHttp = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* Http */](realBackend, options);
            var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* RequestOptions */]({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe(function (response) {
                connection.mockRespond(response);
            }, function (error) {
                connection.mockError(error);
            });
        }, 500);
    });
    return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* Http */](backend, options);
}
;
var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* Http */],
    useFactory: fakeBackendFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http_testing__["a" /* MockBackend */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* BaseRequestOptions */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["j" /* XHRBackend */]]
};
//# sourceMappingURL=fake-backend.js.map

/***/ }),

/***/ "../../../../../src/app/_helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fake_backend__ = __webpack_require__("../../../../../src/app/_helpers/fake-backend.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fake_backend__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__json_service__ = __webpack_require__("../../../../../src/app/_services/json.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__json_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_services/json.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JsonService = (function () {
    function JsonService(http) {
        this.http = http;
        var obj;
        this.getFamilyProdcutJSON().subscribe(function (data) { return obj = data; }, function (error) { return console.log(error); });
        this.getCoupleProdcutJSON().subscribe(function (data) { return obj = data; }, function (error) { return console.log(error); });
        this.getSingleProdcutJSON().subscribe(function (data) { return obj = data; }, function (error) { return console.log(error); });
    }
    JsonService.prototype.getFamilyProdcutJSON = function () {
        return this.http.get("../../assets/json/familyproduct.json")
            .map(function (res) { return res.json(); });
    };
    JsonService.prototype.getCoupleProdcutJSON = function () {
        return this.http.get("../../assets/json/couplesProduct.json")
            .map(function (res) { return res.json(); });
    };
    JsonService.prototype.getSingleProdcutJSON = function () {
        return this.http.get("../../assets/json/singleProduct.json")
            .map(function (res) { return res.json(); });
    };
    JsonService.prototype.getAllCountJSON = function () {
        return this.http.get("../../assets/json/countries.json")
            .map(function (res) { return res.json(); });
    };
    return JsonService;
}());
JsonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */]) === "function" && _a || Object])
], JsonService);

var _a;
//# sourceMappingURL=json.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["k" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["i" /* RequestOptions */]({ headers: headers });
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n    <div class=\"header clearfix\" style=\"height: auto;\">\n        <div class=\"topBar\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-sm-5 hidden-xs\">\n                        <ul class=\"list-inline\">\n                            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-vimeo\"></i></a></li>\n                            <li><a href=\"#\"><i class=\"fa fa-tumblr\"></i></a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-6 col-sm-7 col-xs-12\">\n                        <ul class=\"list-inline pull-right top-right\">\n                            <li class=\"account-login\">\n                                <span>\n                      <a data-toggle=\"modal\" href=\"#login-modal\" data-target=\"#login-modal\">Log in</a>\n                      <small>or</small>\n                      <a data-toggle=\"modal\" href=\"#signup\">Create an account</a>\n                    </span>\n                            </li>\n                            <li class=\"searchBox\">\n                                <a href=\"#\"><i class=\"fa fa-search\"></i></a>\n                                <ul class=\"dropdown-menu dropdown-menu-right\">\n                                    <li>\n                                        <span class=\"input-group\">\n                          <input type=\"text\" class=\"form-control\" placeholder=\"Search…\" aria-describedby=\"basic-addon2\">\n                          <button type=\"submit\" class=\"input-group-addon\">Submit</button>\n                        </span>\n                                    </li>\n                                </ul>\n                            </li>\n                            <li class=\"dropdown cart-dropdown\">\n                                <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-shopping-cart\"></i>$0</a>\n                                <ul class=\"dropdown-menu dropdown-menu-right\">\n                                    <li>Item(s) in your cart</li>\n                                    <li>\n                                        <a href=\"#single-product.html\">\n                                            <div class=\"media\">\n                                                <img class=\"media-left media-object\" src=\"../../assets/jqueryimg/cart-item-01.jpg\" alt=\"cart-Image\">\n                                                <div class=\"media-body\">\n                                                    <h5 class=\"media-heading\">INCIDIDUNT UT <br><span>2 X $199</span></h5>\n                                                </div>\n                                            </div>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#single-product.html\">\n                                            <div class=\"media\">\n                                                <img class=\"media-left media-object\" src=\"../../assets/jqueryimg/cart-item-01.jpg\" alt=\"cart-Image\">\n                                                <div class=\"media-body\">\n                                                    <h5 class=\"media-heading\">INCIDIDUNT UT <br><span>2 X $199</span></h5>\n                                                </div>\n                                            </div>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                                            <button type=\"button\" class=\"btn btn-default\" onclick=\"location.href=&#39;cart-page.html&#39;;\">Shopping Cart</button>\n                                            <button type=\"button\" class=\"btn btn-default\" onclick=\"location.href=&#39;checkout-step-1.html&#39;;\">Checkout</button>\n                                        </div>\n                                    </li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <nav class=\"navbar navbar-main navbar-default\" role=\"navigation\" style=\"opacity: 1;\">\n            <div class=\"container\">\n                <!-- Brand and toggle get grouped for better mobile display -->\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n                    <a class=\"navbar-brand\" href=\"#\"><img src=\"../../assets/jqueryimg/logo_travelshop_copy.png\" alt=\"logo\"></a>\n                </div>\n\n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse navbar-ex1-collapse\" style=\"margin-top: 0px;\">\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li class=\"dropdown\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Home</a>\n                            <ul class=\"dropdown-menu dropdown-menu-left\">\n                                <li><a href=\"#\">Home Default</a></li>\n                                <li><a href=\"#index-v2.html\">Home Classic</a></li>\n                                <li><a href=\"#index-v3.html\">Home Deals</a></li>\n                                <li><a href=\"#index-v4.html\">Home Mega</a></li>\n                            </ul>\n                        </li>\n                        <li class=\"dropdown megaDropMenu\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" data-hover=\"dropdown\" data-delay=\"300\" data-close-others=\"true\"\n                                aria-expanded=\"false\">Shop</a>\n                            <ul class=\"dropdown-menu row\">\n                                <li class=\"col-sm-3 col-xs-12\">\n                                    <ul class=\"list-unstyled\">\n                                        <li>Products Grid View</li>\n                                        <li><a href=\"#product-grid-left-sidebar.html\">Products Sidebar Left</a></li>\n                                        <li><a href=\"#product-grid-right-sidebar.html\">Products Sidebar Right</a></li>\n                                        <li><a href=\"#product-grid-3-col-filter.html\">Products 3 Columns V1</a></li>\n                                        <li><a href=\"#product-grid-3-col.html\">Products 3 Columns V2</a></li>\n                                        <li><a href=\"#product-grid-4-col.html\">Products 4 Columns</a></li>\n                                    </ul>\n                                </li>\n                                <li class=\"col-sm-3 col-xs-12\">\n                                    <ul class=\"list-unstyled\">\n                                        <li>Products List View</li>\n                                        <li><a href=\"#product-list-left-sidebar.html\">Products Sidebar Left</a></li>\n                                        <li><a href=\"#product-list-right-sidebar.html\">Products Sidebar Right</a></li>\n                                        <li class=\"listHeading\">Others</li>\n                                        <li><a href=\"#single-product.html\">Single Product</a></li>\n                                        <li><a href=\"#cart-page.html\">Cart Page</a></li>\n                                    </ul>\n                                </li>\n                                <li class=\"col-sm-3 col-xs-12\">\n                                    <ul class=\"list-unstyled\">\n                                        <li>Checkout</li>\n                                        <li><a href=\"#checkout-step-1.html\">Step 1 - Address</a></li>\n                                        <li><a href=\"#checkout-step-2.html\">Step 2 - Shipping</a></li>\n                                        <li><a href=\"#checkout-step-3.html\">Step 3 - Payment</a></li>\n                                        <li><a href=\"#checkout-step-4.html\">Step 4 - Payment</a></li>\n                                        <li><a href=\"#checkout-complete.html\">Order Complete</a></li>\n                                    </ul>\n                                </li>\n                                <li class=\"col-sm-3 col-xs-12\">\n                                    <a href=\"#\" class=\"menu-photo\"><img src=\"../../assets/jqueryimg/menu-photo.jpg\" alt=\"menu-img\"></a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"dropdown\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">pages</a>\n                            <ul class=\"dropdown-menu dropdown-menu-left\">\n                                <li><a href=\"#about-us.html\">About Us</a></li>\n                                <li><a href=\"#signup.html\">Register</a></li>\n                                <li><a href=\"#signup-login.html\">Register or Login</a></li>\n                                <li><a href=\"#login.html\">Login</a></li>\n                                <li><a href=\"#lost-password.html\">Password Recovery</a></li>\n                                <li><a href=\"#privacy-policy.html\">Privacy Policy</a></li>\n                                <li><a href=\"#terms-and-conditions.html\">Terms &amp; Conditions</a></li>\n                                <li><a href=\"#404.html\">404 Not Found</a></li>\n\n                                <li><a href=\"#coming-soon.html\">Coming Soon</a></li>\n                            </ul>\n                        </li>\n                        <li class=\"dropdown\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">blog</a>\n                            <ul class=\"dropdown-menu dropdown-menu-right\">\n                                <li><a href=\"#blog-right-sidebar.html\">Right Sidebar</a></li>\n                                <li><a href=\"#blog-left-sidebar.html\">Left Sidebar</a></li>\n                                <li><a href=\"#blog-fullwidth.html\">Full Width</a></li>\n                                <li><a href=\"#blog-single-fullwidth.html\">Single Post</a></li>\n                                <li><a href=\"#blog-single-right-sidebar.html\">Single Right Sidebar</a></li>\n                                <li><a href=\"#blog-single-left-sidebar.html\">Single Left Sidebar</a></li>\n                            </ul>\n                        </li>\n                        <li class=\"dropdown active\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">My Account</a>\n                            <ul class=\"dropdown-menu dropdown-menu-right\">\n                                <li class=\"active\"><a href=\"#account-dashboard.html\">Dashboard</a></li>\n                                <li><a href=\"#account-profile.html\">Profile</a></li>\n                                <li><a href=\"#account-all-orders.html\">All Orders</a></li>\n                                <li><a href=\"#account-single-order.html\">Single Order</a></li>\n                                <li><a href=\"#account-wishlist.html\">Wishlist</a></li>\n                                <li><a href=\"#account-address.html\">Address</a></li>\n                            </ul>\n                        </li>\n                        <li class=\"dropdown\">\n                            <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Components</a>\n                            <ul class=\"dropdown-menu dropdown-menu-right\">\n                                <li><a href=\"#accrodion-toggle.html\">Accrodion-Toggle</a></li>\n                                <li><a href=\"#tab-dropdown.html\">Tab-Dropdown</a></li>\n                                <li><a href=\"#alert-label-badges.html\">Alert-Label-Badges</a></li>\n                                <li><a href=\"#progress-bar.html\">Progress Bar</a></li>\n                                <li><a href=\"#buttons.html\">Buttons</a></li>\n                                <li><a href=\"#forms.html\">Forms</a></li>\n                                <li><a href=\"#list-panel.html\">Listgroups Panel</a></li>\n                                <li><a href=\"#tooltip-pagination.html\">Tooltip Pagination</a></li>\n                                <li><a href=\"#typography.html\">Typography</a></li>\n                                <li><a href=\"#responsive-embed.html\">Responsive Embed</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n                <!-- /.navbar-collapse -->\n            </div>\n        </nav>\n    </div>\n\n    <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_index__ = __webpack_require__("../../../../../src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http_testing__ = __webpack_require__("../../../http/@angular/http/testing.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__startingpage_startingpage_component__ = __webpack_require__("../../../../../src/app/startingpage/startingpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_index__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_index__ = __webpack_require__("../../../../../src/app/register/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__produclist_produclist_component__ = __webpack_require__("../../../../../src/app/produclist/produclist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng_pick_datetime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng_pick_datetime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// used to create fake backend

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_19_ng_pick_datetime__["DateTimePickerModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__directives_index__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_index__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_index__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__register_index__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__startingpage_startingpage_component__["a" /* StartingpageComponent */],
            __WEBPACK_IMPORTED_MODULE_16__produclist_produclist_component__["a" /* ProduclistComponent */],
            __WEBPACK_IMPORTED_MODULE_17__cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_18__checkout_checkout_component__["a" /* CheckoutComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__guards_index__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_12__services_index__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_12__services_index__["b" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_12__services_index__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_12__services_index__["d" /* JsonService */],
            // providers used to create fake backend
            __WEBPACK_IMPORTED_MODULE_4__helpers_index__["a" /* fakeBackendProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http_testing__["a" /* MockBackend */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* BaseRequestOptions */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__startingpage_index__ = __webpack_require__("../../../../../src/app/startingpage/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_index__ = __webpack_require__("../../../../../src/app/register/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_index__ = __webpack_require__("../../../../../src/app/checkout/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__produclist_index__ = __webpack_require__("../../../../../src/app/produclist/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_index__ = __webpack_require__("../../../../../src/app/cart/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_index__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_index__["a" /* AuthGuard */]] },
    { path: 'startingpage', component: __WEBPACK_IMPORTED_MODULE_3__startingpage_index__["a" /* StartingpageComponent */] },
    { path: 'productlist/:id', component: __WEBPACK_IMPORTED_MODULE_6__produclist_index__["a" /* ProduclistComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_7__cart_index__["a" /* CartComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_5__checkout_index__["a" /* CheckoutComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_index__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_index__["a" /* RegisterComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIGHT SECTION -->\n<section class=\"lightSection clearfix pageHeaderImage\">\n  <div class=\"container\">\n    <div class=\"tableBlock\">\n      <div class=\"row tableInner\">\n        <div class=\"col-xs-12\">\n          <div class=\"page-title\">\n            <h2>cart</h2>\n            <ol class=\"breadcrumb\">\n              <li>\n                <a href=\"index.html\">Home</a>\n              </li>\n              <li class=\"active\">cart</li>\n            </ol>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<!-- MAIN CONTENT SECTION -->\n<section class=\"mainContent clearfix cartListWrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"cartListInner\">\n          <form action=\"#\">\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th></th>\n                    <th>Product Name</th>\n                    <th>Price</th>\n                    <th>Quantity</th>\n                    <th>Sub Total</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td class=\"col-xs-2\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                      <span class=\"cartImage\"><img src=\"img/products/cart-image.jpg\" alt=\"image\"></span>\n                    </td>\n                    <td class=\"col-xs-4\">Italian Winter Hat</td>\n                    <td class=\"col-xs-2\">$ 99.00</td>\n                    <td class=\"col-xs-2\"><input type=\"text\" placeholder=\"1\"></td>\n                    <td class=\"col-xs-2\">$ 99.00</td>\n                  </tr>\n                  <tr>\n                    <td class=\"col-xs-2\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                      <span class=\"cartImage\"><img src=\"img/products/cart-image.jpg\" alt=\"image\"></span>\n                    </td>\n                    <td class=\"col-xs-4\">Italian Winter Hat</td>\n                    <td class=\"col-xs-2\">$ 99.00</td>\n                    <td class=\"col-xs-2\"><input type=\"text\" placeholder=\"1\"></td>\n                    <td class=\"col-xs-2\">$ 99.00</td>\n                  </tr>\n                  <tr>\n                    <td class=\"col-xs-2\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                      <span class=\"cartImage\"><img src=\"img/products/cart-image.jpg\" alt=\"image\"></span>\n                    </td>\n                    <td class=\"col-xs-4\">Italian Winter Hat</td>\n                    <td class=\"col-xs-2\">$ 99.00</td>\n                    <td class=\"col-xs-2\"><input type=\"text\" placeholder=\"1\"></td>\n                    <td class=\"col-xs-2\">$ 99.00</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n            <div class=\"updateArea\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"I have a discount coupon\" aria-describedby=\"basic-addon2\">\n                <a href=\"#\" class=\"btn input-group-addon\" id=\"basic-addon2\">apply coupon</a>\n              </div>\n              <a href=\"#\" class=\"btn\">update cart</a>\n            </div>\n            <div class=\"row totalAmountArea\">\n              <div class=\"col-sm-4 col-sm-offset-8 col-xs-12\">\n                <ul class=\"list-unstyled\">\n                  <li>Sub Total <span>$ 792.00</span></li>\n                  <li>UK Vat <span>$ 18.00</span></li>\n                  <li>Grand Total <span class=\"grandTotal\">$ 810.00</span></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"checkBtnArea\">\n              <a [routerLink]=\"['/checkout']\" class=\"btn btn-primary btn-block\">checkout<i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i></a>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = (function () {
    function CartComponent(route) {
        this.route = route;
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    return CartComponent;
}());
CartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__("../../../../../src/app/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], CartComponent);

var _a;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/cart/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cart_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LIGHT SECTION-->\n<section class=\"lightSection clearfix pageHeader\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <div class=\"page-title\">\n          <h2>Product Grid View</h2>\n        </div>\n      </div>\n      <div class=\"col-xs-6\">\n        <ol class=\"breadcrumb pull-right\">\n          <li>\n            <a href=\"#index.html\">Home</a>\n          </li>\n          <li>\n            <a href=\"#\">shop</a>\n          </li>\n          <li class=\"active\">Product Grid Left Sidebar</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n\n\n\n<!-- MAIN CONTENT SECTION -->\n<section class=\"mainContent clearfix productsContent\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-4 col-xs-12 sideBar\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Product categories</div>\n          <div class=\"panel-body\">\n            <div class=\"collapse navbar-collapse navbar-ex1-collapse navbar-side-collapse\">\n              <ul class=\"nav navbar-nav side-nav\">\n                <li>\n                  <a href=\"#javascript:;\" data-toggle=\"collapse\" data-target=\"#women\">Women <i class=\"fa fa-plus\"></i></a>\n                  <ul id=\"women\" class=\"collapse collapseItem\">\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Accessories <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bag <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Cloths <span>(25)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bed &amp; Bath <span>(2)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Swimming costume <span>(5)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Sport Tops &amp; Shoes <span>(3)</span></a></li>\n                  </ul>\n                </li>\n                <li>\n                  <a href=\"#javascript:;\" data-toggle=\"collapse\" data-target=\"#men\">Men <i class=\"fa fa-plus\"></i></a>\n                  <ul id=\"men\" class=\"collapse collapseItem\">\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Accessories <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bag <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Cloths <span>(25)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bed &amp; Bath <span>(2)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Swimming costume <span>(5)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Sport Tops &amp; Shoes <span>(3)</span></a></li>\n                  </ul>\n                </li>\n                <li>\n                  <a href=\"#javascript:;\" data-toggle=\"collapse\" data-target=\"#kids\">Kids <i class=\"fa fa-plus\"></i></a>\n                  <ul id=\"kids\" class=\"collapse collapseItem\">\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Accessories <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bag <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Cloths <span>(25)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bed &amp; Bath <span>(2)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Swimming costume <span>(5)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Sport Tops &amp; Shoes <span>(3)</span></a></li>\n                  </ul>\n                </li>\n                <li>\n                  <a href=\"#javascript:;\" data-toggle=\"collapse\" data-target=\"#accessories\">Accessories <i class=\"fa fa-plus\"></i></a>\n                  <ul id=\"accessories\" class=\"collapse collapseItem\">\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Accessories <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bag <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Cloths <span>(25)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bed &amp; Bath <span>(2)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Swimming costume <span>(5)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Sport Tops &amp; Shoes <span>(3)</span></a></li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default priceRange\">\n          <div class=\"panel-heading\">Filter by Price</div>\n          <div class=\"panel-body clearfix\">\n            <div class=\"price-slider-inner\">\n              <span class=\"amount-wrapper\">\n                      Price:\n                      <input type=\"text\" id=\"price-amount-1\" readonly>\n                      <strong>-</strong>\n                      <input type=\"text\" id=\"price-amount-2\" readonly>\n                    </span>\n              <div id=\"price-range\"></div>\n            </div>\n            <input class=\"btn btn-default\" type=\"submit\" value=\"Filter\">\n            <!-- <span class=\"priceLabel\">Price: <strong>$12 - $30</strong></span> -->\n          </div>\n        </div>\n        <div class=\"panel panel-default filterNormal\">\n          <div class=\"panel-heading\">filter by Color</div>\n          <div class=\"panel-body\">\n            <ul class=\"list-unstyled\">\n              <li><a href=\"#\">Black<span>(15)</span></a></li>\n              <li><a href=\"#\">White<span>(10)</span></a></li>\n              <li><a href=\"#\">Red<span>(7)</span></a></li>\n              <li><a href=\"#\">Blue<span>(12)</span></a></li>\n              <li><a href=\"#\">Orange<span>(12)</span></a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"panel panel-default filterNormal\">\n          <div class=\"panel-heading\">filter by Size</div>\n          <div class=\"panel-body\">\n            <ul class=\"list-unstyled clearfix\">\n              <li><a href=\"#\">Small<span>(15)</span></a></li>\n              <li><a href=\"#\">Medium<span>(10)</span></a></li>\n              <li><a href=\"#\">Large<span>(7)</span></a></li>\n              <li><a href=\"#\">Extra Large<span>(12)</span></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-9 col-sm-8 col-xs-12\">\n        <div class=\"row\">\n          <div class=\"row\">\n            <div class=\"col-sm-3\">\n              <div class=\"well\">\n                <p>Destination </p>\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"well textval\">\n                <select class=\"form-control\" id=\"country\">\n                <option *ngFor=\"let jsondata of jsondestProd?.countries\">{{jsondata.name}}</option>\n\t\t\t\t\t\t</select>\n              </div>\n            </div>\n          </div> <br/>\n          <div class=\"row\">\n            <div class=\"col-sm-3\">\n              <div class=\"well\">\n                <p>Select Date & Time</p>\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"well textval\">\n                <owl-date-time [(ngModel)]=\"moment\"></owl-date-time>\n              </div>\n            </div>\n          </div><br/>\n          <div class=\"row\">\n            <div class=\"col-sm-3\">\n              <div class=\"well\">\n                <p>Destination </p>\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"well textval\">\n                <select class=\"form-control\">\n              <option>OneTimeMove</option><option>Permanent Move</option>\n            </select>\n                \n              </div>\n          <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\">Pay</button>\n                </div>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutComponent = (function () {
    function CheckoutComponent(router, jsonService, actRouter) {
        this.router = router;
        this.jsonService = jsonService;
        this.actRouter = actRouter;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonService.getAllCountJSON()
            .subscribe(function (fprod) { return _this.jsondestProd = fprod; });
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../src/app/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* JsonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* JsonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], CheckoutComponent);

var _a, _b, _c;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__checkout_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h1>Hi {{currentUser.firstName}}!</h1>\n    <p>You're logged in with Angular 2!!</p>\n    <h3>All registered users:</h3>\n    <ul>\n        <li *ngFor=\"let user of users\">\n            {{user.username}} ({{user.firstName}} {{user.lastName}})\n            - <a (click)=\"deleteUser(user.id)\">Delete</a>\n        </li>\n    </ul>\n    <p><a [routerLink]=\"['/login']\">Logout</a></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/home/home.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* UserService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- LOGIN MODAL -->\n<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n            <h3 class=\"modal-title\">log in</h3>\n        </div>\n        <div class=\"modal-body\">\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                </div>\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n                    <button type=\"button\" class=\"btn btn-link btn-block\">Forgot Password?</button>\n\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            alert('Login successful');
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gen-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/produclist/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__produclist_component__ = __webpack_require__("../../../../../src/app/produclist/produclist.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__produclist_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/produclist/produclist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/produclist/produclist.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- LIGHT SECTION-->\n<section class=\"lightSection clearfix pageHeader\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <div class=\"page-title\">\n          <h2>Product Grid View</h2>\n        </div>\n      </div>\n      <div class=\"col-xs-6\">\n        <ol class=\"breadcrumb pull-right\">\n          <li>\n            <a href=\"#index.html\">Home</a>\n          </li>\n          <li>\n            <a href=\"#\">shop</a>\n          </li>\n          <li class=\"active\">Product Grid Left Sidebar</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n\n\n\n<!-- MAIN CONTENT SECTION -->\n<section class=\"mainContent clearfix productsContent\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-4 col-xs-12 sideBar\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Product categories</div>\n          <div class=\"panel-body\">\n            <div class=\"collapse navbar-collapse navbar-ex1-collapse navbar-side-collapse\">\n              <ul class=\"nav navbar-nav side-nav\">\n                <li>\n                  <a href=\"#javascript:;\" data-toggle=\"collapse\" data-target=\"#women\">Women <i class=\"fa fa-plus\"></i></a>\n                  <ul id=\"women\" class=\"collapse collapseItem\">\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Accessories <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bag <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Cloths <span>(25)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bed &amp; Bath <span>(2)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Swimming costume <span>(5)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Sport Tops &amp; Shoes <span>(3)</span></a></li>\n                  </ul>\n                </li>\n                <li>\n                  <a href=\"#javascript:;\" data-toggle=\"collapse\" data-target=\"#men\">Men <i class=\"fa fa-plus\"></i></a>\n                  <ul id=\"men\" class=\"collapse collapseItem\">\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Accessories <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bag <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Cloths <span>(25)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bed &amp; Bath <span>(2)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Swimming costume <span>(5)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Sport Tops &amp; Shoes <span>(3)</span></a></li>\n                  </ul>\n                </li>\n                <li>\n                  <a href=\"#javascript:;\" data-toggle=\"collapse\" data-target=\"#kids\">Kids <i class=\"fa fa-plus\"></i></a>\n                  <ul id=\"kids\" class=\"collapse collapseItem\">\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Accessories <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bag <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Cloths <span>(25)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bed &amp; Bath <span>(2)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Swimming costume <span>(5)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Sport Tops &amp; Shoes <span>(3)</span></a></li>\n                  </ul>\n                </li>\n                <li>\n                  <a href=\"#javascript:;\" data-toggle=\"collapse\" data-target=\"#accessories\">Accessories <i class=\"fa fa-plus\"></i></a>\n                  <ul id=\"accessories\" class=\"collapse collapseItem\">\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Accessories <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bag <span>(6)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Cloths <span>(25)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Bed &amp; Bath <span>(2)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Swimming costume <span>(5)</span></a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>Sport Tops &amp; Shoes <span>(3)</span></a></li>\n                  </ul>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default priceRange\">\n          <div class=\"panel-heading\">Filter by Price</div>\n          <div class=\"panel-body clearfix\">\n            <div class=\"price-slider-inner\">\n              <span class=\"amount-wrapper\">\n                      Price:\n                      <input type=\"text\" id=\"price-amount-1\" readonly>\n                      <strong>-</strong>\n                      <input type=\"text\" id=\"price-amount-2\" readonly>\n                    </span>\n              <div id=\"price-range\"></div>\n            </div>\n            <input class=\"btn btn-default\" type=\"submit\" value=\"Filter\">\n            <!-- <span class=\"priceLabel\">Price: <strong>$12 - $30</strong></span> -->\n          </div>\n        </div>\n        <div class=\"panel panel-default filterNormal\">\n          <div class=\"panel-heading\">filter by Color</div>\n          <div class=\"panel-body\">\n            <ul class=\"list-unstyled\">\n              <li><a href=\"#\">Black<span>(15)</span></a></li>\n              <li><a href=\"#\">White<span>(10)</span></a></li>\n              <li><a href=\"#\">Red<span>(7)</span></a></li>\n              <li><a href=\"#\">Blue<span>(12)</span></a></li>\n              <li><a href=\"#\">Orange<span>(12)</span></a></li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"panel panel-default filterNormal\">\n          <div class=\"panel-heading\">filter by Size</div>\n          <div class=\"panel-body\">\n            <ul class=\"list-unstyled clearfix\">\n              <li><a href=\"#\">Small<span>(15)</span></a></li>\n              <li><a href=\"#\">Medium<span>(10)</span></a></li>\n              <li><a href=\"#\">Large<span>(7)</span></a></li>\n              <li><a href=\"#\">Extra Large<span>(12)</span></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-9 col-sm-8 col-xs-12\">\n        <div class=\"row filterArea\">\n          <div class=\"col-xs-6\">\n            <select name=\"guiest_id1\" id=\"guiest_id1\" class=\"select-drop\">\n                    <option value=\"0\">Default sorting</option>\n                    <option value=\"1\">Sort by popularity</option>\n                    <option value=\"2\">Sort by rating</option>\n                    <option value=\"3\">Sort by newness</option>\n                    <option value=\"3\">Sort by price</option>\n                  </select>\n          </div>\n          <div class=\"col-xs-6\">\n            <div class=\"btn-group pull-right\" role=\"group\">\n              <button type=\"button\" class=\"btn btn-default active\" onclick=\"window.location.href='product-grid-left-sidebar.html'\"><i class=\"fa fa-th\" aria-hidden=\"true\"></i><span>Grid</span></button>\n              <button type=\"button\" class=\"btn btn-default\" onclick=\"window.location.href='product-list-left-sidebar.html'\"><i class=\"fa fa-th-list\" aria-hidden=\"true\"></i><span>List</span></button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-4 col-xs-12\" *ngFor=\"let item of jsonFamilyProd?.travproduct\">\n            <div class=\"productBox\">\n              <div class=\"productImage clearfix\">\n                <img src=\"{{item.img}}\" alt=\"products-img\">\n                <div class=\"productMasking\">\n                  <ul class=\"list-inline btn-group\" role=\"group\">\n                    <li><a data-toggle=\"modal\" href=\"#.login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                    \n                    <li><a [routerLink]=\"['/cart']\" [queryParams]=\"{ page: item.pname }\"  class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                    <li><a class=\"btn btn-default\" data-toggle=\"modal\" href=\"#.quick-view\"><i class=\"fa fa-eye\"></i></a></li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"productCaption clearfix\">\n                <a href=\"#single-product.html\">\n                  <h5>{{item.name}}</h5>\n                </a>\n                <h3>{{item.price}}</h3>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/produclist/produclist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProduclistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProduclistComponent = (function () {
    function ProduclistComponent(router, jsonService, actRouter) {
        this.router = router;
        this.jsonService = jsonService;
        this.actRouter = actRouter;
    }
    ProduclistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productID = this.actRouter.snapshot.params['id'];
        if (this.productID == 1) {
            this.jsonService.getFamilyProdcutJSON()
                .subscribe(function (fprod) { return _this.jsonFamilyProd = fprod; });
        }
        else if (this.productID == 2) {
            this.jsonService.getCoupleProdcutJSON()
                .subscribe(function (fprod) { return _this.jsonFamilyProd = fprod; });
        }
        else if (this.productID == 3) {
            this.jsonService.getSingleProdcutJSON()
                .subscribe(function (fprod) { return _this.jsonFamilyProd = fprod; });
        }
    };
    return ProduclistComponent;
}());
ProduclistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-produclist',
        template: __webpack_require__("../../../../../src/app/produclist/produclist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/produclist/produclist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* JsonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* JsonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ProduclistComponent);

var _a, _b, _c;
//# sourceMappingURL=produclist.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__register_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n            <h3 class=\"modal-title\">Create an account</h3>\n        </div>\n        <div class=\"modal-body\">\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                </div>\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- <div class=\"col-md-6 col-md-offset-3\">\n    <h2>Register</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            alert('Registration successful');
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gen-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/startingpage/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startingpage_component__ = __webpack_require__("../../../../../src/app/startingpage/startingpage.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__startingpage_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/startingpage/startingpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/startingpage/startingpage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n\n      <div class=\"item active\">\n        <img src=\"../../assets/jqueryimg/shoe1.png\" alt=\"Los Angeles\" style=\"width:100%;\">\n        <div class=\"carousel-caption\">\n          <h3>Los Angeles</h3>\n          <p>LA is always so much fun!</p>\n        </div>\n      </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/jqueryimg/shoe2.png\" alt=\"Chicago\" style=\"width:100%;\">\n        <div class=\"carousel-caption\">\n          <h3>Chicago</h3>\n          <p>Thank you, Chicago!</p>\n        </div>\n      </div>\n\n      <div class=\"item\">\n        <img src=\"../../assets/jqueryimg/shoe3.png\" alt=\"New York\" style=\"width:100%;\">\n        <div class=\"carousel-caption\">\n          <h3>New York</h3>\n          <p>We love the Big Apple!</p>\n        </div>\n      </div>\n\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n\n\n<!-- MAIN CONTENT SECTION -->\n<section class=\"mainContent clearfix\">\n  <div class=\"container\">\n    <div class=\"row featuredCollection margin-bottom\">\n      <div class=\"col-xs-12\">\n        <div class=\"page-header\">\n          <h4>Featured Collection</h4>\n        </div>\n      </div>\n      <div class=\"col-sm-4 col-xs-12\">\n        <div class=\"thumbnail\">\n          <div class=\"imageWrapper\">\n            <img src=\"../../assets/images/family.jpg\" alt=\"feature-collection-image\">\n            <div class=\"masking\"><a [routerLink]=\"['/productlist',1]\" class=\"btn viewBtn\">View Products</a></div>\n          </div>\n          <div class=\"caption\">\n            <h4>Family</h4>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 col-xs-12\">\n        <div class=\"thumbnail\">\n          <div class=\"imageWrapper\">\n            <img src=\"../../assets/images/couple.jpg\" alt=\"feature-collection-image\">\n            <div class=\"masking\"><a [routerLink]=\"['/productlist',2]\"  class=\"btn viewBtn\">View Products</a></div>\n          </div>\n          <div class=\"caption\">\n            <h4>Couple</h4>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 col-xs-12\">\n        <div class=\"thumbnail\">\n          <div class=\"imageWrapper\">\n            <img src=\"../../assets/images/single.jpg\" alt=\"feature-collection-image\">\n            <div class=\"masking\"><a [routerLink]=\"['/productlist',3]\"  class=\"btn viewBtn\">View Products</a></div>\n          </div>\n          <div class=\"caption\">\n            <h4>Single</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row featuredProducts margin-bottom\">\n      <div class=\"col-xs-12\">\n        <div class=\"page-header\">\n          <h4>Featured Products</h4>\n        </div>\n      </div>\n      <div class=\"col-xs-12\">\n        <div class=\"owl-carousel featuredProductsSlider owl-theme owl-loaded\">\n          <div class=\"owl-stage-outer\">\n            <div class=\"owl-stage\" style=\"transform: translate3d(-1460px, 0px, 0px); transition: 0.25s; width: 4672px;\">\n              <div class=\"owl-item cloned\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-05.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Mauris lobortis augue</h5>\n                    </a>\n                    <h3>$199</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-06.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Suspendisse suscipit</h5>\n                    </a>\n                    <h3>$149</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-07.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Praesent a augue</h5>\n                    </a>\n                    <h3>$79</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-09.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Cras vel augue</h5>\n                    </a>\n                    <h3>$109</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage clearfix\">\n                    <img src=\"../../assets/jqueryimg/product-01.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption clearfix\">\n                    <a href=\"#single-product.html\">\n                      <h5>Mauris efficitur</h5>\n                    </a>\n                    <h3>$199</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item active\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-02.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Nulla facilisi</h5>\n                    </a>\n                    <h3>$149</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item active\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-03.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Praesent dui felis</h5>\n                    </a>\n                    <h3>$79</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item active\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-04.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Cras eu faucibus</h5>\n                    </a>\n                    <h3>$109</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item active\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-05.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Mauris lobortis augue</h5>\n                    </a>\n                    <h3>$199</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-06.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Suspendisse suscipit</h5>\n                    </a>\n                    <h3>$149</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-07.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Praesent a augue</h5>\n                    </a>\n                    <h3>$79</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-09.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Cras vel augue</h5>\n                    </a>\n                    <h3>$109</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage clearfix\">\n                    <img src=\"../../assets/jqueryimg/product-01.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption clearfix\">\n                    <a href=\"#single-product.html\">\n                      <h5>Mauris efficitur</h5>\n                    </a>\n                    <h3>$199</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-02.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Nulla facilisi</h5>\n                    </a>\n                    <h3>$149</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-03.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Praesent dui felis</h5>\n                    </a>\n                    <h3>$79</h3>\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned\" style=\"width: 264px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"productImage\">\n                    <img src=\"../../assets/jqueryimg/product-04.jpg\" alt=\"featured-product-img\">\n                    <div class=\"productMasking\">\n                      <ul class=\"list-inline btn-group\" role=\"group\">\n                        <li><a data-toggle=\"modal\" href=\"#login-modal\" class=\"btn btn-default\"><i class=\"fa fa-heart\"></i></a></li>\n                        <li><a href=\"#cart-page.html\" class=\"btn btn-default\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n                        <li><a data-toggle=\"modal\" href=\"#quick-view\" class=\"btn btn-default\"><i class=\"fa fa-eye\"></i></a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"productCaption\">\n                    <a href=\"#single-product.html\">\n                      <h5>Cras eu faucibus</h5>\n                    </a>\n                    <h3>$109</h3>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"owl-controls\">\n            <div class=\"owl-nav\">\n              <div class=\"owl-prev\" style=\"\"><span></span></div>\n              <div class=\"owl-next\" style=\"\"><span></span></div>\n            </div>\n            <div class=\"owl-dots\" style=\"display: none;\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row latestArticles\">\n      <div class=\"col-xs-12\">\n        <div class=\"page-header\">\n          <h4>Latest Articles</h4>\n        </div>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <div class=\"thumbnail\">\n          <h5><a href=\"#blog-single-right-sidebar.html\">Donec egestas tortor quis mattis</a></h5>\n          <span class=\"meta\">July 16, 2016 by <a href=\"#\">Abdus</a></span>\n          <a href=\"#blog-single-right-sidebar.html\"><img src=\"../../assets/jqueryimg/articles-01.jpg\" alt=\"article-image\"></a>\n          <div class=\"caption\">\n            <p>Nulla facilisi. Mauris efficitur, massa et iaculis accumsan, mauris velit ultrices purus, quis condimentum nibh\n              dolor ut tortor.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <div class=\"thumbnail\">\n          <h5><a href=\"#blog-single-right-sidebar.html\">Pellentesque risus quis tellus</a></h5>\n          <span class=\"meta\">July 16, 2016 by <a href=\"#\">Abdus</a></span>\n          <a href=\"#blog-single-right-sidebar.html\"><img src=\"../../assets/jqueryimg/articles-02.jpg\" alt=\"article-image\"></a>\n          <div class=\"caption\">\n            <p>Praesent dui felis, gravida a auctor at, facilisis commodo ipsum. Cras eu faucibus justo. Nullam varius cursus\n              nisi.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <div class=\"thumbnail\">\n          <h5><a href=\"#blog-single-right-sidebar.html\">Mauris lobortis augue ex</a></h5>\n          <span class=\"meta\">July 16, 2016 by <a href=\"#\">Abdus</a></span>\n          <a href=\"#blog-single-right-sidebar.html\"><img src=\"../../assets/jqueryimg/articles-03.jpg\" alt=\"article-image\"></a>\n          <div class=\"caption\">\n            <p>Etiam aliquam turpis quis blandit finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3 col-xs-12\">\n        <div class=\"thumbnail\">\n          <h5><a href=\"#blog-single-right-sidebar.html\">Suspendisse vestibulum dignissim</a></h5>\n          <span class=\"meta\">July 16, 2016 by <a href=\"#\">Abdus</a></span>\n          <a href=\"#blog-single-right-sidebar.html\"><img src=\"../../assets/jqueryimg/articles-04.jpg\" alt=\"article-image\"></a>\n          <div class=\"caption\">\n            <p>Suspendisse tristique interdum est, at hendrerit nunc laoreet et. Nulla vel arcu ac turpis pulvinar tincidunt\n              eu eu nisi.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<!-- LIGHT SECTION -->\n<section class=\"lightSection clearfix\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"owl-carousel partnersLogoSlider owl-theme owl-loaded\">\n\n          <div class=\"owl-stage-outer\">\n            <div class=\"owl-stage\" style=\"transform: translate3d(-2336px, 0px, 0px); transition: 1.25s; width: 4204.8px;\">\n              <div class=\"owl-item cloned\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-04.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-05.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-01.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-02.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-03.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-01.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-02.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-03.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-04.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-05.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item active\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-01.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item active\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-02.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item active\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-03.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned active\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-01.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned active\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-02.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned active\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-03.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-04.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"owl-item cloned\" style=\"width: 205.6px; margin-right: 28px;\">\n                <div class=\"slide\">\n                  <div class=\"partnersLogo clearfix\">\n                    <img src=\"../../assets/jqueryimg/partner-05.png\" alt=\"partner-img\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"owl-controls\">\n            <div class=\"owl-nav\">\n              <div class=\"owl-prev\" style=\"\"><span></span></div>\n              <div class=\"owl-next\" style=\"\"><span></span></div>\n            </div>\n            <div class=\"owl-dots\" style=\"display: none;\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"footer clearfix\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-2 col-xs-12\">\n        <div class=\"footerLink\">\n          <h5>Accessories</h5>\n          <ul class=\"list-unstyled\">\n            <li><a href=\"#\">Body care </a></li>\n            <li><a href=\"#\">Chambray </a></li>\n            <li><a href=\"#\">Floral </a></li>\n            <li><a href=\"#\">Rejuvination </a></li>\n            <li><a href=\"#\">Shaving </a></li>\n            <li><a href=\"#\">Toilette </a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <div class=\"footerLink\">\n          <h5>BRANDS</h5>\n          <ul class=\"list-unstyled\">\n            <li><a href=\"#\">Barbour </a></li>\n            <li><a href=\"#\">Brioni </a></li>\n            <li><a href=\"#\">Oliver Spencer</a></li>\n            <li><a href=\"#\">Belstaff</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <div class=\"footerLink\">\n          <h5>Accessories</h5>\n          <ul class=\"list-unstyled\">\n            <li><a href=\"#\">Body care </a></li>\n            <li><a href=\"#\">Chambray </a></li>\n            <li><a href=\"#\">Floral </a></li>\n            <li><a href=\"#\">Rejuvination </a></li>\n            <li><a href=\"#\">Shaving </a></li>\n            <li><a href=\"#\">Toilette </a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-2 col-xs-12\">\n        <div class=\"footerLink\">\n          <h5>Get in Touch</h5>\n          <ul class=\"list-unstyled\">\n            <li>Call us at (080)-412-1983</li>\n            <li><a href=\"mailto:support@travellersmove.com\">support@travellersmove.com</a></li>\n          </ul>\n          <ul class=\"list-inline\">\n            <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-dribbble\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-vimeo\"></i></a></li>\n            <li><a href=\"#\"><i class=\"fa fa-tumblr\"></i></a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-4 col-xs-12\">\n        <div class=\"newsletter clearfix\">\n          <h4>Newsletter</h4>\n          <h3>Sign up now</h3>\n          <p>Enter your email address and get notified about new products. We hate spam!</p>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"your email address\" aria-describedby=\"basic-addon2\">\n            <a href=\"#\" class=\"input-group-addon\" id=\"basic-addon2\">go <i class=\"glyphicon glyphicon-chevron-right\"></i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- COPY RIGHT -->\n<div class=\"copyRight clearfix\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-7 col-xs-12\">\n        <p>© 2016 Copyright <a target=\"_blank\" href=\"#\">TravellersMove</a>.</p>\n      </div>\n      <div class=\"col-sm-5 col-xs-12\">\n        <ul class=\"list-inline\">\n          <li><img src=\"../../assets/jqueryimg/card1.png\"></li>\n          <li><img src=\"../../assets/jqueryimg/card2.png\"></li>\n          <li><img src=\"../../assets/jqueryimg/card3.png\"></li>\n          <li><img src=\"../../assets/jqueryimg/card4.png\"></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- LOGIN MODAL -->\n<div class=\"modal fade login-modal\" aria-labelledby=\"login-modal\" id=\"login-modal\" tabindex=\"-1\" role=\"dialog\">\n\n  <gen-login></gen-login>\n\n</div>\n\n<!-- SIGN UP MODAL -->\n<div class=\"modal fade\" id=\"signup\" tabindex=\"-1\" role=\"dialog\">\n  <gen-register></gen-register>\n</div>\n\n<!-- PORDUCT QUICK VIEW MODAL -->\n<div class=\"modal fade quick-view\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n        <div class=\"media\">\n          <div class=\"media-left\">\n            <img class=\"media-object\" src=\"../../assets/jqueryimg/quick-view-01.jpg\" alt=\"Image\">\n          </div>\n          <div class=\"media-body\">\n            <h2>Old Skool Navy</h2>\n            <h3>$149</h3>\n            <p>Classic sneaker from Vans. Cotton canvas and suede upper. Textile lining with heel stabilizer and ankle support.\n              Contrasting laces. Sits on a classic waffle rubber sole.</p>\n            <span class=\"quick-drop\">\n                  <select name=\"guiest_id3\" id=\"guiest_id3\" class=\"select-drop\" sb=\"3544536\" style=\"display: none;\">\n                    <option value=\"0\">Size</option>\n                    <option value=\"1\">Size 1</option>\n                    <option value=\"2\">Size 2</option>\n                    <option value=\"3\">Size 3</option>\n                  </select><div id=\"sbHolder_3544536\" class=\"sbHolder\"><a id=\"sbToggle_3544536\" href=\"#\" class=\"sbToggle\"></a><a id=\"sbSelector_3544536\" href=\"#\" class=\"sbSelector\">Size</a><ul id=\"sbOptions_3544536\" class=\"sbOptions\" style=\"display: none;\"><li><a href=\"#0\" rel=\"0\">Size</a></li><li><a href=\"#1\" rel=\"1\">Size 1</a></li><li><a href=\"#2\" rel=\"2\">Size 2</a></li><li><a href=\"#3\" rel=\"3\">Size 3</a></li></ul></div>\n                </span>\n            <span class=\"quick-drop resizeWidth\">\n                  <select name=\"guiest_id4\" id=\"guiest_id4\" class=\"select-drop\" sb=\"4266945\" style=\"display: none;\">\n                    <option value=\"0\">Qty</option>\n                    <option value=\"1\">Qty 1</option>\n                    <option value=\"2\">Qty 2</option>\n                    <option value=\"3\">Qty 3</option>\n                  </select><div id=\"sbHolder_4266945\" class=\"sbHolder\"><a id=\"sbToggle_4266945\" href=\"#\" class=\"sbToggle\"></a><a id=\"sbSelector_4266945\" href=\"#\" class=\"sbSelector\">Qty</a><ul id=\"sbOptions_4266945\" class=\"sbOptions\" style=\"display: none;\"><li><a href=\"#0\" rel=\"0\">Qty</a></li><li><a href=\"#1\" rel=\"1\">Qty 1</a></li><li><a href=\"#2\" rel=\"2\">Qty 2</a></li><li><a href=\"#3\" rel=\"3\">Qty 3</a></li></ul></div>\n                </span>\n            <div class=\"btn-area\">\n              <a href=\"#\" class=\"btn btn-primary btn-block\">Add to cart <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/startingpage/startingpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartingpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StartingpageComponent = (function () {
    function StartingpageComponent() {
    }
    return StartingpageComponent;
}());
StartingpageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-startingpage',
        template: __webpack_require__("../../../../../src/app/startingpage/startingpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/startingpage/startingpage.component.css")]
    })
], StartingpageComponent);

//# sourceMappingURL=startingpage.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
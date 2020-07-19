(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n  <!-- <link rel=\"stylesheet\" href=\"../../node_modules/bootstrap/dist/css/bootstrap.min.css\"> -->\r\n  <!-- <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\"> -->\r\n  <!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script> -->\r\n  <!-- <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script> -->\r\n  <!-- <script src=\"../../node_modules/bootstrap/dist/css/bootstrap.min.js\"></script> -->\r\n\r\n</head>\r\n<body>\r\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n    <a class=\"navbar-brand\" href=\"#\">Maroc Trak</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/\">Home<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/map\">Carte</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/report\">Liste</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/transporteur\">Transporteur</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/form\">Formulaire</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\r\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form>\r\n    </div>\r\n  </nav>\r\n\r\n<!-- <div class=\"navbar\">\r\n  <div class=\"logo\"><img src=\"logo.jpg\" style=\"height:40px\"></div>\r\n  <div>\r\n    <a href=\"#home\">Home</a>\r\n    <a href=\"#news\">News</a>\r\n    <a href=\"#contact\">Contact</a>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"main\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<!-- <div class=\"sidenav\">\r\n  <a href=\"#about\">About</a>\r\n  <a href=\"#services\">Services</a>\r\n  <a href=\"#clients\">Clients</a>\r\n  <a href=\"#contact\">Contact</a>\r\n</div> -->\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chart-bar/chart-bar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chart-bar/chart-bar.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div>\r\n    <div style=\"display: block\"></div>\r\n    <canvas baseChart\r\n        [datasets]=\"barChartData\"\r\n        [labels]=\"barChartLabels\"\r\n        [options]=\"barChartOptions\"\r\n        [legend]=\"barChartLegend\"\r\n        [chartType]=\"barChartType\">\r\n    </canvas>\r\n</div> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-producteur/form-producteur.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-producteur/form-producteur.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <form>\r\n      {{trak.name}}\r\n      <div *ngFor=\"let x of traks\">\r\n        <span>This is a Trak</span>\r\n        <span>{{x.name}}</span>\r\n\r\n      </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"id\">ID:</label>\r\n            <input [(ngModel)]=\"trak.id\" type=\"text\" class=\"form-control\" id=\"id\" placeholder=\"ID\" name=\"id\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name:</label>\r\n            <input [(ngModel)]=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\" name=\"name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Description:</label>\r\n            <input [(ngModel)]=\"trak.description\" type=\"text\" class=\"form-control\" id=\"description\" placeholder=\"Enter description\" name=\"name\">\r\n          </div>\r\n          <div class=\"form-group form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" name=\"remember\"> Remember me\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" name=\"remember\"> Remember me\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"pwd\">Password:</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\">\r\n          </div>\r\n          <div class=\"form-group form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" name=\"remember\"> Remember me\r\n            </label>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"pwd\">Password:</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"pwd\">Password:</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\">\r\n          </div>\r\n          <div class=\"form-group form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" name=\"remember\"> Remember me\r\n            </label>\r\n          </div>\r\n        </form>\r\n        <button (click)=\"setName()\" class=\"btn btn-primary\">Set Name</button>\r\n  \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-sample1/form-sample1.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-sample1/form-sample1.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 order-md-1\">\r\n        <h4 class=\"mb-3\">Billing address</h4>\r\n        <form class=\"needs-validation\" novalidate>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"firstName\">First name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Valid first name is required.\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"lastName\">Last name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Valid last name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"username\">Username</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\" style=\"height:25px\">\r\n                <span class=\"input-group-text\">@</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required>\r\n              <div class=\"invalid-feedback\" style=\"width: 100%;\">\r\n                Your username is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\r\n            <div class=\"invalid-feedback\">\r\n              Please enter a valid email address for shipping updates.\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"address\">Address</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required>\r\n            <div class=\"invalid-feedback\">\r\n              Please enter your shipping address.\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\r\n            <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5 mb-3\">\r\n              <label for=\"country\">Country</label>\r\n              <select class=\"custom-select d-block w-100\" id=\"country\" required>\r\n                <option value=\"\">Choose...</option>\r\n                <option>United States</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\">\r\n                Please select a valid country.\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 mb-3\">\r\n              <label for=\"state\">State</label>\r\n              <select class=\"custom-select d-block w-100\" id=\"state\" required>\r\n                <option value=\"\">Choose...</option>\r\n                <option>California</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\">\r\n                Please provide a valid state.\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n              <label for=\"zip\">Zip</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Zip code required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr class=\"mb-4\">\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\r\n            <label class=\"custom-control-label\" for=\"same-address\">Shipping address is the same as my billing address</label>\r\n          </div>\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\r\n            <label class=\"custom-control-label\" for=\"save-info\">Save this information for next time</label>\r\n          </div>\r\n          <hr class=\"mb-4\">\r\n\r\n          <h4 class=\"mb-3\">Payment</h4>\r\n\r\n          <div class=\"d-block my-3\">\r\n            <div class=\"custom-control custom-radio\">\r\n              <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\r\n              <label class=\"custom-control-label\" for=\"credit\">Credit card</label>\r\n            </div>\r\n            <div class=\"custom-control custom-radio\">\r\n              <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\r\n              <label class=\"custom-control-label\" for=\"debit\">Debit card</label>\r\n            </div>\r\n            <div class=\"custom-control custom-radio\">\r\n              <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\r\n              <label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"cc-name\">Name on card</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\r\n              <small class=\"text-muted\">Full name as displayed on card</small>\r\n              <div class=\"invalid-feedback\">\r\n                Name on card is required\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"cc-number\">Credit card number</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Credit card number is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 mb-3\">\r\n              <label for=\"cc-expiration\">Expiration</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Expiration date required\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n              <label for=\"cc-expiration\">CVV</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Security code required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr class=\"mb-4\">\r\n          <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Continue to checkout</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-md-4 order-md-2 mb-4\">\r\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n          <span class=\"text-muted\">Your cart</span>\r\n          <span class=\"badge badge-secondary badge-pill\">3</span>\r\n        </h4>\r\n        <ul class=\"list-group mb-3\">\r\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n            <div>\r\n              <h6 class=\"my-0\">Product name</h6>\r\n              <small class=\"text-muted\">Brief description</small>\r\n            </div>\r\n            <span class=\"text-muted\">$12</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n            <div>\r\n              <h6 class=\"my-0\">Second product</h6>\r\n              <small class=\"text-muted\">Brief description</small>\r\n            </div>\r\n            <span class=\"text-muted\">$8</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n            <div>\r\n              <h6 class=\"my-0\">Third item</h6>\r\n              <small class=\"text-muted\">Brief description</small>\r\n            </div>\r\n            <span class=\"text-muted\">$5</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between bg-light\">\r\n            <div class=\"text-success\">\r\n              <h6 class=\"my-0\">Promo code</h6>\r\n              <small>EXAMPLECODE</small>\r\n            </div>\r\n            <span class=\"text-success\">-$5</span>\r\n          </li>\r\n          <li class=\"list-group-item d-flex justify-content-between\">\r\n            <span>Total (USD)</span>\r\n            <strong>$20</strong>\r\n          </li>\r\n        </ul>\r\n\r\n        <form class=\"card p-2\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control input-sm\" placeholder=\"Promo code\">\r\n            <div class=\"input-group-append\">\r\n              <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <footer class=\"my-5 pt-5 text-muted text-center text-small\">\r\n      <p class=\"mb-1\">&copy; 2017-2018 Company Name</p>\r\n      <ul class=\"list-inline\">\r\n        <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\r\n        <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\r\n        <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\r\n      </ul>\r\n    </footer>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inscription/inscription.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inscription/inscription.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 order-md-1 mb-4\">\r\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\r\n          <span class=\"text-muted\">Liste utilisateurs</span>\r\n          <span class=\"badge badge-secondary badge-pill\">{{users.length}}</span>\r\n        </h4>\r\n        <ul class=\"list-group mb-3\">\r\n\r\n          <li *ngFor=\"let u of users\" (click)=\"selectUser(u)\" class=\"list-group-item d-flex justify-content-between lh-condensed\">\r\n            <div>\r\n              <h6 class=\"my-0\">{{u.prenom}} {{u.nom}}</h6>\r\n              <small class=\"text-muted\">expediteur</small>\r\n            </div>\r\n            <span class=\"text-muted\">{{u.id}}</span>\r\n          </li>\r\n        </ul>\r\n\r\n        <form class=\"card p-2\">\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control input-sm\" placeholder=\"Promo code\">\r\n            <div class=\"input-group-append\">\r\n              <button type=\"submit\" class=\"btn btn-secondary\">OK</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col-md-8 order-md-2\">\r\n        <h4 class=\"mb-3\">Formulaire Inscription</h4>\r\n        <form class=\"needs-validation\" novalidate>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"firstName\">Prénom</label>\r\n              <input type=\"text\" [(ngModel)]=\"user.prenom\" name=\"prenom\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Valid first name is required.\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"lastName\">Nom</label>\r\n              <input type=\"text\" [(ngModel)]=\"user.nom\" name=\"nom\" class=\"form-control\"  id=\"lastName\" placeholder=\"\" value=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Valid last name is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"username\">Nom d'utilisaeur</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\" style=\"height:25px\">\r\n                  <span class=\"input-group-text\">@</span>\r\n                </div>\r\n                <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required>\r\n                <div class=\"invalid-feedback\" style=\"width: 100%;\">\r\n                  Your username is required.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"password\">Mot de passe</label>\r\n              <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" class=\"form-control\"  id=\"password\" placeholder=\"\" value=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Valid password is required.\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\r\n            <input type=\"email\"  [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\r\n            <div class=\"invalid-feedback\">\r\n              Please enter a valid email address for shipping updates.\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"address\">Address</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required>\r\n            <div class=\"invalid-feedback\">\r\n              Please enter your shipping address.\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mb-3\">\r\n            <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\r\n            <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5 mb-3\">\r\n              <label for=\"country\">Pays</label>\r\n              <select class=\"custom-select d-block w-100\" id=\"country\" required>\r\n                <option value=\"\">Choisir...</option>\r\n                <option>Maroc</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\">\r\n                Please select a valid country.\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 mb-3\">\r\n              <label for=\"state\">Ville</label>\r\n              <select class=\"custom-select d-block w-100\" id=\"state\" required>\r\n                <option value=\"\">Choisir...</option>\r\n                <option>Rabat</option>\r\n                <option>Casablanca</option>\r\n                <option>Tanger</option>\r\n                <option>Fes</option>\r\n              </select>\r\n              <div class=\"invalid-feedback\">\r\n                Please provide a valid state.\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n              <label for=\"zip\">Code postal</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Zip code required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr class=\"mb-4\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 mb-3\"><button (click)=\"createUser()\" class=\"btn btn-primary btn-lg btn-block\">Creer</button></div>\r\n            <div class=\"col-md-4 mb-3\"><button (click)=\"updateUser()\" class=\"btn btn-primary btn-lg btn-block\">Sauvegarder</button></div>\r\n            <div class=\"col-md-4 mb-3\"><button (click)=\"deleteUser()\" class=\"btn btn-primary btn-lg btn-block\">Supprimer</button></div>\r\n\r\n          </div>\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\r\n            <label class=\"custom-control-label\" for=\"same-address\">Cet utilisateur est un Expediteur</label>\r\n          </div>\r\n          <div class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\r\n            <label class=\"custom-control-label\" for=\"save-info\">Cet utilisateur est un Transporteur</label>\r\n          </div>\r\n          <hr class=\"mb-4\">\r\n\r\n          <h4 class=\"mb-3\">Method de paiement</h4>\r\n\r\n          <div class=\"d-block my-3\">\r\n            <div class=\"custom-control custom-radio\">\r\n              <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\r\n              <label class=\"custom-control-label\" for=\"credit\">Carte de crédit</label>\r\n            </div>\r\n            <div class=\"custom-control custom-radio\">\r\n              <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\r\n              <label class=\"custom-control-label\" for=\"debit\">Carte débit</label>\r\n            </div>\r\n            <div class=\"custom-control custom-radio\">\r\n              <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\r\n              <label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"cc-name\">Non sur la carte</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\r\n              <small class=\"text-muted\">Nom complet commme c'est affiché sur la carte</small>\r\n              <div class=\"invalid-feedback\">\r\n                Name on card is required\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 mb-3\">\r\n              <label for=\"cc-number\">Numéro de la carte de crédit</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Credit card number is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 mb-3\">\r\n              <label for=\"cc-expiration\">Expiration</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Expiration date required\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-3 mb-3\">\r\n              <label for=\"cc-expiration\">CVV</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\r\n              <div class=\"invalid-feedback\">\r\n                Security code required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr class=\"mb-4\">\r\n          <button class=\"btn btn-primary btn-lg btn-block\">Cliquez pour s'inscrire</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <footer class=\"my-5 pt-5 text-muted text-center text-small\">\r\n      <p class=\"mb-1\">&copy; 2020-2021 Trak Inc.</p>\r\n      <ul class=\"list-inline\">\r\n        <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\r\n        <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\r\n        <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\r\n      </ul>\r\n    </footer>\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display:flex; flex-direction:row\">\r\n    <div class=\"container\" style=\"flex:1\">\r\n      <h2>Expediteurs</h2>\r\n      <p style=\"min-height:150px\">Notre plateforme digitale permet aux expéditeurs de toute taille, du grand groupe international à la PME, de trouver le meilleur transporteur pour toutes leurs expéditions à travers le Maroc, du camion complet à quelques palettes, au meilleur prix (en spot ou en régulier).</p>\r\n      <div class=\"card\" style=\"width:100%;margin:20px 0 24px 0\">\r\n        <img class=\"card-img-top\" src=\"assets/img/expediteur.jpg\" alt=\"image\" style=\"width:100%\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Some Title Here</h4>\r\n          <p class=\"card-text\">Some example text some example text. John Doe is an architect and engineer</p>\r\n          <a routerLink=\"/inscription\" class=\"btn btn-outline-primary\">S'inscrire</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"container\" style=\"flex:1\">\r\n      <h2>Transporteurs</h2>\r\n      <p style=\"min-height:150px\">Notre plateforme digitale permet aux transporteurs de réduire les kilomètres à vide, en trouvant du fret en spot ou en régulier sur les lignes qu'ils sélectionnent à travers le Maroc, avec des prix définis, et d'être payés en 72 heures avec le programme Paiement Express.</p>\r\n      \r\n      <div class=\"card\" style=\"width:100%;margin:20px 0 24px 0\">\r\n        <img class=\"card-img-top\" src=\"assets/img/transporteur.jpg\" alt=\"image\" style=\"width:100%\">\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Some other Title</h4>\r\n          <p class=\"card-text\">Some example text some example text. John Doe is an architect and engineer</p>\r\n          <a routerLink=\"/inscription\" class=\"btn btn-outline-primary\">S'inscrire</a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div style=\"flex:2;font-size:12px\">\r\n      <img src=\"assets/img/trak.jpg\" style=\"width:100%\">\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-5\">\r\n        <form class=\"form-inline\">\r\n            <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\r\n            <input class=\"form-control form-control-sm ml-3 w-20\" type=\"text\" placeholder=\"Depart\" aria-label=\"Depart\">\r\n            <input class=\"form-control form-control-sm ml-3 w-20\" type=\"text\" placeholder=\"Destination\" aria-label=\"Destination\">\r\n        </form>\r\n        <div class=\"media text-muted pt-3\">\r\n            <svg height=\"100px\" width=\"50px\">\r\n            <ellipse cx=\"10\" cy=\"10\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\r\n            <line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"80\" style=\"fill:gray;stroke:deepskyblue;stroke-width:2\" />\r\n            <ellipse cx=\"10\" cy=\"80\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\r\n            </svg>\r\n            <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n            <strong class=\"d-inline text-gray-dark\"><span></span>Rabat 11:30 AM</strong>\r\n            <span class=\"d-block text-gray\"></span>\r\n            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\r\n            <strong class=\"d-block text-gray-dark\">Casablanca 01:00 PM </strong>\r\n            </p>\r\n        </div>\r\n        <div class=\"media text-muted pt-3\">\r\n            <svg height=\"100px\" width=\"50px\">\r\n            <ellipse cx=\"10\" cy=\"10\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\r\n            <line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"80\" style=\"fill:gray;stroke:deepskyblue;stroke-width:2\" />\r\n            <ellipse cx=\"10\" cy=\"80\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\r\n            </svg>\r\n            <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n            <strong class=\"d-inline text-gray-dark\"><span></span>Rabat 11:30 AM</strong>\r\n            <span class=\"d-block text-gray\"></span>\r\n            <span class=\"d-block text-gray\"></span>\r\n            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\r\n            <strong class=\"d-block text-gray-dark\">Casablanca 01:00 PM </strong>\r\n            </p>\r\n        </div>\r\n        <div class=\"media text-muted pt-3\">\r\n            <svg height=\"100px\" width=\"50px\">\r\n            <ellipse cx=\"10\" cy=\"10\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\r\n            <line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"80\" style=\"fill:gray;stroke:deepskyblue;stroke-width:2\" />\r\n            <ellipse cx=\"10\" cy=\"80\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\r\n            </svg>\r\n            <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n            <strong class=\"d-inline text-gray-dark\"><span></span>Rabat 11:30 AM</strong>\r\n            <span class=\"d-block text-gray\"></span>\r\n            <span class=\"d-block text-gray\"></span>\r\n            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\r\n            <strong class=\"d-block text-gray-dark\">Casablanca 01:00 PM </strong>\r\n            </p>\r\n        </div>\r\n        <div class=\"media text-muted pt-3\">\r\n            <svg height=\"100px\" width=\"50px\">\r\n            <ellipse cx=\"10\" cy=\"10\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\r\n            <line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"80\" style=\"fill:gray;stroke:deepskyblue;stroke-width:2\" />\r\n            <ellipse cx=\"10\" cy=\"80\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\r\n            </svg>\r\n            <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\r\n            <strong class=\"d-inline text-gray-dark\"><span></span>Rabat 11:30 AM</strong>\r\n            <span class=\"d-block text-gray\"></span>\r\n            <span class=\"d-block text-gray\"></span>\r\n            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\r\n            <strong class=\"d-block text-gray-dark\">Casablanca 01:00 PM </strong>\r\n            </p>\r\n        </div>\r\n        <small class=\"d-block text-right mt-3\">\r\n            <a href=\"#\">All updates</a>\r\n        </small>\r\n    </div>\r\n    <div class=\"col-7\">\r\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n            <agm-marker *ngFor=\"let loc of locations\" [latitude]=\"loc.lat\" [longitude]=\"loc.lng\"></agm-marker>\r\n        </agm-map>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/report-sample/report-sample.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/report-sample/report-sample.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-shadow mb-4\">\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n            Sales Report\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card mb-3\" style=\"width:100%\">\r\n\r\n    <div class=\"table-responsive\">\r\n        <table class=\"table\">\r\n            <thead>\r\n            <tr>\r\n                <th class=\"border-0 \">ID #</th>\r\n                <th class=\"border-0\">Origine</th>\r\n                <th class=\"border-0\">Destination</th>\r\n                <th class=\"border-0\">Capacité</th>\r\n                <th class=\"border-0\">Price</th>\r\n                <th class=\"border-0\">Status</th>\r\n                <th class=\"border-0\">Heure d'arrivé prévue</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let v of voyages\">\r\n                <td>{{v.id}}</td>\r\n                <td>{{v.origine}}</td>\r\n                <td>{{v.destination}}</td>\r\n                <td>{{v.capacite}}</td>\r\n                <td>{{v.prixunit}}</td>\r\n                <td>\r\n                    <span class=\"badge badge-pill badge-primary\">{{v.status}}</span>\r\n                </td>\r\n                <td>{{v.heure}}</td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transporteur-detail/transporteur-detail.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transporteur-detail/transporteur-detail.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4 class=\"mb-3\">Profile Transporteur</h4>\n<div class=\"row\">\n    <div style=\"width: 840px; height: 200px; text-align:center;margin:0; padding:0;\">\n        <ng-image-slider #nav\n        [images]=\"imageObject\"\n        [infinite]=\"false\"\n        [autoSlide]=\"1\"\n        [imageSize]=\"{width: '25%', height: 200}\"\n        slideImage=\"1\"></ng-image-slider>\n    </div>\n</div>\n<form class=\"needs-validation\" novalidate>\n  <div class=\"row\">\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"firstName\">Prénom</label>\n      <input type=\"text\" ng=\"user.prenom\" name=\"prenom\" class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required>\n      <div class=\"invalid-feedback\">\n        Valid first name is required.\n      </div>\n    </div>\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"lastName\">Nom</label>\n      <input type=\"text\" name=\"nom\" class=\"form-control\"  id=\"lastName\" placeholder=\"\" value=\"\" required>\n      <div class=\"invalid-feedback\">\n        Valid last name is required.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"username\">Nom d'utilisaeur</label>\n      <div class=\"input-group\">\n        <div class=\"input-group-prepend\" style=\"height:25px\">\n          <span class=\"input-group-text\">@</span>\n        </div>\n        <input type=\"text\" ng=\"user.username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Username\" required>\n        <div class=\"invalid-feedback\" style=\"width: 100%;\">\n          Your username is required.\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"password\">Mot de passe</label>\n      <input type=\"password\" ng=\"user.password\" name=\"password\" class=\"form-control\"  id=\"password\" placeholder=\"\" value=\"\" required>\n      <div class=\"invalid-feedback\">\n        Valid password is required.\n      </div>\n    </div>\n\n  </div>\n\n\n\n  <div class=\"mb-3\">\n    <label for=\"email\">Email <span class=\"text-muted\">(Optional)</span></label>\n    <input type=\"email\"  ng=\"user.email\" name=\"email\" class=\"form-control\" id=\"email\" placeholder=\"you@example.com\">\n    <div class=\"invalid-feedback\">\n      Please enter a valid email address for shipping updates.\n    </div>\n  </div>\n\n  <div class=\"mb-3\">\n    <label for=\"address\">Address</label>\n    <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" required>\n    <div class=\"invalid-feedback\">\n      Please enter your shipping address.\n    </div>\n  </div>\n\n  <div class=\"mb-3\">\n    <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\n    <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-5 mb-3\">\n      <label for=\"country\">Pays</label>\n      <select class=\"custom-select d-block w-100\" id=\"country\" required>\n        <option value=\"\">Choisir...</option>\n        <option>Maroc</option>\n      </select>\n      <div class=\"invalid-feedback\">\n        Please select a valid country.\n      </div>\n    </div>\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"state\">Ville</label>\n      <select class=\"custom-select d-block w-100\" id=\"state\" required>\n        <option value=\"\">Choisir...</option>\n        <option>Rabat</option>\n        <option>Casablanca</option>\n        <option>Tanger</option>\n        <option>Fes</option>\n      </select>\n      <div class=\"invalid-feedback\">\n        Please provide a valid state.\n      </div>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"zip\">Code postal</label>\n      <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required>\n      <div class=\"invalid-feedback\">\n        Zip code required.\n      </div>\n    </div>\n  </div>\n  <hr class=\"mb-4\">\n  <div class=\"row\">\n    <div class=\"col-md-4 mb-3\"><button (click)=\"createUser()\" class=\"btn btn-primary btn-lg btn-block\">Creer</button></div>\n    <div class=\"col-md-4 mb-3\"><button (click)=\"updateUser()\" class=\"btn btn-primary btn-lg btn-block\">Sauvegarder</button></div>\n    <div class=\"col-md-4 mb-3\"><button (click)=\"deleteUser()\" class=\"btn btn-primary btn-lg btn-block\">Supprimer</button></div>\n\n  </div>\n  <div class=\"custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\n    <label class=\"custom-control-label\" for=\"same-address\">Cet utilisateur est un Expediteur</label>\n  </div>\n  <div class=\"custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\">\n    <label class=\"custom-control-label\" for=\"save-info\">Cet utilisateur est un Transporteur</label>\n  </div>\n  <hr class=\"mb-4\">\n\n  <h4 class=\"mb-3\">Method de paiement</h4>\n\n  <div class=\"d-block my-3\">\n    <div class=\"custom-control custom-radio\">\n      <input id=\"credit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n      <label class=\"custom-control-label\" for=\"credit\">Carte de crédit</label>\n    </div>\n    <div class=\"custom-control custom-radio\">\n      <input id=\"debit\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n      <label class=\"custom-control-label\" for=\"debit\">Carte débit</label>\n    </div>\n    <div class=\"custom-control custom-radio\">\n      <input id=\"paypal\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" required>\n      <label class=\"custom-control-label\" for=\"paypal\">Paypal</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"cc-name\">Non sur la carte</label>\n      <input type=\"text\" class=\"form-control\" id=\"cc-name\" placeholder=\"\" required>\n      <small class=\"text-muted\">Nom complet commme c'est affiché sur la carte</small>\n      <div class=\"invalid-feedback\">\n        Name on card is required\n      </div>\n    </div>\n    <div class=\"col-md-6 mb-3\">\n      <label for=\"cc-number\">Numéro de la carte de crédit</label>\n      <input type=\"text\" class=\"form-control\" id=\"cc-number\" placeholder=\"\" required>\n      <div class=\"invalid-feedback\">\n        Credit card number is required\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"cc-expiration\">Expiration</label>\n      <input type=\"text\" class=\"form-control\" id=\"cc-expiration\" placeholder=\"\" required>\n      <div class=\"invalid-feedback\">\n        Expiration date required\n      </div>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"cc-expiration\">CVV</label>\n      <input type=\"text\" class=\"form-control\" id=\"cc-cvv\" placeholder=\"\" required>\n      <div class=\"invalid-feedback\">\n        Security code required\n      </div>\n    </div>\n  </div>\n  <hr class=\"mb-4\">\n  <button class=\"btn btn-primary btn-lg btn-block\">Cliquez pour s'inscrire</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transporteur/transporteur.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transporteur/transporteur.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 order-md-1 mb-4\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\"><a href=\"#\" class=\"card-link\" [routerLink]=\"['.']\">Profile Transporteur</a></li>\r\n              <li class=\"list-group-item\"><a href=\"#\" class=\"card-link\" [routerLink]=\"['./vehicule']\">Vehicules</a></li>\r\n              <li class=\"list-group-item\">Compte</li>\r\n              <li class=\"list-group-item\">Preferences</li>\r\n            </ul>\r\n            <div class=\"card-body\">\r\n              <a href=\"#\" class=\"card-link\">Vehicules</a>\r\n              <a href=\"#\" class=\"card-link\">Voyages</a>\r\n            </div>\r\n            <img class=\"card-img-top\" src=\"../../../assets/img/camion1.jpg\" style=\"width:200px;margin:auto\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n            </div>            \r\n            <img class=\"card-img-top\" src=\"../../../assets/img/camion2.jpg\"  style=\"width:200px;margin:auto\"> \r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n            </div>            \r\n            <img class=\"card-img-top\" src=\"../../../assets/img/camion3.jpg\"  style=\"width:200px;margin:auto\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n            </div>            \r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-8 order-md-2\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n\r\n    <footer class=\"my-5 pt-5 text-muted text-center text-small\">\r\n      <p class=\"mb-1\">&copy; 2020-2021 Trak Inc.</p>\r\n      <ul class=\"list-inline\">\r\n        <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\r\n        <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\r\n        <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\r\n      </ul>\r\n    </footer>\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule/vehicule.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule/vehicule.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <!-- <div style=\"width: 840px; height: 200px; text-align:center;margin:0; padding:0;\">\n        <ng-image-slider #nav\n        [images]=\"imageObject\"\n        [infinite]=\"false\"\n        [autoSlide]=\"1\"\n        [imageSize]=\"{width: '25%', height: 200}\"\n        slideImage=\"1\"></ng-image-slider>\n    </div> -->\n</div>\n<div class=\"row text-right\">\n  <div class=\"col-6\">\n    <h4 class=\"mb-3 text-left\">Vehicules</h4>\n  </div>\n  <div class=\"col-6\">\n    <button type=\"button\" class=\"btn btn-info\">Ajouter un vehicule</button>\n  </div>\n</div>\n<div class=\"row\" *ngFor=\"let v of vehicules\">\n  <div class=\"col-md-3\">\n    <a href=\"#\">\n      <img class=\"img-fluid rounded mb-3 mb-md-0\" src=\"../../../assets/img/camion2.jpg\" alt=\"\">\n    </a>\n  </div>\n  <div class=\"col-md-9\">\n    <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>\n    <h4>{{v.immatriculation}}</h4>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <label class=\"font-weight-bold\">Modele</label>\n        {{v.modele}}\n      </div>\n      <div class=\"col-md-4\">\n        <label class=\"font-weight-bold\">Fabricant</label>\n        {{v.fabricant}}\n      </div>\n      <div class=\"col-md-4\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <label class=\"font-weight-bold\">Carburant</label>\n        {{v.carburant}}\n      </div>\n      <div class=\"col-md-4\">\n        <label class=\"font-weight-bold\">Vitesse</label>\n        {{v.vitesse}}\n      </div>\n      <div class=\"col-md-4\">\n        <label class=\"font-weight-bold\">P. Tac</label>\n        {{v.ptac}}\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <label class=\"font-weight-bold\">Ville</label>\n        {{v.ville}}\n      </div>\n      <div class=\"col-md-4\">\n        <label class=\"font-weight-bold\">Actif</label>\n        {{v.isactive ? 'Oui' : 'Non'}}\n      </div>\n      <div class=\"col-md-4 text-right\">\n        <button type=\"button\" class=\"btn btn-outline-info\">Editer</button>\n      </div>\n    </div>\n    <!-- <a class=\"btn btn-primary\" href=\"#\">View Project</a> -->\n  </div>\n  <div class=\"row\" style=\"padding:20px\">\n  </div>\n\n</div>\n\n\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_chart_bar_chart_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chart-bar/chart-bar.component */ "./src/app/components/chart-bar/chart-bar.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_report_sample_report_sample_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/report-sample/report-sample.component */ "./src/app/components/report-sample/report-sample.component.ts");
/* harmony import */ var _components_form_producteur_form_producteur_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/form-producteur/form-producteur.component */ "./src/app/components/form-producteur/form-producteur.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inscription/inscription.component */ "./src/app/components/inscription/inscription.component.ts");
/* harmony import */ var _components_form_sample1_form_sample1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/form-sample1/form-sample1.component */ "./src/app/components/form-sample1/form-sample1.component.ts");
/* harmony import */ var _components_transporteur_transporteur_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/transporteur/transporteur.component */ "./src/app/components/transporteur/transporteur.component.ts");
/* harmony import */ var _components_vehicule_vehicule_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/vehicule/vehicule.component */ "./src/app/components/vehicule/vehicule.component.ts");
/* harmony import */ var _components_transporteur_detail_transporteur_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/transporteur-detail/transporteur-detail.component */ "./src/app/components/transporteur-detail/transporteur-detail.component.ts");













const routes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"] },
    { path: 'map', component: _components_map_map_component__WEBPACK_IMPORTED_MODULE_4__["MySmallMapComponent"] },
    { path: 'chart', component: _components_chart_bar_chart_bar_component__WEBPACK_IMPORTED_MODULE_3__["MyBarChartComponent"] },
    { path: 'form', component: _components_form_producteur_form_producteur_component__WEBPACK_IMPORTED_MODULE_6__["FormProducteurComponent"] },
    { path: 'form1', component: _components_form_sample1_form_sample1_component__WEBPACK_IMPORTED_MODULE_9__["FormSample1Component"] },
    { path: 'inscription', component: _components_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_8__["InscriptionComponent"] },
    { path: 'report', component: _components_report_sample_report_sample_component__WEBPACK_IMPORTED_MODULE_5__["ReportSampleComponent"] },
    { path: 'transporteur',
        component: _components_transporteur_transporteur_component__WEBPACK_IMPORTED_MODULE_10__["TransporteurComponent"],
        children: [
            { path: '', component: _components_transporteur_detail_transporteur_detail_component__WEBPACK_IMPORTED_MODULE_12__["TransporteurDetailComponent"] },
            { path: 'vehicule', component: _components_vehicule_vehicule_component__WEBPACK_IMPORTED_MODULE_11__["VehiculeComponent"] },
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {margin:0;}\r\n\r\nbody {\r\n  font-family: \"Lato\", sans-serif;\r\n  font-size:14px;\r\n}\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  width: 160px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 45px;\r\n  left: 0;\r\n  background-color: whitesmoke;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n  border-right: solid 5px black;\r\n}\r\n\r\n.sidenav a {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 15px;\r\n  color: #818181;\r\n  display: block;\r\n}\r\n\r\n.sidenav a:hover {\r\n  color: #f1f1f1;\r\n}\r\n\r\n.main {\r\n    margin: 100px 30px 0px 30px;\r\n    /* margin-left: 50px; */\r\n    /* padding: 10px; */\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxRQUFRLENBQUM7O0FBRWY7RUFDRSwrQkFBK0I7RUFDL0IsY0FBYztBQUNoQjs7QUFHQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsT0FBTztFQUNQLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHttYXJnaW46MDt9XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuXHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDQ1cHg7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDVweCBibGFjaztcclxufVxyXG5cclxuLnNpZGVuYXYgYSB7XHJcbiAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjODE4MTgxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2lkZW5hdiBhOmhvdmVyIHtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgbWFyZ2luOiAxMDBweCAzMHB4IDBweCAzMHB4O1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDUwcHg7ICovXHJcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xyXG59XHJcblxyXG4iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'trakfront';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_chart_bar_chart_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chart-bar/chart-bar.component */ "./src/app/components/chart-bar/chart-bar.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_report_sample_report_sample_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/report-sample/report-sample.component */ "./src/app/components/report-sample/report-sample.component.ts");
/* harmony import */ var _components_form_producteur_form_producteur_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/form-producteur/form-producteur.component */ "./src/app/components/form-producteur/form-producteur.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/inscription/inscription.component */ "./src/app/components/inscription/inscription.component.ts");
/* harmony import */ var _components_form_sample1_form_sample1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/form-sample1/form-sample1.component */ "./src/app/components/form-sample1/form-sample1.component.ts");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_transporteur_transporteur_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/transporteur/transporteur.component */ "./src/app/components/transporteur/transporteur.component.ts");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-image-slider */ "./node_modules/ng-image-slider/__ivy_ngcc__/fesm2015/ng-image-slider.js");
/* harmony import */ var _components_vehicule_vehicule_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/vehicule/vehicule.component */ "./src/app/components/vehicule/vehicule.component.ts");
/* harmony import */ var _components_transporteur_detail_transporteur_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/transporteur-detail/transporteur-detail.component */ "./src/app/components/transporteur-detail/transporteur-detail.component.ts");






// import { HttpClientModule } from '@angular/common/http';














let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_chart_bar_chart_bar_component__WEBPACK_IMPORTED_MODULE_7__["MyBarChartComponent"],
            _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MySmallMapComponent"],
            _components_report_sample_report_sample_component__WEBPACK_IMPORTED_MODULE_9__["ReportSampleComponent"],
            _components_form_producteur_form_producteur_component__WEBPACK_IMPORTED_MODULE_10__["FormProducteurComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
            _components_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_12__["InscriptionComponent"],
            _components_form_sample1_form_sample1_component__WEBPACK_IMPORTED_MODULE_13__["FormSample1Component"],
            _components_transporteur_transporteur_component__WEBPACK_IMPORTED_MODULE_16__["TransporteurComponent"],
            _components_vehicule_vehicule_component__WEBPACK_IMPORTED_MODULE_18__["VehiculeComponent"],
            _components_transporteur_detail_transporteur_detail_component__WEBPACK_IMPORTED_MODULE_19__["TransporteurDetailComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_17__["NgImageSliderModule"],
            // ChartsModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCDTdtGD64ASXwhuGE8Nc2slGNJ-q2B0w4'
            }), _graphql_module__WEBPACK_IMPORTED_MODULE_14__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppService = class AppService {
    constructor() {
        this.count = 1;
        this.count = 2;
    }
};
AppService.ctorParameters = () => [];
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "./src/app/components/chart-bar/chart-bar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/chart-bar/chart-bar.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnQtYmFyL2NoYXJ0LWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/chart-bar/chart-bar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chart-bar/chart-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: MyBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBarChartComponent", function() { return MyBarChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MyBarChartComponent = class MyBarChartComponent {
    constructor() {
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 78, 65, 99, 11, 22, 66], label: 'Series A' },
            { data: [88, 55, 74, 65, 66, 33, 65, 56], label: 'Series B' }
        ];
    }
    ngOnInit() {
    }
};
MyBarChartComponent.ctorParameters = () => [];
MyBarChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-bar-chart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chart-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chart-bar/chart-bar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chart-bar.component.css */ "./src/app/components/chart-bar/chart-bar.component.css")).default]
    })
], MyBarChartComponent);



/***/ }),

/***/ "./src/app/components/form-producteur/form-producteur.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/form-producteur/form-producteur.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\r\n    color: #36A0FF;\r\n    font-size: 27px;\r\n    padding: 10px;\r\n}\r\n\r\n.bigicon {\r\n    font-size: 35px;\r\n    color: #36A0FF;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLXByb2R1Y3RldXIvZm9ybS1wcm9kdWN0ZXVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1wcm9kdWN0ZXVyL2Zvcm0tcHJvZHVjdGV1ci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBjb2xvcjogIzM2QTBGRjtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5iaWdpY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGNvbG9yOiAjMzZBMEZGO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/form-producteur/form-producteur.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/form-producteur/form-producteur.component.ts ***!
  \*************************************************************************/
/*! exports provided: FormProducteurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProducteurComponent", function() { return FormProducteurComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_trak__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/trak */ "./src/app/models/trak.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");




let FormProducteurComponent = class FormProducteurComponent {
    constructor(ngZone, appService) {
        this.ngZone = ngZone;
        this.appService = appService;
        this.name = 'Nancy';
        this.trak = new _models_trak__WEBPACK_IMPORTED_MODULE_2__["Trak"]();
        this.trak.id = ++appService.count;
        console.log('trak.id: ' + this.trak.id);
        this.trak.name = 'hello world!';
        this.trak.description = 'I am here for the first time';
        this.traks = []; //new Array<Trak>(); 
        let t = new _models_trak__WEBPACK_IMPORTED_MODULE_2__["Trak"]();
        this.traks.push(t);
        this.traks.push(t);
        this.traks.push(t);
        this.traks.push(t);
        this.traks.push(t);
        this.traks[0].name = "weired init";
        // Api.getTrak(1).then(function(data) {
        //   this.ngZone.run(() => {
        //     this.trak.name = data.getTrak['name'];
        //     this.trak.description = data.getTrak['name'];
        //     this.trak.id = data['id'];
        //     console.log('this.trak.description : ' + this.trak.description )
        //     console.log('setName clicked: ' + JSON.stringify(data));
        //   })
        // }.bind(this));
    }
    ngOnInit() {
    }
    setName() {
    }
};
FormProducteurComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
];
FormProducteurComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-producteur',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-producteur.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-producteur/form-producteur.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-producteur.component.css */ "./src/app/components/form-producteur/form-producteur.component.css")).default]
    })
], FormProducteurComponent);



/***/ }),

/***/ "./src/app/components/form-sample1/form-sample1.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/form-sample1/form-sample1.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input, select { height: 25px; background:whitesmoke; font-size: 14px; padding:2px}\r\nbutton { height: 25px; font-size:14px; padding:2px; margin:2px; margin:2px 2px 2px 4px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtLXNhbXBsZTEvZm9ybS1zYW1wbGUxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsV0FBVztBQUNqRixTQUFTLFlBQVksRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxzQkFBc0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0tc2FtcGxlMS9mb3JtLXNhbXBsZTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LCBzZWxlY3QgeyBoZWlnaHQ6IDI1cHg7IGJhY2tncm91bmQ6d2hpdGVzbW9rZTsgZm9udC1zaXplOiAxNHB4OyBwYWRkaW5nOjJweH1cclxuYnV0dG9uIHsgaGVpZ2h0OiAyNXB4OyBmb250LXNpemU6MTRweDsgcGFkZGluZzoycHg7IG1hcmdpbjoycHg7IG1hcmdpbjoycHggMnB4IDJweCA0cHh9Il19 */");

/***/ }),

/***/ "./src/app/components/form-sample1/form-sample1.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/form-sample1/form-sample1.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormSample1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSample1Component", function() { return FormSample1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FormSample1Component = class FormSample1Component {
    constructor() { }
    ngOnInit() {
    }
};
FormSample1Component.ctorParameters = () => [];
FormSample1Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-sample1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./form-sample1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-sample1/form-sample1.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./form-sample1.component.css */ "./src/app/components/form-sample1/form-sample1.component.css")).default]
    })
], FormSample1Component);



/***/ }),

/***/ "./src/app/components/inscription/inscription.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/inscription/inscription.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input, select { height: 25px; background:whitesmoke; font-size: 14px; padding:2px}\r\nbutton { height: 25px; font-size:14px; padding:2px; margin:2px; margin:2px 2px 2px 4px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnNjcmlwdGlvbi9pbnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixZQUFZLEVBQUUscUJBQXFCLEVBQUUsZUFBZSxFQUFFLFdBQVc7QUFDakYsU0FBUyxZQUFZLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsc0JBQXNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnNjcmlwdGlvbi9pbnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsIHNlbGVjdCB7IGhlaWdodDogMjVweDsgYmFja2dyb3VuZDp3aGl0ZXNtb2tlOyBmb250LXNpemU6IDE0cHg7IHBhZGRpbmc6MnB4fVxyXG5idXR0b24geyBoZWlnaHQ6IDI1cHg7IGZvbnQtc2l6ZToxNHB4OyBwYWRkaW5nOjJweDsgbWFyZ2luOjJweDsgbWFyZ2luOjJweCAycHggMnB4IDRweH0iXX0= */");

/***/ }),

/***/ "./src/app/components/inscription/inscription.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/inscription/inscription.component.ts ***!
  \*****************************************************************/
/*! exports provided: InscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscriptionComponent", function() { return InscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../graphql/queries */ "./src/app/graphql/queries.ts");





let InscriptionComponent = class InscriptionComponent {
    constructor(apollo) {
        this.users = [];
        this.loading = false;
        this.apollo = apollo;
    }
    selectUser(user) {
        this.user = user;
        console.log('user selected');
    }
    createUser() {
        console.log('creating user...');
        delete this.user['__typename']; // avoid a problem, will find a better solution
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_4__["CreateUserQuery"],
            variables: { userInput: this.user }
        }).subscribe(a => {
            console.log('user created');
        });
    }
    updateUser() {
        if (!this.user) {
            alert('select user');
            return;
        }
        delete this.user['__typename']; // see create user
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_4__["UpdateUserQuery"],
            variables: { userInput: this.user }
        }).subscribe(u => {
            console.log(u);
        });
    }
    deleteUser() {
        let id = this.user.id;
        if (!this.user.id) {
            alert('select user');
            return;
        }
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_4__["DeleteUserQuery"],
            variables: { id: this.user.id }
        }).subscribe(u => {
            let idx = this.users.findIndex(x => x.id == id);
            this.users.splice(idx + 1, 1);
            if (this.users.length > 0)
                this.user = this.users[0];
            console.log(u);
        });
    }
    ngOnInit() {
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.apollo.watchQuery({ query: _graphql_queries__WEBPACK_IMPORTED_MODULE_4__["GetUsersQuery"] }).valueChanges.subscribe(({ data }) => {
            this.users = data['getUsers'];
        });
    }
};
InscriptionComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"] }
];
InscriptionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inscription',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inscription.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inscription/inscription.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inscription.component.css */ "./src/app/components/inscription/inscription.component.css")).default]
    })
], InscriptionComponent);



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent.ctorParameters = () => [];
MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/components/map/map.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/map/map.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n    height: 600px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MySmallMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySmallMapComponent", function() { return MySmallMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


// import { google } from "google-maps";
// declare var google : google;
let MySmallMapComponent = class MySmallMapComponent {
    constructor() {
        this.lat = 30.573109;
        this.lng = -6.589843;
        this.locations = [
            { lat: 33.573109, lng: -7.589843 },
            { lat: 33.971588, lng: -6.849813 },
            { lat: 30.427755, lng: -9.598107 },
            { lat: 35.759464, lng: -5.833954 },
            { lat: 31.629473, lng: -7.981084 },
        ];
    }
    ngOnInit() {
        for (var j = 1; j < 30; j++) {
            let rnd1 = Math.random();
            let rnd2 = Math.random();
            let lat1 = this.lat + 5 * (0.5 - rnd1);
            let lng1 = this.lng + 5 * (0.5 - rnd2);
            this.locations.push({ lat: lat1, lng: lng1 });
        }
    }
};
MySmallMapComponent.ctorParameters = () => [];
MySmallMapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-small-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./map.component.css */ "./src/app/components/map/map.component.css")).default]
    })
], MySmallMapComponent);



/***/ }),

/***/ "./src/app/components/report-sample/report-sample.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/report-sample/report-sample.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3J0LXNhbXBsZS9yZXBvcnQtc2FtcGxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/report-sample/report-sample.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/report-sample/report-sample.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReportSampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSampleComponent", function() { return ReportSampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ReportSampleComponent = class ReportSampleComponent {
    constructor() {
        this.voyages = [
            { id: 1, origine: 'Rabat', destination: 'Casablanca', capacite: 60, heure: '12:22', status: 'En route', prix: '70 DHs' },
            { id: 1, origine: 'Nadour', destination: 'Housima', capacite: 75, heure: '15:10', status: 'En route', prix: '50 DHs' },
            { id: 1, origine: 'Khmissat', destination: 'Rabat', capacite: 70, heure: '12:22', status: 'Arrivé', prix: '60 DHs' },
            { id: 1, origine: 'Azemour', destination: 'Tafilalt', capacite: 210, heure: '12:22', status: 'En route', prix: '65 DHs' },
            { id: 1, origine: 'Marrakech', destination: 'Asfi', capacite: 120, heure: '12:22', status: 'En route', prix: '70 DHs' },
            { id: 1, origine: 'Tanger', destination: 'Nadour', capacite: 50, heure: '12:22', status: 'En route', prix: '70 DHs' },
            { id: 1, origine: 'Rabat', destination: 'Casablanca', capacite: 60, heure: '12:22', status: 'En route', prix: '70 DHs' },
            { id: 1, origine: 'Rabat', destination: 'Casablanca', capacite: 60, heure: '12:22', status: 'Arrivé', prix: '60 DHs' },
            { id: 1, origine: 'Nadour', destination: 'Housima', capacite: 75, heure: '15:10', status: 'En route', prix: '70 DHs' },
            { id: 1, origine: 'Khmissat', destination: 'Rabat', capacite: 70, heure: '12:22', status: 'Arrivé', prix: '90 DHs' },
            { id: 1, origine: 'Azemour', destination: 'Tafilalt', capacite: 210, heure: '12:22', status: 'En route', prix: '50 DHs' },
            { id: 1, origine: 'Marrakech', destination: 'Asfi', capacite: 120, heure: '12:22', status: 'En route', prix: '45 DHs' },
            { id: 1, origine: 'Tanger', destination: 'Nadour', capacite: 50, heure: '12:22', status: 'En route', prix: '70 DHs' },
            { id: 1, origine: 'Rabat', destination: 'Casablanca', capacite: 60, heure: '12:22', status: 'En route', prix: '70 DHs' },
        ];
    }
    ngOnInit() {
    }
};
ReportSampleComponent.ctorParameters = () => [];
ReportSampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report-sample',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./report-sample.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/report-sample/report-sample.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./report-sample.component.css */ "./src/app/components/report-sample/report-sample.component.css")).default]
    })
], ReportSampleComponent);



/***/ }),

/***/ "./src/app/components/transporteur-detail/transporteur-detail.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/transporteur-detail/transporteur-detail.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input, select { height: 25px; background:whitesmoke; font-size: 14px; padding:2px}\r\nbutton { height: 25px; font-size:14px; padding:2px; margin:2px; margin:2px 2px 2px 4px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc3BvcnRldXItZGV0YWlsL3RyYW5zcG9ydGV1ci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0IsWUFBWSxFQUFFLHFCQUFxQixFQUFFLGVBQWUsRUFBRSxXQUFXO0FBQ2pGLFNBQVMsWUFBWSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLHNCQUFzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNwb3J0ZXVyLWRldGFpbC90cmFuc3BvcnRldXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCwgc2VsZWN0IHsgaGVpZ2h0OiAyNXB4OyBiYWNrZ3JvdW5kOndoaXRlc21va2U7IGZvbnQtc2l6ZTogMTRweDsgcGFkZGluZzoycHh9XHJcbmJ1dHRvbiB7IGhlaWdodDogMjVweDsgZm9udC1zaXplOjE0cHg7IHBhZGRpbmc6MnB4OyBtYXJnaW46MnB4OyBtYXJnaW46MnB4IDJweCAycHggNHB4fSJdfQ== */");

/***/ }),

/***/ "./src/app/components/transporteur-detail/transporteur-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/transporteur-detail/transporteur-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TransporteurDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransporteurDetailComponent", function() { return TransporteurDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TransporteurDetailComponent = class TransporteurDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
TransporteurDetailComponent.ctorParameters = () => [];
TransporteurDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transporteur-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transporteur-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transporteur-detail/transporteur-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transporteur-detail.component.css */ "./src/app/components/transporteur-detail/transporteur-detail.component.css")).default]
    })
], TransporteurDetailComponent);



/***/ }),

/***/ "./src/app/components/transporteur/transporteur.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/transporteur/transporteur.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input, select { height: 25px; background:whitesmoke; font-size: 14px; padding:2px}\r\nbutton { height: 25px; font-size:14px; padding:2px; margin:2px; margin:2px 2px 2px 4px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFuc3BvcnRldXIvdHJhbnNwb3J0ZXVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsV0FBVztBQUNqRixTQUFTLFlBQVksRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxzQkFBc0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyYW5zcG9ydGV1ci90cmFuc3BvcnRldXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LCBzZWxlY3QgeyBoZWlnaHQ6IDI1cHg7IGJhY2tncm91bmQ6d2hpdGVzbW9rZTsgZm9udC1zaXplOiAxNHB4OyBwYWRkaW5nOjJweH1cclxuYnV0dG9uIHsgaGVpZ2h0OiAyNXB4OyBmb250LXNpemU6MTRweDsgcGFkZGluZzoycHg7IG1hcmdpbjoycHg7IG1hcmdpbjoycHggMnB4IDJweCA0cHh9Il19 */");

/***/ }),

/***/ "./src/app/components/transporteur/transporteur.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/transporteur/transporteur.component.ts ***!
  \*******************************************************************/
/*! exports provided: TransporteurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransporteurComponent", function() { return TransporteurComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


// import { User } from '../../models/user'
let TransporteurComponent = class TransporteurComponent {
    constructor() {
        // this.user = new User();
        // this.user.id = 0;
        // this.users = [];
        // this.users.push(this.user);
        // private user: User;
        // private users: User[];
        this.name = 'Angular';
    }
    ngOnInit() {
    }
};
TransporteurComponent.ctorParameters = () => [];
TransporteurComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transporteur',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transporteur.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transporteur/transporteur.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transporteur.component.css */ "./src/app/components/transporteur/transporteur.component.css")).default]
    })
], TransporteurComponent);



/***/ }),

/***/ "./src/app/components/vehicule/vehicule.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/vehicule/vehicule.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button { font-size: 12px; line-height: 10px; height: 25px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZWhpY3VsZS92ZWhpY3VsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsZUFBZSxFQUFFLGlCQUFpQixFQUFFLFlBQVkiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZlaGljdWxlL3ZlaGljdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24geyBmb250LXNpemU6IDEycHg7IGxpbmUtaGVpZ2h0OiAxMHB4OyBoZWlnaHQ6IDI1cHh9Il19 */");

/***/ }),

/***/ "./src/app/components/vehicule/vehicule.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/vehicule/vehicule.component.ts ***!
  \***********************************************************/
/*! exports provided: VehiculeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculeComponent", function() { return VehiculeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/queries */ "./src/app/graphql/queries.ts");
/* harmony import */ var _models_vehicule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/vehicule */ "./src/app/models/vehicule.ts");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");





let VehiculeComponent = class VehiculeComponent {
    constructor(apollo) {
        this.vehicules = [];
        this.loading = false;
        this.imageObject = [
            {
                image: '../../../assets/img/camion1.jpg',
                thumbImage: '../../../assets/img/camion1.jpg',
                title: 'type camion'
            },
            {
                image: '../../../assets/img/camion2.jpg',
                thumbImage: '../../../assets/img/camion2.jpg',
                title: 'type camion'
            },
            {
                image: '../../../assets/img/camion3.jpg',
                thumbImage: '../../../assets/img/camion3.jpg',
                title: 'type camion'
            },
            {
                image: '../../../assets/img/camion4.jpg',
                thumbImage: '../../../assets/img/camion4.jpg',
                title: 'type camion'
            },
            {
                image: '../../../assets/img/camion5.jpg',
                thumbImage: '../../../assets/img/camion5.jpg',
                title: 'type camion'
            },
            {
                image: '../../../assets/img/camion6.jpg',
                thumbImage: '../../../assets/img/camion6.jpg',
                title: 'type camion'
            },
            {
                image: '../../../assets/img/camion7.jpg',
                thumbImage: '../../../assets/img/camion7.jpg',
                title: 'type camion'
            },
        ];
        this.apollo = apollo;
    }
    createVehicule() {
        console.log('creating vehicule...');
        delete this.vehicule['__typename']; // avoid a problem, will find a better solution
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["CreateVehiculeQuery"],
            variables: { vehiculeInput: this.vehicule }
        }).subscribe(a => {
            console.log('vehicule created');
        });
    }
    updateVehicule() {
        if (!this.vehicule) {
            alert('select vehicule');
            return;
        }
        delete this.vehicule['__typename']; // see create vehicule
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["UpdateVehiculeQuery"],
            variables: { vehiculeInput: this.vehicule }
        }).subscribe(u => {
            console.log(u);
        });
    }
    deleteVehicule() {
        let id = this.vehicule.id;
        if (!this.vehicule.id) {
            alert('select vehicule');
            return;
        }
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["DeleteVehiculeQuery"],
            variables: { id: this.vehicule.id }
        }).subscribe(u => {
            let idx = this.vehicules.findIndex(x => x.id == id);
            this.vehicules.splice(idx + 1, 1);
            if (this.vehicules.length > 0)
                this.vehicule = this.vehicules[0];
            console.log(u);
        });
    }
    ngOnInit() {
        this.vehicule = new _models_vehicule__WEBPACK_IMPORTED_MODULE_3__["Vehicule"]();
        this.apollo.watchQuery({ query: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["GetVehiculesQuery"] }).valueChanges.subscribe(({ data }) => {
            this.vehicules = data['getVehicules'];
            console.log('got vehicules');
            console.log(this.vehicules);
        });
    }
};
VehiculeComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] }
];
VehiculeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicule',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vehicule.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule/vehicule.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vehicule.component.css */ "./src/app/components/vehicule/vehicule.component.css")).default]
    })
], VehiculeComponent);



/***/ }),

/***/ "./src/app/graphql.module.ts":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/__ivy_ngcc__/fesm2015/ngApolloLinkHttp.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");





const uri = 'http://localhost:3001/graphql';
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri }),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"](),
    };
}
let GraphQLModule = class GraphQLModule {
};
GraphQLModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLinkModule"]],
        providers: [
            {
                provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
                useFactory: createApollo,
                deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]],
            },
        ],
    })
], GraphQLModule);



/***/ }),

/***/ "./src/app/graphql/queries.ts":
/*!************************************!*\
  !*** ./src/app/graphql/queries.ts ***!
  \************************************/
/*! exports provided: GetUsersQuery, CreateUserQuery, UpdateUserQuery, DeleteUserQuery, GetVehiculesQuery, CreateVehiculeQuery, UpdateVehiculeQuery, DeleteVehiculeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsersQuery", function() { return GetUsersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserQuery", function() { return CreateUserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserQuery", function() { return UpdateUserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserQuery", function() { return DeleteUserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVehiculesQuery", function() { return GetVehiculesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVehiculeQuery", function() { return CreateVehiculeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVehiculeQuery", function() { return UpdateVehiculeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteVehiculeQuery", function() { return DeleteVehiculeQuery; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

// User ----------------------------------------
const GetUsersQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
query GetUsers {
  getUsers {
    id
    nom
    prenom
    username
    password
    email
    type
  }
}
`;
const CreateUserQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
mutation createUser($userInput: UserInput!) {
  createUser(userInput: $userInput) {
    id
    nom
    prenom
    username
    password
    email
    type
  }
}
`;
const UpdateUserQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
mutation updateUser($userInput: UserInput!) {
  updateUser(userInput: $userInput) {
    id
    nom
    prenom
    username
    password
    email
    type
  }
}
`;
const DeleteUserQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
mutation deleteUser($id: Int!) {
  deleteUser(id: $id) {
    id
  }
}
`;
// Vehicule -----------------------------
const GetVehiculesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
query GetVehicules {
  getVehicules {
    id
    fabricant
    modele
    type
    immatriculation
    ptac
    datemisecirculation
    carburant
    vitesse
    ville
    isactive
    transporteur {
      id
    }
  }
}
`;
const CreateVehiculeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
mutation createVehicule($vehiculeInput: VehiculeInput!) {
  createVehicule(vehiculeInput: $vehiculeInput) {
    id
    fabricant
    modele
    type
    immatriculation
    ptac
    datemisecirculation
    carburant
    vitesse
    ville
    isactive
    transporteur {
      id
    }
  }
}
`;
const UpdateVehiculeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
mutation updateVehicule($vehiculeInput: VehiculeInput!) {
  updateVehicule(vehiculeInput: $vehiculeInput) {
    id
    fabricant
    modele
    type
    immatriculation
    ptac
    datemisecirculation
    carburant
    vitesse
    ville
    isactive
    transporteur {
      id
    }
  }
}
`;
const DeleteVehiculeQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
mutation deleteVehicule($id: Int!) {
  deleteVehicule(id: $id) {
    id
  }
}
`;


/***/ }),

/***/ "./src/app/models/trak.ts":
/*!********************************!*\
  !*** ./src/app/models/trak.ts ***!
  \********************************/
/*! exports provided: Trak */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trak", function() { return Trak; });
class Trak {
    constructor() {
        this.id = 4;
        this.name = 'this is my name';
        this.description = 'this is my description';
    }
}


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/models/vehicule.ts":
/*!************************************!*\
  !*** ./src/app/models/vehicule.ts ***!
  \************************************/
/*! exports provided: Vehicule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicule", function() { return Vehicule; });
class Vehicule {
}


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hicha\source\repos\trakfront\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
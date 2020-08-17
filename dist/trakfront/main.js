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
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n  <!-- <link rel=\"stylesheet\" href=\"../../node_modules/bootstrap/dist/css/bootstrap.min.css\"> -->\r\n  <!-- <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\"> -->\r\n  <!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script> -->\r\n  <!-- <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script> -->\r\n  <!-- <script src=\"../../node_modules/bootstrap/dist/css/bootstrap.min.js\"></script> -->\r\n\r\n</head>\r\n<body>\r\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n    <a class=\"navbar-brand\" href=\"#\">Maroc Trak</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n      \r\n    </button>\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/\">Home<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/map\">Carte</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/report\">Liste</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/transporteurs\">Transporteurs</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/form\">Formulaire</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\r\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n      </form>\r\n    </div>\r\n  </nav>\r\n\r\n<!-- <div class=\"navbar\">\r\n  <div class=\"logo\"><img src=\"logo.jpg\" style=\"height:40px\"></div>\r\n  <div>\r\n    <a href=\"#home\">Home</a>\r\n    <a href=\"#news\">News</a>\r\n    <a href=\"#contact\">Contact</a>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"main\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<!-- <div class=\"sidenav\">\r\n  <a href=\"#about\">About</a>\r\n  <a href=\"#services\">Services</a>\r\n  <a href=\"#clients\">Clients</a>\r\n  <a href=\"#contact\">Contact</a>\r\n</div> -->\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image/image.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image/image.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"image-upload\">\n    <input name=\"imageUrl\" type=\"file\" accept=\"image/*\" (change)=\"handleInputChange($event)\" />\n</div>\n\n\n    <div class=\"d-flex flex-row flex-wrap\">\n        <div *ngFor=\"let i of images\" style=\"padding:4px\">\n            <img src=\"{{i.data}}\" style=\"height:150px;border:solid 4px gray\">\n            <div>\n                <button class=\"button\" (click)=\"deleteImage(i)\">Supprimer</button>\n                <button class=\"button\" (click)=\"setImagePricipale(i)\">Set Principale</button>\n            </div>\n            \n        </div>\n    </div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- <div class=\"row\">\n  <div style=\"width: 840px; height: 200px; text-align:center;margin:0; padding:0;\">\n    <ng-image-slider #nav\n    [images]=\"imageObject\"\n    [infinite]=\"false\"\n    [autoSlide]=\"1\"\n    [imageSize]=\"{width: '25%', height: 200}\"\n    slideImage=\"1\"></ng-image-slider>\n  </div>\n</div> -->\n<h5 class=\"mb-3\">Profile Transporteur</h5>\n<form class=\"needs-validation\" novalidate>\n  <div class=\"row\">\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"prenom\">Prénom</label>\n      <input type=\"text\" [(ngModel)]=\"store.transporteur.prenom\" name=\"prenom\" class=\"form-control\" id=\"prenom\" placeholder=\"Prenom\">\n    </div>\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"nom\">Nom</label>\n      <input type=\"text\" [(ngModel)]=\"store.transporteur.nom\" name=\"nom\" class=\"form-control\"  id=\"nom\" placeholder=\"Nom\">\n    </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4 mb-3\">\n    <label for=\"cin\">CIN</label>\n    <input type=\"text\" [(ngModel)]=\"store.transporteur.cin\" name=\"cin\" class=\"form-control\" id=\"cin\" placeholder=\"CIN\">\n  </div>\n  <div class=\"col-md-4 mb-3\">\n    <label for=\"permis\">Permis</label>\n    <input type=\"text\"  [(ngModel)]=\"store.transporteur.permis\" name=\"permis\" class=\"form-control\"  id=\"permis\" placeholder=\"Permis\">\n  </div>\n  <div class=\"col-md-4 mb-3\">\n    <label for=\"dateexpirationpermis\">Date Exp.</label>\n    <input type=\"text\"  [(ngModel)]=\"store.transporteur.dateexpirationpermis\" name=\"dateexpirationpermis\" class=\"form-control\"  id=\"dateexpirationpermis\" placeholder=\"Date Exp.\">\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4 mb-3\">\n    <label for=\"dateinscription\">Date inscription</label>\n    <input type=\"text\"  [(ngModel)]=\"store.transporteur.dateinscription\" name=\"dateinscription\" class=\"form-control\"  id=\"dateinscription\" placeholder=\"Date inscription\">\n  </div>\n  <div class=\"col-md-4 mb-3\">\n    <label for=\"nbrvehicules\">Nbr. vehicule</label>\n    <input type=\"number\"  [(ngModel)]=\"store.transporteur.nbrvehicules\" name=\"nbrvehicules\" class=\"form-control\"  id=\"nbrvehicules\" placeholder=\"Nbr. vehicules\">\n  </div>\n  <div class=\"col-md-4 mb-3\">\n    <label for=\"nbr\">Nbr. voyages</label>\n    <input type=\"number\"  [(ngModel)]=\"store.transporteur.nbrvoyages\" name=\"nbrvoyages\" class=\"form-control\"  id=\"nbrvoyages\" placeholder=\"Nbr. voyages\">\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-2 mb-3\">\n    <label for=\"dateinscription\">Cote</label>\n    <input type=\"number\"  [(ngModel)]=\"store.transporteur.cote\" name=\"permis\" class=\"form-control\"  id=\"cote\" placeholder=\"Cote\">\n  </div>\n</div>\n\n  <div class=\"custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"same-address\">\n    <label class=\"custom-control-label\" for=\"same-address\">Actif</label>\n  </div>\n\n  <hr class=\"mb-4\">\n\n  <h5 class=\"mb-3\">Adresse</h5>\n  <div class=\"row\">\n    <div class=\"col-md-5 mb-3\">\n      <label for=\"country\">Pays</label>\n      <select class=\"custom-select d-block w-100\" id=\"country\" required>\n        <option value=\"\">Choisir...</option>\n        <option>Maroc</option>\n      </select>\n    </div>\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"state\">Ville</label>\n      <select class=\"custom-select d-block w-100\" id=\"state\" required>\n        <option value=\"\">Choisir...</option>\n        <option>Rabat</option>\n        <option>Casablanca</option>\n        <option>Tanger</option>\n        <option>Fes</option>\n      </select>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n      <label for=\"zip\">Code postal</label>\n      <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" required>\n      <div class=\"invalid-feedback\">\n        Zip code required.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-4 mb-3\"><button (click)=\"addTransporteur()\" class=\"btn btn-primary btn-lg btn-block\">Creer</button></div>\n    <div class=\"col-md-4 mb-3\"><button (click)=\"upsertTransporteur()\" class=\"btn btn-primary btn-lg btn-block\">Sauvegarder</button></div>\n    <div class=\"col-md-4 mb-3\"><button (click)=\"deleteTransporteur()\" class=\"btn btn-primary btn-lg btn-block\">Supprimer</button></div>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transporteur-list/transporteur-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transporteur-list/transporteur-list.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngFor=\"let t of store.transporteurs\">\n    <div class=\"col-md-3\">\n        <img class=\"img-fluid rounded mb-3 mb-md-0\" src=\"../../../assets/img/camion3.jpg\" alt=\"\" (click)=\"navToTransporteur(t)\">\n    </div>\n    <div class=\"col-md-9\">\n      <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>\n      <h4>{{t.fullname}}</h4>\n      <div class=\"row\">\n        <div class=\"col-md-4\"><label class=\"font-weight-bold\">Type</label>{{t.type}}</div>\n        <div class=\"col-md-4\"><label class=\"font-weight-bold\">CIN</label>{{t.cin}}</div>\n        <div class=\"col-md-4\"></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\"><label class=\"font-weight-bold\">Nbr. vehicules</label>{{t.nbrvehicules}}</div>\n      </div>\n      <!-- <div class=\"row\">\n        <div class=\"col-md-4\"><label class=\"font-weight-bold\">Carburant</label>{{t.carburant}}</div>\n      </div> -->\n      \n    </div>\n    <hr class=\"mb-4\">\n\n    <div class=\"row\" style=\"padding:20px\">\n    </div>\n\n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transporteur/transporteur.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/transporteur/transporteur.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 order-md-1 mb-4\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\">\r\n                <img src=\"assets/img/person.svg\" alt=\"\" width=\"25\" height=\"25\" style=\"margin-right:10px\">\r\n                <a href=\"#\" class=\"card-link\" [routerLink]=\"['.']\">Profile Transporteur</a>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <img src=\"assets/img/truck.svg\" alt=\"\" width=\"25\" height=\"25\" style=\"margin-right:10px\">\r\n                <a href=\"#\" class=\"card-link\" [routerLink]=\"['./vehicules']\">Vehicules</a>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <img src=\"assets/img/truck.svg\" alt=\"\" width=\"25\" height=\"25\" style=\"margin-right:10px\">\r\n                <a href=\"#\" class=\"card-link\" [routerLink]=\"['./enroute']\">Vehicules en route</a>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <h5>\r\n                  <img src=\"assets/img/map.svg\" alt=\"\" width=\"25\" height=\"25\" style=\"margin-right:10px\">\r\n                  <span class=\"badge badge-info\" (click)=\"nav(['/map'])\">Voayges</span>\r\n                </h5>\r\n              </li>\r\n              <li class=\"list-group-item\">\r\n                <img src=\"assets/img/code.svg\" alt=\"\" width=\"25\" height=\"25\" style=\"margin-right:10px\">\r\n                Preferences\r\n              </li>\r\n            </ul>\r\n            <div class=\"card-body\">\r\n              <a href=\"#\" class=\"card-link\">Vehicules</a>\r\n              <a href=\"#\" class=\"card-link\">Voyages</a>\r\n            </div>\r\n            <img class=\"card-img-top\" src=\"../../../assets/img/camion1.jpg\" style=\"width:200px;margin:auto\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n            </div>            \r\n            <img class=\"card-img-top\" src=\"../../../assets/img/camion2.jpg\"  style=\"width:200px;margin:auto\"> \r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n            </div>            \r\n            <img class=\"card-img-top\" src=\"../../../assets/img/camion3.jpg\"  style=\"width:200px;margin:auto\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">Card title</h5>\r\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n            </div>            \r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-8 order-md-2\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n\r\n    <footer class=\"my-5 pt-5 text-muted text-center text-small\">\r\n      <p class=\"mb-1\">&copy; 2020-2021 Trak Inc.</p>\r\n      <ul class=\"list-inline\">\r\n        <li class=\"list-inline-item\"><a href=\"#\">Privacy</a></li>\r\n        <li class=\"list-inline-item\"><a href=\"#\">Terms</a></li>\r\n        <li class=\"list-inline-item\"><a href=\"#\">Support</a></li>\r\n      </ul>\r\n    </footer>\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule-detail/vehicule-detail.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule-detail/vehicule-detail.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <h5 class=\"mb-3\">Formulaire vehicule</h5>\n    <form class=\"needs-validation\" novalidate>\n      <div class=\"row\">\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"fabricant\">Fabricant</label>\n          <input type=\"text\" [(ngModel)]=\"store.vehicule.fabricant\" name=\"prenom\" class=\"form-control\" id=\"fabricant\" placeholder=\"\" value=\"\" required>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"modele\">Modele</label>\n          <input type=\"text\" [(ngModel)]=\"store.vehicule.modele\" name=\"modele\" class=\"form-control\"  id=\"modele\" placeholder=\"\" value=\"\" required>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"type\">Type</label>\n          <select class=\"custom-select d-block w-100\" id=\"type\" required>\n            <option value=\"\">Choisir...</option>\n            <option>Type 1</option>\n            <option>Type 2</option>\n          </select>\n        </div>\n  \n    \n      </div>\n  \n      <div class=\"row\">\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"immatriculation\">Immatriculation</label>\n          <input type=\"text\" [(ngModel)]=\"store.vehicule.immatriculation\" name=\"immatriculation\" class=\"form-control\"  id=\"immatriculation\" placeholder=\"\" value=\"\" required>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"datemisecirculaion\">Date mise en circulation</label>\n          <input type=\"text\" class=\"form-control\" id=\"datemisecirculaion\" placeholder=\"1234 Main St\" required>\n        </div>\n      </div>\n  \n      <div class=\"row\">\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"ptac\">P. Tac <span class=\"text-muted\">(Optional)</span></label>\n          <input type=\"number\"  [(ngModel)]=\"store.vehicule.ptac\" name=\"email\" class=\"form-control\" id=\"ptac\" placeholder=\"P.Tac\">\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"vitesse\">P. Tac <span class=\"text-muted\">(Optional)</span></label>\n          <input type=\"text\"  [(ngModel)]=\"store.vehicule.vitesse\" name=\"email\" class=\"form-control\" id=\"vitesse\" placeholder=\"Vitesse\">\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"carburant\">Carburant<span class=\"text-muted\">(Optional)</span></label>\n          <input type=\"text\" class=\"form-control\" id=\"carburant\" placeholder=\"Carburant\">\n        </div>\n      </div>\n  \n      <hr class=\"mb-4\">\n      <div class=\"row\">\n        <div class=\"col-md-3 mb-3\"><button class=\"btn btn-outline-info\" (click)=\"upsertVehicule()\">Sauvegarder</button></div>\n        <div class=\"col-md-3 mb-3\"><button class=\"btn btn-outline-info\" (click)=\"deleteVehicule()\">Supprimer</button></div>\n        <div class=\"col-md-3 mb-3\"><button class=\"btn btn-outline-info\" (click)=\"changeView(1)\">Liste des vehicues</button></div>\n      </div>\n  \n      <hr class=\"mb-4\">\n    </form>\n    <app-image [vehiculeId]=\"store.vehicule.id\"></app-image>\n</div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule-list/vehicule-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule-list/vehicule-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngFor=\"let v of store.vehicules\">\n    <div class=\"col-md-3\">\n      <a href=\"#\">\n        <img class=\"img-fluid rounded mb-3 mb-md-0\" src=\"{{v.image?.data}}\" alt=\"\">\n      </a>\n    </div>\n    <div class=\"col-md-9\">\n      <span class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></span>\n      <h4>{{v.immatriculation}}</h4>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <label class=\"font-weight-bold\">Modele</label>\n          {{v.modele}}\n        </div>\n        <div class=\"col-md-4\">\n          <label class=\"font-weight-bold\">Fabricant</label>\n          {{v.fabricant}}\n        </div>\n        <div class=\"col-md-4\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <label class=\"font-weight-bold\">Carburant</label>\n          {{v.carburant}}\n        </div>\n        <div class=\"col-md-4\">\n          <label class=\"font-weight-bold\">Vitesse</label>\n          {{v.vitesse}}\n        </div>\n        <div class=\"col-md-4\">\n          <label class=\"font-weight-bold\">P. Tac</label>\n          {{v.ptac}}\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <label class=\"font-weight-bold\">Ville</label>\n          {{v.ville}}\n        </div>\n        <div class=\"col-md-4\">\n          <label class=\"font-weight-bold\">Actif</label>\n          {{v.isactive ? 'Oui' : 'Non'}}\n        </div>\n        <div class=\"col-md-4 text-right\">\n          <button type=\"button\" (click)=\"edit(v)\" class=\"btn btn-outline-info\">Editer</button>\n        </div>\n      </div>\n      \n    </div>\n    <hr class=\"mb-4\">\n\n    <div class=\"row\" style=\"padding:20px\">\n    </div>\n\n\n\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule-route/vehicule-route.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule-route/vehicule-route.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-5\">\n        <form class=\"form-inline\">\n            <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n            <input class=\"form-control form-control-sm ml-3 w-20\" type=\"text\" placeholder=\"Depart\" aria-label=\"Depart\">\n            <input class=\"form-control form-control-sm ml-3 w-20\" type=\"text\" placeholder=\"Destination\" aria-label=\"Destination\">\n        </form>\n        <div class=\"media text-muted pt-3\">\n            <svg height=\"100px\" width=\"50px\">\n            <ellipse cx=\"10\" cy=\"10\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\n            <line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"80\" style=\"fill:gray;stroke:deepskyblue;stroke-width:2\" />\n            <ellipse cx=\"10\" cy=\"80\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\n            </svg>\n            <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\n            <strong class=\"d-inline text-gray-dark\"><span></span>Rabat 11:30 AM</strong>\n            <span class=\"d-block text-gray\"></span>\n            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\n            <strong class=\"d-block text-gray-dark\">Casablanca 01:00 PM </strong>\n            </p>\n        </div>\n        <div class=\"media text-muted pt-3\">\n            <svg height=\"100px\" width=\"50px\">\n            <ellipse cx=\"10\" cy=\"10\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\n            <line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"80\" style=\"fill:gray;stroke:deepskyblue;stroke-width:2\" />\n            <ellipse cx=\"10\" cy=\"80\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\n            </svg>\n            <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\n            <strong class=\"d-inline text-gray-dark\"><span></span>Rabat 11:30 AM</strong>\n            <span class=\"d-block text-gray\"></span>\n            <span class=\"d-block text-gray\"></span>\n            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\n            <strong class=\"d-block text-gray-dark\">Casablanca 01:00 PM </strong>\n            </p>\n        </div>\n        <div class=\"media text-muted pt-3\">\n            <svg height=\"100px\" width=\"50px\">\n            <ellipse cx=\"10\" cy=\"10\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\n            <line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"80\" style=\"fill:gray;stroke:deepskyblue;stroke-width:2\" />\n            <ellipse cx=\"10\" cy=\"80\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\n            </svg>\n            <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\n            <strong class=\"d-inline text-gray-dark\"><span></span>Rabat 11:30 AM</strong>\n            <span class=\"d-block text-gray\"></span>\n            <span class=\"d-block text-gray\"></span>\n            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\n            <strong class=\"d-block text-gray-dark\">Casablanca 01:00 PM </strong>\n            </p>\n        </div>\n        <div class=\"media text-muted pt-3\">\n            <svg height=\"100px\" width=\"50px\">\n            <ellipse cx=\"10\" cy=\"10\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\n            <line x1=\"10\" y1=\"10\" x2=\"10\" y2=\"80\" style=\"fill:gray;stroke:deepskyblue;stroke-width:2\" />\n            <ellipse cx=\"10\" cy=\"80\" rx=\"2\" ry=\"2\" style=\"fill:black;stroke:black;stroke-width:2\" />\n            </svg>\n            <p class=\"media-body pb-3 mb-0 small lh-125 border-bottom border-gray\">\n            <strong class=\"d-inline text-gray-dark\"><span></span>Rabat 11:30 AM</strong>\n            <span class=\"d-block text-gray\"></span>\n            <span class=\"d-block text-gray\"></span>\n            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\n            <strong class=\"d-block text-gray-dark\">Casablanca 01:00 PM </strong>\n            </p>\n        </div>\n        <small class=\"d-block text-right mt-3\">\n            <a href=\"#\">All updates</a>\n        </small>\n    </div>\n    <div class=\"col-7\">\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n            <agm-marker *ngFor=\"let loc of locations\" [latitude]=\"loc.lat\" [longitude]=\"loc.lng\"></agm-marker>\n        </agm-map>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule/vehicule.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule/vehicule.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" *ngIf=\"view == 1\">\n  <div class=\"row\">\n      <!-- <div style=\"width: 840px; height: 200px; text-align:center;margin:0; padding:0;\">\n          <ng-image-slider #nav\n          [images]=\"imageObject\"\n          [infinite]=\"false\"\n          [autoSlide]=\"1\"\n          [imageSize]=\"{width: '25%', height: 200}\"\n          slideImage=\"1\"></ng-image-slider>\n      </div> -->\n  </div>\n  <div class=\"row\" style=\"margin-bottom: 10px\">\n    <div class=\"col-md-1\"><img src=\"assets/img/shop.svg\" alt=\"\" width=\"32\" height=\"32\"></div>\n    <div class=\"col-md-1\"><img src=\"assets/img/archive.svg\" alt=\"\" width=\"32\" height=\"32\"></div>\n    <div class=\"col-md-1\"><img src=\"assets/img/arrow-left-square.svg\" alt=\"\" width=\"32\" height=\"32\"></div>\n    <div class=\"col-md-1\"><img src=\"assets/img/type.svg\" alt=\"\" width=\"32\" height=\"32\"></div>\n    <div class=\"col-md-1\"><img src=\"assets/img/truck.svg\" alt=\"\" width=\"32\" height=\"32\"></div>\n    <div class=\"col-md-1\"><img src=\"assets/img/upc.svg\" alt=\"\" width=\"32\" height=\"32\"></div>\n    <div class=\"col-md-1\"><img src=\"assets/img/truck-flatbed.svg\" alt=\"\" width=\"32\" height=\"32\"></div>\n    <div class=\"col-md-1\"><img src=\"assets/img/dice-1.svg\" alt=\"\" width=\"32\" height=\"32\"></div>\n    <div class=\"col-md-1\"><img src=\"assets/img/dice-2.svg\" alt=\"\" width=\"32\" height=\"32\"></div>\n  </div>\n  <div class=\"row text-right\">\n    <div class=\"col-6\">\n      <h4 class=\"mb-3 text-left\">Vehicules</h4>\n    </div>\n    <div class=\"col-6\">\n      <button type=\"button\" class=\"btn btn-info\">Ajouter un vehicule</button>\n    </div>\n  </div>\n\n  <routers-outlet></routers-outlet>\n\n  <div class=\"row\">\n    <div class=\"col-md-3 mb-3\"><button class=\"btn btn-outline-info\" (click)=\"addVehicule()\">Ajouter un vehicule</button></div>\n  </div>\n\n</div>\n\n\n\n\n\n\n\n");

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
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_report_sample_report_sample_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/report-sample/report-sample.component */ "./src/app/components/report-sample/report-sample.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/inscription/inscription.component */ "./src/app/components/inscription/inscription.component.ts");
/* harmony import */ var _components_transporteur_transporteur_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/transporteur/transporteur.component */ "./src/app/components/transporteur/transporteur.component.ts");
/* harmony import */ var _components_vehicule_detail_vehicule_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/vehicule-detail/vehicule-detail.component */ "./src/app/components/vehicule-detail/vehicule-detail.component.ts");
/* harmony import */ var _components_vehicule_list_vehicule_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/vehicule-list/vehicule-list.component */ "./src/app/components/vehicule-list/vehicule-list.component.ts");
/* harmony import */ var _components_transporteur_detail_transporteur_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/transporteur-detail/transporteur-detail.component */ "./src/app/components/transporteur-detail/transporteur-detail.component.ts");
/* harmony import */ var _components_transporteur_list_transporteur_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/transporteur-list/transporteur-list.component */ "./src/app/components/transporteur-list/transporteur-list.component.ts");
/* harmony import */ var _components_image_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/image/image.component */ "./src/app/components/image/image.component.ts");
/* harmony import */ var _components_vehicule_route_vehicule_route_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/vehicule-route/vehicule-route.component */ "./src/app/components/vehicule-route/vehicule-route.component.ts");














const routes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
    { path: 'map', component: _components_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MySmallMapComponent"] },
    { path: 'inscription', component: _components_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_6__["InscriptionComponent"] },
    { path: 'report', component: _components_report_sample_report_sample_component__WEBPACK_IMPORTED_MODULE_4__["ReportSampleComponent"] },
    { path: 'image', component: _components_image_image_component__WEBPACK_IMPORTED_MODULE_12__["ImageComponent"] },
    { path: 'transporteurs', component: _components_transporteur_list_transporteur_list_component__WEBPACK_IMPORTED_MODULE_11__["TransporteurListComponent"] },
    { path: 'vehicule', component: _components_vehicule_detail_vehicule_detail_component__WEBPACK_IMPORTED_MODULE_8__["VehiculeDetailComponent"] },
    { path: 'transporteur/:id',
        component: _components_transporteur_transporteur_component__WEBPACK_IMPORTED_MODULE_7__["TransporteurComponent"],
        children: [
            { path: '', component: _components_transporteur_detail_transporteur_detail_component__WEBPACK_IMPORTED_MODULE_10__["TransporteurDetailComponent"] },
            { path: 'enroute', component: _components_vehicule_route_vehicule_route_component__WEBPACK_IMPORTED_MODULE_13__["VehiculeRouteComponent"] },
            { path: 'vehicules', component: _components_vehicule_list_vehicule_list_component__WEBPACK_IMPORTED_MODULE_9__["VehiculeListComponent"] },
            { path: 'vehicule',
                component: _components_vehicule_detail_vehicule_detail_component__WEBPACK_IMPORTED_MODULE_8__["VehiculeDetailComponent"],
                children: [
                    { path: 'detail', component: _components_vehicule_detail_vehicule_detail_component__WEBPACK_IMPORTED_MODULE_8__["VehiculeDetailComponent"] }
                ]
            },
            { path: 'voyages', component: _components_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MySmallMapComponent"] },
        ]
    }
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
/* harmony default export */ __webpack_exports__["default"] = ("input, select { height: 25px; background:whitesmoke; font-size: 14px; padding:2px}\r\nbutton { height: 25px; font-size:14px; padding:2px; margin:2px; margin:2px 2px 2px 4px}\r\nbody {margin:0;}\r\nbody {\r\n  font-family: \"Lato\", sans-serif;\r\n  font-size:14px;\r\n}\r\n.sidenav {\r\n  height: 100%;\r\n  width: 160px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 45px;\r\n  left: 0;\r\n  background-color: whitesmoke;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n  border-right: solid 5px black;\r\n}\r\n.sidenav a {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  font-size: 15px;\r\n  color: #818181;\r\n  display: block;\r\n}\r\n.sidenav a:hover {\r\n  color: #f1f1f1;\r\n}\r\n.main {\r\n    margin: 100px 30px 0px 30px;\r\n    /* margin-left: 50px; */\r\n    /* padding: 10px; */\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsV0FBVztBQUNqRixTQUFTLFlBQVksRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxzQkFBc0I7QUFDdEYsTUFBTSxRQUFRLENBQUM7QUFFZjtFQUNFLCtCQUErQjtFQUMvQixjQUFjO0FBQ2hCO0FBR0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULE9BQU87RUFDUCw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQsIHNlbGVjdCB7IGhlaWdodDogMjVweDsgYmFja2dyb3VuZDp3aGl0ZXNtb2tlOyBmb250LXNpemU6IDE0cHg7IHBhZGRpbmc6MnB4fVxyXG5idXR0b24geyBoZWlnaHQ6IDI1cHg7IGZvbnQtc2l6ZToxNHB4OyBwYWRkaW5nOjJweDsgbWFyZ2luOjJweDsgbWFyZ2luOjJweCAycHggMnB4IDRweH1cclxuYm9keSB7bWFyZ2luOjA7fVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcblxyXG5cclxuLnNpZGVuYXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiA0NXB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCA1cHggYmxhY2s7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGEge1xyXG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzgxODE4MTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAgIG1hcmdpbjogMTAwcHggMzBweCAwcHggMzBweDtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiA1MHB4OyAqL1xyXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cclxufVxyXG5cclxuIl19 */");

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
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_report_sample_report_sample_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/report-sample/report-sample.component */ "./src/app/components/report-sample/report-sample.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/inscription/inscription.component */ "./src/app/components/inscription/inscription.component.ts");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_transporteur_transporteur_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/transporteur/transporteur.component */ "./src/app/components/transporteur/transporteur.component.ts");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-image-slider */ "./node_modules/ng-image-slider/__ivy_ngcc__/fesm2015/ng-image-slider.js");
/* harmony import */ var _components_vehicule_vehicule_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/vehicule/vehicule.component */ "./src/app/components/vehicule/vehicule.component.ts");
/* harmony import */ var _components_transporteur_detail_transporteur_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/transporteur-detail/transporteur-detail.component */ "./src/app/components/transporteur-detail/transporteur-detail.component.ts");
/* harmony import */ var _components_image_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/image/image.component */ "./src/app/components/image/image.component.ts");
/* harmony import */ var _components_transporteur_list_transporteur_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/transporteur-list/transporteur-list.component */ "./src/app/components/transporteur-list/transporteur-list.component.ts");
/* harmony import */ var _components_vehicule_detail_vehicule_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/vehicule-detail/vehicule-detail.component */ "./src/app/components/vehicule-detail/vehicule-detail.component.ts");
/* harmony import */ var _components_vehicule_list_vehicule_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/vehicule-list/vehicule-list.component */ "./src/app/components/vehicule-list/vehicule-list.component.ts");
/* harmony import */ var _components_vehicule_route_vehicule_route_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/vehicule-route/vehicule-route.component */ "./src/app/components/vehicule-route/vehicule-route.component.ts");






// import { HttpClientModule } from '@angular/common/http';
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__["MySmallMapComponent"],
            _components_report_sample_report_sample_component__WEBPACK_IMPORTED_MODULE_8__["ReportSampleComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
            _components_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_10__["InscriptionComponent"],
            _components_transporteur_transporteur_component__WEBPACK_IMPORTED_MODULE_13__["TransporteurComponent"],
            _components_vehicule_vehicule_component__WEBPACK_IMPORTED_MODULE_15__["VehiculeComponent"],
            _components_transporteur_detail_transporteur_detail_component__WEBPACK_IMPORTED_MODULE_16__["TransporteurDetailComponent"],
            _components_image_image_component__WEBPACK_IMPORTED_MODULE_17__["ImageComponent"],
            _components_transporteur_list_transporteur_list_component__WEBPACK_IMPORTED_MODULE_18__["TransporteurListComponent"],
            _components_vehicule_detail_vehicule_detail_component__WEBPACK_IMPORTED_MODULE_19__["VehiculeDetailComponent"],
            _components_vehicule_list_vehicule_list_component__WEBPACK_IMPORTED_MODULE_20__["VehiculeListComponent"],
            _components_vehicule_route_vehicule_route_component__WEBPACK_IMPORTED_MODULE_21__["VehiculeRouteComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_14__["NgImageSliderModule"],
            // ChartsModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCDTdtGD64ASXwhuGE8Nc2slGNJ-q2B0w4'
            }), _graphql_module__WEBPACK_IMPORTED_MODULE_11__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/image/image.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/image/image.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button { font-size: 12px; line-height: 10px; height: 25px}\r\ninput, select { height: 25px; background:whitesmoke; font-size: 14px; padding:2px}\r\nbutton { height: 25px; font-size:14px; padding:2px; margin:2px; margin:2px 2px 2px 4px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS9pbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsZUFBZSxFQUFFLGlCQUFpQixFQUFFLFlBQVk7QUFDekQsZ0JBQWdCLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsV0FBVztBQUNqRixTQUFTLFlBQVksRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxzQkFBc0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24geyBmb250LXNpemU6IDEycHg7IGxpbmUtaGVpZ2h0OiAxMHB4OyBoZWlnaHQ6IDI1cHh9XHJcbmlucHV0LCBzZWxlY3QgeyBoZWlnaHQ6IDI1cHg7IGJhY2tncm91bmQ6d2hpdGVzbW9rZTsgZm9udC1zaXplOiAxNHB4OyBwYWRkaW5nOjJweH1cclxuYnV0dG9uIHsgaGVpZ2h0OiAyNXB4OyBmb250LXNpemU6MTRweDsgcGFkZGluZzoycHg7IG1hcmdpbjoycHg7IG1hcmdpbjoycHggMnB4IDJweCA0cHh9Il19 */");

/***/ }),

/***/ "./src/app/components/image/image.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/image/image.component.ts ***!
  \*****************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/queries */ "./src/app/graphql/queries.ts");
/* harmony import */ var _models_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/image */ "./src/app/models/image.ts");
/* harmony import */ var _models_vehicule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/vehicule */ "./src/app/models/vehicule.ts");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/transporteur-store.service */ "./src/app/services/transporteur-store.service.ts");







let ImageComponent = class ImageComponent {
    constructor(apollo, store) {
        this.imageSrc = '';
        this.apollo = apollo;
        this.store = store;
    }
    get vehiculeId() {
        return this._vehiculeId;
    }
    set vehiculeId(val) {
        this._vehiculeId = val;
    }
    handleInputChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        this.imageSrc = reader.result;
        console.log(this.imageSrc);
        this.createImage(this.imageSrc);
    }
    deleteImage(image) {
        this.apollo.mutate({ mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["DeleteImageQuery"], variables: { id: image.id } }).subscribe(a => {
            console.log('image deleted');
            console.log(a);
            let idx = this.images.indexOf(image);
            console.log(`index of image found is ${idx}`);
            this.images.splice(idx, 1);
        });
    }
    createImage(data) {
        console.log('creating vehicule...');
        let image = new _models_image__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        image.id = 0;
        image.data = data;
        image.vehicule = new _models_vehicule__WEBPACK_IMPORTED_MODULE_4__["Vehicule"]();
        image.vehicule.id = 5;
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["CreateImageQuery"],
            variables: { imageInput: image }
        }).subscribe((a) => {
            console.log(a);
            let i = a['data']['createImage'];
            console.log(i);
            this.images.push(i);
            console.log('vehicule created');
        });
    }
    getImages() {
        this.apollo.watchQuery({ query: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["GetImagesQuery"] }).valueChanges.subscribe(res => {
            console.log(res);
            this.images = res['data']['getImages'];
        });
    }
    setImagePricipale(image) {
        console.log(`vehicule id: ${this.vehiculeId}`);
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["SetImagePrincipaleQuery"],
            variables: { vehiculeId: this._vehiculeId, imageId: image.id }
        }).subscribe(() => {
            console.log('set image principale: success');
        });
    }
    ngOnInit() {
        this.getImages();
    }
};
ImageComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"] },
    { type: src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_6__["TransporteurStoreService"] }
];
ImageComponent.propDecorators = {
    vehiculeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image/image.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./image.component.css */ "./src/app/components/image/image.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"], src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_6__["TransporteurStoreService"]])
], ImageComponent);



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
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"]])
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
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
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
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
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
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
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
/* harmony import */ var src_app_models_transporteur__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/transporteur */ "./src/app/models/transporteur.ts");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var _services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/transporteur-store.service */ "./src/app/services/transporteur-store.service.ts");
/* harmony import */ var src_app_graphql_queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/graphql/queries */ "./src/app/graphql/queries.ts");






let TransporteurDetailComponent = class TransporteurDetailComponent {
    constructor(apollo, store) {
        this.apollo = apollo;
        this.store = store;
    }
    upsertTransporteur() {
        delete this.store.transporteur['__typename']; // avoid a problem, will find a better solution
        if (!this.store.transporteur.id) {
            console.log('creating transporteur...');
            this.apollo.mutate({
                mutation: src_app_graphql_queries__WEBPACK_IMPORTED_MODULE_5__["CreateTransporteurQuery"],
                variables: { transporteurInput: this.store.transporteur }
            }).subscribe(res => {
                let v = res['data']['createTransporteur'];
                console.log('transporteur created');
                console.log(v);
                this.store.transporteur = v;
                this.store.transporteurs.push(v);
            });
        }
        else {
            this.apollo.mutate({
                mutation: src_app_graphql_queries__WEBPACK_IMPORTED_MODULE_5__["UpdateTransporteurQuery"],
                variables: { transporteurInput: this.store.transporteur }
            }).subscribe(u => {
                console.log(u);
            });
        }
    }
    deleteTransporteur() {
        let id = this.store.transporteur.id;
        if (!this.store.transporteur.id) {
            alert('select transporteur');
            return;
        }
        this.apollo.mutate({
            mutation: src_app_graphql_queries__WEBPACK_IMPORTED_MODULE_5__["DeleteTransporteurQuery"],
            variables: { id: this.store.transporteur.id }
        }).subscribe(u => {
            let idx = this.store.transporteurs.findIndex(x => x.id == id);
            this.store.transporteurs.splice(idx + 1, 1);
            if (this.store.transporteurs.length > 0)
                this.store.transporteur = this.store.transporteurs[0];
            console.log(u);
        });
    }
    edit(v) {
        this.store.view = 2;
        this.store.transporteur = v;
    }
    addTransporteur() {
        this.store.transporteur = new src_app_models_transporteur__WEBPACK_IMPORTED_MODULE_2__["Transporteur"]();
        this.store.view = 2;
    }
    ngOnInit() {
    }
};
TransporteurDetailComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"] },
    { type: _services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_4__["TransporteurStoreService"] }
];
TransporteurDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transporteur-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transporteur-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transporteur-detail/transporteur-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transporteur-detail.component.css */ "./src/app/components/transporteur-detail/transporteur-detail.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"], _services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_4__["TransporteurStoreService"]])
], TransporteurDetailComponent);



/***/ }),

/***/ "./src/app/components/transporteur-list/transporteur-list.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/transporteur-list/transporteur-list.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhbnNwb3J0ZXVyLWxpc3QvdHJhbnNwb3J0ZXVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/transporteur-list/transporteur-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/transporteur-list/transporteur-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TransporteurListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransporteurListComponent", function() { return TransporteurListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/queries */ "./src/app/graphql/queries.ts");
/* harmony import */ var _models_transporteur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/transporteur */ "./src/app/models/transporteur.ts");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/transporteur-store.service */ "./src/app/services/transporteur-store.service.ts");







let TransporteurListComponent = class TransporteurListComponent {
    constructor(apollo, router, store) {
        this.view = 1;
        this.transporteurs = [];
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
        this.router = router;
        this.store = store;
    }
    createTransporteur() {
        console.log('creating transporteur...');
        delete this.store.transporteur['__typename']; // avoid a problem, will find a better solution
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["CreateTransporteurQuery"],
            variables: { transporteurInput: this.store.transporteur }
        }).subscribe(a => {
            console.log('transporteur created');
        });
    }
    updateTransporteur() {
        this.view = 1;
        delete this.store.transporteur['__typename']; // see create transporteur
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["UpdateTransporteurQuery"],
            variables: { transporteurInput: this.store.transporteur }
        }).subscribe(u => {
            console.log(u);
        });
    }
    changeView(id) {
        this.view = id;
    }
    upsertTransporteur() {
        delete this.store.transporteur['__typename']; // avoid a problem, will find a better solution
        if (!this.store.transporteur.id) {
            console.log('creating transporteur...');
            this.apollo.mutate({
                mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["CreateTransporteurQuery"],
                variables: { transporteurInput: this.store.transporteur }
            }).subscribe(res => {
                let v = res['data']['createTransporteur'];
                console.log('transporteur created');
                console.log(v);
                this.store.transporteur = v;
                this.store.transporteurs.push(v);
            });
        }
        else {
            this.apollo.mutate({
                mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["UpdateTransporteurQuery"],
                variables: { transporteurInput: this.store.transporteur }
            }).subscribe(u => {
                console.log(u);
            });
        }
    }
    deleteTransporteur() {
        let id = this.store.transporteur.id;
        if (!this.store.transporteur.id) {
            alert('select transporteur');
            return;
        }
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["DeleteTransporteurQuery"],
            variables: { id: this.store.transporteur.id }
        }).subscribe(u => {
            let idx = this.store.transporteurs.findIndex(x => x.id == id);
            this.store.transporteurs.splice(idx + 1, 1);
            if (this.store.transporteurs.length > 0)
                this.store.transporteur = this.store.transporteurs[0];
            console.log(u);
        });
    }
    edit(v) {
        this.view = 2;
        this.store.transporteur = v;
    }
    addTransporteur() {
        this.store.transporteur = new _models_transporteur__WEBPACK_IMPORTED_MODULE_3__["Transporteur"]();
        this.view = 2;
    }
    navToTransporteur(t) {
        console.log('navigating to transporteurs');
        this.router.navigate(['transporteur', t.id]);
    }
    ngOnInit() {
        this.store.transporteur = new _models_transporteur__WEBPACK_IMPORTED_MODULE_3__["Transporteur"]();
        this.apollo.watchQuery({ query: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["GetTransporteursQuery"] }).valueChanges.subscribe(({ data }) => {
            this.store.transporteurs = data['getTransporteurs'];
            console.log('got transporteurs');
            console.log(this.store.transporteurs);
        });
    }
};
TransporteurListComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_6__["TransporteurStoreService"] }
];
TransporteurListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transporteur-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transporteur-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transporteur-list/transporteur-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transporteur-list.component.css */ "./src/app/components/transporteur-list/transporteur-list.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_6__["TransporteurStoreService"]])
], TransporteurListComponent);



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/queries */ "./src/app/graphql/queries.ts");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var _services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/transporteur-store.service */ "./src/app/services/transporteur-store.service.ts");






// import { User } from '../../models/user'
let TransporteurComponent = class TransporteurComponent {
    constructor(apollo, route, router, store) {
        this.route = route;
        this.apollo = apollo;
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sub = this.route.params.subscribe(params => {
                this.id = parseInt(params['id']);
                console.log(`id transporteur: ${this.id}`);
                this.apollo.watchQuery({
                    query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__["GetTransporteurQuery"],
                    variables: { id: this.id }
                }).valueChanges.subscribe(t => {
                    console.log('got transporteur, this is the data:');
                    this.store.transporteur = t['data']['getTransporteur'];
                    console.log(this.transporteur);
                });
            });
        });
    }
    nav(page) {
        this.router.navigate([page]);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
TransporteurComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_5__["TransporteurStoreService"] }
];
TransporteurComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transporteur',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transporteur.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/transporteur/transporteur.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transporteur.component.css */ "./src/app/components/transporteur/transporteur.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_5__["TransporteurStoreService"]])
], TransporteurComponent);



/***/ }),

/***/ "./src/app/components/vehicule-detail/vehicule-detail.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/vehicule-detail/vehicule-detail.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input, select { height: 25px; background:whitesmoke; font-size: 14px; padding:2px}\r\nbutton { height: 25px; font-size:14px; padding:2px; margin:2px; margin:2px 2px 2px 4px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZWhpY3VsZS1kZXRhaWwvdmVoaWN1bGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsV0FBVztBQUNqRixTQUFTLFlBQVksRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxzQkFBc0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZlaGljdWxlLWRldGFpbC92ZWhpY3VsZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LCBzZWxlY3QgeyBoZWlnaHQ6IDI1cHg7IGJhY2tncm91bmQ6d2hpdGVzbW9rZTsgZm9udC1zaXplOiAxNHB4OyBwYWRkaW5nOjJweH1cclxuYnV0dG9uIHsgaGVpZ2h0OiAyNXB4OyBmb250LXNpemU6MTRweDsgcGFkZGluZzoycHg7IG1hcmdpbjoycHg7IG1hcmdpbjoycHggMnB4IDJweCA0cHh9Il19 */");

/***/ }),

/***/ "./src/app/components/vehicule-detail/vehicule-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/vehicule-detail/vehicule-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: VehiculeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculeDetailComponent", function() { return VehiculeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/queries */ "./src/app/graphql/queries.ts");
/* harmony import */ var _models_vehicule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/vehicule */ "./src/app/models/vehicule.ts");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/transporteur-store.service */ "./src/app/services/transporteur-store.service.ts");






let VehiculeDetailComponent = class VehiculeDetailComponent {
    constructor(apollo, store) {
        this.view = 1;
        this.apollo = apollo;
        this.store = store;
    }
    createVehicule() {
        console.log('creating vehicule...');
        delete this.store.vehicule['__typename']; // avoid a problem, will find a better solution
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["CreateVehiculeQuery"],
            variables: { vehiculeInput: this.store.vehicule }
        }).subscribe(a => {
            console.log('vehicule created');
        });
    }
    updateVehicule() {
        delete this.store.vehicule['__typename']; // see create vehicule
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["UpdateVehiculeQuery"],
            variables: { vehiculeInput: this.store.vehicule }
        }).subscribe(u => {
            console.log(u);
        });
    }
    upsertVehicule() {
        delete this.store.vehicule['__typename']; // avoid a problem, will find a better solution
        delete this.store.vehicule.image['__typename']; // avoid a problem, will find a better solution
        if (!this.store.vehicule.id) {
            console.log('creating vehicule...');
            this.apollo.mutate({
                mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["CreateVehiculeQuery"],
                variables: { vehiculeInput: this.store.vehicule }
            }).subscribe(res => {
                let v = res['data']['createVehicule'];
                console.log('vehicule created');
                console.log(v);
                this.store.vehicule = v;
                this.store.vehicules.push(v);
            });
        }
        else {
            console.log('updating vehicule...');
            this.apollo.mutate({
                mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["UpdateVehiculeQuery"],
                variables: { vehiculeInput: this.store.vehicule }
            }).subscribe(u => {
                console.log(u);
            });
        }
    }
    deleteVehicule() {
        let id = this.store.vehicule.id;
        if (!this.store.vehicule.id) {
            alert('select vehicule');
            return;
        }
        this.apollo.mutate({
            mutation: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["DeleteVehiculeQuery"],
            variables: { id: this.store.vehicule.id }
        }).subscribe(u => {
            let idx = this.store.vehicules.findIndex(x => x.id == id);
            this.store.vehicules.splice(idx + 1, 1);
            if (this.store.vehicules.length > 0)
                this.store.vehicule = this.store.vehicules[0];
            console.log(u);
        });
    }
    edit(v) {
        // this.view = 2;
        this.store.vehicule = v;
    }
    addVehicule() {
        this.store.vehicule = new _models_vehicule__WEBPACK_IMPORTED_MODULE_3__["Vehicule"]();
    }
    ngOnInit() {
    }
};
VehiculeDetailComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] },
    { type: src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_5__["TransporteurStoreService"] }
];
VehiculeDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicule-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vehicule-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule-detail/vehicule-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vehicule-detail.component.css */ "./src/app/components/vehicule-detail/vehicule-detail.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"], src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_5__["TransporteurStoreService"]])
], VehiculeDetailComponent);



/***/ }),

/***/ "./src/app/components/vehicule-list/vehicule-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/vehicule-list/vehicule-list.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVoaWN1bGUtbGlzdC92ZWhpY3VsZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/vehicule-list/vehicule-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/vehicule-list/vehicule-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: VehiculeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculeListComponent", function() { return VehiculeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/queries */ "./src/app/graphql/queries.ts");
/* harmony import */ var _models_vehicule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/vehicule */ "./src/app/models/vehicule.ts");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
/* harmony import */ var src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/transporteur-store.service */ "./src/app/services/transporteur-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let VehiculeListComponent = class VehiculeListComponent {
    constructor(apollo, router, route, store) {
        this.apollo = apollo;
        this.store = store;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.store.vehicule = new _models_vehicule__WEBPACK_IMPORTED_MODULE_3__["Vehicule"]();
        this.apollo.watchQuery({
            query: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["GetVehiculesQuery"],
            variables: { transporteurId: this.store.transporteur.id }
        }).valueChanges.subscribe(({ data }) => {
            this.store.vehicules = data['getVehicules'];
            console.log('goooot vehicules');
            console.log(this.store.vehicules);
        });
    }
    edit(v) {
        this.store.vehicule = v;
        this.router.navigate(['transporteur/' + this.store.transporteur.id, 'vehicule']);
    }
    nav(page) {
        this.router.navigate([page]);
    }
};
VehiculeListComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_5__["TransporteurStoreService"] }
];
VehiculeListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicule-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vehicule-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule-list/vehicule-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vehicule-list.component.css */ "./src/app/components/vehicule-list/vehicule-list.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_5__["TransporteurStoreService"]])
], VehiculeListComponent);



/***/ }),

/***/ "./src/app/components/vehicule-route/vehicule-route.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/vehicule-route/vehicule-route.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVoaWN1bGUtcm91dGUvdmVoaWN1bGUtcm91dGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/vehicule-route/vehicule-route.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/vehicule-route/vehicule-route.component.ts ***!
  \***********************************************************************/
/*! exports provided: VehiculeRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculeRouteComponent", function() { return VehiculeRouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let VehiculeRouteComponent = class VehiculeRouteComponent {
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
VehiculeRouteComponent.ctorParameters = () => [];
VehiculeRouteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicule-route',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vehicule-route.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule-route/vehicule-route.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vehicule-route.component.css */ "./src/app/components/vehicule-route/vehicule-route.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], VehiculeRouteComponent);



/***/ }),

/***/ "./src/app/components/vehicule/vehicule.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/vehicule/vehicule.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button { font-size: 12px; line-height: 10px; height: 25px}\r\ninput, select { height: 25px; background:whitesmoke; font-size: 14px; padding:2px}\r\nbutton { height: 25px; font-size:14px; padding:2px; margin:2px; margin:2px 2px 2px 4px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZWhpY3VsZS92ZWhpY3VsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsZUFBZSxFQUFFLGlCQUFpQixFQUFFLFlBQVk7QUFDekQsZ0JBQWdCLFlBQVksRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsV0FBVztBQUNqRixTQUFTLFlBQVksRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxzQkFBc0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZlaGljdWxlL3ZlaGljdWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24geyBmb250LXNpemU6IDEycHg7IGxpbmUtaGVpZ2h0OiAxMHB4OyBoZWlnaHQ6IDI1cHh9XHJcbmlucHV0LCBzZWxlY3QgeyBoZWlnaHQ6IDI1cHg7IGJhY2tncm91bmQ6d2hpdGVzbW9rZTsgZm9udC1zaXplOiAxNHB4OyBwYWRkaW5nOjJweH1cclxuYnV0dG9uIHsgaGVpZ2h0OiAyNXB4OyBmb250LXNpemU6MTRweDsgcGFkZGluZzoycHg7IG1hcmdpbjoycHg7IG1hcmdpbjoycHggMnB4IDJweCA0cHh9Il19 */");

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
/* harmony import */ var src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/transporteur-store.service */ "./src/app/services/transporteur-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let VehiculeComponent = class VehiculeComponent {
    constructor(apollo, router, store) {
        this.apollo = apollo;
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        this.store.vehicule = new _models_vehicule__WEBPACK_IMPORTED_MODULE_3__["Vehicule"]();
        this.apollo.watchQuery({
            query: _graphql_queries__WEBPACK_IMPORTED_MODULE_2__["GetVehiculesQuery"],
            variables: { transporteurId: this.store.transporteur.id }
        }).valueChanges.subscribe(({ data }) => {
            this.store.vehicules = data['getVehicules'];
            console.log('goooot vehicules');
            console.log(this.store.vehicules);
        });
    }
};
VehiculeComponent.ctorParameters = () => [
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_5__["TransporteurStoreService"] }
];
VehiculeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicule',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vehicule.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicule/vehicule.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vehicule.component.css */ "./src/app/components/vehicule/vehicule.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_transporteur_store_service__WEBPACK_IMPORTED_MODULE_5__["TransporteurStoreService"]])
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
/*! exports provided: GetUsersQuery, CreateUserQuery, UpdateUserQuery, DeleteUserQuery, GetTransporteursQuery, GetTransporteurQuery, CreateTransporteurQuery, UpdateTransporteurQuery, DeleteTransporteurQuery, GetVehiculesQuery, CreateVehiculeQuery, UpdateVehiculeQuery, DeleteVehiculeQuery, GetImagesQuery, CreateImageQuery, DeleteImageQuery, SetImagePrincipaleQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsersQuery", function() { return GetUsersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserQuery", function() { return CreateUserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserQuery", function() { return UpdateUserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserQuery", function() { return DeleteUserQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTransporteursQuery", function() { return GetTransporteursQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTransporteurQuery", function() { return GetTransporteurQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTransporteurQuery", function() { return CreateTransporteurQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTransporteurQuery", function() { return UpdateTransporteurQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTransporteurQuery", function() { return DeleteTransporteurQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVehiculesQuery", function() { return GetVehiculesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVehiculeQuery", function() { return CreateVehiculeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVehiculeQuery", function() { return UpdateVehiculeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteVehiculeQuery", function() { return DeleteVehiculeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetImagesQuery", function() { return GetImagesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateImageQuery", function() { return CreateImageQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteImageQuery", function() { return DeleteImageQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetImagePrincipaleQuery", function() { return SetImagePrincipaleQuery; });
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
// Transpoteur ----------------------------------------
const GetTransporteursQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
query GetTransporteurs {
  getTransporteurs {
    id
    type
    prenom
    nom
    cin
    nbrvehicules
    nbrvoyages
    cote
  
  }
}
`;
const GetTransporteurQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
query GetTransporteur($id: Int!) {
  getTransporteur(id: $id) {
    id
    type
    prenom
    nom
    cin
    nbrvehicules
    nbrvoyages
    cote
  
  }
}
`;
const CreateTransporteurQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
mutation createTransporteur($transporteurInput: TransporteurInput!) {
  createTransporteur(transporteurInput: $transporteurInput) {
    type
    nom
    prenom
   	cin
   	permis
   	isactive
    nbrvehicules
    nbrvoyages
    cote
    dateinscription
    dateexpirationpermis
  }
}
`;
const UpdateTransporteurQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
mutation updateTransporteur($transporteurInput: TransporteurInput!) {
  updateTransporteur(transporteurInput: $transporteurInput) {
    id
    type
    prenom
    nom
    cin
    nbrvehicules
    nbrvoyages
    cote
  }
}
`;
const DeleteTransporteurQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
mutation deleteTransporteur($id: Int!) {
  deleteTransporteur(id: $id) {
    id
  }
}
`;
// Vehicule -----------------------------
const GetVehiculesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
query GetVehicules($transporteurId: Int!) {
  getVehicules(transporteurId: $transporteurId) {
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
    image {
      id
      data
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
const GetImagesQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
  query GetImages {
    getImages {
      id
      data
    }
  }
`;
const CreateImageQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
mutation createImage($imageInput: ImageInput!) {
  createImage(imageInput: $imageInput) {
    id
    data
    vehicule {
      id
    }
  }
}
`;
const DeleteImageQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
mutation deleteImage($id: Int!) {
  deleteImage(id: $id) {
    id
  }
}
`;
const SetImagePrincipaleQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
mutation setImagePrincipale($vehiculeId: Int!, $imageId: Int!) {
  setImagePrincipale(vehiculeId: $vehiculeId, imageId: $imageId)
}
`;


/***/ }),

/***/ "./src/app/models/image.ts":
/*!*********************************!*\
  !*** ./src/app/models/image.ts ***!
  \*********************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
class Image {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/models/transporteur.ts":
/*!****************************************!*\
  !*** ./src/app/models/transporteur.ts ***!
  \****************************************/
/*! exports provided: Transporteur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transporteur", function() { return Transporteur; });
class Transporteur {
    fullname() {
        if (this.prenom || this.nom)
            return `${this.prenom} ${this.nom}`;
        else
            return 'Société';
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

/***/ "./src/app/services/transporteur-store.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/transporteur-store.service.ts ***!
  \********************************************************/
/*! exports provided: TransporteurStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransporteurStoreService", function() { return TransporteurStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_transporteur__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/transporteur */ "./src/app/models/transporteur.ts");
/* harmony import */ var _models_vehicule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/vehicule */ "./src/app/models/vehicule.ts");






let TransporteurStoreService = class TransporteurStoreService {
    constructor() {
        this._trans = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _models_transporteur__WEBPACK_IMPORTED_MODULE_4__["Transporteur"]());
        this.trans$ = this._trans.asObservable();
        this._transs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.transs$ = this._trans.asObservable();
        this._view = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
        this.view$ = this._view.asObservable();
        this._vehicule = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _models_vehicule__WEBPACK_IMPORTED_MODULE_5__["Vehicule"]());
        this.vehicule$ = this._vehicule.asObservable();
        this._vehicules = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.vehicules$ = this._vehicules.asObservable();
        // we'll compose the todos$ observable with map operator to create a stream of only completed todos
        this.completedTodos$ = this.vehicules$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(todos => todos.filter(todo => todo.isactive)));
    }
    get transporteur() {
        return this._trans.getValue();
    }
    set transporteur(val) {
        this._trans.next(val);
    }
    get vehicule() {
        return this._vehicule.getValue();
    }
    set vehicule(val) {
        this._vehicule.next(val);
    }
    get vehicules() {
        return this._vehicules.getValue();
    }
    set vehicules(val) {
        this._vehicules.next(val);
    }
    get transporteurs() {
        return this._transs.getValue();
    }
    set transporteurs(val) {
        this._transs.next(val);
    }
    get view() {
        return this._view.getValue();
    }
    set view(val) {
        this._view.next(val);
    }
    addVehicule(nom) {
        // we assaign a new copy of todos by adding a new todo to it 
        // with automatically assigned ID ( don't do this at home, use uuid() )
        this.vehicules.push(new _models_vehicule__WEBPACK_IMPORTED_MODULE_5__["Vehicule"]());
    }
    removeVehicule(id) {
        this.vehicules = this.vehicules.filter(todo => todo.id !== id);
    }
    setCompleted(id, isactive) {
        let todo = this.vehicules.find(todo => todo.id === id);
        if (todo) {
            // we need to make a new copy of todos array, and the todo as well
            // remember, our state must always remain immutable
            // otherwise, on push change detection won't work, and won't update its view
            const index = this.vehicules.indexOf(todo);
            this.vehicules[index] = new _models_vehicule__WEBPACK_IMPORTED_MODULE_5__["Vehicule"]();
            this.vehicules = [...this.vehicules];
        }
    }
};
TransporteurStoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], TransporteurStoreService);



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
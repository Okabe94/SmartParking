webpackJsonp([0],{

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 186:
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
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrincipalPage = (function () {
    function PrincipalPage(navController, afAuth, toasCtrl, afd, formBuilder) {
        var _this = this;
        this.navController = navController;
        this.afAuth = afAuth;
        this.toasCtrl = toasCtrl;
        this.afd = afd;
        this.formBuilder = formBuilder;
        this.bandera = false;
        this.creareForm();
        //this.formTarjetaId.controls.totalAutos.setValue(this.totalCarros);
        //Evento de Cambio de Tarjeta
        //this.firebaseUser = this.afd.list('/EventoTarjeta');
        this.firebaseUser = this.afd.list('/Parqueadero');
        this.firebaseUser.subscribe(function (lista) {
            _this.datos = lista;
            // //verificacion Primera Vez (No es necesario que ahi este el id la primera vez)
            // if(this.bandera == false){
            // this.formTarjetaId.controls.id.setValue("");   
            // this.bandera = true;
            // }else{      
            _this.formTarjetaId.controls.evento.setValue(_this.datos[0]['$value']);
            _this.formTarjetaId.controls.id.setValue(_this.datos[1]['$value']);
            _this.totalCarros = _this.datos[2]['$value'];
            _this.formTarjetaId.controls.totalAutos.setValue(_this.totalCarros);
            // }
        });
    }
    PrincipalPage.prototype.creareForm = function () {
        this.formTarjetaId = this.formBuilder.group({
            id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            totalAutos: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            evento: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    PrincipalPage.prototype.enviar = function () {
        var codigo = this.formTarjetaId.value.id;
        if (codigo == "E0 2F 9B 1B" && this.totalCarros > 0) {
            this.totalCarros = this.totalCarros - 1;
            this.formTarjetaId.controls.totalAutos.setValue(this.totalCarros);
            this.formTarjetaId.controls.evento.setValue("Entro");
        }
        else {
            if (this.totalCarros <= 0) {
                this.toasCtrl.create({
                    message: "El numero de carros ya estan en ceros Imposible una salida de alguien mas", duration: 3000
                }).present();
            }
        }
        if (codigo == "E9 D3 E7 AB" && this.totalCarros < 100) {
            this.totalCarros = this.totalCarros + 1;
            this.formTarjetaId.controls.totalAutos.setValue(this.totalCarros);
            this.formTarjetaId.controls.evento.setValue("Salio");
        }
        else {
            if (this.totalCarros >= 100) {
                this.toasCtrl.create({
                    message: "Numero maximo de carros en el paqueadero", duration: 3000
                }).present();
            }
        }
    };
    return PrincipalPage;
}());
PrincipalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-principal',template:/*ion-inline-start:"D:\Semillero\Semillero\ionic-angular\python\src\pages\principal\principal.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>  \n    <ion-card-header class="headerCard">\n    \n  </ion-card-header>\n    </ion-header>\n  \n  \n  <ion-content class="contenido"> \n\n\n     <form [formGroup]="formTarjetaId" class="formulario" (ngSubmit)="enviar()" novalidate>\n       <ion-img id="imagen"src="https://i.ytimg.com/vi/kOMLOI6A3AU/maxresdefault.jpg"></ion-img>\n    <ion-grid>\n    \n      <ion-col col-12>\n        <ion-item>\n      <ion-label color="primary" >ID</ion-label>\n      <ion-input type="text" formControlName="id" readonly></ion-input>\n    </ion-item>\n    </ion-col>\n    </ion-grid> \n<ion-grid>\n  <ion-row>\n    \n    <ion-col col-4>\n      <ion-item>\n    \n      <ion-input type="text"  formControlName="evento" readonly></ion-input>\n    \n      </ion-item> \n    </ion-col>\n    <ion-col col-8>\n      <ion-item>\n      <ion-label color="primary" >Plazas Disponibles</ion-label>\n      <ion-input type="text" formControlName="totalAutos" readonly></ion-input>\n    \n      </ion-item> \n    </ion-col>\n  </ion-row>\n  \n\n</ion-grid>\n\n   \n  \n</form>\n\n      \n  </ion-content>'/*ion-inline-end:"D:\Semillero\Semillero\ionic-angular\python\src\pages\principal\principal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], PrincipalPage);

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(288);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_principal_principal__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_firebase__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//FireBase




/*export const configFireBase={

  apiKey: "AIzaSyBXMTDV6hJn1O94ClW9L3hUPgeS15dpUDE",
  authDomain: "appandroid-2590d.firebaseapp.com",
  databaseURL: "https://appandroid-2590d.firebaseio.com",
  projectId: "appandroid-2590d",
  storageBucket: "appandroid-2590d.appspot.com",
  messagingSenderId: "88300898563"
}*/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_principal_principal__["a" /* PrincipalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__app_firebase__["a" /* FIREBASE_CONFIG */]),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_principal_principal__["a" /* PrincipalPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_principal_principal__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        this.afAuth = afAuth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_principal_principal__["a" /* PrincipalPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Semillero\Semillero\ionic-angular\python\src\app\app.html"*/'<ion-nav [root]="rootPage">\n	\n	\n</ion-nav>\n'/*ion-inline-end:"D:\Semillero\Semillero\ionic-angular\python\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCmQN6zLbCwcgnsoPglu5G2qEAi48TiTjI",
    authDomain: "pythonproject-5cbcc.firebaseapp.com",
    databaseURL: "https://pythonproject-5cbcc.firebaseio.com",
    projectId: "pythonproject-5cbcc",
    storageBucket: "pythonproject-5cbcc.appspot.com",
    messagingSenderId: "876774017758"
};
//# sourceMappingURL=app.firebase.js.map

/***/ })

},[271]);
//# sourceMappingURL=main.js.map
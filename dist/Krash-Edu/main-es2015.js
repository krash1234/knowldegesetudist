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

/***/ "./src/app/admin-dashboard/admin-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a1) { return ["/approveTeacher/", a1]; };
function AdminDashboardComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Click");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r1.Teacher_Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r1.Teacher_Phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, model_r1.Teacher_Id));
} }
const _c1 = function () { return ["/approveTeacher"]; };
const _c2 = function () { return ["/"]; };
const _c3 = function () { return ["/learner-list"]; };
const _c4 = function () { return ["/teacher-list"]; };
class AdminDashboardComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.http.get('/api/get_Temp_Teachers').subscribe((res) => {
            this.Temp_Teachers = res;
            console.log(this.Temp_Teachers);
        });
    }
}
AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) { return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 176, vars: 9, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-col", "shadow"], [1, "container"], [1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], ["src", "../../assets/menu-white-18dp.svg"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], [1, "nav-link", "link", "active"], [1, "nav-link", "link", 3, "routerLink"], [1, "nav-link", "link"], [1, "navbar-text"], ["type", "button", 1, "btn", "logoutbtn", 3, "routerLink"], [1, "d-flex", "justify-content-center"], [1, "card", "shadow", "cord", "col-sm-8", "col-md-8", "col-xl-8"], [1, "card-body"], [1, "row"], [1, "adminname"], [1, "col-sm-8", "col-md-8", "col-xl-8"], [1, "col-sm-6", "col-md-6", "col-xd-6"], [1, "card", "shadow", "totalcard", "bg-color1"], [1, "col-sm-8", "col-md-8", "col-xd-8"], [1, "bg-text"], [1, "bg-para"], [1, "col-sm-4", "col-md-4", "col-xd-4"], ["src", "../../assets/totallearnbox.svg", 1, "img-fluid", "logo"], [1, "card", "shadow", "totalcard", "bg-color2"], [1, "card", "shadow", "col-sm-8", "col-md-8", "col-xd-8", 2, "margin-bottom", "50px"], [1, "card-header"], [2, "text-align", "center", "font-weight", "bold", "font-size", "20px"], [1, "table-responsive-xl"], [1, "table", "table-striped", "table-bordered"], ["scope", "col"], ["scope", "col", "colspan", "2"], [4, "ngFor", "ngForOf"], [2, "text-align", "right", "font-weight", "bold", "font-size", "20px"], ["scope", "row"], ["colspan", "2"], [1, "card-footer"], ["type", "button", 1, "btn", "detailsbtn", 3, "routerLink"], ["type", "button", 1, "tablelink", 3, "routerLink"]], template: function AdminDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "New Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Running Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Krash It Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Learner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "100000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "10000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "New Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "table", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "S.no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, AdminDashboardComponent_tr_77_Template, 10, 6, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Learner List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "table", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Last");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "more list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Teacher List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "table", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "First");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Last");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "th", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "more list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Temp_Teachers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c4));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".bg-col[_ngcontent-%COMP%] {\n  background-color: #239463;\n}\n.link.active[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 5px;\n  margin-left: 5px;\n  transition: 0.5s;\n  box-shadow: 4px;\n}\n.logoutbtn[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #ffffff;\n  color: #000000;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n\n.cord[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  border: none;\n}\n.adminname[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 50px;\n  margin-top: 15px;\n  color: #239463;\n  text-transform: uppercase;\n}\n\n.tablelink[_ngcontent-%COMP%] {\n  outline: none;\n  text-decoration: none;\n  color: #239463;\n  border-radius: 10px;\n  border: 3px solid #239463;\n  padding: 3px 15px;\n  letter-spacing: 1px;\n  background-color: rgba(35, 148, 99, 0.3);\n}\n\n.totalcard[_ngcontent-%COMP%] {\n  border: none;\n  margin-bottom: 50px;\n  margin-top: 50px;\n}\n.bg-color1[_ngcontent-%COMP%] {\n  background-color: rgba(255, 193, 7, 0.8);\n}\n.bg-color2[_ngcontent-%COMP%] {\n  background-color: rgba(255, 23, 68, 0.8);\n}\n.bg-text[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n  color: #ffffff;\n  padding: 2px 3px;\n  letter-spacing: 2px;\n}\n.bg-para[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #ffffff;\n  padding: 2px 3px;\n  letter-spacing: 1px;\n}\n.logo[_ngcontent-%COMP%] {\n  padding: 2px 3px;\n  width: 100px;\n}\n\n.detailsbtn[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #239463;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n@media (max-width: 990px) {\n  .link.active[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]:hover {\n    background: none;\n    margin-left: 0px;\n    color: #ffffff;\n  }\n\n  .adminname[_ngcontent-%COMP%] {\n    text-align: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 40px;\n    margin-top: 15px;\n    color: #239463;\n    text-transform: uppercase;\n  }\n}\n@media (max-width: 858px) {\n  .link.active[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]:hover {\n    background: none;\n    margin-left: 0px;\n    color: #ffffff;\n  }\n\n  .adminname[_ngcontent-%COMP%] {\n    text-align: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 30px;\n    margin-top: 15px;\n    color: #239463;\n    text-transform: uppercase;\n  }\n}\n@media (max-width: 280px) {\n  .adminname[_ngcontent-%COMP%] {\n    text-align: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 25px;\n    margin-top: 15px;\n    color: #239463;\n    text-transform: uppercase;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZGFzaGJvYXJkL0Q6XFxLbm93bGVkZ2VTZXR1LUZFLW1haW4vc3JjXFxhcHBcXGFkbWluLWRhc2hib2FyZFxcYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFBO0FBQ0E7RUFDSSx5QkFBQTtBQ0NKO0FEQ0E7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFSjtBREFBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNILGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0cseUJBQUE7RUFDQSxlQUFBO0FDR0o7QUREQSxzRkFBQTtBQUNBLCtCQUFBO0FBQ0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNJSjtBREZBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDS0o7QURIQSwrRkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUNNSjtBREpBLGlHQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ09KO0FETEE7RUFDSSx3Q0FBQTtBQ1FKO0FETkE7RUFDSSx3Q0FBQTtBQ1NKO0FEUEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDSCxtQkFBQTtBQ1VEO0FEUkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0gsbUJBQUE7QUNXRDtBRFRBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDWUo7QURWQSx1R0FBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNILGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0cseUJBQUE7RUFDQSxlQUFBO0FDWUo7QURWQSw0RkFBQTtBQUNBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ2FOOztFRFhFO0lBQ0ksa0JBQUE7SUFDQSx1QkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0VDY047QUFDRjtBRFpBO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ2NOOztFRFpFO0lBQ0ksa0JBQUE7SUFDQSx1QkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0VDZU47QUFDRjtBRGJBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLHVCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7RUNlTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKmhlYWRlciBjc3Mgc3RydCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uYmctY29se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG59XG4ubGluay5hY3RpdmUsLmxpbms6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmZmYsICRhbHBoYTogMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgYm94LXNoYWRvdzogNHB4O1xufVxuLmxvZ291dGJ0bntcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0Y29sb3I6ICMwMDAwMDA7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHBhZGRpbmc6IDEycHggNDVweDtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipoZWFkZXIgc2VjdGlvbiBlbmQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyphZG1pbiBuYW1lIGNzcyBzZWN0aW9uIHN0YXJ0Ki9cbi5jb3Jke1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmFkbWlubmFtZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgY29sb3I6ICMyMzk0NjM7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipuZXcgdGVhY2hlciBzZWN0aW9uIGNzcyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnRhYmxlbGlua3tcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzIzOTQ2MztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyMzk0NjM7XG4gICAgcGFkZGluZzogM3B4IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzIzOTQ2MywgJGFscGhhOiAwLjMpO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKip0b3RhbCBjYXJkIGNzcyBzdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi50b3RhbGNhcmR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5iZy1jb2xvcjF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmMxMDcsICRhbHBoYTogMC44KTtcbn1cbi5iZy1jb2xvcjJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZjE3NDQsICRhbHBoYTogLjgpO1xufVxuLmJnLXRleHR7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDJweCAzcHg7XG5cdGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4uYmctcGFyYXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMnB4IDNweDtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5sb2dve1xuICAgIHBhZGRpbmc6IDJweCAzcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKnN0dWRlbnQgJnRlYWNoZXIgbGlzdCBjc3MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLmRldGFpbHNidG57XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG5cdGNvbG9yOiAjZmZmZmZmO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRwYWRkaW5nOiAxMnB4IDQ1cHg7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqbWVkaWEgcXVlcnkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCl7XG4gICAgLmxpbmsuYWN0aXZlLC5saW5rOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gICAgLmFkbWlubmFtZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgY29sb3I6ICMyMzk0NjM7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg1OHB4KXtcbiAgICAubGluay5hY3RpdmUsLmxpbms6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIH1cbiAgICAuYWRtaW5uYW1le1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBjb2xvcjogIzIzOTQ2MztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjgwcHgpe1xuICAgIC5hZG1pbm5hbWV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGNvbG9yOiAjMjM5NDYzO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbn0iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKipoZWFkZXIgY3NzIHN0cnQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmJnLWNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG59XG5cbi5saW5rLmFjdGl2ZSwgLmxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm94LXNoYWRvdzogNHB4O1xufVxuXG4ubG9nb3V0YnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTJweCA0NXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipoZWFkZXIgc2VjdGlvbiBlbmQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyphZG1pbiBuYW1lIGNzcyBzZWN0aW9uIHN0YXJ0Ki9cbi5jb3JkIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYWRtaW5uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgY29sb3I6ICMyMzk0NjM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipuZXcgdGVhY2hlciBzZWN0aW9uIGNzcyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnRhYmxlbGluayB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMyMzk0NjM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMyMzk0NjM7XG4gIHBhZGRpbmc6IDNweCAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCAxNDgsIDk5LCAwLjMpO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKnRvdGFsIGNhcmQgY3NzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnRvdGFsY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmJnLWNvbG9yMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTMsIDcsIDAuOCk7XG59XG5cbi5iZy1jb2xvcjIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjMsIDY4LCAwLjgpO1xufVxuXG4uYmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAycHggM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uYmctcGFyYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDJweCAzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZzogMnB4IDNweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqc3R1ZGVudCAmdGVhY2hlciBsaXN0IGNzcyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmRldGFpbHNidG4ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMnB4IDQ1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgLmxpbmsuYWN0aXZlLCAubGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLmFkbWlubmFtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGNvbG9yOiAjMjM5NDYzO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4NThweCkge1xuICAubGluay5hY3RpdmUsIC5saW5rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAuYWRtaW5uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgY29sb3I6ICMyMzk0NjM7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDI4MHB4KSB7XG4gIC5hZG1pbm5hbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBjb2xvcjogIzIzOTQ2MztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-dashboard',
                templateUrl: './admin-dashboard.component.html',
                styleUrls: ['./admin-dashboard.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_student_login_student_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/student-login/student-login.component */ "./src/app/student-login/student-login.component.ts");
/* harmony import */ var _app_teacher_login_teacher_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/teacher-login/teacher-login.component */ "./src/app/teacher-login/teacher-login.component.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _learner_details_learner_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./learner-details/learner-details.component */ "./src/app/learner-details/learner-details.component.ts");
/* harmony import */ var _teacher_details_teacher_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teacher-details/teacher-details.component */ "./src/app/teacher-details/teacher-details.component.ts");
/* harmony import */ var _teacher_approval_teacher_approval_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teacher-approval/teacher-approval.component */ "./src/app/teacher-approval/teacher-approval.component.ts");
/* harmony import */ var _upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload-video/upload-video.component */ "./src/app/upload-video/upload-video.component.ts");
/* harmony import */ var _teacher_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teacher-dashboard/teacher-dashboard.component */ "./src/app/teacher-dashboard/teacher-dashboard.component.ts");
/* harmony import */ var _student_subscribe_list_student_subscribe_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./student-subscribe-list/student-subscribe-list.component */ "./src/app/student-subscribe-list/student-subscribe-list.component.ts");
/* harmony import */ var _teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./teacher-profile/teacher-profile.component */ "./src/app/teacher-profile/teacher-profile.component.ts");
/* harmony import */ var _show_video_show_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./show-video/show-video.component */ "./src/app/show-video/show-video.component.ts");
/* harmony import */ var _live_classes_live_classes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./live-classes/live-classes.component */ "./src/app/live-classes/live-classes.component.ts");
/* harmony import */ var _student_panel_student_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./student-panel/student-panel.component */ "./src/app/student-panel/student-panel.component.ts");
/* harmony import */ var _student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./student-dashboard/student-dashboard.component */ "./src/app/student-dashboard/student-dashboard.component.ts");
/* harmony import */ var _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./student-profile/student-profile.component */ "./src/app/student-profile/student-profile.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _running_class_running_class_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./running-class/running-class.component */ "./src/app/running-class/running-class.component.ts");
/* harmony import */ var _complete_course_complete_course_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./complete-course/complete-course.component */ "./src/app/complete-course/complete-course.component.ts");
/* harmony import */ var _savecourses_savecourses_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./savecourses/savecourses.component */ "./src/app/savecourses/savecourses.component.ts");
/* harmony import */ var _student_live_class_student_live_class_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./student-live-class/student-live-class.component */ "./src/app/student-live-class/student-live-class.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _course_document_course_document_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./course-document/course-document.component */ "./src/app/course-document/course-document.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");




























const routes = [
    { path: '', component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'Studentlogin', component: _app_student_login_student_login_component__WEBPACK_IMPORTED_MODULE_3__["StudentLoginComponent"] },
    { path: 'Teacherlogin', component: _app_teacher_login_teacher_login_component__WEBPACK_IMPORTED_MODULE_4__["TeacherLoginComponent"] },
    { path: 'admin', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["AdminDashboardComponent"] },
    { path: 'learner-list', component: _learner_details_learner_details_component__WEBPACK_IMPORTED_MODULE_6__["LearnerDetailsComponent"] },
    { path: 'teacher-list', component: _teacher_details_teacher_details_component__WEBPACK_IMPORTED_MODULE_7__["TeacherDetailsComponent"] },
    { path: 'approveTeacher/:id', component: _teacher_approval_teacher_approval_component__WEBPACK_IMPORTED_MODULE_8__["TeacherApprovalComponent"] },
    { path: 'uploadVideo', component: _upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_9__["UploadVideoComponent"] },
    { path: 'teacherDashboard', component: _teacher_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["TeacherDashboardComponent"] },
    { path: 'student-dashboard', component: _student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["StudentDashboardComponent"], children: [
            { path: '', redirectTo: 'Profile', pathMatch: 'full' },
            { path: 'Profile', component: _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_17__["StudentProfileComponent"] },
            { path: 'course', component: _course_course_component__WEBPACK_IMPORTED_MODULE_18__["CourseComponent"], children: [
                    { path: '', redirectTo: 'Running', pathMatch: 'full' },
                    { path: 'Running', component: _running_class_running_class_component__WEBPACK_IMPORTED_MODULE_19__["RunningClassComponent"] },
                    { path: 'Complete', component: _complete_course_complete_course_component__WEBPACK_IMPORTED_MODULE_20__["CompleteCourseComponent"] },
                    { path: 'save-courses', component: _savecourses_savecourses_component__WEBPACK_IMPORTED_MODULE_21__["SavecoursesComponent"] },
                    { path: 'show-live', component: _student_live_class_student_live_class_component__WEBPACK_IMPORTED_MODULE_22__["StudentLiveClassComponent"] }
                ] },
            { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_23__["HelpComponent"] },
            { path: 'course-document', component: _course_document_course_document_component__WEBPACK_IMPORTED_MODULE_24__["CourseDocumentComponent"] },
        ] },
    { path: 'learner-list', component: _learner_details_learner_details_component__WEBPACK_IMPORTED_MODULE_6__["LearnerDetailsComponent"] },
    { path: 'teacher-list', component: _teacher_details_teacher_details_component__WEBPACK_IMPORTED_MODULE_7__["TeacherDetailsComponent"] },
    { path: 'runningcourse', component: _running_class_running_class_component__WEBPACK_IMPORTED_MODULE_19__["RunningClassComponent"] },
    { path: 'main-pannel', component: _main_main_component__WEBPACK_IMPORTED_MODULE_25__["MainComponent"] },
    { path: 'Profile', component: _teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_12__["TeacherProfileComponent"] },
    { path: 'liveClass', component: _live_classes_live_classes_component__WEBPACK_IMPORTED_MODULE_14__["LiveClassesComponent"] },
    { path: 'showVideo', component: _show_video_show_video_component__WEBPACK_IMPORTED_MODULE_13__["ShowVideoComponent"] },
    { path: 'studentSubscribeList', component: _student_subscribe_list_student_subscribe_list_component__WEBPACK_IMPORTED_MODULE_11__["StudentSubscribeListComponent"] },
    { path: 'uploadVideo', component: _upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_9__["UploadVideoComponent"] },
    { path: 'studentPanel', component: _student_panel_student_panel_component__WEBPACK_IMPORTED_MODULE_15__["StudentPanelComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Krash-Edu';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _student_login_student_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-login/student-login.component */ "./src/app/student-login/student-login.component.ts");
/* harmony import */ var _teacher_login_teacher_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher-login/teacher-login.component */ "./src/app/teacher-login/teacher-login.component.ts");
/* harmony import */ var _student_register_student_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student-register/student-register.component */ "./src/app/student-register/student-register.component.ts");
/* harmony import */ var _teacher_register_teacher_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teacher-register/teacher-register.component */ "./src/app/teacher-register/teacher-register.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _teacher_uploads_teacher_uploads_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./teacher-uploads/teacher-uploads.component */ "./src/app/teacher-uploads/teacher-uploads.component.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _learner_details_learner_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./learner-details/learner-details.component */ "./src/app/learner-details/learner-details.component.ts");
/* harmony import */ var _teacher_details_teacher_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./teacher-details/teacher-details.component */ "./src/app/teacher-details/teacher-details.component.ts");
/* harmony import */ var _teacher_approval_teacher_approval_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./teacher-approval/teacher-approval.component */ "./src/app/teacher-approval/teacher-approval.component.ts");
/* harmony import */ var _upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./upload-video/upload-video.component */ "./src/app/upload-video/upload-video.component.ts");
/* harmony import */ var _live_classes_live_classes_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./live-classes/live-classes.component */ "./src/app/live-classes/live-classes.component.ts");
/* harmony import */ var _show_video_show_video_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./show-video/show-video.component */ "./src/app/show-video/show-video.component.ts");
/* harmony import */ var _student_subscribe_list_student_subscribe_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./student-subscribe-list/student-subscribe-list.component */ "./src/app/student-subscribe-list/student-subscribe-list.component.ts");
/* harmony import */ var _teacher_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./teacher-dashboard/teacher-dashboard.component */ "./src/app/teacher-dashboard/teacher-dashboard.component.ts");
/* harmony import */ var _teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./teacher-profile/teacher-profile.component */ "./src/app/teacher-profile/teacher-profile.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _student_panel_student_panel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./student-panel/student-panel.component */ "./src/app/student-panel/student-panel.component.ts");
/* harmony import */ var _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./student-profile/student-profile.component */ "./src/app/student-profile/student-profile.component.ts");
/* harmony import */ var _student_live_class_student_live_class_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./student-live-class/student-live-class.component */ "./src/app/student-live-class/student-live-class.component.ts");
/* harmony import */ var _student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./student-dashboard/student-dashboard.component */ "./src/app/student-dashboard/student-dashboard.component.ts");
/* harmony import */ var _student_saved_courses_student_saved_courses_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./student-saved-courses/student-saved-courses.component */ "./src/app/student-saved-courses/student-saved-courses.component.ts");
/* harmony import */ var _student_help_student_help_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./student-help/student-help.component */ "./src/app/student-help/student-help.component.ts");
/* harmony import */ var _student_course_documents_student_course_documents_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./student-course-documents/student-course-documents.component */ "./src/app/student-course-documents/student-course-documents.component.ts");
/* harmony import */ var _student_courses_student_courses_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./student-courses/student-courses.component */ "./src/app/student-courses/student-courses.component.ts");
/* harmony import */ var _teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./teacher-header/teacher-header.component */ "./src/app/teacher-header/teacher-header.component.ts");
/* harmony import */ var _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./teacher-footer/teacher-footer.component */ "./src/app/teacher-footer/teacher-footer.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _running_class_running_class_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./running-class/running-class.component */ "./src/app/running-class/running-class.component.ts");
/* harmony import */ var _complete_course_complete_course_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./complete-course/complete-course.component */ "./src/app/complete-course/complete-course.component.ts");
/* harmony import */ var _savecourses_savecourses_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./savecourses/savecourses.component */ "./src/app/savecourses/savecourses.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _course_document_course_document_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./course-document/course-document.component */ "./src/app/course-document/course-document.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _student_header_student_header_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./student-header/student-header.component */ "./src/app/student-header/student-header.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");


















































const material = [
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"]
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_29__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _student_login_student_login_component__WEBPACK_IMPORTED_MODULE_5__["StudentLoginComponent"],
        _teacher_login_teacher_login_component__WEBPACK_IMPORTED_MODULE_6__["TeacherLoginComponent"],
        _student_register_student_register_component__WEBPACK_IMPORTED_MODULE_7__["StudentRegisterComponent"],
        _teacher_register_teacher_register_component__WEBPACK_IMPORTED_MODULE_8__["TeacherRegisterComponent"],
        _teacher_uploads_teacher_uploads_component__WEBPACK_IMPORTED_MODULE_18__["TeacherUploadsComponent"],
        _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["AdminDashboardComponent"],
        _learner_details_learner_details_component__WEBPACK_IMPORTED_MODULE_20__["LearnerDetailsComponent"],
        _teacher_details_teacher_details_component__WEBPACK_IMPORTED_MODULE_21__["TeacherDetailsComponent"],
        _teacher_approval_teacher_approval_component__WEBPACK_IMPORTED_MODULE_22__["TeacherApprovalComponent"],
        _upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_23__["UploadVideoComponent"],
        _live_classes_live_classes_component__WEBPACK_IMPORTED_MODULE_24__["LiveClassesComponent"],
        _show_video_show_video_component__WEBPACK_IMPORTED_MODULE_25__["ShowVideoComponent"],
        _student_subscribe_list_student_subscribe_list_component__WEBPACK_IMPORTED_MODULE_26__["StudentSubscribeListComponent"],
        _teacher_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["TeacherDashboardComponent"],
        _teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_28__["TeacherProfileComponent"],
        _student_panel_student_panel_component__WEBPACK_IMPORTED_MODULE_30__["StudentPanelComponent"],
        _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_31__["StudentProfileComponent"],
        _student_live_class_student_live_class_component__WEBPACK_IMPORTED_MODULE_32__["StudentLiveClassComponent"],
        _student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_33__["StudentDashboardComponent"],
        _student_saved_courses_student_saved_courses_component__WEBPACK_IMPORTED_MODULE_34__["StudentSavedCoursesComponent"],
        _student_help_student_help_component__WEBPACK_IMPORTED_MODULE_35__["StudentHelpComponent"],
        _student_course_documents_student_course_documents_component__WEBPACK_IMPORTED_MODULE_36__["StudentCourseDocumentsComponent"],
        _student_courses_student_courses_component__WEBPACK_IMPORTED_MODULE_37__["StudentCoursesComponent"],
        _teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_38__["TeacherHeaderComponent"],
        _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_39__["TeacherFooterComponent"],
        _course_document_course_document_component__WEBPACK_IMPORTED_MODULE_45__["CourseDocumentComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_46__["MainComponent"],
        _help_help_component__WEBPACK_IMPORTED_MODULE_44__["HelpComponent"],
        _savecourses_savecourses_component__WEBPACK_IMPORTED_MODULE_43__["SavecoursesComponent"],
        _complete_course_complete_course_component__WEBPACK_IMPORTED_MODULE_42__["CompleteCourseComponent"],
        _running_class_running_class_component__WEBPACK_IMPORTED_MODULE_41__["RunningClassComponent"],
        _course_course_component__WEBPACK_IMPORTED_MODULE_40__["CourseComponent"],
        _student_header_student_header_component__WEBPACK_IMPORTED_MODULE_47__["StudentHeaderComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_48__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _student_login_student_login_component__WEBPACK_IMPORTED_MODULE_5__["StudentLoginComponent"],
                    _teacher_login_teacher_login_component__WEBPACK_IMPORTED_MODULE_6__["TeacherLoginComponent"],
                    _student_register_student_register_component__WEBPACK_IMPORTED_MODULE_7__["StudentRegisterComponent"],
                    _teacher_register_teacher_register_component__WEBPACK_IMPORTED_MODULE_8__["TeacherRegisterComponent"],
                    _teacher_uploads_teacher_uploads_component__WEBPACK_IMPORTED_MODULE_18__["TeacherUploadsComponent"],
                    _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["AdminDashboardComponent"],
                    _learner_details_learner_details_component__WEBPACK_IMPORTED_MODULE_20__["LearnerDetailsComponent"],
                    _teacher_details_teacher_details_component__WEBPACK_IMPORTED_MODULE_21__["TeacherDetailsComponent"],
                    _teacher_approval_teacher_approval_component__WEBPACK_IMPORTED_MODULE_22__["TeacherApprovalComponent"],
                    _upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_23__["UploadVideoComponent"],
                    _live_classes_live_classes_component__WEBPACK_IMPORTED_MODULE_24__["LiveClassesComponent"],
                    _show_video_show_video_component__WEBPACK_IMPORTED_MODULE_25__["ShowVideoComponent"],
                    _student_subscribe_list_student_subscribe_list_component__WEBPACK_IMPORTED_MODULE_26__["StudentSubscribeListComponent"],
                    _teacher_dashboard_teacher_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["TeacherDashboardComponent"],
                    _teacher_profile_teacher_profile_component__WEBPACK_IMPORTED_MODULE_28__["TeacherProfileComponent"],
                    _student_panel_student_panel_component__WEBPACK_IMPORTED_MODULE_30__["StudentPanelComponent"],
                    _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_31__["StudentProfileComponent"],
                    _student_live_class_student_live_class_component__WEBPACK_IMPORTED_MODULE_32__["StudentLiveClassComponent"],
                    _student_dashboard_student_dashboard_component__WEBPACK_IMPORTED_MODULE_33__["StudentDashboardComponent"],
                    _student_saved_courses_student_saved_courses_component__WEBPACK_IMPORTED_MODULE_34__["StudentSavedCoursesComponent"],
                    _student_help_student_help_component__WEBPACK_IMPORTED_MODULE_35__["StudentHelpComponent"],
                    _student_course_documents_student_course_documents_component__WEBPACK_IMPORTED_MODULE_36__["StudentCourseDocumentsComponent"],
                    _student_courses_student_courses_component__WEBPACK_IMPORTED_MODULE_37__["StudentCoursesComponent"],
                    _teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_38__["TeacherHeaderComponent"],
                    _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_39__["TeacherFooterComponent"],
                    _course_document_course_document_component__WEBPACK_IMPORTED_MODULE_45__["CourseDocumentComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_46__["MainComponent"],
                    _help_help_component__WEBPACK_IMPORTED_MODULE_44__["HelpComponent"],
                    _savecourses_savecourses_component__WEBPACK_IMPORTED_MODULE_43__["SavecoursesComponent"],
                    _complete_course_complete_course_component__WEBPACK_IMPORTED_MODULE_42__["CompleteCourseComponent"],
                    _running_class_running_class_component__WEBPACK_IMPORTED_MODULE_41__["RunningClassComponent"],
                    _course_course_component__WEBPACK_IMPORTED_MODULE_40__["CourseComponent"],
                    _student_header_student_header_component__WEBPACK_IMPORTED_MODULE_47__["StudentHeaderComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_48__["HeaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                ],
                entryComponents: [
                    _teacher_uploads_teacher_uploads_component__WEBPACK_IMPORTED_MODULE_18__["TeacherUploadsComponent"]
                ],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_29__["CookieService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/complete-course/complete-course.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/complete-course/complete-course.component.ts ***!
  \**************************************************************/
/*! exports provided: CompleteCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteCourseComponent", function() { return CompleteCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CompleteCourseComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompleteCourseComponent.ɵfac = function CompleteCourseComponent_Factory(t) { return new (t || CompleteCourseComponent)(); };
CompleteCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompleteCourseComponent, selectors: [["app-complete-course"]], decls: 126, vars: 0, consts: [[1, "container"], [1, "row"], [1, "card"], [1, "col-sm-3", "col-md-3", "col-xd-3"], ["controls", "", 1, "video"], ["src", ""], [1, "col-sm-7", "col-md-7", "col-xd-7", "py-3"], ["src", "../../assets/list.svg", "width", "20", "height", "20"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "w-75"], [1, "col-sm-2", "col-md-2", "col-xd-2"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "mb-2"]], template: function CompleteCourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Running Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mr Ashish Agrawal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add to collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Download Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Running Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Mr Ashish Agrawal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Add to collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Download Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Running Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Mr Ashish Agrawal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Add to collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Download Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Running Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Mr Ashish Agrawal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Add to collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Download Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".col-6[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.py-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-bottom: 5px;\n}\n\n.py-3[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 20px;\n  overflow: hidden;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.dropdown-menu.dropdown-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 5px;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(7, 149, 181, 0.3);\n}\n\n\n\n@media (max-width: 1256) {\n  .video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 160px;\n  }\n}\n\n@media (max-width: 1045px) {\n  .video[_ngcontent-%COMP%] {\n    width: 230px;\n    height: 160px;\n  }\n}\n\n@media (max-width: 858px) {\n  .progress[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 768px) {\n  .video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 140px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n\n  .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n\n@media (max-width: 540px) {\n  .video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 140px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media (max-width: 415px) {\n  .video[_ngcontent-%COMP%] {\n    width: 99%;\n    height: 150px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 376px) {\n  .video[_ngcontent-%COMP%] {\n    width: 99%;\n    height: 150px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 280px) {\n  .video[_ngcontent-%COMP%] {\n    width: 99%;\n    height: 140px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGxldGUtY291cnNlL0Q6XFxLbm93bGVkZ2VTZXR1LUZFLW1haW4vc3JjXFxhcHBcXGNvbXBsZXRlLWNvdXJzZVxcY29tcGxldGUtY291cnNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wbGV0ZS1jb3Vyc2UvY29tcGxldGUtY291cnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kscUJBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURBQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7QUNLSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDS0o7O0FESEE7RUFDSSx3Q0FBQTtBQ01KOztBREpBLGdDQUFBOztBQUNBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQ09OO0FBQ0Y7O0FETEE7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDT047QUFDRjs7QURKQTtFQUNJO0lBQ0ksYUFBQTtFQ01OO0FBQ0Y7O0FESkE7RUFDSTtJQUNJLFdBQUE7SUFDQSxhQUFBO0VDTU47O0VESkU7SUFDSSxVQUFBO0VDT047O0VETEU7SUFDSSxVQUFBO0VDUU47QUFDRjs7QUROQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUNRTjs7RURORTs7SUFFSSxVQUFBO0VDU047QUFDRjs7QURQQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGFBQUE7RUNTTjs7RURQRTs7SUFFSSxXQUFBO0VDVU47QUFDRjs7QURSQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGFBQUE7RUNVTjs7RURSRTs7SUFFSSxXQUFBO0VDV047QUFDRjs7QURUQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGFBQUE7RUNXTjs7RURURTs7SUFFSSxXQUFBO0VDWU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBsZXRlLWNvdXJzZS9jb21wbGV0ZS1jb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb2wtNntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucHktMyBwe1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucHktMyBoMXtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4uY2FyZHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZHJvcGRvd24tdG9nZ2xle1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5kcm9wZG93bi1tZW51e1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICBcbn1cbi5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWl0ZW17XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogNXB4O1xufVxuLmRyb3Bkb3duLWl0ZW06aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwNzk1YjUsICRhbHBoYTogMC4zKTtcbn1cbi8qKioqKioqbWVkaWEgcXVlcnkqKioqKioqKioqKioqL1xuQG1lZGlhKG1heC13aWR0aDoxMjU2KXtcbiAgICAudmlkZW97XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6MTA0NXB4KXtcbiAgICAudmlkZW97XG4gICAgICAgIHdpZHRoOiAyMzBweDtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICB9XG5cbn1cbkBtZWRpYShtYXgtd2lkdGg6IDg1OHB4KXtcbiAgICAucHJvZ3Jlc3N7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XG4gICAgLnZpZGVve1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICB9XG4gICAgLmNvbC1zbS0zICwuY29sLW1kLTMgLC5jb2wteGQtM3tcbiAgICAgICAgd2lkdGg6IDQwJVxuICAgIH1cbiAgICAuY29sLXNtLTcsLmNvbC1tZC03LC5jb2wteGQtN3tcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICB9XG59XG5AbWVkaWEobWF4LXdpZHRoOjU0MHB4KXtcbiAgICAudmlkZW97XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIH1cbiAgICAuY29sLXNtLTMgLC5jb2wtbWQtMyAsLmNvbC14ZC0zLFxuICAgIC5jb2wtc20tNywuY29sLW1kLTcsLmNvbC14ZC03e1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6NDE1cHgpe1xuICAgIC52aWRlb3tcbiAgICAgICAgd2lkdGg6IDk5JTtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9XG4gICAgLmNvbC1zbS0zICwuY29sLW1kLTMgLC5jb2wteGQtMyxcbiAgICAuY29sLXNtLTcsLmNvbC1tZC03LC5jb2wteGQtN3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuQG1lZGlhKG1heC13aWR0aDozNzZweCl7XG4gICAgLnZpZGVve1xuICAgICAgICB3aWR0aDogOTklO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cbiAgICAuY29sLXNtLTMgLC5jb2wtbWQtMyAsLmNvbC14ZC0zLFxuICAgIC5jb2wtc20tNywuY29sLW1kLTcsLmNvbC14ZC03e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5AbWVkaWEobWF4LXdpZHRoOjI4MHB4KXtcbiAgICAudmlkZW97XG4gICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgfVxuICAgIC5jb2wtc20tMyAsLmNvbC1tZC0zICwuY29sLXhkLTMsXG4gICAgLmNvbC1zbS03LC5jb2wtbWQtNywuY29sLXhkLTd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbn0iLCIuY29sLTYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5weS0zIHAge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnB5LTMgaDEge1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kcm9wZG93bi1tZW51LmRyb3Bkb3duLWl0ZW0ge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNywgMTQ5LCAxODEsIDAuMyk7XG59XG5cbi8qKioqKioqbWVkaWEgcXVlcnkqKioqKioqKioqKioqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDEyNTYpIHtcbiAgLnZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTA0NXB4KSB7XG4gIC52aWRlbyB7XG4gICAgd2lkdGg6IDIzMHB4O1xuICAgIGhlaWdodDogMTYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4NThweCkge1xuICAucHJvZ3Jlc3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTQwcHg7XG4gIH1cblxuICAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC14ZC0zIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG5cbiAgLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wteGQtNyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XG4gIC52aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgfVxuXG4gIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLXhkLTMsXG4uY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC14ZC03IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDE1cHgpIHtcbiAgLnZpZGVvIHtcbiAgICB3aWR0aDogOTklO1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC14ZC0zLFxuLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wteGQtNyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzZweCkge1xuICAudmlkZW8ge1xuICAgIHdpZHRoOiA5OSU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuXG4gIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLXhkLTMsXG4uY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC14ZC03IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDI4MHB4KSB7XG4gIC52aWRlbyB7XG4gICAgd2lkdGg6IDk5JTtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICB9XG5cbiAgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wteGQtMyxcbi5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLXhkLTcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompleteCourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-complete-course',
                templateUrl: './complete-course.component.html',
                styleUrls: ['./complete-course.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/course-document/course-document.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/course-document/course-document.component.ts ***!
  \**************************************************************/
/*! exports provided: CourseDocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDocumentComponent", function() { return CourseDocumentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CourseDocumentComponent {
    constructor() { }
    ngOnInit() {
    }
}
CourseDocumentComponent.ɵfac = function CourseDocumentComponent_Factory(t) { return new (t || CourseDocumentComponent)(); };
CourseDocumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseDocumentComponent, selectors: [["app-course-document"]], decls: 2, vars: 0, template: function CourseDocumentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "course-document works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS1kb2N1bWVudC9jb3Vyc2UtZG9jdW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseDocumentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course-document',
                templateUrl: './course-document.component.html',
                styleUrls: ['./course-document.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/student-dashboard/course/Running"]; };
const _c1 = function () { return ["/student-dashboard/course/save-courses"]; };
const _c2 = function () { return ["/student-dashboard/course/show-live"]; };
const _c3 = function () { return ["/student-dashboard/course/Complete"]; };
class CourseComponent {
    constructor() { }
    ngOnInit() {
    }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(); };
CourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseComponent, selectors: [["app-course"]], decls: 22, vars: 8, consts: [[1, "container"], [1, "navbar-brand"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["routerLinkActive", "active", "tabindex", "-1", "aria-selected", "false", "role", "tab", 1, "nav-link", 3, "routerLink"], ["tabindex", "-1", "aria-selected", "false", "role", "tab", 1, "nav-link"], [1, "bg-margin"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Running");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Saved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Live Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".navbar-brand[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 20px;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #0795b5;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #0795b5;\n}\n\n.bg-margin[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlL0Q6XFxLbm93bGVkZ2VTZXR1LUZFLW1haW4vc3JjXFxhcHBcXGNvdXJzZVxcY291cnNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3Vyc2UvY291cnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBQ0E7RUFDSSxnQkFBQTtBQ0NKO0FEQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QUFtQkE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEQUE7RUFDSSxjQUFBO0FDR0o7QUREQTtFQUNJLGNBQUE7QUNJSjtBREZBLHFCQUFBO0FBQ0E7RUFDSSxnQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvY291cnNlL2NvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qY3NzIGZvciBuYXYgc2VjdGlvbiovXHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi8qXHJcbi53cmFwcGVye1xyXG4gICAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDc5NWI1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxufVxyXG4ud3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICB3aWR0aDogMDtcclxufVxyXG4ubmF2cy1saW5re1xyXG4gICAgbWluLXdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuKi9cclxuXHJcbi5uYXYtdGFic3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcbi5uYXYtbGlua3tcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZle1xyXG4gICAgY29sb3I6ICMwNzk1YjU7XHJcbn1cclxuLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlcntcclxuICAgIGNvbG9yOiAjMDc5NWI1O1xyXG59XHJcbi8qcm91dGVyIHNlY3Rpb24gY3NzKi9cclxuLmJnLW1hcmdpbntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn0iLCIvKmNzcyBmb3IgbmF2IHNlY3Rpb24qL1xuLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8qXG4ud3JhcHBlcntcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDc5NWI1O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLndyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgIHdpZHRoOiAwO1xufVxuLm5hdnMtbGlua3tcbiAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDExMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG4qL1xuLm5hdi10YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDc5NWI1O1xufVxuXG4ubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMwNzk1YjU7XG59XG5cbi8qcm91dGVyIHNlY3Rpb24gY3NzKi9cbi5iZy1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-course',
                templateUrl: './course.component.html',
                styleUrls: ['./course.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-dark", "bg-col", "shadow"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["src", "../../assets/new-logo.jpeg", 1, "navlogo"], [1, "colortext"], [1, "plaintext"], [1, "navbar-text"], ["href", "http://krashitservices.com/aboutus.html", "target", "_blank", 1, "nav-link"], [1, "btn", "about", "shadow"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Knowledge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Setu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "AboutUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap\");\n\n.navbar[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-family: \"Luckiest Guy\", cursive;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n.navbar-brand[_ngcontent-%COMP%]   .colortext[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #0795b5;\n  font-size: 30px;\n  font-family: \"Luckiest Guy\", cursive;\n}\n.navbar-brand[_ngcontent-%COMP%]   .plaintext[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 30px;\n  font-family: \"Luckiest Guy\", cursive;\n}\n.navlogo[_ngcontent-%COMP%] {\n  height: 60px;\n}\n.about[_ngcontent-%COMP%] {\n  background-color: #0795b5;\n  border-radius: 5px;\n  border: 1px solid #0795b5;\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  outline: none;\n}\n\n@media (max-width: 450px) {\n  .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 280px) {\n  .about[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: bold;\n    padding: 10px 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxLbm93bGVkZ2VTZXR1LUZFLW1haW4vc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGlGQUFBO0FBQ1IsNEVBQUE7QUFDQTtFQUNJLHlCQUFBO0FDQ0o7QURDQTtFQUNJLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEQUE7RUFDRyxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNHSDtBRERBO0VBQ0ksV0FBQTtFQUNILGVBQUE7RUFDQSxvQ0FBQTtBQ0lEO0FERkE7RUFDSSxZQUFBO0FDS0o7QURIQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDSCx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0cseUJBQUE7RUFDQSxhQUFBO0FDTUo7QURIQSxrQ0FBQTtBQUNBO0VBQ0k7SUFDSSxhQUFBO0VDTU47QUFDRjtBREhBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ0tOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9THVja2llc3QrR3V5JmRpc3BsYXk9c3dhcCcpO1xyXG4vKioqKioqKioqKioqKioqKioqKioqKmhlYWRlciBuYXZiYXIgY3NzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4ubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNraWVzdCBHdXknLCBjdXJzaXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi5uYXZiYXItYnJhbmQgLmNvbG9ydGV4dHtcclxuICAgbWFyZ2luLWxlZnQ6IDhweDsgXHJcbiAgIGNvbG9yOiAjMDc5NWI1O1xyXG4gICBmb250LXNpemU6IDMwcHg7XHJcbiAgIGZvbnQtZmFtaWx5OiAnTHVja2llc3QgR3V5JywgY3Vyc2l2ZTtcclxufVxyXG4ubmF2YmFyLWJyYW5kIC5wbGFpbnRleHR7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0Zm9udC1mYW1pbHk6ICdMdWNraWVzdCBHdXknLCBjdXJzaXZlO1xyXG59XHJcbi5uYXZsb2dve1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi5hYm91dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzA3OTViNTtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0cGFkZGluZzogMTJweCA0NXB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIFxyXG59XHJcbi8qKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKiovXHJcbkBtZWRpYShtYXgtd2lkdGg6NDUwcHgpe1xyXG4gICAgLm5hdmJhci1icmFuZCBzcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6MjgwcHgpe1xyXG4gICAgLmFib3V0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7ICAgXHJcbiAgICB9XHJcblxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUx1Y2tpZXN0K0d1eSZkaXNwbGF5PXN3YXBcIik7XG4vKioqKioqKioqKioqKioqKioqKioqKmhlYWRlciBuYXZiYXIgY3NzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBmb250LWZhbWlseTogXCJMdWNraWVzdCBHdXlcIiwgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5uYXZiYXItYnJhbmQgLmNvbG9ydGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGNvbG9yOiAjMDc5NWI1O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLCBjdXJzaXZlO1xufVxuXG4ubmF2YmFyLWJyYW5kIC5wbGFpbnRleHQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJMdWNraWVzdCBHdXlcIiwgY3Vyc2l2ZTtcbn1cblxuLm5hdmxvZ28ge1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5hYm91dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA3OTViNTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEycHggNDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyoqKioqKioqbWVkaWEgcXVlcnkqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xuICAubmF2YmFyLWJyYW5kIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyODBweCkge1xuICAuYWJvdXQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "card", "shadow"], [1, "card-body"], [1, "livetext"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.livetext[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bold;\n  margin-top: 40px;\n  margin-bottom: 50px;\n}\n\n.livetext[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: \"\";\n  -webkit-animation: animate infinite 12s;\n          animation: animate infinite 12s;\n}\n\n@-webkit-keyframes animate {\n  0% {\n    content: \"Can I help You\";\n  }\n  20% {\n    content: \"Recorded Lectures\";\n  }\n  40% {\n    content: \"Qualified Teachers\";\n  }\n  60% {\n    content: \"Live Classes\";\n  }\n  80% {\n    content: \"Recorded Lectures\";\n  }\n  100% {\n    content: \"Qualified Teachers\";\n  }\n}\n\n@keyframes animate {\n  0% {\n    content: \"Can I help You\";\n  }\n  20% {\n    content: \"Recorded Lectures\";\n  }\n  40% {\n    content: \"Qualified Teachers\";\n  }\n  60% {\n    content: \"Live Classes\";\n  }\n  80% {\n    content: \"Recorded Lectures\";\n  }\n  100% {\n    content: \"Qualified Teachers\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9EOlxcS25vd2xlZGdlU2V0dS1GRS1tYWluL3NyY1xcYXBwXFxoZWxwXFxoZWxwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQ0dKOztBRERBO0VBQ0k7SUFDSSx5QkFBQTtFQ0lOO0VERkU7SUFDSSw0QkFBQTtFQ0lOO0VERkU7SUFDSSw2QkFBQTtFQ0lOO0VERkU7SUFDSSx1QkFBQTtFQ0lOO0VERkU7SUFDSSw0QkFBQTtFQ0lOO0VERkU7SUFDSSw2QkFBQTtFQ0lOO0FBQ0Y7O0FEdEJBO0VBQ0k7SUFDSSx5QkFBQTtFQ0lOO0VERkU7SUFDSSw0QkFBQTtFQ0lOO0VERkU7SUFDSSw2QkFBQTtFQ0lOO0VERkU7SUFDSSx1QkFBQTtFQ0lOO0VERkU7SUFDSSw0QkFBQTtFQ0lOO0VERkU7SUFDSSw2QkFBQTtFQ0lOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4ubGl2ZXRleHR7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5saXZldGV4dCBzcGFuOjpiZWZvcmV7XG4gICAgY29udGVudDogJyc7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIGluZmluaXRlIDEycztcbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZXtcbiAgICAwJXtcbiAgICAgICAgY29udGVudDogJ0NhbiBJIGhlbHAgWW91JztcbiAgICB9XG4gICAgMjAle1xuICAgICAgICBjb250ZW50OiAnUmVjb3JkZWQgTGVjdHVyZXMnO1xuICAgIH1cbiAgICA0MCV7XG4gICAgICAgIGNvbnRlbnQ6ICdRdWFsaWZpZWQgVGVhY2hlcnMnO1xuICAgIH1cbiAgICA2MCV7XG4gICAgICAgIGNvbnRlbnQ6ICdMaXZlIENsYXNzZXMnO1xuICAgIH1cbiAgICA4MCV7XG4gICAgICAgIGNvbnRlbnQ6ICdSZWNvcmRlZCBMZWN0dXJlcyc7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIGNvbnRlbnQ6ICdRdWFsaWZpZWQgVGVhY2hlcnMnO1xuICAgIH1cbn0iLCIuY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmxpdmV0ZXh0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmxpdmV0ZXh0IHNwYW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZSBpbmZpbml0ZSAxMnM7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIDAlIHtcbiAgICBjb250ZW50OiBcIkNhbiBJIGhlbHAgWW91XCI7XG4gIH1cbiAgMjAlIHtcbiAgICBjb250ZW50OiBcIlJlY29yZGVkIExlY3R1cmVzXCI7XG4gIH1cbiAgNDAlIHtcbiAgICBjb250ZW50OiBcIlF1YWxpZmllZCBUZWFjaGVyc1wiO1xuICB9XG4gIDYwJSB7XG4gICAgY29udGVudDogXCJMaXZlIENsYXNzZXNcIjtcbiAgfVxuICA4MCUge1xuICAgIGNvbnRlbnQ6IFwiUmVjb3JkZWQgTGVjdHVyZXNcIjtcbiAgfVxuICAxMDAlIHtcbiAgICBjb250ZW50OiBcIlF1YWxpZmllZCBUZWFjaGVyc1wiO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teacher-footer/teacher-footer.component */ "./src/app/teacher-footer/teacher-footer.component.ts");





const _c0 = function () { return ["/Studentlogin"]; };
const _c1 = function () { return ["/Teacherlogin"]; };
const _c2 = function () { return ["/studentlogin"]; };
const _c3 = function () { return ["/teacherlogin"]; };
class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 119, vars: 14, consts: [[1, "bg-margin", "ipadshow"], ["src", "../../assets/homeipadshow.jpg", "width", "100%", 1, "img-fluid"], [1, "container"], [1, "card", "shadow", "ipadcard"], [1, "card-body"], [1, "livetext"], [1, "tetmain"], [1, "tt"], [1, "butons"], ["type", "button", 1, "btn", "shadow", "lern", "btn-lg", 3, "routerLink"], ["src", "../../assets/arrow-right.svg", 1, "arrowbtn"], ["type", "button", 1, "btn", "teachbut", "shadow", "btn-lg", 3, "routerLink"], [1, "bg-margin", "mobileshow"], [1, "row", "col-sm-12", "col-md-12", "col-xd-12"], [1, "col-sm-6", "col-md-6", "col-xd-6", "homeimg"], ["src", "../../assets/home-image.png", 1, "img-fluid"], [1, "col-sm-6", "col-md-6", "col-xd-6", "hometext"], [1, "bg-margin", "fullscreenshow"], [1, "row"], ["src", "../../assets/home-image.png", 1, "img-fluid", "hideimg"], [1, "bg-margin-section"], [1, "row", "bg-margin"], [1, "col-sm-4", "col-md-4", "col-xd-4"], [1, "card", "shadow", "cord"], [1, "sidecardimg"], [1, "image", "shadow"], ["src", "../../assets/live.png", "width", "30", "height", "30", 1, "img-fluid"], [1, "livetext1"], [1, "mb-2"], [1, "card-text"], ["src", "../../assets/home-icon-record.png", "width", "30", "height", "30", 1, "img-fluid"], ["src", "../../assets/hom-quali-teacher.png", "width", "30", "height", "30", 1, "img-fluid"], [1, "bg-margin-section1"], [1, "d-flex", "justify-content-center", "bg-margin"], [1, "card", "cardsection", "shadow"], [1, "col-sm-6", "col-md-6", "col-xl-6"], [1, "textcard"], [1, "cardtext1"], [1, "cardtext"], [1, "cardpara"], ["src", "../../assets/arrow-right.svg", "width", "20", "height", "20"], [1, "cardimg"], ["src", "../../assets/undraw_Online_learning_re_qw08.svg", "width", "400", "height", "400", 1, "img-fluid"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Connect With Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Learn anytime, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "anywhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Learner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Connect With Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Learn anytime, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "anywhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Learner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Connect With Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Learn anytime, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "anywhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Learner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "`\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h1", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Live Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "hr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Live Connection with educators, Chat with educators, ask questions, answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h1", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Recorded Lecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "hr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Student can learn anytime by Recorded Lecture, and also written content available ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h1", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Qualified Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "hr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Only certified teachers can teach, so that student gets better knowledge and grow better ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "section", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h1", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Learn,&");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Grow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Register the course and Learn anytime,anywhere with your favorite Tearcher's");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Learner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "app-teacher-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_3__["TeacherFooterComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n\n\n.mobileshow[_ngcontent-%COMP%] {\n  display: none;\n}\n.ipadshow[_ngcontent-%COMP%] {\n  display: none;\n}\n.homeimg[_ngcontent-%COMP%] {\n  margin-top: 90px;\n}\n.hometext[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n.hometext[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #0795b5;\n  font-weight: bolder;\n}\n.livetext[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: bold;\n  margin-top: 40px;\n  margin-bottom: 50px;\n}\n.livetext[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: \"\";\n  -webkit-animation: animate infinite 12s;\n          animation: animate infinite 12s;\n}\n@-webkit-keyframes animate {\n  0% {\n    content: \"Live Classes\";\n  }\n  20% {\n    content: \"Recorded Lectures\";\n  }\n  40% {\n    content: \"Qualified Teachers\";\n  }\n  60% {\n    content: \"Live Classes\";\n  }\n  80% {\n    content: \"Recorded Lectures\";\n  }\n  100% {\n    content: \"Qualified Teachers\";\n  }\n}\n@keyframes animate {\n  0% {\n    content: \"Live Classes\";\n  }\n  20% {\n    content: \"Recorded Lectures\";\n  }\n  40% {\n    content: \"Qualified Teachers\";\n  }\n  60% {\n    content: \"Live Classes\";\n  }\n  80% {\n    content: \"Recorded Lectures\";\n  }\n  100% {\n    content: \"Qualified Teachers\";\n  }\n}\n.lern[_ngcontent-%COMP%] {\n  background-color: #0795b5;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: 20px;\n  font-weight: bold;\n  margin-right: 10px;\n  padding: 14px 45px;\n}\n.arrowbtn[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.teachbut[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  border: 3px solid #0795b5;\n  color: #0795b5;\n  font-size: 20px;\n  font-weight: bold;\n  padding: 12px 45px;\n}\n.teachbut[_ngcontent-%COMP%]:hover {\n  color: #FFFFFF;\n  background-color: #0795b5;\n}\n.tt[_ngcontent-%COMP%] {\n  color: #0795b5;\n}\n.tetmain[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n  margin-bottom: 100px;\n  -webkit-animation: textanimation 1s ease-in-out;\n          animation: textanimation 1s ease-in-out;\n}\n@-webkit-keyframes textanimation {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    letter-spacing: 1px;\n  }\n}\n@keyframes textanimation {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    letter-spacing: 1px;\n  }\n}\n\n\n.bg-margin-section[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 150px;\n}\n.bg-margin[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.cord[_ngcontent-%COMP%] {\n  border: none;\n  padding: 10px 10px;\n  height: 180px;\n  background-color: #fff;\n  font-family: \"Roboto\", sans-serif;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n  z-index: 0;\n}\n.cord[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #0795b5;\n  z-index: -2;\n  -webkit-clip-path: circle(10% at 0% 0%);\n          clip-path: circle(10% at 0% 0%);\n  transition: -webkit-clip-path 0.5s ease-in-out;\n  transition: clip-path 0.5s ease-in-out;\n  transition: clip-path 0.5s ease-in-out, -webkit-clip-path 0.5s ease-in-out;\n}\n.cord[_ngcontent-%COMP%]:hover::after {\n  -webkit-clip-path: circle(80%);\n          clip-path: circle(80%);\n}\n.livetext1[_ngcontent-%COMP%] {\n  color: #000;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 30px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n.image[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 10px 10px;\n  border-radius: 50%;\n  box-shadow: 4px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  float: right;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 20px;\n  color: #000;\n  letter-spacing: 1px;\n  margin-top: 0px;\n}\n\n\n.cardsection[_ngcontent-%COMP%] {\n  border: none;\n  padding: 30px 30px;\n  width: 1000px;\n  display: block;\n}\n.cardimg[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 30px;\n}\n.cardtext[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 40px;\n  letter-spacing: 1px;\n  font-weight: bolder;\n  margin-top: 5px;\n  z-index: 1;\n}\n.cardtext1[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.cardtext1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 50px;\n  height: 3px;\n  margin-bottom: 5px;\n  background-color: #0795b5;\n  position: absolute;\n}\n.textcard[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  margin-left: 60px;\n}\n.cardpara[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 20px;\n  letter-spacing: 1px;\n  margin-bottom: 20px;\n  z-index: 1;\n  color: grey;\n}\n.bg-margin-section1[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-top: 150px;\n  margin-bottom: 150px;\n}\n\n@media (max-width: 1402px) {\n  .hometext[_ngcontent-%COMP%] {\n    margin-top: 180px;\n  }\n\n  .livetext[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    margin-bottom: 50px;\n  }\n}\n@media (max-width: 1198px) {\n  .hometext[_ngcontent-%COMP%] {\n    margin-top: 140px;\n  }\n\n  .livetext[_ngcontent-%COMP%] {\n    font-size: 40px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tetmain[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-bottom: 70px;\n  }\n\n  .lern[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: 12px 35px;\n  }\n\n  .teachbut[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: 12px 45px;\n  }\n\n  .cord[_ngcontent-%COMP%] {\n    height: 240px;\n  }\n\n  .bg-margin-section[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-top: 60px;\n  }\n\n  .bg-margin[_ngcontent-%COMP%] {\n    margin-top: 60px;\n  }\n}\n@media (max-width: 967px) {\n  .hometext[_ngcontent-%COMP%] {\n    margin-top: 120px;\n  }\n\n  .livetext[_ngcontent-%COMP%] {\n    font-size: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tetmain[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-bottom: 50px;\n  }\n\n  .lern[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 10px 15px;\n  }\n\n  .teachbut[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 9px 20px;\n  }\n}\n@media (max-width: 769px) {\n  .fullscreenshow[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .ipadshow[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .ipadshow[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n  .ipadshow[_ngcontent-%COMP%]   .ipadcard[_ngcontent-%COMP%] {\n    margin-top: -100px;\n    padding: 20px 20px;\n  }\n  .ipadshow[_ngcontent-%COMP%]   .ipadcard[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #0795b5;\n    font-weight: bolder;\n  }\n  .ipadshow[_ngcontent-%COMP%]   .ipadcard[_ngcontent-%COMP%]   .livetext[_ngcontent-%COMP%] {\n    font-size: 50px;\n    margin-bottom: 50px;\n  }\n  .ipadshow[_ngcontent-%COMP%]   .ipadcard[_ngcontent-%COMP%]   .tetmain[_ngcontent-%COMP%] {\n    font-size: 40px;\n    margin-bottom: 60px;\n  }\n  .ipadshow[_ngcontent-%COMP%]   .ipadcard[_ngcontent-%COMP%]   .lern[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-right: 10px;\n    padding: 15px 30px;\n  }\n  .ipadshow[_ngcontent-%COMP%]   .ipadcard[_ngcontent-%COMP%]   .teachbut[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: 13px 35px;\n  }\n\n  .cord[_ngcontent-%COMP%] {\n    height: 280px;\n    margin-bottom: 20px;\n  }\n\n  .livetext1[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n\n  .bg-margin-section[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-top: 50px;\n  }\n\n  .bg-margin[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n}\n@media (max-width: 566px) {\n  .hometext[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n\n  .fullscreenshow[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobileshow[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .ipadshow[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .cord[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-bottom: 20px;\n  }\n\n  .bg-margin-section[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-top: 20px;\n  }\n\n  .bg-margin[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n@media (max-width: 541px) {\n  .cord[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin: 10px;\n  }\n\n  .bg-margin-section[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-top: 30px;\n  }\n\n  .bg-margin[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n@media (max-width: 450px) {\n  .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 321px) {\n  .hometext[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .livetext[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-bottom: 30px;\n  }\n\n  .tetmain[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 40px;\n  }\n\n  .lern[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 10px 15px;\n  }\n\n  .teachbut[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 9px 20px;\n  }\n\n  .bg-margin-section[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-top: 20px;\n  }\n\n  .bg-margin[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n@media (max-width: 280px) {\n  .lern[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 10px 15px;\n  }\n\n  .arrowbtn[_ngcontent-%COMP%] {\n    width: 17px;\n    height: 17px;\n  }\n\n  .teachbut[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 9px 20px;\n  }\n\n  .about[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-weight: bold;\n    padding: 10px 25px;\n  }\n\n  .cord[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin: 8px;\n  }\n\n  .bg-margin-section[_ngcontent-%COMP%] {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-top: 20px;\n  }\n\n  .bg-margin[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcS25vd2xlZGdlU2V0dS1GRS1tYWluL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkVBQUE7QUFFUixzRkFBQTtBQUNBLHlCQUFBO0FBQ0E7RUFDSSxhQUFBO0FDQUo7QURFQTtFQUNJLGFBQUE7QUNDSjtBRENBO0VBQ0ksZ0JBQUE7QUNFSjtBREFBO0VBQ0ksaUJBQUE7QUNHSjtBRERBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDSUo7QURGQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNLSjtBREhBO0VBQ0ksV0FBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7QUNNSjtBREpBO0VBQ0k7SUFDSSx1QkFBQTtFQ09OO0VETEU7SUFDSSw0QkFBQTtFQ09OO0VETEU7SUFDSSw2QkFBQTtFQ09OO0VETEU7SUFDSSx1QkFBQTtFQ09OO0VETEU7SUFDSSw0QkFBQTtFQ09OO0VETEU7SUFDSSw2QkFBQTtFQ09OO0FBQ0Y7QUR6QkE7RUFDSTtJQUNJLHVCQUFBO0VDT047RURMRTtJQUNJLDRCQUFBO0VDT047RURMRTtJQUNJLDZCQUFBO0VDT047RURMRTtJQUNJLHVCQUFBO0VDT047RURMRTtJQUNJLDRCQUFBO0VDT047RURMRTtJQUNJLDZCQUFBO0VDT047QUFDRjtBRExBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNPSjtBRExBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNRSjtBRE5BO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDU0o7QURQQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtBQ1VKO0FEUkE7RUFDSSxjQUFBO0FDV0o7QURUQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQ1lKO0FEVEE7RUFDSTtJQUNJLG1CQUFBO0VDWU47RURWRTtJQUNJLG1CQUFBO0VDWU47QUFDRjtBRGxCQTtFQUNJO0lBQ0ksbUJBQUE7RUNZTjtFRFZFO0lBQ0ksbUJBQUE7RUNZTjtBQUNGO0FEVkEsOEZBQUE7QUFDQSw4QkFBQTtBQUNBO0VBQ0ksMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7QUNZSjtBRFZBO0VBQ0ksZ0JBQUE7QUNhSjtBRFhBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNjSjtBRFpBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSw4Q0FBQTtFQUFBLHNDQUFBO0VBQUEsMEVBQUE7QUNlSjtBRGJBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQ2dCSjtBRGRBO0VBQ0ksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNpQko7QURmQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxZQUFBO0FDa0JKO0FEaEJBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ21CSjtBRGpCQSw4RkFBQTtBQUNBLDBCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ29CSjtBRGxCQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUNxQko7QURuQkE7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNzQko7QURwQkE7RUFDSSxrQkFBQTtBQ3VCSjtBRHJCQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUN3Qko7QUR0QkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDeUJKO0FEdkJBO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDMEJKO0FEeEJBO0VBQ0ksMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQzJCSjtBRHhCQSwrRUFBQTtBQUNBO0VBQ0k7SUFDSSxpQkFBQTtFQzJCTjs7RUR6QkU7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0VDNEJOO0FBQ0Y7QUQxQkE7RUFDSTtJQUNJLGlCQUFBO0VDNEJOOztFRDFCRTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDNkJOOztFRDNCRTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQzhCTjs7RUQ1QkU7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7RUMrQk47O0VEN0JFO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VDZ0NOOztFRDlCRTtJQUNJLGFBQUE7RUNpQ047O0VEL0JFO0lBQ0ksMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNrQ047O0VEaENFO0lBQ0ksZ0JBQUE7RUNtQ047QUFDRjtBRGhDQTtFQUNJO0lBQ0ksaUJBQUE7RUNrQ047O0VEaENFO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VDbUNOOztFRGpDRTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFQ29DTjs7RURsQ0U7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7RUNxQ047O0VEbkNFO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0VDc0NOO0FBQ0Y7QURwQ0E7RUFDSTtJQUNJLGFBQUE7RUNzQ047O0VEcENFO0lBQ0ksY0FBQTtFQ3VDTjtFRHRDTTtJQUNJLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSw0QkFBQTtFQ3dDVjtFRHRDTTtJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7RUN3Q1Y7RUR2Q1U7SUFDSSxjQUFBO0lBQ0EsbUJBQUE7RUN5Q2Q7RUR2Q1U7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUN5Q2Q7RUR2Q1U7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUN5Q2Q7RUR2Q1U7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtFQ3lDZDtFRHZDVTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFQ3lDZDs7RURyQ0U7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7RUN3Q047O0VEdENFO0lBQ0ksZUFBQTtFQ3lDTjs7RUR2Q0U7SUFDSSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxnQkFBQTtFQzBDTjs7RUR4Q0U7SUFDSSxnQkFBQTtFQzJDTjtBQUNGO0FEekNBO0VBQ0k7SUFDSSxnQkFBQTtFQzJDTjs7RUR6Q0U7SUFDSSxhQUFBO0VDNENOOztFRDFDRTtJQUNJLGNBQUE7RUM2Q047O0VEM0NFO0lBQ0ksYUFBQTtFQzhDTjs7RUQ1Q0U7SUFDSSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxtQkFBQTtFQytDTjs7RUQ3Q0U7SUFDSSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxnQkFBQTtFQ2dETjs7RUQ5Q0U7SUFDSSxnQkFBQTtFQ2lETjtBQUNGO0FEOUNBO0VBQ0k7SUFDSSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxZQUFBO0VDZ0ROOztFRDlDRTtJQUNJLDJCQUFBO0lBQUEsd0JBQUE7SUFBQSxtQkFBQTtJQUNBLGdCQUFBO0VDaUROOztFRC9DRTtJQUNJLGdCQUFBO0VDa0ROO0FBQ0Y7QURoREE7RUFDSTtJQUNJLGFBQUE7RUNrRE47QUFDRjtBRC9DQTtFQUNJO0lBQ0ksZUFBQTtFQ2lETjs7RUQvQ0U7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUNrRE47O0VEaERFO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VDbUROOztFRGpERTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFQ29ETjs7RURsREU7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUNxRE47O0VEbkRFO0lBQ0ksMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNzRE47O0VEcERFO0lBQ0ksZ0JBQUE7RUN1RE47QUFDRjtBRHJEQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VDdUROOztFRHJERTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDd0ROOztFRHRERTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQ3lETjs7RUR2REU7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQzBETjs7RUR4REU7SUFDSSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxXQUFBO0VDMkROOztFRHpERTtJQUNJLDJCQUFBO0lBQUEsd0JBQUE7SUFBQSxtQkFBQTtJQUNBLGdCQUFBO0VDNEROOztFRDFERTtJQUNJLGdCQUFBO0VDNkROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyptYWluIHNlY3Rpb24gY3NzIHN0YXJ0Ki9cbi5tb2JpbGVzaG93e1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uaXBhZHNob3d7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5ob21laW1ne1xuICAgIG1hcmdpbi10b3A6IDkwcHg7ICAgIFxufVxuLmhvbWV0ZXh0e1xuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xufVxuLmhvbWV0ZXh0IGgxe1xuICAgIGNvbG9yOiAjMDc5NWI1O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4ubGl2ZXRleHR7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5saXZldGV4dCBzcGFuOjpiZWZvcmV7XG4gICAgY29udGVudDogJyc7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIGluZmluaXRlIDEycztcbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZXtcbiAgICAwJXtcbiAgICAgICAgY29udGVudDogJ0xpdmUgQ2xhc3Nlcyc7XG4gICAgfVxuICAgIDIwJXtcbiAgICAgICAgY29udGVudDogJ1JlY29yZGVkIExlY3R1cmVzJztcbiAgICB9XG4gICAgNDAle1xuICAgICAgICBjb250ZW50OiAnUXVhbGlmaWVkIFRlYWNoZXJzJztcbiAgICB9XG4gICAgNjAle1xuICAgICAgICBjb250ZW50OiAnTGl2ZSBDbGFzc2VzJztcbiAgICB9XG4gICAgODAle1xuICAgICAgICBjb250ZW50OiAnUmVjb3JkZWQgTGVjdHVyZXMnO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgICBjb250ZW50OiAnUXVhbGlmaWVkIFRlYWNoZXJzJztcbiAgICB9XG59XG4ubGVybntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDE0cHggNDVweDtcbn1cbi5hcnJvd2J0bntcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG4udGVhY2hidXR7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwNzk1YjU7XG4gICAgY29sb3I6ICMwNzk1YjU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDEycHggNDVweDtcbn1cbi50ZWFjaGJ1dDpob3ZlcntcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xufVxuLnR0e1xuICAgIGNvbG9yOiAjMDc5NWI1OyAgXG59XG4udGV0bWFpbntcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgYW5pbWF0aW9uOiB0ZXh0YW5pbWF0aW9uIDFzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHRleHRhbmltYXRpb257XG4gICAgMCV7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgfVxufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qc2Vjb25kYXJ5IHNlY3Rpb24gY3NzIHN0YXJ0Ki9cbi5iZy1tYXJnaW4tc2VjdGlvbntcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xufVxuLmJnLW1hcmdpbntcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmNvcmR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiAwO1xufVxuLmNvcmQ6OmFmdGVye1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gICAgei1pbmRleDogLTI7XG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoMTAlIGF0IDAlIDAlKTtcbiAgICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggLjVzIGVhc2UtaW4tb3V0O1xufVxuLmNvcmQ6aG92ZXI6OmFmdGVye1xuICAgIGNsaXAtcGF0aDogY2lyY2xlKDgwJSk7XG59XG4ubGl2ZXRleHQxe1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5pbWFnZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmZmZiwgJGFscGhhOiAxKTtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDRweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uY2FyZC10ZXh0e1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDIwcHg7IFxuICAgIGNvbG9yOiAjMDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qdGhpcmQgc2VjdGlvbiBjc3Mgc3RhcnQqL1xuLmNhcmRzZWN0aW9ue1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHg7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5jYXJkaW1ne1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmNhcmR0ZXh0e1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB6LWluZGV4OiAxO1xufVxuLmNhcmR0ZXh0MXtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2FyZHRleHQxOjpiZWZvcmV7XG4gICAgY29udGVudDpcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuLnRleHRjYXJke1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG4uY2FyZHBhcmF7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICBjb2xvcjogZ3JleSA7XG59XG4uYmctbWFyZ2luLXNlY3Rpb24xe1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEobWF4LXdpZHRoOjE0MDJweCl7XG4gICAgLmhvbWV0ZXh0e1xuICAgICAgICBtYXJnaW4tdG9wOiAxODBweDtcbiAgICB9XG4gICAgLmxpdmV0ZXh0e1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6MTE5OHB4KXtcbiAgICAuaG9tZXRleHR7XG4gICAgICAgIG1hcmdpbi10b3A6IDE0MHB4O1xuICAgIH1cbiAgICAubGl2ZXRleHR7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG4gICAgLnRldG1haW57XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICB9XG4gICAgLmxlcm57XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMTJweCAzNXB4O1xuICAgIH1cbiAgICAudGVhY2hidXR7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMTJweCA0NXB4O1xuICAgIH1cbiAgICAuY29yZHtcbiAgICAgICAgaGVpZ2h0OiAyNDBweDtcbiAgICB9XG4gICAgLmJnLW1hcmdpbi1zZWN0aW9ue1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIH1cbiAgICAuYmctbWFyZ2lue1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIH1cblxufVxuQG1lZGlhKG1heC13aWR0aDo5NjdweCl7XG4gICAgLmhvbWV0ZXh0e1xuICAgICAgICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgICB9XG4gICAgLmxpdmV0ZXh0e1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuICAgIC50ZXRtYWlue1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgfVxuICAgIC5sZXJue1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB9XG4gICAgLnRlYWNoYnV0e1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6NzY5cHgpe1xuICAgIC5mdWxsc2NyZWVuc2hvd3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmlwYWRzaG93e1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLmltZy1mbHVpZHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgICAgICAuaXBhZGNhcmR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gICAgICAgICAgICAuY2FyZC1ib2R5IGgxe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDc5NWI1O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGl2ZXRleHR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV0bWFpbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7IFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxlcm57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGVhY2hidXR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEzcHggMzVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29yZHtcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLmxpdmV0ZXh0MXtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgIH1cbiAgICAuYmctbWFyZ2luLXNlY3Rpb257XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICAgIC5iZy1tYXJnaW57XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfSBcbn1cbkBtZWRpYShtYXgtd2lkdGg6NTY2cHgpe1xuICAgIC5ob21ldGV4dHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gICAgLmZ1bGxzY3JlZW5zaG93e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubW9iaWxlc2hvd3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5pcGFkc2hvd3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmNvcmR7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5iZy1tYXJnaW4tc2VjdGlvbntcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgLmJnLW1hcmdpbntcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbn1cbkBtZWRpYShtYXgtd2lkdGg6NTQxcHgpe1xuICAgIC5jb3Jke1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuICAgIC5iZy1tYXJnaW4tc2VjdGlvbntcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gICAgLmJnLW1hcmdpbntcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG59XG5AbWVkaWEobWF4LXdpZHRoOjQ1MHB4KXtcbiAgICAubmF2YmFyLWJyYW5kIHNwYW57XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgXG59XG5AbWVkaWEobWF4LXdpZHRoOjMyMXB4KXtcbiAgICAuaG9tZXRleHQgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmxpdmV0ZXh0e1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIC50ZXRtYWlue1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuICAgIC5sZXJue1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB9XG4gICAgLnRlYWNoYnV0eyBcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBwYWRkaW5nOiA5cHggMjBweDtcbiAgICB9XG4gICAgLmJnLW1hcmdpbi1zZWN0aW9ue1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICAuYmctbWFyZ2lue1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6MjgwcHgpe1xuICAgIC5sZXJue1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB9XG4gICAgLmFycm93YnRue1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgIH1cbiAgICAudGVhY2hidXR7IFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgIH1cbiAgICAuYWJvdXR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDsgICBcbiAgICB9XG4gICAgLmNvcmR7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbjogOHB4O1xuICAgIH1cbiAgICAuYmctbWFyZ2luLXNlY3Rpb257XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICAgIC5iZy1tYXJnaW57XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG59XG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyptYWluIHNlY3Rpb24gY3NzIHN0YXJ0Ki9cbi5tb2JpbGVzaG93IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmlwYWRzaG93IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhvbWVpbWcge1xuICBtYXJnaW4tdG9wOiA5MHB4O1xufVxuXG4uaG9tZXRleHQge1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbn1cblxuLmhvbWV0ZXh0IGgxIHtcbiAgY29sb3I6ICMwNzk1YjU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5saXZldGV4dCB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5saXZldGV4dCBzcGFuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBhbmltYXRpb246IGFuaW1hdGUgaW5maW5pdGUgMTJzO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xuICAwJSB7XG4gICAgY29udGVudDogXCJMaXZlIENsYXNzZXNcIjtcbiAgfVxuICAyMCUge1xuICAgIGNvbnRlbnQ6IFwiUmVjb3JkZWQgTGVjdHVyZXNcIjtcbiAgfVxuICA0MCUge1xuICAgIGNvbnRlbnQ6IFwiUXVhbGlmaWVkIFRlYWNoZXJzXCI7XG4gIH1cbiAgNjAlIHtcbiAgICBjb250ZW50OiBcIkxpdmUgQ2xhc3Nlc1wiO1xuICB9XG4gIDgwJSB7XG4gICAgY29udGVudDogXCJSZWNvcmRlZCBMZWN0dXJlc1wiO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbnRlbnQ6IFwiUXVhbGlmaWVkIFRlYWNoZXJzXCI7XG4gIH1cbn1cbi5sZXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3OTViNTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZzogMTRweCA0NXB4O1xufVxuXG4uYXJyb3didG4ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4udGVhY2hidXQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMDc5NWI1O1xuICBjb2xvcjogIzA3OTViNTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTJweCA0NXB4O1xufVxuXG4udGVhY2hidXQ6aG92ZXIge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3OTViNTtcbn1cblxuLnR0IHtcbiAgY29sb3I6ICMwNzk1YjU7XG59XG5cbi50ZXRtYWluIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIGFuaW1hdGlvbjogdGV4dGFuaW1hdGlvbiAxcyBlYXNlLWluLW91dDtcbn1cblxuQGtleWZyYW1lcyB0ZXh0YW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qc2Vjb25kYXJ5IHNlY3Rpb24gY3NzIHN0YXJ0Ki9cbi5iZy1tYXJnaW4tc2VjdGlvbiB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xufVxuXG4uYmctbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNvcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAwO1xufVxuXG4uY29yZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIHotaW5kZXg6IC0yO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgxMCUgYXQgMCUgMCUpO1xuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmNvcmQ6aG92ZXI6OmFmdGVyIHtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoODAlKTtcbn1cblxuLmxpdmV0ZXh0MSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiA0cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qdGhpcmQgc2VjdGlvbiBjc3Mgc3RhcnQqL1xuLmNhcmRzZWN0aW9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAzMHB4IDMwcHg7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2FyZGltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNhcmR0ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uY2FyZHRleHQxIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2FyZHRleHQxOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRleHRjYXJkIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG5cbi5jYXJkcGFyYSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4uYmctbWFyZ2luLXNlY3Rpb24xIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1MHB4O1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiptZWRpYSBxdWVyeSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDE0MDJweCkge1xuICAuaG9tZXRleHQge1xuICAgIG1hcmdpbi10b3A6IDE4MHB4O1xuICB9XG5cbiAgLmxpdmV0ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk4cHgpIHtcbiAgLmhvbWV0ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxNDBweDtcbiAgfVxuXG4gIC5saXZldGV4dCB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuXG4gIC50ZXRtYWluIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgfVxuXG4gIC5sZXJuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTJweCAzNXB4O1xuICB9XG5cbiAgLnRlYWNoYnV0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTJweCA0NXB4O1xuICB9XG5cbiAgLmNvcmQge1xuICAgIGhlaWdodDogMjQwcHg7XG4gIH1cblxuICAuYmctbWFyZ2luLXNlY3Rpb24ge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxuXG4gIC5iZy1tYXJnaW4ge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjdweCkge1xuICAuaG9tZXRleHQge1xuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICB9XG5cbiAgLmxpdmV0ZXh0IHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuXG4gIC50ZXRtYWluIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC5sZXJuIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICB9XG5cbiAgLnRlYWNoYnV0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogOXB4IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xuICAuZnVsbHNjcmVlbnNob3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuaXBhZHNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5pcGFkc2hvdyAuaW1nLWZsdWlkIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxuICAuaXBhZHNob3cgLmlwYWRjYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xuICB9XG4gIC5pcGFkc2hvdyAuaXBhZGNhcmQgLmNhcmQtYm9keSBoMSB7XG4gICAgY29sb3I6ICMwNzk1YjU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuICAuaXBhZHNob3cgLmlwYWRjYXJkIC5saXZldGV4dCB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbiAgLmlwYWRzaG93IC5pcGFkY2FyZCAudGV0bWFpbiB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIH1cbiAgLmlwYWRzaG93IC5pcGFkY2FyZCAubGVybiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIH1cbiAgLmlwYWRzaG93IC5pcGFkY2FyZCAudGVhY2hidXQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAxM3B4IDM1cHg7XG4gIH1cblxuICAuY29yZCB7XG4gICAgaGVpZ2h0OiAyODBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmxpdmV0ZXh0MSB7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICB9XG5cbiAgLmJnLW1hcmdpbi1zZWN0aW9uIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cblxuICAuYmctbWFyZ2luIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTY2cHgpIHtcbiAgLmhvbWV0ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG5cbiAgLmZ1bGxzY3JlZW5zaG93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vYmlsZXNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmlwYWRzaG93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvcmQge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5iZy1tYXJnaW4tc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgLmJnLW1hcmdpbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MXB4KSB7XG4gIC5jb3JkIHtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5iZy1tYXJnaW4tc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG5cbiAgLmJnLW1hcmdpbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5uYXZiYXItYnJhbmQgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMXB4KSB7XG4gIC5ob21ldGV4dCBoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmxpdmV0ZXh0IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gIC50ZXRtYWluIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxuXG4gIC5sZXJuIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICB9XG5cbiAgLnRlYWNoYnV0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogOXB4IDIwcHg7XG4gIH1cblxuICAuYmctbWFyZ2luLXNlY3Rpb24ge1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIC5iZy1tYXJnaW4ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyODBweCkge1xuICAubGVybiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgfVxuXG4gIC5hcnJvd2J0biB7XG4gICAgd2lkdGg6IDE3cHg7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICB9XG5cbiAgLnRlYWNoYnV0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogOXB4IDIwcHg7XG4gIH1cblxuICAuYWJvdXQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIH1cblxuICAuY29yZCB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46IDhweDtcbiAgfVxuXG4gIC5iZy1tYXJnaW4tc2VjdGlvbiB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG5cbiAgLmJnLW1hcmdpbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/learner-details/learner-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/learner-details/learner-details.component.ts ***!
  \**************************************************************/
/*! exports provided: LearnerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnerDetailsComponent", function() { return LearnerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/admin"]; };
class LearnerDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LearnerDetailsComponent.ɵfac = function LearnerDetailsComponent_Factory(t) { return new (t || LearnerDetailsComponent)(); };
LearnerDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LearnerDetailsComponent, selectors: [["app-learner-details"]], decls: 52, vars: 2, consts: [[1, "jumbotron", "cordcol"], [1, "container"], [1, "col-sm-12", "col-md-12", "col-xd-12", "list-card"], [1, "card", "shadow"], [1, "card-header"], [2, "text-align", "right", "font-weight", "bold", "font-size", "20px"], [1, "card-body"], [1, "table-responsive-xl"], [1, "table", "table-hover", "table-bordered"], ["scope", "col"], ["scope", "row"], ["colspan", "2"], [1, "card-footer"], ["type", "button", 1, "btn", "detailsbtn", 3, "routerLink"]], template: function LearnerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Learner List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "FirstName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "LastName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".cordcol[_ngcontent-%COMP%] {\n  background-color: #239463;\n  width: 100%;\n  height: 200px;\n  border-radius: 0px;\n  border: none;\n}\n\n.list-card[_ngcontent-%COMP%] {\n  transform: translate(0px, -100px);\n  z-index: 2;\n}\n.detailsbtn[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #239463;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhcm5lci1kZXRhaWxzL0Q6XFxLbm93bGVkZ2VTZXR1LUZFLW1haW4vc3JjXFxhcHBcXGxlYXJuZXItZGV0YWlsc1xcbGVhcm5lci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sZWFybmVyLWRldGFpbHMvbGVhcm5lci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtHQUFBO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURDQSxnR0FBQTtBQUNBO0VBQ0ksaUNBQUE7RUFDQSxVQUFBO0FDRUo7QURBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDSCxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNHLHlCQUFBO0VBQ0EsZUFBQTtBQ0dKO0FEREE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuZXItZGV0YWlscy9sZWFybmVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKmJhY2tncm91bmQgZ3JlZW4gY29sb3IgY3NzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5jb3JkY29se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKnN0dWRlbnQgbGlzdCB0YWJsZSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmxpc3QtY2FyZHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsLTEwMHB4KTtcbiAgICB6LWluZGV4OiAyO1xufVxuLmRldGFpbHNidG57XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG5cdGNvbG9yOiAjZmZmZmZmO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRwYWRkaW5nOiAxMnB4IDQ1cHg7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFibGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufSIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqYmFja2dyb3VuZCBncmVlbiBjb2xvciBjc3MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmNvcmRjb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipzdHVkZW50IGxpc3QgdGFibGUqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5saXN0LWNhcmQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0xMDBweCk7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5kZXRhaWxzYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTJweCA0NXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearnerDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-learner-details',
                templateUrl: './learner-details.component.html',
                styleUrls: ['./learner-details.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/live-classes/live-classes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/live-classes/live-classes.component.ts ***!
  \********************************************************/
/*! exports provided: LiveClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveClassesComponent", function() { return LiveClassesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teacher-header/teacher-header.component */ "./src/app/teacher-header/teacher-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teacher-footer/teacher-footer.component */ "./src/app/teacher-footer/teacher-footer.component.ts");





class LiveClassesComponent {
    constructor() { }
    ngOnInit() {
    }
}
LiveClassesComponent.ɵfac = function LiveClassesComponent_Factory(t) { return new (t || LiveClassesComponent)(); };
LiveClassesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiveClassesComponent, selectors: [["app-live-classes"]], decls: 40, vars: 0, consts: [[1, "d-flex", "justify-content-center"], [1, "col-sm-12", "col-md-12", "col=-xd-12"], [1, "card", "shadow"], [1, "head"], [1, "card-body", "cord"], ["action", "#", 1, "fom"], ["for", "playlist", 1, "label"], ["aria-label", ".form-select-sm example", "id", "playlist", "required", "", 1, "form-select", "form-select-sm", "inp"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["for", "livetext", 1, "label"], ["type", "text", "placeholder", "Live class Subject", "name", "livesubject", "id", "vediotext", "required", "", 1, "inp"], ["for", "topic", 1, "label"], ["type", "url", "placeholder", "Live class topic", "name", "livetopic", "id", "topic", "required", "", 1, "inp"], [1, "row"], [1, "col-sm-6", "col-md-6", "col-xd-6"], ["for", "date", 1, "label"], ["type", "date", "name", "classdate", "id", "date", "required", "", 1, "inp"], ["for", "time", 1, "label"], ["type", "time", "name", "classtime", "id", "time", "required", "", 1, "inp"], [1, "mb-4"], [1, "btn", "bton", "shadow"], ["src", "../../assets/publish-white-18dp.svg", "width", "20", "height", "20", 1, "img-fluid"]], template: function LiveClassesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-teacher-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Live Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Class Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "class Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-teacher-footer");
    } }, directives: [_teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_1__["TeacherHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_3__["TeacherFooterComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0%;\n}\n\n.cord[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.head[_ngcontent-%COMP%] {\n  padding: 20px 30px;\n  text-transform: uppercase;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.labeltext[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-right: 10px;\n}\n\n.fom[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  padding: 10px 50px;\n  height: 100%;\n}\n\n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.inp[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  padding: 12px 15px;\n  margin: 8px 0;\n  width: 100%;\n}\n\n.bton[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #239463;\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 8px 15px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.bton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n\n\n@media (max-width: 574px) {\n  .fom[_ngcontent-%COMP%] {\n    background-color: #FFFFFF;\n    display: flex;\n    flex-direction: column;\n    padding: 10px 0px;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGl2ZS1jbGFzc2VzL0Q6XFxLbm93bGVkZ2VTZXR1LUZFLW1haW4vc3JjXFxhcHBcXGxpdmUtY2xhc3Nlc1xcbGl2ZS1jbGFzc2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9saXZlLWNsYXNzZXMvbGl2ZS1jbGFzc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDR0o7O0FEREU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREhFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNNSjs7QURKRTtFQUNFLGFBQUE7QUNPSjs7QURMRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNRSjs7QURORTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDU0o7O0FEUEU7RUFDRSxhQUFBO0FDVUo7O0FEUkUsaUZBQUE7O0FBQ0E7RUFFRTtJQUNJLHlCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VDVU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xpdmUtY2xhc3Nlcy9saXZlLWNsYXNzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMCU7XG4gIH1cbiAgLmNvcmR7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5oZWFke1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5sYWJlbHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmxhYmVsdGV4dHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuZm9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5mb3JtLXNlbGVjdDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIC5pbnAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5idG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzOTQ2MztcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgfVxuICAuYnRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqTWVkaWEgcXVlcnkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzRweCl7XG4gIFxuICAgIC5mb20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICBcbiAgfSIsIi5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwJTtcbn1cblxuLmNvcmQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uaGVhZCB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sYWJlbHRleHQge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5mb20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZvcm0tc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlucCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uYnRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipNZWRpYSBxdWVyeSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzRweCkge1xuICAuZm9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveClassesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-live-classes',
                templateUrl: './live-classes.component.html',
                styleUrls: ['./live-classes.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _student_header_student_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../student-header/student-header.component */ "./src/app/student-header/student-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teacher-footer/teacher-footer.component */ "./src/app/teacher-footer/teacher-footer.component.ts");





const _c0 = function () { return ["/student-dashboard/course/Running"]; };
const _c1 = function () { return ["/student-dashboard/course/save-courses"]; };
class MainComponent {
    constructor() {
        this.name = "Arpit";
        this.src = "../../assets/bookmark.svg";
        this.class = "XII";
    }
    ngOnInit() {
        var change = document.getElementById("change");
        change.addEventListener('click', () => {
            this.src = "../../assets/check-circle.svg";
        });
        $(document).ready(function () {
            $('.main-carousel').flickity({
                // options
                cellAlign: 'left',
                contain: true,
                lazyLoad: true,
                pageDots: false,
            });
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 409, vars: 41, consts: [[1, "container"], ["src", "../../assets/main.png", 1, "img-fluid"], [1, "bg-margin"], [1, "row"], [1, "col-sm-6", "col-md-6", "col-xd-6"], [1, "coursetext"], [1, "courselink", 3, "routerLink"], [1, "mb-1"], [1, "col-sm-12", "col-md-12", "col-xd-12"], [1, "card", 2, "width", "100%", "margin-top", "5px", "margin-bottom", "10px", "height", "fit-content"], [1, "card-body"], ["controls", "", 1, "video"], ["src", ""], [1, "subjectt"], [1, "inttext"], [1, "d-flex", "col-sm-12", "col-md-12", "col-xd-12"], [1, "show1", "bg-margin"], [1, "starttext"], ["data-flickity", "{\"pageDots\": false,\"contain\": true,\"autoPlay\": 1500,  \"freeScroll\": true, \"wrapAround\": true}", 1, "main-carousel"], [1, "carousel-cell"], [1, "card", "shadow"], ["cantrols", ""], ["src", "", "type", "video/mp4"], [1, "card-title"], [1, "card-text"], [1, "totalprice"], [1, "btn", "btnsub", "shadow"], ["id", "change", 1, "bookmark"], [3, "src"], ["id", "change8", 1, "bookmark"], ["id", "change7", 1, "bookmark"], ["id", "change6", 1, "bookmark"], ["id", "change5", 1, "bookmark"], ["id", "change4", 1, "bookmark"], ["id", "change3", 1, "bookmark"], ["id", "change2", 1, "bookmark"], ["id", "change1", 1, "bookmark"], [1, "show1"], [1, "container", "bg-margin"], [1, "subjecttext1"], [1, "subjecttext"], ["data-flickity", "{\"pageDots\": false,\"contain\": true,\"autoPlay\": 1800, \"lazyLoad\": true, \"freeScroll\": true, \"wrapAround\": true}", 1, "main-carousel"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-student-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Course Runing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Show all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "video", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "source", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Physics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Class XI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Save Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Show all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "video", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "source", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Physics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Class XI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Let's start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Physics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "video", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](408, "app-teacher-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" learning, ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_student_header_student_header_component__WEBPACK_IMPORTED_MODULE_1__["StudentHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_3__["TeacherFooterComponent"]], styles: [".coursetext[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  text-align: left;\n}\n.courselink[_ngcontent-%COMP%] {\n  float: right;\n}\n.video[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100px;\n  margin-right: 10px;\n  float: left;\n}\n.subject[_ngcontent-%COMP%] {\n  float: right;\n  display: block;\n  font-weight: lighter;\n  margin-top: 20px;\n  margin-left: 10px;\n  padding-left: 10px;\n}\n.subject[_ngcontent-%COMP%]   .intext[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.starttext[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n.starttext[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0795b5;\n  font-size: 30px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\n.subjecttext[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n.subjecttext1[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 50px;\n  height: 3px;\n  background-color: #0795b5;\n  position: absolute;\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  width: 18rem;\n  border-radius: 0px;\n  margin-left: 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.totalprice[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  float: right;\n}\n.btnsub[_ngcontent-%COMP%] {\n  border: 2px solid #0795b5;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 1px;\n  padding: 8px 8px;\n  cursor: pointer;\n  background-color: #0795b5;\n  color: white;\n}\n.show1[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.bg-margin[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n.main-carousel[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.bookmark[_ngcontent-%COMP%] {\n  float: right;\n  cursor: default;\n}\n.carousel-cell[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.carousel-cell[_ngcontent-%COMP%]::before {\n  display: block;\n}\n\n.flickity-button[_ngcontent-%COMP%] {\n  background: #333;\n}\n.flickity-button[_ngcontent-%COMP%]:hover {\n  background: #F90;\n}\n.flickity-prev-next-button[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 5px;\n}\n\n.flickity-button-icon[_ngcontent-%COMP%] {\n  fill: white;\n}\n\n.flickity-prev-next-button.previous[_ngcontent-%COMP%] {\n  left: -40px;\n}\n.flickity-prev-next-button.next[_ngcontent-%COMP%] {\n  right: -40px;\n}\n\n\n.footer[_ngcontent-%COMP%] {\n  background: #0795b5;\n  margin-top: 100px;\n}\n.comtt[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n.ptext[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n@media (max-width: 990px) {\n  .img[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .active[_ngcontent-%COMP%] {\n    color: #0795b5;\n  }\n}\n@media (max-width: 280px) {\n  .card[_ngcontent-%COMP%] {\n    border: none;\n    width: 15rem;\n    border-radius: 0px;\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9EOlxcS25vd2xlZGdlU2V0dS1GRS1tYWluL3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsbUZBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREVBO0VBQ0EsWUFBQTtBQ0NBO0FEQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0VGO0FEQUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDR0Y7QURGRTtFQUNFLGVBQUE7QUNJSjtBRERBLHlGQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0lGO0FERkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNLRjtBREhBLDJHQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ01GO0FESkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ09GO0FETEE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUUY7QUROQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNTRjtBRFBBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1VGO0FEUkE7RUFDRSxnQkFBQTtBQ1dGO0FEVEE7RUFDRSxpQkFBQTtBQ1lGO0FEVkE7RUFDRSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNhRjtBRFhBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNjRjtBRFpBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNlRjtBRGJBO0VBQ0UsY0FBQTtBQ2dCRjtBRGRBLGtDQUFBO0FBQ0E7RUFDRSxnQkFBQTtBQ2lCRjtBRGZBO0VBQ0UsZ0JBQUE7QUNrQkY7QURmQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNrQkY7QURoQkEsZUFBQTtBQUNBO0VBQ0UsV0FBQTtBQ21CRjtBRGpCQSxxQkFBQTtBQUNBO0VBQ0UsV0FBQTtBQ29CRjtBRGxCQTtFQUNFLFlBQUE7QUNxQkY7QURuQkEsOEZBQUE7QUFDQSxtQkFBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ3NCRjtBRHBCQTtFQUNFLG1CQUFBO0FDdUJGO0FEckJBO0VBQ0UsY0FBQTtBQ3dCRjtBRHRCQSwrRUFBQTtBQUlBO0VBQ0U7SUFDRSxhQUFBO0VDc0JGOztFRHBCQTtJQUNFLGNBQUE7RUN1QkY7QUFDRjtBRGpCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDbUJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqY3NzIGZvciBteSBsZWFybmluZyBzZWN0aW9uKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmNvdXJzZXRleHR7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jb3Vyc2VsaW5re1xuZmxvYXQ6IHJpZ2h0O1xufVxuLnZpZGVve1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uc3ViamVjdHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIC5pbnRleHR7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqY3NzIGZvciBzdGFydCBzZWN0aW9uKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5zdGFydHRleHR7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc3RhcnR0ZXh0IHNwYW57XG4gIGNvbG9yOiAjMDc5NWI1O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipjc3MgZm9yIGNvbnRhaW5lciBjb3Vyc2VsKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uc3ViamVjdHRleHR7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc3ViamVjdHRleHQxOjphZnRlcntcbiAgY29udGVudDpcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY2FyZHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMThyZW07XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udG90YWxwcmljZXtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmJ0bnN1YntcbiAgYm9yZGVyOiAycHggc29saWQgIzA3OTViNTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nOiA4cHggOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zaG93MXtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5iZy1tYXJnaW57XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLm1haW4tY2Fyb3VzZWx7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uYm9va21hcmt7XG4gIGZsb2F0OiByaWdodDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmNhcm91c2VsLWNlbGx7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbi5jYXJvdXNlbC1jZWxsOjpiZWZvcmV7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLyogc21hbGxlciwgZGFyaywgcm91bmRlZCBzcXVhcmUgKi9cbi5mbGlja2l0eS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xufVxuLmZsaWNraXR5LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNGOTA7XG59XG5cbi5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLyogaWNvbiBjb2xvciAqL1xuLmZsaWNraXR5LWJ1dHRvbi1pY29uIHtcbiAgZmlsbDogd2hpdGU7XG59XG4vKiBwb3NpdGlvbiBvdXRzaWRlICovXG4uZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbi5wcmV2aW91cyB7XG4gIGxlZnQ6IC00MHB4O1xufVxuLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ubmV4dCB7XG4gIHJpZ2h0OiAtNDBweDtcbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKmZvb3RlciBjc3Mgc3RhcnQqL1xuLmZvb3RlcntcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwNzk1YjUsICRhbHBoYTogMS4wKTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG4uY29tdHR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4ucHRleHR7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgXG4gIH1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCl7XG4gIC5pbWd7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWN0aXZle1xuICAgIGNvbG9yOiAjMDc5NWI1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODU4cHgpe1xuICAgIFxuICAgIFxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDI4MHB4KXtcbiAgLmNhcmR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufSIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqY3NzIGZvciBteSBsZWFybmluZyBzZWN0aW9uKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmNvdXJzZXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb3Vyc2VsaW5rIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udmlkZW8ge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zdWJqZWN0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uc3ViamVjdCAuaW50ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqY3NzIGZvciBzdGFydCBzZWN0aW9uKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5zdGFydHRleHQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uc3RhcnR0ZXh0IHNwYW4ge1xuICBjb2xvcjogIzA3OTViNTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipjc3MgZm9yIGNvbnRhaW5lciBjb3Vyc2VsKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uc3ViamVjdHRleHQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uc3ViamVjdHRleHQxOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnRvdGFscHJpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5idG5zdWIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDc5NWI1O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3OTViNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2hvdzEge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uYmctbWFyZ2luIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5tYWluLWNhcm91c2VsIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLmJvb2ttYXJrIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5jYXJvdXNlbC1jZWxsIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4uY2Fyb3VzZWwtY2VsbDo6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIHNtYWxsZXIsIGRhcmssIHJvdW5kZWQgc3F1YXJlICovXG4uZmxpY2tpdHktYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbn1cblxuLmZsaWNraXR5LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNGOTA7XG59XG5cbi5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKiBpY29uIGNvbG9yICovXG4uZmxpY2tpdHktYnV0dG9uLWljb24ge1xuICBmaWxsOiB3aGl0ZTtcbn1cblxuLyogcG9zaXRpb24gb3V0c2lkZSAqL1xuLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ucHJldmlvdXMge1xuICBsZWZ0OiAtNDBweDtcbn1cblxuLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ubmV4dCB7XG4gIHJpZ2h0OiAtNDBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi8qZm9vdGVyIGNzcyBzdGFydCovXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzA3OTViNTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5jb210dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5wdGV4dCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqbWVkaWEgcXVlcnkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KSB7XG4gIC5pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYWN0aXZlIHtcbiAgICBjb2xvcjogIzA3OTViNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDI4MHB4KSB7XG4gIC5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/running-class/running-class.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/running-class/running-class.component.ts ***!
  \**********************************************************/
/*! exports provided: RunningClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunningClassComponent", function() { return RunningClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RunningClassComponent {
    constructor() { }
    ngOnInit() {
    }
}
RunningClassComponent.ɵfac = function RunningClassComponent_Factory(t) { return new (t || RunningClassComponent)(); };
RunningClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RunningClassComponent, selectors: [["app-running-class"]], decls: 126, vars: 0, consts: [[1, "container"], [1, "row"], [1, "card"], [1, "col-sm-3", "col-md-3", "col-xd-3"], ["controls", "", 1, "video"], ["src", ""], [1, "col-sm-7", "col-md-7", "col-xd-7", "py-3"], ["src", "../../assets/list.svg", "width", "20", "height", "20"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "w-75"], [1, "col-sm-2", "col-md-2", "col-xd-2"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "mb-2"]], template: function RunningClassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Running Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mr Ashish Agrawal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add to collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Download Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Running Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Mr Ashish Agrawal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Add to collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Download Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Running Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Mr Ashish Agrawal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Add to collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Download Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Running Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Mr Ashish Agrawal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Add to collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Download Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".col-6[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.py-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-bottom: 5px;\n}\n\n.py-3[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 20px;\n  overflow: hidden;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.dropdown-menu.dropdown-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 5px;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(7, 149, 181, 0.3);\n}\n\n\n\n@media (max-width: 1256) {\n  .video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 160px;\n  }\n}\n\n@media (max-width: 1045px) {\n  .video[_ngcontent-%COMP%] {\n    width: 230px;\n    height: 160px;\n  }\n}\n\n@media (max-width: 858px) {\n  .progress[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 768px) {\n  .video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 140px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n\n  .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n\n@media (max-width: 540px) {\n  .video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 140px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media (max-width: 415px) {\n  .video[_ngcontent-%COMP%] {\n    width: 99%;\n    height: 150px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 376px) {\n  .video[_ngcontent-%COMP%] {\n    width: 99%;\n    height: 150px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 280px) {\n  .video[_ngcontent-%COMP%] {\n    width: 99%;\n    height: 140px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnVubmluZy1jbGFzcy9EOlxcS25vd2xlZGdlU2V0dS1GRS1tYWluL3NyY1xcYXBwXFxydW5uaW5nLWNsYXNzXFxydW5uaW5nLWNsYXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ydW5uaW5nLWNsYXNzL3J1bm5pbmctY2xhc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxnQkFBQTtBQ0tKOztBREZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLHdDQUFBO0FDTUo7O0FESkEsZ0NBQUE7O0FBQ0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxhQUFBO0VDT047QUFDRjs7QURMQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUNPTjtBQUNGOztBREpBO0VBQ0k7SUFDSSxhQUFBO0VDTU47QUFDRjs7QURKQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUNNTjs7RURKRTtJQUNJLFVBQUE7RUNPTjs7RURMRTtJQUNJLFVBQUE7RUNRTjtBQUNGOztBRE5BO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQ1FOOztFRE5FOztJQUVJLFVBQUE7RUNTTjtBQUNGOztBRFBBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsYUFBQTtFQ1NOOztFRFBFOztJQUVJLFdBQUE7RUNVTjtBQUNGOztBRFJBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsYUFBQTtFQ1VOOztFRFJFOztJQUVJLFdBQUE7RUNXTjtBQUNGOztBRFRBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsYUFBQTtFQ1dOOztFRFRFOztJQUVJLFdBQUE7RUNZTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcnVubmluZy1jbGFzcy9ydW5uaW5nLWNsYXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29sLTZ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnB5LTMgcHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnB5LTMgaDF7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuLmNhcmR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmRyb3Bkb3duLXRvZ2dsZXtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZHJvcGRvd24tbWVudXtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgXG59XG4uZHJvcGRvd24tbWVudS5kcm9wZG93bi1pdGVte1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDVweDtcbn1cbi5kcm9wZG93bi1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDc5NWI1LCAkYWxwaGE6IDAuMyk7XG59XG4vKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKi9cbkBtZWRpYShtYXgtd2lkdGg6MTI1Nil7XG4gICAgLnZpZGVve1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICB9XG59XG5AbWVkaWEobWF4LXdpZHRoOjEwNDVweCl7XG4gICAgLnZpZGVve1xuICAgICAgICB3aWR0aDogMjMwcHg7XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgfVxuXG59XG5AbWVkaWEobWF4LXdpZHRoOiA4NThweCl7XG4gICAgLnByb2dyZXNze1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xuICAgIC52aWRlb3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgfVxuICAgIC5jb2wtc20tMyAsLmNvbC1tZC0zICwuY29sLXhkLTN7XG4gICAgICAgIHdpZHRoOiA0MCVcbiAgICB9XG4gICAgLmNvbC1zbS03LC5jb2wtbWQtNywuY29sLXhkLTd7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgfVxufVxuQG1lZGlhKG1heC13aWR0aDo1NDBweCl7XG4gICAgLnZpZGVve1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICB9XG4gICAgLmNvbC1zbS0zICwuY29sLW1kLTMgLC5jb2wteGQtMyxcbiAgICAuY29sLXNtLTcsLmNvbC1tZC03LC5jb2wteGQtN3tcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG59XG5AbWVkaWEobWF4LXdpZHRoOjQxNXB4KXtcbiAgICAudmlkZW97XG4gICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgfVxuICAgIC5jb2wtc20tMyAsLmNvbC1tZC0zICwuY29sLXhkLTMsXG4gICAgLmNvbC1zbS03LC5jb2wtbWQtNywuY29sLXhkLTd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6Mzc2cHgpe1xuICAgIC52aWRlb3tcbiAgICAgICAgd2lkdGg6IDk5JTtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9XG4gICAgLmNvbC1zbS0zICwuY29sLW1kLTMgLC5jb2wteGQtMyxcbiAgICAuY29sLXNtLTcsLmNvbC1tZC03LC5jb2wteGQtN3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuQG1lZGlhKG1heC13aWR0aDoyODBweCl7XG4gICAgLnZpZGVve1xuICAgICAgICB3aWR0aDogOTklO1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIH1cbiAgICAuY29sLXNtLTMgLC5jb2wtbWQtMyAsLmNvbC14ZC0zLFxuICAgIC5jb2wtc20tNywuY29sLW1kLTcsLmNvbC14ZC03e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG59IiwiLmNvbC02IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucHktMyBwIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5weS0zIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5kcm9wZG93bi10b2dnbGUge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZHJvcGRvd24tbWVudS5kcm9wZG93bi1pdGVtIHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDVweDtcbn1cblxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDE0OSwgMTgxLCAwLjMpO1xufVxuXG4vKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjU2KSB7XG4gIC52aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNDVweCkge1xuICAudmlkZW8ge1xuICAgIHdpZHRoOiAyMzBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODU4cHgpIHtcbiAgLnByb2dyZXNzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICB9XG5cbiAgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wteGQtMyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuXG4gIC5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLXhkLTcge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAudmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTQwcHg7XG4gIH1cblxuICAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC14ZC0zLFxuLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wteGQtNyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNXB4KSB7XG4gIC52aWRlbyB7XG4gICAgd2lkdGg6IDk5JTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wteGQtMyxcbi5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLXhkLTcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzc2cHgpIHtcbiAgLnZpZGVvIHtcbiAgICB3aWR0aDogOTklO1xuICAgIGhlaWdodDogMTUwcHg7XG4gIH1cblxuICAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC14ZC0zLFxuLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wteGQtNyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyODBweCkge1xuICAudmlkZW8ge1xuICAgIHdpZHRoOiA5OSU7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgfVxuXG4gIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLXhkLTMsXG4uY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC14ZC03IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RunningClassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-running-class',
                templateUrl: './running-class.component.html',
                styleUrls: ['./running-class.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/savecourses/savecourses.component.ts":
/*!******************************************************!*\
  !*** ./src/app/savecourses/savecourses.component.ts ***!
  \******************************************************/
/*! exports provided: SavecoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavecoursesComponent", function() { return SavecoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SavecoursesComponent {
    constructor() { }
    ngOnInit() {
    }
}
SavecoursesComponent.ɵfac = function SavecoursesComponent_Factory(t) { return new (t || SavecoursesComponent)(); };
SavecoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SavecoursesComponent, selectors: [["app-savecourses"]], decls: 126, vars: 0, consts: [[1, "container"], [1, "row"], [1, "card"], [1, "col-sm-3", "col-md-3", "col-xd-3"], ["controls", "", 1, "video"], ["src", ""], [1, "col-sm-7", "col-md-7", "col-xd-7", "py-3"], ["src", "../../assets/list.svg", "width", "20", "height", "20"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "w-75"], [1, "col-sm-2", "col-md-2", "col-xd-2"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "mb-2"]], template: function SavecoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Running Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mr Ashish Agrawal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add to collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Download Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Running Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Mr Ashish Agrawal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Add to collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Download Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Running Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Mr Ashish Agrawal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Add to collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Download Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "source", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Running Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Mr Ashish Agrawal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Add to collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Download Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".col-6[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.py-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  margin-bottom: 5px;\n}\n\n.py-3[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 3px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 20px;\n  overflow: hidden;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.dropdown-menu.dropdown-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin: 5px;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(7, 149, 181, 0.3);\n}\n\n\n\n@media (max-width: 1256) {\n  .video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 160px;\n  }\n}\n\n@media (max-width: 1045px) {\n  .video[_ngcontent-%COMP%] {\n    width: 230px;\n    height: 160px;\n  }\n}\n\n@media (max-width: 858px) {\n  .progress[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 768px) {\n  .video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 140px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n\n  .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n\n@media (max-width: 540px) {\n  .video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 140px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media (max-width: 415px) {\n  .video[_ngcontent-%COMP%] {\n    width: 99%;\n    height: 150px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 376px) {\n  .video[_ngcontent-%COMP%] {\n    width: 99%;\n    height: 150px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 280px) {\n  .video[_ngcontent-%COMP%] {\n    width: 99%;\n    height: 140px;\n  }\n\n  .col-sm-3[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-xd-3[_ngcontent-%COMP%], .col-sm-7[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-xd-7[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F2ZWNvdXJzZXMvRDpcXEtub3dsZWRnZVNldHUtRkUtbWFpbi9zcmNcXGFwcFxcc2F2ZWNvdXJzZXNcXHNhdmVjb3Vyc2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYXZlY291cnNlcy9zYXZlY291cnNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0FDS0o7O0FERkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhBO0VBQ0ksd0NBQUE7QUNNSjs7QURKQSxnQ0FBQTs7QUFDQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUNPTjtBQUNGOztBRExBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ09OO0FBQ0Y7O0FESkE7RUFDSTtJQUNJLGFBQUE7RUNNTjtBQUNGOztBREpBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQ01OOztFREpFO0lBQ0ksVUFBQTtFQ09OOztFRExFO0lBQ0ksVUFBQTtFQ1FOO0FBQ0Y7O0FETkE7RUFDSTtJQUNJLFdBQUE7SUFDQSxhQUFBO0VDUU47O0VETkU7O0lBRUksVUFBQTtFQ1NOO0FBQ0Y7O0FEUEE7RUFDSTtJQUNJLFVBQUE7SUFDQSxhQUFBO0VDU047O0VEUEU7O0lBRUksV0FBQTtFQ1VOO0FBQ0Y7O0FEUkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxhQUFBO0VDVU47O0VEUkU7O0lBRUksV0FBQTtFQ1dOO0FBQ0Y7O0FEVEE7RUFDSTtJQUNJLFVBQUE7SUFDQSxhQUFBO0VDV047O0VEVEU7O0lBRUksV0FBQTtFQ1lOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zYXZlY291cnNlcy9zYXZlY291cnNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbC02e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5weS0zIHB7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5weS0zIGgxe1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5jYXJke1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5kcm9wZG93bi10b2dnbGV7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRyb3Bkb3duLW1lbnV7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIFxufVxuLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24taXRlbXtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG59XG4uZHJvcGRvd24taXRlbTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzA3OTViNSwgJGFscGhhOiAwLjMpO1xufVxuLyoqKioqKiptZWRpYSBxdWVyeSoqKioqKioqKioqKiovXG5AbWVkaWEobWF4LXdpZHRoOjEyNTYpe1xuICAgIC52aWRlb3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgfVxufVxuQG1lZGlhKG1heC13aWR0aDoxMDQ1cHgpe1xuICAgIC52aWRlb3tcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIH1cblxufVxuQG1lZGlhKG1heC13aWR0aDogODU4cHgpe1xuICAgIC5wcm9ncmVzc3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5AbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAudmlkZW97XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIH1cbiAgICAuY29sLXNtLTMgLC5jb2wtbWQtMyAsLmNvbC14ZC0ze1xuICAgICAgICB3aWR0aDogNDAlXG4gICAgfVxuICAgIC5jb2wtc20tNywuY29sLW1kLTcsLmNvbC14ZC03e1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6NTQwcHgpe1xuICAgIC52aWRlb3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgfVxuICAgIC5jb2wtc20tMyAsLmNvbC1tZC0zICwuY29sLXhkLTMsXG4gICAgLmNvbC1zbS03LC5jb2wtbWQtNywuY29sLXhkLTd7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuQG1lZGlhKG1heC13aWR0aDo0MTVweCl7XG4gICAgLnZpZGVve1xuICAgICAgICB3aWR0aDogOTklO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cbiAgICAuY29sLXNtLTMgLC5jb2wtbWQtMyAsLmNvbC14ZC0zLFxuICAgIC5jb2wtc20tNywuY29sLW1kLTcsLmNvbC14ZC03e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5AbWVkaWEobWF4LXdpZHRoOjM3NnB4KXtcbiAgICAudmlkZW97XG4gICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgfVxuICAgIC5jb2wtc20tMyAsLmNvbC1tZC0zICwuY29sLXhkLTMsXG4gICAgLmNvbC1zbS03LC5jb2wtbWQtNywuY29sLXhkLTd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6MjgwcHgpe1xuICAgIC52aWRlb3tcbiAgICAgICAgd2lkdGg6IDk5JTtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICB9XG4gICAgLmNvbC1zbS0zICwuY29sLW1kLTMgLC5jb2wteGQtMyxcbiAgICAuY29sLXNtLTcsLmNvbC1tZC03LC5jb2wteGQtN3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxufSIsIi5jb2wtNiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnB5LTMgcCB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucHktMyBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmRyb3Bkb3duLW1lbnUuZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCAxNDksIDE4MSwgMC4zKTtcbn1cblxuLyoqKioqKiptZWRpYSBxdWVyeSoqKioqKioqKioqKiovXG5AbWVkaWEgKG1heC13aWR0aDogMTI1Nikge1xuICAudmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDQ1cHgpIHtcbiAgLnZpZGVvIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg1OHB4KSB7XG4gIC5wcm9ncmVzcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC52aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgfVxuXG4gIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLXhkLTMge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cblxuICAuY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC14ZC03IHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcbiAgLnZpZGVvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICB9XG5cbiAgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wteGQtMyxcbi5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLXhkLTcge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MTVweCkge1xuICAudmlkZW8ge1xuICAgIHdpZHRoOiA5OSU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuXG4gIC5jb2wtc20tMywgLmNvbC1tZC0zLCAuY29sLXhkLTMsXG4uY29sLXNtLTcsIC5jb2wtbWQtNywgLmNvbC14ZC03IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NnB4KSB7XG4gIC52aWRlbyB7XG4gICAgd2lkdGg6IDk5JTtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG5cbiAgLmNvbC1zbS0zLCAuY29sLW1kLTMsIC5jb2wteGQtMyxcbi5jb2wtc20tNywgLmNvbC1tZC03LCAuY29sLXhkLTcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjgwcHgpIHtcbiAgLnZpZGVvIHtcbiAgICB3aWR0aDogOTklO1xuICAgIGhlaWdodDogMTQwcHg7XG4gIH1cblxuICAuY29sLXNtLTMsIC5jb2wtbWQtMywgLmNvbC14ZC0zLFxuLmNvbC1zbS03LCAuY29sLW1kLTcsIC5jb2wteGQtNyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SavecoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-savecourses',
                templateUrl: './savecourses.component.html',
                styleUrls: ['./savecourses.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/show-video/show-video.component.ts":
/*!****************************************************!*\
  !*** ./src/app/show-video/show-video.component.ts ***!
  \****************************************************/
/*! exports provided: ShowVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowVideoComponent", function() { return ShowVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teacher-header/teacher-header.component */ "./src/app/teacher-header/teacher-header.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../teacher-footer/teacher-footer.component */ "./src/app/teacher-footer/teacher-footer.component.ts");














function ShowVideoComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "video", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "source", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate4"]("src", "http://localhost:4000/", ctx_r2.Teacher_Id, "/", ctx_r2.VideoForm.Class, "/", ctx_r2.VideoForm.Subject, "/", file_r4, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ShowVideoComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No Videos Found!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ShowVideoComponent {
    constructor(cookieService, http) {
        this.cookieService = cookieService;
        this.http = http;
        this.Files = {};
        this.VideoFiles = [];
        this.Teacher_Id = "";
        this.regex = new RegExp('[^.]+$');
        this.VideoForm = {
            Class: "",
            Subject: ""
        };
    }
    showVideos() {
        this.VideoFiles = [];
        this.VideoForm.Subject = this.VideoForm.Subject.charAt(0).toUpperCase() + this.VideoForm.Subject.slice(1);
        this.VideoForm["Teacher_Id"] = this.Teacher_Id;
        console.log(this.VideoForm);
        this.http.post('/api/showVideos', JSON.stringify(this.VideoForm), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'Access-Control-Allow-Headers': 'true' }) }).subscribe((res) => {
            console.log(res);
            this.Files = res;
            var count = 0;
            for (var i in this.Files) {
                if (this.Files[i].name.match(this.regex) == 'mp4') {
                    this.VideoFiles[count] = this.Files[i].name;
                    count++;
                }
                console.log(this.VideoFiles);
            }
        });
    }
    ngOnInit() {
        this.Teacher_Id = JSON.parse(this.cookieService.get('User'))[0].Teacher_Id;
    }
}
ShowVideoComponent.ɵfac = function ShowVideoComponent_Factory(t) { return new (t || ShowVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ShowVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowVideoComponent, selectors: [["app-show-video"]], decls: 52, vars: 4, consts: [[1, "d-flex", "justify-content-center"], [1, "col-sm-12", "col-md-12", "col-xd-12"], [1, "card", "shadow"], [1, "card-body"], [1, "card-head"], [1, "row"], [1, "col-sm-6", "col-md-6", "col-xd-6"], ["appearance", "fill"], ["name", "Class", "required", "", 3, "ngModel", "ngModelChange"], ["Class", "ngModel"], ["value", "First"], ["value", "Second"], ["value", "Third"], ["value", "Fouth"], ["value", "Fiveth"], ["value", "Sixth"], ["value", "Seventh"], ["value", "Eighth"], ["value", "Nineth"], ["value", "Tenth"], ["value", "Eleventh"], ["value", "Twelfth"], [1, "example-form-field"], ["matInput", "", "type", "text", "name", "Subject", 3, "ngModel", "ngModelChange"], ["Subject", "ngModel"], ["mat-raised-button", "", "type", "submit", 1, "btn", "primary", 3, "click"], ["class", "card video", 4, "ngFor", "ngForOf"], ["class", "card-body", 4, "ngIf"], [1, "card", "video"], ["controls", "", "controlslist", "nodownload", 1, "videoshow"], ["type", "video/mp4", 3, "src"], [1, "Play-btn"], [1, "videolabel"], [1, "btn", "deletebtn", "shadow"], ["src", "../../assets/frame_4x.png"], [2, "color", "red"]], template: function ShowVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-teacher-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Vedio List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowVideoComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.VideoForm.Class = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "II");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "III");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "IV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "VI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "VII");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "VIII");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "IX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "XI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "XII");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowVideoComponent_Template_input_ngModelChange_43_listener($event) { return ctx.VideoForm.Subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowVideoComponent_Template_button_click_45_listener() { return ctx.showVideos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Show Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ShowVideoComponent_div_49_Template, 9, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ShowVideoComponent_div_50_Template, 5, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "app-teacher-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.VideoForm.Class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.VideoForm.Subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.VideoFiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.VideoFiles.length == 0);
    } }, directives: [_teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_3__["TeacherHeaderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_11__["TeacherFooterComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  border: none;\n}\n.card-head[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding-bottom: 5px;\n}\n.video[_ngcontent-%COMP%] {\n  border: none;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: 20px;\n  width: 300px;\n  margin-right: 10px;\n  display: inline-block;\n}\n.videoshow[_ngcontent-%COMP%] {\n  width: 260px;\n}\n.videolabel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #000000;\n}\n.deletebtn[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #239463;\n  color: #ffffff;\n  font-size: 10px;\n  font-weight: bold;\n  padding: 5px 15px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n@media (max-width: 1024px) {\n  .video[_ngcontent-%COMP%] {\n    border: none;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-bottom: 20px;\n    width: 420px;\n    margin-right: 20px;\n  }\n\n  .videoshow[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n}\n@media (max-width: 858px) {\n  .video[_ngcontent-%COMP%] {\n    border: none;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-bottom: 20px;\n    width: 320px;\n  }\n\n  .videoshow[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n}\n@media (max-width: 574px) {\n  .video[_ngcontent-%COMP%] {\n    border: none;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-bottom: 20px;\n    width: 340px;\n  }\n\n  .videoshow[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n@media (max-width: 542px) {\n  .video[_ngcontent-%COMP%] {\n    border: none;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-bottom: 20px;\n    width: 380px;\n  }\n\n  .videoshow[_ngcontent-%COMP%] {\n    width: 360px;\n  }\n}\n@media (max-width: 360px) {\n  .video[_ngcontent-%COMP%] {\n    border: none;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-bottom: 20px;\n    width: 320px;\n  }\n\n  .videoshow[_ngcontent-%COMP%] {\n    width: 280px;\n  }\n}\n@media (max-width: 320px) {\n  .video[_ngcontent-%COMP%] {\n    border: none;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-bottom: 20px;\n    width: 260px;\n  }\n\n  .videoshow[_ngcontent-%COMP%] {\n    width: 240px;\n  }\n}\n@media (max-width: 290px) {\n  .video[_ngcontent-%COMP%] {\n    border: none;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-bottom: 20px;\n    width: 240px;\n  }\n\n  .videoshow[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n.example-form-field[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy12aWRlby9EOlxcS25vd2xlZGdlU2V0dS1GRS1tYWluL3NyY1xcYXBwXFxzaG93LXZpZGVvXFxzaG93LXZpZGVvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaG93LXZpZGVvL3Nob3ctdmlkZW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQUE7QUFDQTtFQUNJLFlBQUE7QUNDSjtBRENFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEQUU7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0dKO0FEREU7RUFDRSxZQUFBO0FDSUo7QURGRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDS0o7QURIRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ01KO0FESkUsaUZBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLDJCQUFBO0lBQUEsd0JBQUE7SUFBQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDT0o7O0VETEU7SUFDRSxZQUFBO0VDUUo7QUFDRjtBRExFO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VDT0o7O0VETEU7SUFDRSxZQUFBO0VDUUo7QUFDRjtBRE5FO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VDUUo7O0VETkU7SUFDRSxZQUFBO0VDU0o7QUFDRjtBRFBFO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VDU0o7O0VEUEU7SUFDRSxZQUFBO0VDVUo7QUFDRjtBRFJFO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VDVUo7O0VEUkU7SUFDRSxZQUFBO0VDV0o7QUFDRjtBRFRFO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VDV0o7O0VEVEU7SUFDRSxZQUFBO0VDWUo7QUFDRjtBRFRFO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VDV0o7O0VEVEU7SUFDRSxZQUFBO0VDWUo7QUFDRjtBRFRFO0VBQ0UsWUFBQTtBQ1dKIiwiZmlsZSI6InNyYy9hcHAvc2hvdy12aWRlby9zaG93LXZpZGVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipzaG93IHZlZGlvIHNlY3Rpb24gY3NzKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5jYXJke1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAuY2FyZC1oZWFke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfSBcbiAgLnZpZGVve1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnZpZGVvc2hvd3tcbiAgICB3aWR0aDogMjYwcHg7XG4gIH1cbiAgLnZpZGVvbGFiZWwgcHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgLmRlbGV0ZWJ0bntcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzOTQ2MztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqTWVkaWEgcXVlcnkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAgIC52aWRlb3tcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgd2lkdGg6IDQyMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAudmlkZW9zaG93e1xuICAgICAgd2lkdGg6IDM2MHB4O1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg1OHB4KXtcbiAgICAudmlkZW97XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIHdpZHRoOiAzMjBweDtcbiAgICB9XG4gICAgLnZpZGVvc2hvd3tcbiAgICAgIHdpZHRoOiAyODBweDtcbiAgICB9XHRcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNTc0cHgpe1xuICAgIC52aWRlb3tcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgd2lkdGg6IDM0MHB4O1xuICAgIH1cbiAgICAudmlkZW9zaG93e1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNTQycHgpe1xuICAgIC52aWRlb3tcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgd2lkdGg6IDM4MHB4O1xuICAgIH1cbiAgICAudmlkZW9zaG93e1xuICAgICAgd2lkdGg6IDM2MHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpe1xuICAgIC52aWRlb3tcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgd2lkdGg6IDMyMHB4O1xuICAgIH1cbiAgICAudmlkZW9zaG93e1xuICAgICAgd2lkdGg6IDI4MHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpe1xuICAgIC52aWRlb3tcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgd2lkdGg6IDI2MHB4O1xuICAgIH1cbiAgICAudmlkZW9zaG93e1xuICAgICAgd2lkdGg6IDI0MHB4O1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDI5MHB4KXtcbiAgICAudmlkZW97XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIHdpZHRoOiAyNDBweDtcbiAgICB9XG4gICAgLnZpZGVvc2hvd3tcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG4gIFxuICB9XG4gIC5leGFtcGxlLWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfSIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqc2hvdyB2ZWRpbyBzZWN0aW9uIGNzcyoqKioqKioqKioqKioqKioqKioqKioqKiovXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNhcmQtaGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi52aWRlbyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnZpZGVvc2hvdyB7XG4gIHdpZHRoOiAyNjBweDtcbn1cblxuLnZpZGVvbGFiZWwgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZGVsZXRlYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKk1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAudmlkZW8ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDQyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuXG4gIC52aWRlb3Nob3cge1xuICAgIHdpZHRoOiAzNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg1OHB4KSB7XG4gIC52aWRlbyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMzIwcHg7XG4gIH1cblxuICAudmlkZW9zaG93IHtcbiAgICB3aWR0aDogMjgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzRweCkge1xuICAudmlkZW8ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDM0MHB4O1xuICB9XG5cbiAgLnZpZGVvc2hvdyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTQycHgpIHtcbiAgLnZpZGVvIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAzODBweDtcbiAgfVxuXG4gIC52aWRlb3Nob3cge1xuICAgIHdpZHRoOiAzNjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC52aWRlbyB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB3aWR0aDogMzIwcHg7XG4gIH1cblxuICAudmlkZW9zaG93IHtcbiAgICB3aWR0aDogMjgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAudmlkZW8ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDI2MHB4O1xuICB9XG5cbiAgLnZpZGVvc2hvdyB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjkwcHgpIHtcbiAgLnZpZGVvIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHdpZHRoOiAyNDBweDtcbiAgfVxuXG4gIC52aWRlb3Nob3cge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuLmV4YW1wbGUtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAyMDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-video',
                templateUrl: './show-video.component.html',
                styleUrls: ['./show-video.component.scss']
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student-course-documents/student-course-documents.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/student-course-documents/student-course-documents.component.ts ***!
  \********************************************************************************/
/*! exports provided: StudentCourseDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCourseDocumentsComponent", function() { return StudentCourseDocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StudentCourseDocumentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentCourseDocumentsComponent.ɵfac = function StudentCourseDocumentsComponent_Factory(t) { return new (t || StudentCourseDocumentsComponent)(); };
StudentCourseDocumentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentCourseDocumentsComponent, selectors: [["app-student-course-documents"]], decls: 2, vars: 0, template: function StudentCourseDocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "student-course-documents works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtY291cnNlLWRvY3VtZW50cy9zdHVkZW50LWNvdXJzZS1kb2N1bWVudHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentCourseDocumentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-course-documents',
                templateUrl: './student-course-documents.component.html',
                styleUrls: ['./student-course-documents.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/student-courses/student-courses.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/student-courses/student-courses.component.ts ***!
  \**************************************************************/
/*! exports provided: StudentCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCoursesComponent", function() { return StudentCoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StudentCoursesComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentCoursesComponent.ɵfac = function StudentCoursesComponent_Factory(t) { return new (t || StudentCoursesComponent)(); };
StudentCoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentCoursesComponent, selectors: [["app-student-courses"]], decls: 2, vars: 0, template: function StudentCoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "student-courses works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtY291cnNlcy9zdHVkZW50LWNvdXJzZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentCoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-courses',
                templateUrl: './student-courses.component.html',
                styleUrls: ['./student-courses.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/student-dashboard/student-dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/student-dashboard/student-dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: StudentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDashboardComponent", function() { return StudentDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _student_header_student_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../student-header/student-header.component */ "./src/app/student-header/student-header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teacher-footer/teacher-footer.component */ "./src/app/teacher-footer/teacher-footer.component.ts");





class StudentDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentDashboardComponent.ɵfac = function StudentDashboardComponent_Factory(t) { return new (t || StudentDashboardComponent)(); };
StudentDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentDashboardComponent, selectors: [["app-student-dashboard"]], decls: 4, vars: 0, consts: [[1, "bg-margin"]], template: function StudentDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-student-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-teacher-footer");
    } }, directives: [_student_header_student_header_component__WEBPACK_IMPORTED_MODULE_1__["StudentHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_3__["TeacherFooterComponent"]], styles: [".bg-margin[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1kYXNoYm9hcmQvRDpcXEtub3dsZWRnZVNldHUtRkUtbWFpbi9zcmNcXGFwcFxcc3R1ZGVudC1kYXNoYm9hcmRcXHN0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50LWRhc2hib2FyZC9zdHVkZW50LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBQTtBQUNBO0VBQ0csZ0JBQUE7QUNDSDtBRENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtZGFzaGJvYXJkL3N0dWRlbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqaGVhZGVyIGNzcyBzdHJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uYmctbWFyZ2lue1xuICAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKmNzcyBmb3Igc2lkZWJhcioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4jd3JhcHBlciB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuIH1cbiNzaWRlYmFyLXdyYXBwZXIge1xuICB6LWluZGV4OiAxMDAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xufVxuXG4jc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRpbmcge1xuICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuI3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCB7XG4gIHdpZHRoOiAxNXJlbTtcbn1cblxuXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICBtaW4td2lkdGg6IDEwMHZ3O1xufVxuXG4jd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5sZWZ0dG9nZ2xle1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjM5NDYzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRldG9nZ2xle1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlYWR0ZXh0e1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgY29sb3I6ICMyMzk0NjM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5zbi1zb2NpYWx7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zbi1zb2NpYWwuaGVhZHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uc2lkZW5hdi1saW5re1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uc2lkZW5hdi1saW5rOmhvdmVye1xuICBjb2xvcjogcmdiKDM1LCAxNDgsIDk5KSFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxyZ2JhKDM1LDE0OCw5OSwuMSkscmdiYSgzNSwxNDgsOTksLjA4NzUpIDUwJSx0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1sZWZ0OjRweCBzb2xpZCAjMjM5NDYzO1xufVxuLmFjdGl2ZXtcbiAgY29sb3I6IHJnYigzNSwgMTQ4LCA5OSkhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcscmdiYSgzNSwxNDgsOTksLjEpLHJnYmEoMzUsMTQ4LDk5LC4wODc1KSA1MCUsdHJhbnNwYXJlbnQpO1xuICBib3JkZXItbGVmdDo0cHggc29saWQgIzIzOTQ2Mztcbn1cbi5jYXJke1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMzMDA7XG4gIG1hcmdpbjogMjBweCAxMHB4IDIwcHggMTBweDtcbn1cbi5zaWRlY2FyZGltZyBoMXtcbiAgIGNvbG9yOiAjZmZmO1xuICAgZmxvYXQ6IGxlZnQ7XG4gICBmb250LXNpemU6IDIwcHg7XG59XG4uaW1hZ2V7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmZmZmLCAkYWxwaGE6IC4zKTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMCU7XG4gIGJveC1zaGFkb3c6IDRweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYnR0e1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmZmZiwgJGFscGhhOiAuMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idHQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubm90aWZ5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaW1ne1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubWItMntcbiAgbWFyZ2luOiAxNXB4IDE1cHg7XG59XG4uZmxleDF7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cbi5iZy1tYXJnaW57XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqY3NzIGZvciBtb2RhbCBhZGQgdGVhY2hlcioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi5tb2RhbC10aXRsZXtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG59XG4ubW9kYWwtdGl0bGU6OmJlZm9yZXtcbiAgY29udGVudDpcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubGFiZWx7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5yZXF1aXJlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLm1vZGFsaW5we1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbn1cbi5tb2RhbGJ0bntcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLm1vZGFsYnRuIC5idG57XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG4xe1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjM5NDYzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYnRuY2xvc2V7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjM5NDYzO1xuICBjb2xvcjogIzIzOTQ2Mztcbn1cbioqKioqKioqKioqKioqKioqKioqKioqKipmb290ZXIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuZm9vdGVyLmZvb3RlciB7XG4gIHBhZGRpbmc6IDFyZW0gLjg3NXJlbTtcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgI3NpZGViYXItd3JhcHBlciB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gIFxuICAgICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIFxuICAgICN3cmFwcGVyLnRvZ2dsZWQgI3NpZGViYXItd3JhcHBlciB7XG4gICAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xuICAgIH1cbiAgfVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MHB4KXtcbiAgIFxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg1OHB4KXtcbiAgICBcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCl7XG4gLmZsZXgxIGF7XG4gICBkaXNwbGF5OiBub25lO1xuIH1cbn0qLyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKmhlYWRlciBjc3Mgc3RydCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmJnLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKmNzcyBmb3Igc2lkZWJhcioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4jd3JhcHBlciB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuIH1cbiNzaWRlYmFyLXdyYXBwZXIge1xuICB6LWluZGV4OiAxMDAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xufVxuXG4jc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRpbmcge1xuICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuI3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCB7XG4gIHdpZHRoOiAxNXJlbTtcbn1cblxuXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICBtaW4td2lkdGg6IDEwMHZ3O1xufVxuXG4jd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5sZWZ0dG9nZ2xle1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjM5NDYzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRldG9nZ2xle1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlYWR0ZXh0e1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgY29sb3I6ICMyMzk0NjM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5zbi1zb2NpYWx7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zbi1zb2NpYWwuaGVhZHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uc2lkZW5hdi1saW5re1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uc2lkZW5hdi1saW5rOmhvdmVye1xuICBjb2xvcjogcmdiKDM1LCAxNDgsIDk5KSFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxyZ2JhKDM1LDE0OCw5OSwuMSkscmdiYSgzNSwxNDgsOTksLjA4NzUpIDUwJSx0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1sZWZ0OjRweCBzb2xpZCAjMjM5NDYzO1xufVxuLmFjdGl2ZXtcbiAgY29sb3I6IHJnYigzNSwgMTQ4LCA5OSkhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcscmdiYSgzNSwxNDgsOTksLjEpLHJnYmEoMzUsMTQ4LDk5LC4wODc1KSA1MCUsdHJhbnNwYXJlbnQpO1xuICBib3JkZXItbGVmdDo0cHggc29saWQgIzIzOTQ2Mztcbn1cbi5jYXJke1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMzMDA7XG4gIG1hcmdpbjogMjBweCAxMHB4IDIwcHggMTBweDtcbn1cbi5zaWRlY2FyZGltZyBoMXtcbiAgIGNvbG9yOiAjZmZmO1xuICAgZmxvYXQ6IGxlZnQ7XG4gICBmb250LXNpemU6IDIwcHg7XG59XG4uaW1hZ2V7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmZmZmLCAkYWxwaGE6IC4zKTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMCU7XG4gIGJveC1zaGFkb3c6IDRweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYnR0e1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmZmZiwgJGFscGhhOiAuMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idHQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubm90aWZ5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaW1ne1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubWItMntcbiAgbWFyZ2luOiAxNXB4IDE1cHg7XG59XG4uZmxleDF7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cbi5iZy1tYXJnaW57XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqY3NzIGZvciBtb2RhbCBhZGQgdGVhY2hlcioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi5tb2RhbC10aXRsZXtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG59XG4ubW9kYWwtdGl0bGU6OmJlZm9yZXtcbiAgY29udGVudDpcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubGFiZWx7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5yZXF1aXJlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLm1vZGFsaW5we1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbn1cbi5tb2RhbGJ0bntcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLm1vZGFsYnRuIC5idG57XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG4xe1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjM5NDYzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYnRuY2xvc2V7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjM5NDYzO1xuICBjb2xvcjogIzIzOTQ2Mztcbn1cbioqKioqKioqKioqKioqKioqKioqKioqKipmb290ZXIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuZm9vdGVyLmZvb3RlciB7XG4gIHBhZGRpbmc6IDFyZW0gLjg3NXJlbTtcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgI3NpZGViYXItd3JhcHBlciB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAjcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XG4gICAgfVxuICB9XG5AbWVkaWEgKG1heC13aWR0aDogOTkwcHgpe1xuXG59XG5AbWVkaWEgKG1heC13aWR0aDogODU4cHgpe1xuXG59XG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpe1xuIC5mbGV4MSBhe1xuICAgZGlzcGxheTogbm9uZTtcbiB9XG59Ki8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-dashboard',
                templateUrl: './student-dashboard.component.html',
                styleUrls: ['./student-dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/student-header/student-header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/student-header/student-header.component.ts ***!
  \************************************************************/
/*! exports provided: StudentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentHeaderComponent", function() { return StudentHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






const _c0 = function () { return ["/main-pannel"]; };
const _c1 = function () { return ["/student-dashboard/course"]; };
const _c2 = function () { return ["/student-dashboard"]; };
const _c3 = function () { return ["/student-dashboard/help"]; };
class StudentHeaderComponent {
    constructor(cookieService, router, http) {
        this.cookieService = cookieService;
        this.router = router;
        this.http = http;
        this.logout = () => {
            //Session needs to be clear here from backend
            //then cookie
            this.http.get('/api/logout').subscribe((res) => {
                console.log(res);
                if (res["LoggedIn"] == false) {
                    const dateNow = new Date();
                    this.deleteCookie();
                    setTimeout(() => { this.router.navigate(['/']); }, 1000);
                }
            });
        };
    }
    deleteCookie() {
        this.cookieService.delete('Id', '/');
    }
    ngOnInit() {
    }
}
StudentHeaderComponent.ɵfac = function StudentHeaderComponent_Factory(t) { return new (t || StudentHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
StudentHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentHeaderComponent, selectors: [["app-student-header"]], decls: 85, vars: 10, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "shadow"], [1, "container"], [1, "navbar-brand"], ["src", "../../assets/new-logo.jpeg", "width", "60", "height", "60"], [1, "colortext"], [1, "searchbtn"], ["src", "../../assets/new-search.svg", "width", "30", "height", "30", 1, "search"], [1, "d-flex"], ["type", "search", "placeholder", "Search for Subject", "aria-label", "Search", 1, "form-control", "navsearch"], ["type", "submit", 1, "btn", "navsearch"], ["src", "../../assets/search-white.svg", "width", "20", "height", "20"], [1, "navbar-text"], [1, "nav-item"], ["src", "../../assets/home-alt2.svg", "width", "20", "height", "20", 1, "img", "home"], ["routerLinkActive", "active", 1, "nav-link", "home", 3, "routerLink"], ["src", "../../assets/user-plus.svg", "width", "20", "height", "20", 1, "img", "addteacher"], ["data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", "routerLinkActive", "active", 1, "nav-link", "addteacher"], ["src", "../../assets/book-open.svg", "width", "20", "height", "20", 1, "img", "mylearning"], ["routerLinkActive", "active", 1, "nav-link", "mylearning", 3, "routerLink"], [1, "nav-item", "dropdown"], ["src", "../../assets/user.svg", "width", "20", "height", "20", 1, "img"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "shadow"], [1, "dropdown-text"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item", "mb-2", 3, "routerLink"], ["src", "../../assets/user.svg", 1, "dropicon"], ["src", "../../assets/book-open.svg", 1, "dropicon"], ["data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", 1, "dropdown-item", "mb-2"], ["src", "../../assets/user-plus.svg", 1, "dropicon"], ["href", "#", 1, "dropdown-item", "mb-2"], ["src", "../../assets/settings.svg", 1, "dropicon"], [1, "dropdown-item", "mb-2", 3, "routerLink"], ["src", "../../assets/help-circle.svg", 1, "dropicon"], ["onclick", "logout()", 1, "dropdown-item", "mb-2"], ["src", "../../assets/log-out.svg", 1, "dropicon"], ["src", "../../assets/log-out.svg", "width", "20", "height", "20", 1, "img", "logout"], ["routerLinkActive", "active", 1, "nav-link", "logout", 3, "click"], ["id", "staticBackdrop", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], [1, "modal-body"], [1, "modalform"], ["for", "teacherid", 1, "label"], [1, "required"], ["type", "text", "id", "teacherid", "placeholder", "Enter Teacher class ID", "required", "", 1, "modalinp"], [1, "modalbtn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btnclose", "shadow"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn1", "shadow"], ["src", "../../assets/arrow-right.svg"]], template: function StudentHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Knowledge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Setu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "My Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Arpit Katiyar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "My Learning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Add Teacher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "hr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentHeaderComponent_Template_button_click_64_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Add Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Teacher Class ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "join ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n\n.nav-item[_ngcontent-%COMP%] {\n  text-align: center;\n  display: inline-block;\n  margin-left: 10px;\n  cursor: pointer;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.navbar-brand[_ngcontent-%COMP%]   .colortext[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #0795b5;\n}\n.active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #0795b5;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  border-bottom: 3px solid #0795b5;\n  font-family: \"Roboto\", sans-serif;\n}\n.search[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.btn[_ngcontent-%COMP%] {\n  background-color: #0795b5;\n  border-radius: 0px;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  width: 400px;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.dropdown-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.dropdown-divider[_ngcontent-%COMP%] {\n  margin: 10px 10px;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(7, 149, 181, 0.3);\n}\n.dropicon[_ngcontent-%COMP%] {\n  float: right;\n  width: 20px;\n  height: 20px;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  float: left;\n  margin-bottom: -5px;\n}\n.modal-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 60px;\n  height: 3px;\n  background-color: #0795b5;\n  position: absolute;\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.required[_ngcontent-%COMP%]::before {\n  content: \"*\";\n  color: red;\n  margin-right: 3px;\n}\n.modalinp[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  border-radius: 5px;\n  padding: 12px 15px;\n  margin: 8px 0;\n  width: 100%;\n  border: 2px solid #000000;\n}\n.modalbtn[_ngcontent-%COMP%] {\n  float: right;\n}\n.modalbtn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 12px;\n  letter-spacing: 1px;\n  padding: 8px 8px;\n  cursor: pointer;\n}\n.btn1[_ngcontent-%COMP%] {\n  border: 2px solid #0795b5;\n  background-color: #0795b5;\n  color: white;\n}\n.btnclose[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  border: 2px solid #0795b5;\n  color: #0795b5;\n}\n\n@media (max-width: 1260px) {\n  .navsearch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 1024px) {\n  .home[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .search[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .navsearch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .search[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mylearning[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .navsearch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 540px) {\n  .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .search[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .navsearch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 433px) {\n  .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .search[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .addteacher[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .navsearch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 377px) {\n  .addteacher[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .navsearch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 296px) {\n  .logout[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .search[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .dropdown-menu[_ngcontent-%COMP%] {\n    left: auto;\n    right: 0;\n  }\n\n  .navsearch[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1oZWFkZXIvRDpcXEtub3dsZWRnZVNldHUtRkUtbWFpbi9zcmNcXGFwcFxcc3R1ZGVudC1oZWFkZXJcXHN0dWRlbnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50LWhlYWRlci9zdHVkZW50LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyRUFBQTtBQUNSLHdFQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7QURDRTtFQUNFLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDRUo7QURBQTtFQUNHLGdCQUFBO0VBQ0EsY0FBQTtBQ0dIO0FEQUE7RUFDSSxnQ0FBQTtBQ0dKO0FEREE7RUFDSSxnQ0FBQTtFQUNBLGlDQUFBO0FDSUo7QURGQTtFQUNJLGtCQUFBO0FDS0o7QURIQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNNSjtBREpBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDT0o7QURMQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ1FKO0FETkE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNTSjtBRFBBO0VBQ0ksa0JBQUE7QUNVSjtBRFJBO0VBQ0ksaUJBQUE7QUNXSjtBRFRBO0VBQ0ksd0NBQUE7QUNZSjtBRFZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDYUo7QURYQSxrR0FBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDY0o7QURaRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDZUo7QURiRTtFQUNFLGVBQUE7QUNnQko7QURkRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNpQko7QURmRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDa0JKO0FEaEJFO0VBQ0UsWUFBQTtBQ21CSjtBRGpCRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNvQko7QURsQkU7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ3FCSjtBRG5CRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDc0JKO0FEcEJBLGNBQUE7QUFDQTtFQUNJO0lBQ0ksYUFBQTtFQ3VCTjtBQUNGO0FEckJBO0VBQ0k7SUFDSSxhQUFBO0VDdUJOOztFRHJCRTtJQUNJLGFBQUE7RUN3Qk47O0VEdEJFO0lBQ0ksYUFBQTtFQ3lCTjtBQUNGO0FEdkJBO0VBQ0k7SUFDSSxhQUFBO0VDeUJOOztFRHZCRTtJQUNJLGFBQUE7RUMwQk47O0VEeEJFO0lBQ0ksYUFBQTtFQzJCTjs7RUR6QkU7SUFDSSxhQUFBO0VDNEJOO0FBQ0Y7QUQxQkE7RUFDSTtJQUNJLGFBQUE7RUM0Qk47O0VEMUJFO0lBQ0csYUFBQTtFQzZCTDs7RUQzQkU7SUFDSSxhQUFBO0VDOEJOO0FBQ0Y7QUQ1QkE7RUFDSTtJQUNJLGFBQUE7RUM4Qk47O0VENUJFO0lBQ0ksYUFBQTtFQytCTjs7RUQ3QkU7SUFDSSxhQUFBO0VDZ0NOOztFRDlCRTtJQUNJLGFBQUE7RUNpQ047QUFDRjtBRC9CQTtFQUNJO0lBQ0ksYUFBQTtFQ2lDTjs7RUQvQkU7SUFDSSxhQUFBO0VDa0NOO0FBQ0Y7QURoQ0E7RUFDSTtJQUNJLGFBQUE7RUNrQ047O0VEaENFO0lBQ0csYUFBQTtFQ21DTDs7RURqQ0U7SUFDSSxVQUFBO0lBQ0EsUUFBQTtFQ29DTjs7RURsQ0U7SUFDSSxhQUFBO0VDcUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50LWhlYWRlci9zdHVkZW50LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcbi8qKioqKioqKioqKioqKioqKioqKioqKmNzcyBmb3IgbmF2YmFyKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5uYXYtaXRlbXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAubmF2YmFyLWJyYW5ke1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4ubmF2YmFyLWJyYW5kIC5jb2xvcnRleHR7XG4gICBtYXJnaW4tbGVmdDogOHB4OyBcbiAgIGNvbG9yOiAjMDc5NWI1O1xufVxuXG4uYWN0aXZle1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDc5NWI1O1xufVxuLm5hdi1saW5rOmhvdmVye1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDc5NWI1O1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cbi5zZWFyY2h7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5idG46Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5mb3JtLWNvbnRyb2x7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbn1cbi5mb3JtLWNvbnRyb2w6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuLmRyb3Bkb3duLXRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRyb3Bkb3duLWRpdmlkZXJ7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XG59XG4uZHJvcGRvd24taXRlbTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzA3OTViNSwgJGFscGhhOiAwLjMpO1xufVxuLmRyb3BpY29ue1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipjc3MgZm9yIG1vZGFsIGFkZCB0ZWFjaGVyKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5tb2RhbC10aXRsZXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICB9XG4gIC5tb2RhbC10aXRsZTo6YmVmb3Jle1xuICAgIGNvbnRlbnQ6XCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAubGFiZWx7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5yZXF1aXJlZDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIipcIjtcbiAgICBjb2xvcjogcmVkO1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICB9XG4gIC5tb2RhbGlucHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbiAgfVxuICAubW9kYWxidG57XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5tb2RhbGJ0biAuYnRue1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgcGFkZGluZzogOHB4IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmJ0bjF7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzA3OTViNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuYnRuY2xvc2V7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzA3OTViNTtcbiAgICBjb2xvcjogIzA3OTViNTtcbiAgfSAgXG4vKm1lZGlhIHF1ZXJ5Ki9cbkBtZWRpYShtYXgtd2lkdGg6MTI2MHB4KXtcbiAgICAubmF2c2VhcmNoe1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6MTAyNHB4KXtcbiAgICAuaG9tZXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNlYXJjaHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm5hdnNlYXJjaHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5AbWVkaWEobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAubmF2YmFyLWJyYW5kIHNwYW57XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5zZWFyY2h7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5teWxlYXJuaW5ne1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubmF2c2VhcmNoe1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6NTQwcHgpe1xuICAgIC5uYXZiYXItYnJhbmQgc3BhbntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNlYXJjaHtcbiAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubmF2c2VhcmNoe1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6NDMzcHgpe1xuICAgIC5uYXZiYXItYnJhbmQgc3BhbntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNlYXJjaHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmFkZHRlYWNoZXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5uYXZzZWFyY2h7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSBcbkBtZWRpYShtYXgtd2lkdGg6Mzc3cHgpe1xuICAgIC5hZGR0ZWFjaGVye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubmF2c2VhcmNoe1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6Mjk2cHgpe1xuICAgIC5sb2dvdXR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5zZWFyY2h7XG4gICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmRyb3Bkb3duLW1lbnV7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICAubmF2c2VhcmNoe1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcbi8qKioqKioqKioqKioqKioqKioqKioqKmNzcyBmb3IgbmF2YmFyKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5uYXYtaXRlbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ubmF2YmFyLWJyYW5kIC5jb2xvcnRleHQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogIzA3OTViNTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDc5NWI1O1xufVxuXG4ubmF2LWxpbms6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzA3OTViNTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5zZWFyY2gge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5idG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZHJvcGRvd24tdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRyb3Bkb3duLWRpdmlkZXIge1xuICBtYXJnaW46IDEwcHggMTBweDtcbn1cblxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDE0OSwgMTgxLCAwLjMpO1xufVxuXG4uZHJvcGljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKmNzcyBmb3IgbW9kYWwgYWRkIHRlYWNoZXIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLm1vZGFsLXRpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG59XG5cbi5tb2RhbC10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3OTViNTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5yZXF1aXJlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4ubW9kYWxpbnAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbn1cblxuLm1vZGFsYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubW9kYWxidG4gLmJ0biB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bjEge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDc5NWI1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG5jbG9zZSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDc5NWI1O1xuICBjb2xvcjogIzA3OTViNTtcbn1cblxuLyptZWRpYSBxdWVyeSovXG5AbWVkaWEgKG1heC13aWR0aDogMTI2MHB4KSB7XG4gIC5uYXZzZWFyY2gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmhvbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc2VhcmNoIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5hdnNlYXJjaCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5uYXZiYXItYnJhbmQgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zZWFyY2gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubXlsZWFybmluZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5uYXZzZWFyY2gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAubmF2YmFyLWJyYW5kIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc2VhcmNoIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5hdnNlYXJjaCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQzM3B4KSB7XG4gIC5uYXZiYXItYnJhbmQgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zZWFyY2gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYWRkdGVhY2hlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5uYXZzZWFyY2gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzdweCkge1xuICAuYWRkdGVhY2hlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5uYXZzZWFyY2gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyOTZweCkge1xuICAubG9nb3V0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnNlYXJjaCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5kcm9wZG93bi1tZW51IHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLm5hdnNlYXJjaCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-header',
                templateUrl: './student-header.component.html',
                styleUrls: ['./student-header.component.scss']
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student-help/student-help.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-help/student-help.component.ts ***!
  \********************************************************/
/*! exports provided: StudentHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentHelpComponent", function() { return StudentHelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StudentHelpComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentHelpComponent.ɵfac = function StudentHelpComponent_Factory(t) { return new (t || StudentHelpComponent)(); };
StudentHelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentHelpComponent, selectors: [["app-student-help"]], decls: 2, vars: 0, template: function StudentHelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "student-help works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtaGVscC9zdHVkZW50LWhlbHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentHelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-help',
                templateUrl: './student-help.component.html',
                styleUrls: ['./student-help.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/student-live-class/student-live-class.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/student-live-class/student-live-class.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentLiveClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentLiveClassComponent", function() { return StudentLiveClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class StudentLiveClassComponent {
    constructor() {
        this.url = "https://google.com";
    }
    ngOnInit() {
    }
}
StudentLiveClassComponent.ɵfac = function StudentLiveClassComponent_Factory(t) { return new (t || StudentLiveClassComponent)(); };
StudentLiveClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentLiveClassComponent, selectors: [["app-student-live-class"]], decls: 34, vars: 1, consts: [[1, "container"], [1, "card", "shadow", "formsection"], [1, "card-body"], [1, "header"], [1, "scroll"], ["action", "#", 1, "fom"], [1, "formpoint"], [1, "row"], [1, "col-sm-3", "col-md-3", "col-xd-3"], ["for", "class", 1, "label"], ["type", "text", "name", "liveclass", "id", "class", "required", "", "disabled", "", 1, "inp"], ["for", "subject", 1, "label"], ["type", "text", "name", "livesubject", "id", "subject", "disabled", "", 1, "inp"], ["for", "date", 1, "label"], ["type", "date", "name", "livedate", "id", "date", "disabled", "", 1, "inp"], ["for", "time", 1, "label"], ["type", "time", "name", "time", "id", "time", "disabled", "", 1, "inp"], ["for", "liveurl", 1, "label"], ["target", "_blank", "id", "liveurl", "aria-readonly", "true", "role", "link", 1, "inp", 3, "href"], [1, "mb-2"]], template: function StudentLiveClassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Live Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "information section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Url section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "CLass URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "https://helloworld.com/zoom/sjfi12445");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0%;\n  height: 600px;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  text-transform: uppercase;\n}\n\n.scroll[_ngcontent-%COMP%] {\n  height: 460px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.formpoint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: grey;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.labeltext[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-right: 10px;\n}\n\n.fom[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  padding: 10px 50px;\n  height: 100%;\n}\n\n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.inp[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  padding: 12px 15px;\n  margin: 8px 0px;\n  width: 100%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #239463;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 140px;\n  background-color: #239463;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px;\n  position: absolute;\n  z-index: 1;\n  bottom: 150%;\n  left: 50%;\n  margin-left: -75px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n}\n\n\n\n@media (max-width: 574px) {\n  .fom[_ngcontent-%COMP%] {\n    background-color: #FFFFFF;\n    display: flex;\n    flex-direction: column;\n    padding: 10px 0px;\n    height: 100%;\n  }\n\n  .formsection[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1saXZlLWNsYXNzL0Q6XFxLbm93bGVkZ2VTZXR1LUZFLW1haW4vc3JjXFxhcHBcXHN0dWRlbnQtbGl2ZS1jbGFzc1xcc3R1ZGVudC1saXZlLWNsYXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50LWxpdmUtY2xhc3Mvc3R1ZGVudC1saXZlLWNsYXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNILGlCQUFBO0VBQ0csYUFBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDSCx5QkFBQTtFQUNHLFdBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEE7RUFDQyx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ01EOztBREpBO0VBQ0ksYUFBQTtBQ09KOztBRExBO0VBQ0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1FEOztBRE5BO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FDU0o7O0FEUEE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDVUo7O0FEUEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUNVSjs7QURSQTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtBQ1dKOztBRFRBLGlGQUFBOztBQUlBO0VBQ0k7SUFDSSx5QkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQ1NOOztFRFBFO0lBQ0ksZ0JBQUE7RUNVTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC1saXZlLWNsYXNzL3N0dWRlbnQtbGl2ZS1jbGFzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcmR7XG4gICAgYm9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiAwJTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xufVxuLmhlYWRlcntcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zY3JvbGx7XG4gICAgaGVpZ2h0OiA0NjBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmZvcm1wb2ludHtcbiAgICBmb250LXNpemU6IDEycHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IGdyZXk7XG59XG4ubGFiZWx7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxhYmVsdGV4dHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5mb20ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nOiAxMHB4IDUwcHg7XG5cdGhlaWdodDogMTAwJTtcbn1cbi5mb3JtLXNlbGVjdDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmlucCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG5cdGJvcmRlcjogbm9uZTtcblx0cGFkZGluZzogMTJweCAxNXB4O1xuXHRtYXJnaW46IDhweCAwcHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuLmJ0bntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xufVxuLnRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4gIFxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm90dG9tOiAxNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTc1cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG59IFxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqTWVkaWEgcXVlcnkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1heC13aWR0aDogODU4cHgpe1xuXHRcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzRweCl7XG4gICAgLmZvbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIC5mb3Jtc2VjdGlvbntcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG59IiwiLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc2Nyb2xsIHtcbiAgaGVpZ2h0OiA0NjBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5mb3JtcG9pbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxhYmVsdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZm9ybS1zZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIG1hcmdpbjogOHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzOTQ2Mztcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMTUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTc1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKk1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDU3NHB4KSB7XG4gIC5mb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5mb3Jtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentLiveClassComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-live-class',
                templateUrl: './student-live-class.component.html',
                styleUrls: ['./student-live-class.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/student-login/student-login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/student-login/student-login.component.ts ***!
  \**********************************************************/
/*! exports provided: StudentLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentLoginComponent", function() { return StudentLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var country_state_city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! country-state-city */ "./node_modules/country-state-city/dist/index.js");
/* harmony import */ var country_state_city__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(country_state_city__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function StudentLoginComponent_mat_option_92_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentLoginComponent_mat_option_92_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const state_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.getCities(state_r13.isoCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r13.name, " ");
} }
function StudentLoginComponent_mat_option_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r16.name, " ");
} }
class StudentLoginComponent {
    constructor(http, route, cookieService) {
        this.http = http;
        this.route = route;
        this.cookieService = cookieService;
        this.model = {};
        this.loginDetail = {};
        this.result = {};
        this.onSubmit = (buttonType) => {
            if (buttonType == 'SignUp') {
                console.log(this.model);
                const data = JSON.stringify(this.model);
                console.log(data);
                this.http.post('/api/Register', data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'Access-Control-Allow-Headers': 'true' }) }).subscribe((res) => {
                    var value = res;
                    if (value["AlreadyRegistered"]) {
                        this.alert = "Already Registered!! Please Login";
                    }
                    else {
                        alert("Registered Successfully");
                    }
                });
            }
            if (buttonType == 'SignIn') {
                const data = JSON.stringify(this.loginDetail);
                this.http.post('/api/studentLogin', data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'Access-Control-Allow-Headers': 'true' }) }).subscribe((res) => {
                    console.log(res);
                    this.result = res;
                    if (this.result["LoggedIn"]) {
                        const dateNow = new Date();
                        console.log(dateNow.getHours());
                        dateNow.setDate(dateNow.getDate() + 1);
                        console.log(dateNow);
                        this.alert = "";
                        this.cookieService.set('Id', JSON.stringify(this.result["data"]), dateNow, '/');
                        var items = this.cookieService.get('Id');
                        setTimeout(() => { this.route.navigate(['/main-pannel']); }, 1000);
                    }
                });
            }
        };
        this.getCities = (id) => {
            this.Cities = country_state_city__WEBPACK_IMPORTED_MODULE_1___default.a.getCitiesOfState('IN', id);
        };
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.States = country_state_city__WEBPACK_IMPORTED_MODULE_1___default.a.getStatesOfCountry("IN");
        console.log(this.States);
    }
    ngOnInit() {
        const cookieExists = this.cookieService.check('Id');
        if (cookieExists) {
            this.route.navigate(['/main-pannel']);
        }
        var active = document.querySelector('#pills-home-tab');
        var active1 = document.querySelector('#pills-profile-tab');
        var signin = document.querySelector('#pills-signin');
        var signup = document.querySelector('#pills-profile');
        active.addEventListener('click', function () {
            active.classList.add('act');
            signin.classList.add('show');
            signin.classList.add('active');
            signup.classList.remove('show');
            signup.classList.remove('active');
            active1.classList.remove('act');
        });
        active1.addEventListener('click', function () {
            active1.classList.add('act');
            signin.classList.remove('show');
            signin.classList.remove('active');
            signup.classList.add('show');
            signup.classList.add('active');
            active.classList.remove('act');
        });
    }
}
StudentLoginComponent.ɵfac = function StudentLoginComponent_Factory(t) { return new (t || StudentLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"])); };
StudentLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentLoginComponent, selectors: [["app-student-login"]], decls: 104, vars: 15, consts: [[1, "bg-margin"], [1, "container"], [1, "card", "showcard", "shadow"], [1, "card-body"], [1, "row"], [1, "col-sm-8", "col-md-8", "col-xd-8"], [1, "card-head1"], [1, "colortext"], [1, "plaintext"], [1, "text"], [1, "para"], [1, "image"], ["src", "../../assets/welcomeloginimage.svg", 1, "img-fluid", "loginimg"], [1, "col-sm-4", "col-md-4", "col-xd-4"], [1, "card", "formcard", "shadow"], ["id", "pills-tab", "role", "tablist", 1, "nav", "mb-3"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-signin", "type", "button", "role", "tab", "aria-controls", "pills-signin", "aria-selected", "true", 1, "tabs", "shadow", "act"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "tabs", "shadow"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-signin", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], ["enctype", "multipart/form-data", 1, "was-validated", 3, "ngSubmit"], ["loginForm", "ngForm"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "password", "placeholder", "Password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [2, "color", "red"], ["type", "button", 1, "bton", "shadow", 3, "disabled", "click"], ["href", "#", 1, "link"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], ["registerForm", "ngForm"], ["type", "text", "placeholder", "FullName", "name", "fullName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["fullName", "ngModel"], ["type", "text", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "tel", "placeholder", "Phone Number", "name", "phoneNumber", "required", "", "maxlength", "10", 1, "form-control", 3, "ngModel", "ngModelChange"], ["phoneNumber", "ngModel"], ["appearance", "fill", 2, "width", "100%"], ["name", "Class", "required", "", 3, "ngModel", "ngModelChange"], ["Class", "ngModel"], ["value", "First"], ["value", "Second"], ["value", "Third"], ["value", "Fouth"], ["value", "Fiveth"], ["value", "Sixth"], ["value", "Seventh"], ["value", "Eighth"], ["value", "Nineth"], ["value", "Tenth"], ["value", "Eleventh"], ["value", "Twelfth"], [1, "form-group"], ["name", "state", "required", "", 3, "ngModel", "ngModelChange"], ["state", "ngModel"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["name", "city", "required", "", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [2, "color", "darkred"], ["type", "submit", 1, "bton", "shadow", 3, "disabled", "click"], [3, "value", "click"], [3, "value"]], template: function StudentLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Knowledge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Setu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "#1 India's Best Teaching and Learning Platform Which Provide live Interaction With Educator As well as Recorded Lectures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StudentLoginComponent_Template_form_ngSubmit_30_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentLoginComponent_Template_input_ngModelChange_34_listener($event) { return ctx.loginDetail.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentLoginComponent_Template_input_ngModelChange_36_listener($event) { return ctx.loginDetail.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentLoginComponent_Template_button_click_40_listener() { return ctx.onSubmit("SignIn"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form", 21, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StudentLoginComponent_Template_form_ngSubmit_45_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentLoginComponent_Template_input_ngModelChange_49_listener($event) { return ctx.model.fullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 34, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentLoginComponent_Template_input_ngModelChange_51_listener($event) { return ctx.model.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentLoginComponent_Template_input_ngModelChange_53_listener($event) { return ctx.model.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentLoginComponent_Template_input_ngModelChange_55_listener($event) { return ctx.model.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Select Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-select", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentLoginComponent_Template_mat_select_ngModelChange_60_listener($event) { return ctx.model.Class = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "II");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "III");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "IV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "VI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "VII");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "VIII");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "IX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "XI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "XII");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-form-field", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-select", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentLoginComponent_Template_mat_select_ngModelChange_90_listener($event) { return ctx.model.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, StudentLoginComponent_mat_option_92_Template, 2, 2, "mat-option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-form-field", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-select", 56, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentLoginComponent_Template_mat_select_ngModelChange_97_listener($event) { return ctx.model.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, StudentLoginComponent_mat_option_99_Template, 2, 2, "mat-option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentLoginComponent_Template_button_click_102_listener() { return ctx.onSubmit("SignUp"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginDetail.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginDetail.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.alert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.Class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.States);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.alert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.form.valid);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap\");\n\n\n.bg-margin[_ngcontent-%COMP%] {\n  margin-top: 150px;\n}\n.text[_ngcontent-%COMP%]   .para[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n  letter-spacing: 1px;\n  line-height: 1.8;\n  color: rgba(0, 0, 0, 0.8);\n}\n.card-head1[_ngcontent-%COMP%] {\n  text-decoration: none;\n  outline: none;\n}\n.card-head1[_ngcontent-%COMP%]   .colortext[_ngcontent-%COMP%] {\n  color: #0795b5;\n  font-size: 30px;\n  font-family: \"Luckiest Guy\", cursive;\n}\n.card-head1[_ngcontent-%COMP%]   .plaintext[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 30px;\n  font-family: \"Luckiest Guy\", cursive;\n}\n.loginimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n.card[_ngcontent-%COMP%] {\n  display: block;\n  border: none;\n  border-radius: 0%;\n}\n.showcard[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding-top: 30px;\n  padding-right: 100px;\n  padding-left: 100px;\n  padding-bottom: 30px;\n}\n.formcard[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 50px;\n  padding-bottom: 20px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\nform[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  display: -moz-inline-box;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  text-align: center;\n}\n.tabs[_ngcontent-%COMP%] {\n  border: 2px solid #0795b5;\n  text-decoration: none;\n  color: #0795b5;\n  font-weight: bold;\n  margin-right: 5px;\n  padding: 5px 5px;\n  border-radius: 4px;\n}\n.act[_ngcontent-%COMP%] {\n  background-color: #0795b5;\n  color: #fff;\n  font-weight: bold;\n  margin-right: 5px;\n  padding: 7px 7px;\n  border-radius: 4px;\n  text-decoration: none;\n  border: none;\n}\nform[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\ninput[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  padding: 12px 15px;\n  margin: 8px 0;\n  width: 100%;\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 20px 0 30px;\n}\n.bton[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  border: 1px solid #0795b5;\n  background-color: #0795b5;\n  color: #FFFFFF;\n  font-size: 15px;\n  font-weight: bold;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n@media (max-width: 1198) {\n  .showcard[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n\n  .formcard[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 50px;\n    padding-bottom: 20px;\n  }\n}\n@media (max-width: 1024px) {\n  .showcard[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n}\n@media (max-width: 768px) {\n  .col-sm-8[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .col-sm-4[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    width: 100%;\n  }\n}\n@media (max-width: 450px) {\n  .showcard[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n}\n@media (max-width: 320px) {\n  .showcard[_ngcontent-%COMP%] {\n    padding: 8px 8px;\n  }\n\n  .card-head1[_ngcontent-%COMP%]   .colortext[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .card-head1[_ngcontent-%COMP%]   .plaintext[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 280px) {\n  .arrowbtn[_ngcontent-%COMP%] {\n    width: 17px;\n    height: 17px;\n  }\n\n  .showcard[_ngcontent-%COMP%] {\n    padding: 5px 5px;\n  }\n\n  .formcard[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 50px;\n    padding-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1sb2dpbi9EOlxcS25vd2xlZGdlU2V0dS1GRS1tYWluL3NyY1xcYXBwXFxzdHVkZW50LWxvZ2luXFxzdHVkZW50LWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50LWxvZ2luL3N0dWRlbnQtbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkVBQUE7QUFDQSxrRkFBQTtBQUVSLG9GQUFBO0FBQ0EsNkJBQUE7QUFDQTtFQUNDLGlCQUFBO0FDQUQ7QURFQTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNHLGlDQUFBO0VBQ0gsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQ0Q7QURDQTtFQUNDLHFCQUFBO0VBQ0EsYUFBQTtBQ0VEO0FEQUE7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDR0Q7QUREQztFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNJRjtBREZBO0VBQ0MsV0FBQTtFQUNBLGFBQUE7QUNLRDtBREhBO0VBQ0MsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ01EO0FESkE7RUFDQyxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDT0Q7QURMQTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDUUQ7QUROQTtFQUNDLGdCQUFBO0FDU0Q7QURQQTtFQUNDLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNVRDtBRFJBO0VBQ0MseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1dEO0FEVEE7RUFDQyx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ1lEO0FEVkE7RUFDQyxnQkFBQTtBQ2FEO0FEWEE7RUFDQyxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDY0Q7QURaQTtFQUNDLGlCQUFBO0VBQ0EsU0FBQTtBQ2VEO0FEYkE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNnQkQ7QURkQTtFQUNDLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNpQkQ7QURkQSxrRUFBQTtBQUNBO0VBQ0M7SUFDQyxrQkFBQTtFQ2lCQTs7RURmRDtJQUNDLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VDa0JBO0FBQ0Y7QURoQkE7RUFDQztJQUNDLGtCQUFBO0VDa0JBO0FBQ0Y7QURoQkE7RUFDQztJQUNDLFdBQUE7RUNrQkE7O0VEaEJEO0lBQ0MsZ0JBQUE7SUFDQSxXQUFBO0VDbUJBO0FBQ0Y7QURoQkE7RUFDQztJQUNDLGtCQUFBO0VDa0JBO0FBQ0Y7QURmQTtFQUNDO0lBQ0MsZ0JBQUE7RUNpQkE7O0VEZkQ7SUFDQyxlQUFBO0VDa0JBOztFRGZBO0lBQ0MsZUFBQTtFQ2tCRDtBQUNGO0FEaEJBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ2tCTjs7RURoQkQ7SUFDQyxnQkFBQTtFQ21CQTs7RURqQkQ7SUFDQyxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQ29CQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC1sb2dpbi9zdHVkZW50LWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ja25Sb2xsK09uZSZkaXNwbGF5PXN3YXAnKTtcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLypsb2dpbiBhbmQgc2lnbnVwIGNzcyBzdGFydCovXG4uYmctbWFyZ2lue1xuXHRtYXJnaW4tdG9wOiAxNTBweDtcbn1cbi50ZXh0IC5wYXJhe1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0bGluZS1oZWlnaHQ6IDEuODtcblx0Y29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuOCk7XG59XG4uY2FyZC1oZWFkMXtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRvdXRsaW5lOiBub25lO1xufVxuLmNhcmQtaGVhZDEgLmNvbG9ydGV4dHtcblx0Y29sb3I6ICMwNzk1YjU7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0Zm9udC1mYW1pbHk6ICdMdWNraWVzdCBHdXknLCBjdXJzaXZlO1xuIH1cbiAuY2FyZC1oZWFkMSAucGxhaW50ZXh0e1xuXHQgY29sb3I6ICMwMDA7XG5cdCBmb250LXNpemU6IDMwcHg7XG5cdCBmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIGN1cnNpdmU7XG4gfVxuLmxvZ2luaW1ne1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAyMDBweDtcbn1cbi5jYXJke1xuXHRkaXNwbGF5OiBibG9jaztcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiAwJTtcbn1cbi5zaG93Y2FyZHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0cGFkZGluZy10b3A6IDMwcHg7XG5cdHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuXHRwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbi5mb3JtY2FyZHtcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHRwYWRkaW5nLXRvcDogNTBweDtcblx0cGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4udGFiLWNvbnRlbnR7XG5cdG1hcmdpbi10b3A6IDUwcHg7XG59XG5mb3JtIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblx0ZGlzcGxheTogLW1vei1pbmxpbmUtYm94O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0aGVpZ2h0OiAxMDAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGFic3tcblx0Ym9yZGVyOiAycHggc29saWQgIzA3OTViNTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjogIzA3OTViNTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdG1hcmdpbi1yaWdodDogNXB4O1xuXHRwYWRkaW5nOiA1cHggNXB4O1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uYWN0e1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xuXHRjb2xvcjogI2ZmZjtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdG1hcmdpbi1yaWdodDogNXB4O1xuXHRwYWRkaW5nOiA3cHggN3B4O1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Ym9yZGVyOiBub25lO1xufVxuZm9ybSAubGlua3tcblx0bWFyZ2luLXRvcDogMTBweDtcbn1cbmlucHV0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcblx0Ym9yZGVyOiBub25lO1xuXHRwYWRkaW5nOiAxMnB4IDE1cHg7XG5cdG1hcmdpbjogOHB4IDA7XG5cdHdpZHRoOiAxMDAlO1xufVxuaDEge1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luOiAwO1xufVxucCB7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0bWFyZ2luOiAyMHB4IDAgMzBweDtcbn1cbi5idG9uIHtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMDc5NWI1O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAgIzA3OTViNTtcblx0Y29sb3I6ICNGRkZGRkY7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nLXRvcDogMTBweDtcblx0cGFkZGluZy1ib3R0b206IDEwcHg7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYShtYXgtd2lkdGg6MTE5OCl7XG5cdC5zaG93Y2FyZHtcblx0XHRwYWRkaW5nOiAyMHB4IDIwcHg7XG5cdH1cblx0LmZvcm1jYXJke1xuXHRcdHBhZGRpbmctbGVmdDogMjBweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHRcdHBhZGRpbmctdG9wOiA1MHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXHR9XG59XG5AbWVkaWEobWF4LXdpZHRoOjEwMjRweCl7XG5cdC5zaG93Y2FyZHtcblx0XHRwYWRkaW5nOiAyMHB4IDIwcHg7XG5cdH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xuXHQuY29sLXNtLTgsLmNvbC1tZC04e1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdC5jb2wtc20tNCwuY29sLW1kLTR7XG5cdFx0bWFyZ2luLXRvcDogNTBweDtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHRcbn1cbkBtZWRpYShtYXgtd2lkdGg6NDUwcHgpe1xuXHQuc2hvd2NhcmR7XG5cdFx0cGFkZGluZzogMjBweCAyMHB4O1xuXHR9XG4gICBcbn1cbkBtZWRpYShtYXgtd2lkdGg6MzIwcHgpe1xuXHQuc2hvd2NhcmR7XG5cdFx0cGFkZGluZzogOHB4IDhweDtcblx0fVxuXHQuY2FyZC1oZWFkMSAuY29sb3J0ZXh0eyBcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdCB9XG5cdCBcblx0IC5jYXJkLWhlYWQxIC5wbGFpbnRleHR7XG5cdFx0IGZvbnQtc2l6ZTogMjBweDtcblx0IH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6MjgwcHgpe1xuICAgIC5hcnJvd2J0bntcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICB9XG5cdC5zaG93Y2FyZHtcblx0XHRwYWRkaW5nOiA1cHggNXB4O1xuXHR9XG5cdC5mb3JtY2FyZHtcblx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0cGFkZGluZy1yaWdodDogMTBweDtcblx0XHRwYWRkaW5nLXRvcDogNTBweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBweDtcblx0fVxuXG59XG5cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvY2tuUm9sbCtPbmUmZGlzcGxheT1zd2FwXCIpO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLypsb2dpbiBhbmQgc2lnbnVwIGNzcyBzdGFydCovXG4uYmctbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG59XG5cbi50ZXh0IC5wYXJhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi5jYXJkLWhlYWQxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY2FyZC1oZWFkMSAuY29sb3J0ZXh0IHtcbiAgY29sb3I6ICMwNzk1YjU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsIGN1cnNpdmU7XG59XG5cbi5jYXJkLWhlYWQxIC5wbGFpbnRleHQge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJMdWNraWVzdCBHdXlcIiwgY3Vyc2l2ZTtcbn1cblxuLmxvZ2luaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCU7XG59XG5cbi5zaG93Y2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5mb3JtY2FyZCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4udGFiLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5mb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgZGlzcGxheTogLW1vei1pbmxpbmUtYm94O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJzIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzA3OTViNTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzA3OTViNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5hY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBwYWRkaW5nOiA3cHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5mb3JtIC5saW5rIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbWFyZ2luOiAyMHB4IDAgMzBweDtcbn1cblxuLmJ0b24ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNzk1YjU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKiptZWRpYSBxdWVyeSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OCkge1xuICAuc2hvd2NhcmQge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgfVxuXG4gIC5mb3JtY2FyZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnNob3djYXJkIHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29sLXNtLTgsIC5jb2wtbWQtOCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY29sLXNtLTQsIC5jb2wtbWQtNCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5zaG93Y2FyZCB7XG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnNob3djYXJkIHtcbiAgICBwYWRkaW5nOiA4cHggOHB4O1xuICB9XG5cbiAgLmNhcmQtaGVhZDEgLmNvbG9ydGV4dCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLmNhcmQtaGVhZDEgLnBsYWludGV4dCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjgwcHgpIHtcbiAgLmFycm93YnRuIHtcbiAgICB3aWR0aDogMTdweDtcbiAgICBoZWlnaHQ6IDE3cHg7XG4gIH1cblxuICAuc2hvd2NhcmQge1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gIH1cblxuICAuZm9ybWNhcmQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-login',
                templateUrl: './student-login.component.html',
                styleUrls: ['./student-login.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/student-panel/student-panel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/student-panel/student-panel.component.ts ***!
  \**********************************************************/
/*! exports provided: StudentPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPanelComponent", function() { return StudentPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = function () { return ["/main-pannel"]; };
const _c1 = function () { return ["/student-dashboard/course"]; };
const _c2 = function () { return ["/student-dashboard"]; };
const _c3 = function () { return ["/home"]; };
class StudentPanelComponent {
    constructor() {
        this.name = "Arpit";
        this.src = "../../assets/bookmark.svg";
        this.class = "XII";
    }
    ngOnInit() {
        var change = document.getElementById("change");
        change.addEventListener('click', () => {
            this.src = "../../assets/check-circle.svg";
        });
        $(document).ready(function () {
            $('.main-carousel').flickity({
                // options
                cellAlign: 'left',
                contain: true,
                lazyLoad: true,
                pageDots: false,
            });
        });
    }
}
StudentPanelComponent.ɵfac = function StudentPanelComponent_Factory(t) { return new (t || StudentPanelComponent)(); };
StudentPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentPanelComponent, selectors: [["app-student-panel"]], decls: 460, vars: 45, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "shadow"], [1, "container"], [1, "navbar-brand"], ["src", "../../assets/Krash IT Services png.PNG", "width", "200", "height", "60", 1, "img-fluid"], ["data-bs-toggle", "collapse", "data-bs-target", "#navbarText", 1, "navbar-toggler"], ["src", "../../assets/menu.svg"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mb-1", "ml-lg-0"], [1, "nav-item"], ["src", "../../assets/home-alt2.svg", "width", "20", "height", "20", 1, "img"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["src", "../../assets/user-plus.svg", "width", "20", "height", "20", 1, "img"], ["data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", "routerLinkActive", "active", 1, "nav-link"], ["src", "../../assets/book-opened.svg", "width", "20", "height", "20", 1, "img"], ["src", "../../assets/user.svg", "width", "20", "height", "20", 1, "img"], ["src", "../../assets/log-out.svg", "width", "20", "height", "20", 1, "img"], ["id", "staticBackdrop", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], [1, "modal-body"], [1, "modalform"], ["for", "teacherid", 1, "label"], [1, "required"], ["type", "text", "id", "teacherid", "placeholder", "Enter Teacher class ID", "required", "", 1, "modalinp"], [1, "modalbtn"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btnclose", "shadow"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn1", "shadow"], ["src", "../../assets/arrow-right.svg"], [1, "show1"], [1, "container", "bg-margin"], [1, "starttext"], ["data-flickity", "{\"pageDots\": false,\"contain\": true,\"autoPlay\": 1500,  \"freeScroll\": true, \"wrapAround\": true}", 1, "main-carousel"], [1, "carousel-cell"], [1, "card", "shadow"], ["cantrols", ""], ["src", "", "type", "video/mp4"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "totalprice"], [1, "btn", "btnsub", "shadow"], ["id", "change", 1, "bookmark"], [3, "src"], ["id", "change8", 1, "bookmark"], ["id", "change7", 1, "bookmark"], ["id", "change6", 1, "bookmark"], ["id", "change5", 1, "bookmark"], ["id", "change4", 1, "bookmark"], ["id", "change3", 1, "bookmark"], ["id", "change2", 1, "bookmark"], ["id", "change1", 1, "bookmark"], [1, "subjecttext1"], [1, "subjecttext"], ["data-flickity", "{\"pageDots\": false,\"contain\": true,\"autoPlay\": 1800, \"lazyLoad\": true, \"freeScroll\": true, \"wrapAround\": true}", 1, "main-carousel"], [1, "footer", "pt-5", "pb-4"], [1, "container", "text-md-left"], [1, "row", "text-md-left"], [1, "col-md-3", "col-lg-3", "col-xl-3", "mx-auto", "mt-3"], [1, "mb-4", "comtt", "text-warning"], [1, "ptext"], [1, "col-md-2", "col-lg-2", "col-xl-2", "mx-auto", "mt-3"], [1, "text-uppercase", "mb-4", "font-weight-bold", "text-warning"], ["src", "/assets/double_arrow-white-18dp.svg"], ["href", "#", 1, "text-white", 2, "text-decoration", "none"], [1, "col-md-4", "col-lg-3", "col-xl-3", "mx-auto", "mt-3"], [1, "text-white"], ["src", "/assets/fmd_good-white-18dp.svg"], ["src", "/assets/mail-white-18dp.svg"], ["src", "/assets/call-white-18dp.svg"], [1, "mb-4"], [1, "row"], [1, "d-flex", "justify-content-center", "text-white"]], template: function StudentPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "My Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Add Teacher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Teacher Class ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "join ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Let's start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "h2", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "h2", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Physics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "total Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "\u20B9450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "video", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](399, "source", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Teacher Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "footer", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "h1", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Krash IT Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem asperiores assumenda quidem dolore est rem provident repellendus nam iure animi sequi, mollitia commodi quia, ipsum repudiandae ullam? Ipsum, reiciendis repellat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "h2", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](426, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "AboutUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Term&Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "h2", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, " Indrapuram, Ghaziabad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, " info@krashitservice.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, " +91 9324226748 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](454, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "+91 9760967225 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "hr", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, " \u00A9Copyright Krash IT Services.All Right Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" learning, ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class: ", ctx.class, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".nav-item[_ngcontent-%COMP%] {\n  text-align: center;\n  display: inline-block;\n  margin-left: 10px;\n  cursor: pointer;\n}\n.active[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #239463;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  border-bottom: 3px solid #239463;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  float: left;\n  margin-bottom: -5px;\n}\n.modal-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 60px;\n  height: 3px;\n  background-color: #239463;\n  position: absolute;\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.required[_ngcontent-%COMP%]::before {\n  content: \"*\";\n  color: red;\n  margin-right: 3px;\n}\n.modalinp[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  border-radius: 5px;\n  padding: 12px 15px;\n  margin: 8px 0;\n  width: 100%;\n  border: 2px solid #000000;\n}\n.modalbtn[_ngcontent-%COMP%] {\n  float: right;\n}\n.modalbtn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 12px;\n  letter-spacing: 1px;\n  padding: 8px 8px;\n  cursor: pointer;\n}\n.btn1[_ngcontent-%COMP%] {\n  border: 2px solid #239463;\n  background-color: #239463;\n  color: white;\n}\n.btnclose[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  border: 2px solid #239463;\n  color: #239463;\n}\n\n.starttext[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n.starttext[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #239463;\n  font-size: 30px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\n.subjecttext[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n.subjecttext1[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 50px;\n  height: 3px;\n  background-color: #239463;\n  position: absolute;\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  width: 18rem;\n  border-radius: 0px;\n  margin-left: 10px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.totalprice[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  float: right;\n}\n.btnsub[_ngcontent-%COMP%] {\n  border: 2px solid #239463;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 1px;\n  padding: 8px 8px;\n  cursor: pointer;\n  background-color: #239463;\n  color: white;\n}\n.show1[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.bg-margin[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n.main-carousel[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.bookmark[_ngcontent-%COMP%] {\n  float: right;\n  cursor: default;\n}\n.carousel-cell[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.carousel-cell[_ngcontent-%COMP%]::before {\n  display: block;\n}\n\n.flickity-button[_ngcontent-%COMP%] {\n  background: #333;\n}\n.flickity-button[_ngcontent-%COMP%]:hover {\n  background: #F90;\n}\n.flickity-prev-next-button[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 5px;\n}\n\n.flickity-button-icon[_ngcontent-%COMP%] {\n  fill: white;\n}\n\n.flickity-prev-next-button.previous[_ngcontent-%COMP%] {\n  left: -40px;\n}\n.flickity-prev-next-button.next[_ngcontent-%COMP%] {\n  right: -40px;\n}\n\n\n.footer[_ngcontent-%COMP%] {\n  background: #239463;\n  margin-top: 100px;\n}\n.comtt[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n.ptext[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n@media (max-width: 990px) {\n  .img[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .active[_ngcontent-%COMP%] {\n    color: #239463;\n  }\n}\n@media (max-width: 280px) {\n  .card[_ngcontent-%COMP%] {\n    border: none;\n    width: 15rem;\n    border-radius: 0px;\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1wYW5lbC9EOlxcS25vd2xlZGdlU2V0dS1GRS1tYWluL3NyY1xcYXBwXFxzdHVkZW50LXBhbmVsXFxzdHVkZW50LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50LXBhbmVsL3N0dWRlbnQtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FBQTtBQUtBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0U7RUFDRSxnQ0FBQTtBQ0VKO0FEQUU7RUFDRSxnQ0FBQTtBQ0dKO0FEQUUsa0dBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0dKO0FEREU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0lKO0FERkU7RUFDRSxlQUFBO0FDS0o7QURIRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNNSjtBREpFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNPSjtBRExFO0VBQ0UsWUFBQTtBQ1FKO0FETkU7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDU0o7QURQRTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDVUo7QURSRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDV0o7QURURSx5RkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNZSjtBRFZFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDYUo7QURYRSwyR0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNjSjtBRFpFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNlSjtBRGJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2dCSjtBRGRFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ2lCSjtBRGZFO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ2tCSjtBRGhCRTtFQUNFLGdCQUFBO0FDbUJKO0FEakJFO0VBQ0UsaUJBQUE7QUNvQko7QURsQkU7RUFDRSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUNxQko7QURuQkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ3NCSjtBRHBCRTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FDdUJKO0FEckJFO0VBQ0UsY0FBQTtBQ3dCSjtBRHRCRSxrQ0FBQTtBQUNBO0VBQ0UsZ0JBQUE7QUN5Qko7QUR2QkU7RUFDRSxnQkFBQTtBQzBCSjtBRHZCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUMwQko7QUR4QkUsZUFBQTtBQUNBO0VBQ0UsV0FBQTtBQzJCSjtBRHpCRSxxQkFBQTtBQUNBO0VBQ0UsV0FBQTtBQzRCSjtBRDFCRTtFQUNFLFlBQUE7QUM2Qko7QUQzQkUsOEZBQUE7QUFDQSxtQkFBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQzhCSjtBRDVCRTtFQUNFLG1CQUFBO0FDK0JKO0FEN0JFO0VBQ0UsY0FBQTtBQ2dDSjtBRDlCRSwrRUFBQTtBQUlBO0VBQ0U7SUFDRSxhQUFBO0VDOEJKOztFRDVCRTtJQUNFLGNBQUE7RUMrQko7QUFDRjtBRHpCRTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDMkJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50LXBhbmVsL3N0dWRlbnQtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKipjc3MgZm9yIG5hdmJhcioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi5uYXZ0b2dnbGV7XG4gZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59ICovXG4ubmF2LWl0ZW17XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmFjdGl2ZXtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzIzOTQ2MztcbiAgfVxuICAubmF2LWxpbms6aG92ZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMyMzk0NjM7XG4gIH1cbiAgXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKmNzcyBmb3IgbW9kYWwgYWRkIHRlYWNoZXIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAubW9kYWwtdGl0bGV7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgfVxuICAubW9kYWwtdGl0bGU6OmJlZm9yZXtcbiAgICBjb250ZW50OlwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzOTQ2MztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLmxhYmVse1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAucmVxdWlyZWQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCIqXCI7XG4gICAgY29sb3I6IHJlZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgfVxuICAubW9kYWxpbnB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDEycHggMTVweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XG4gIH1cbiAgLm1vZGFsYnRue1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICAubW9kYWxidG4gLmJ0bntcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5idG4xe1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMzk0NjM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzOTQ2MztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmJ0bmNsb3Nle1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyMzk0NjM7XG4gICAgY29sb3I6ICMyMzk0NjM7XG4gIH1cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKmNzcyBmb3Igc3RhcnQgc2VjdGlvbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIC5zdGFydHRleHR7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbiAgLnN0YXJ0dGV4dCBzcGFue1xuICAgIGNvbG9yOiAjMjM5NDYzO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqY3NzIGZvciBjb250YWluZXIgY291cnNlbCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAuc3ViamVjdHRleHR7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cbiAgLnN1YmplY3R0ZXh0MTo6YWZ0ZXJ7XG4gICAgY29udGVudDpcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIC5jYXJke1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMThyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAudG90YWxwcmljZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5idG5zdWJ7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzIzOTQ2MztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5zaG93MXtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG4gIC5iZy1tYXJnaW57XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbiAgLm1haW4tY2Fyb3VzZWx7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuICAuYm9va21hcmt7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuICAuY2Fyb3VzZWwtY2VsbHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuICAuY2Fyb3VzZWwtY2VsbDo6YmVmb3Jle1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC8qIHNtYWxsZXIsIGRhcmssIHJvdW5kZWQgc3F1YXJlICovXG4gIC5mbGlja2l0eS1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gIH1cbiAgLmZsaWNraXR5LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI0Y5MDtcbiAgfVxuICBcbiAgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgLyogaWNvbiBjb2xvciAqL1xuICAuZmxpY2tpdHktYnV0dG9uLWljb24ge1xuICAgIGZpbGw6IHdoaXRlO1xuICB9XG4gIC8qIHBvc2l0aW9uIG91dHNpZGUgKi9cbiAgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ucHJldmlvdXMge1xuICAgIGxlZnQ6IC00MHB4O1xuICB9XG4gIC5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uLm5leHQge1xuICAgIHJpZ2h0OiAtNDBweDtcbiAgfVxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAvKmZvb3RlciBjc3Mgc3RhcnQqL1xuICAuZm9vdGVye1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjMjM5NDYzLCAkYWxwaGE6IDEuMCk7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIH1cbiAgLmNvbXR0e1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIH1cbiAgLnB0ZXh0e1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiptZWRpYSBxdWVyeSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICBcbiAgICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCl7XG4gICAgLmltZ3tcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5hY3RpdmV7XG4gICAgICBjb2xvcjogIzIzOTQ2MztcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg1OHB4KXtcbiAgICAgIFxuICAgICAgXG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDI4MHB4KXtcbiAgICAuY2FyZHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHdpZHRoOiAxNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICB9IiwiLyoqKioqKioqKioqKioqKioqKioqKioqY3NzIGZvciBuYXZiYXIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4ubmF2dG9nZ2xle1xuIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSAqL1xuLm5hdi1pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzIzOTQ2Mztcbn1cblxuLm5hdi1saW5rOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMyMzk0NjM7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKmNzcyBmb3IgbW9kYWwgYWRkIHRlYWNoZXIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLm1vZGFsLXRpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG59XG5cbi5tb2RhbC10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzOTQ2MztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5yZXF1aXJlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4ubW9kYWxpbnAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbn1cblxuLm1vZGFsYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubW9kYWxidG4gLmJ0biB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmc6IDhweCA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bjEge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjM5NDYzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG5jbG9zZSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjM5NDYzO1xuICBjb2xvcjogIzIzOTQ2Mztcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKmNzcyBmb3Igc3RhcnQgc2VjdGlvbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uc3RhcnR0ZXh0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnN0YXJ0dGV4dCBzcGFuIHtcbiAgY29sb3I6ICMyMzk0NjM7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqY3NzIGZvciBjb250YWluZXIgY291cnNlbCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnN1YmplY3R0ZXh0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnN1YmplY3R0ZXh0MTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMThyZW07XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50b3RhbHByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYnRuc3ViIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzIzOTQ2MztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nOiA4cHggOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNob3cxIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmJnLW1hcmdpbiB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4ubWFpbi1jYXJvdXNlbCB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5ib29rbWFyayB7XG4gIGZsb2F0OiByaWdodDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uY2Fyb3VzZWwtY2VsbCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLmNhcm91c2VsLWNlbGw6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBzbWFsbGVyLCBkYXJrLCByb3VuZGVkIHNxdWFyZSAqL1xuLmZsaWNraXR5LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG59XG5cbi5mbGlja2l0eS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRjkwO1xufVxuXG4uZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogaWNvbiBjb2xvciAqL1xuLmZsaWNraXR5LWJ1dHRvbi1pY29uIHtcbiAgZmlsbDogd2hpdGU7XG59XG5cbi8qIHBvc2l0aW9uIG91dHNpZGUgKi9cbi5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uLnByZXZpb3VzIHtcbiAgbGVmdDogLTQwcHg7XG59XG5cbi5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uLm5leHQge1xuICByaWdodDogLTQwcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKmZvb3RlciBjc3Mgc3RhcnQqL1xuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMyMzk0NjM7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uY29tdHQge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ucHRleHQge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xuICAuaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMyMzk0NjM7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyODBweCkge1xuICAuY2FyZCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-panel',
                templateUrl: './student-panel.component.html',
                styleUrls: ['./student-panel.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/student-profile/student-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/student-profile/student-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: StudentProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentProfileComponent", function() { return StudentProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class StudentProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentProfileComponent.ɵfac = function StudentProfileComponent_Factory(t) { return new (t || StudentProfileComponent)(); };
StudentProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentProfileComponent, selectors: [["app-student-profile"]], decls: 109, vars: 0, consts: [[1, "container"], [1, "d-flex", "justify-content-center"], [1, "col-sm-12", "col-xd-12", "col-md-12"], [1, "row"], [1, "col-sm-4", "col-md-4", "col-xd-4"], [1, "card", "shadow"], [1, "card-body"], [1, "head"], [1, "col-sm-6", "col-md-6", "col-xd-6", "sub"], [1, "subhead"], [1, "subpara"], [1, "col-sm-6", "col-md-6", "col-xd-6", "sub1"], [1, "mb-2"], [1, "biopara"], [1, "col-sm-8", "col-md-8", "col-xd-8"], [1, "card", "shadow", "formsection"], [1, "header"], ["action", "#", 1, "fom"], [1, "formpoint"], [1, "col-sm-6", "col-md-6", "col-xd-6"], ["for", "name", 1, "label"], [1, "required"], ["type", "text", "value", "Arpit katiyar", "name", "name", "id", "name", "required", "", 1, "inp"], ["for", "Email", 1, "label"], ["type", "Email", "value", "Arpitkatiyar@gmail.com", "name", "email", "id", "Email", "required", "", 1, "inp"], ["for", "class", 1, "label"], ["type", "text", "value", "X", "name", "name", "id", "class", "required", "", 1, "inp"], ["for", "school", 1, "label"], ["type", "text", "value", "Arpitkatiyar@gmail.com", "name", "email", "id", "school", "required", "", 1, "inp"], ["for", "Subject", 1, "label"], ["type", "text", "value", "physics", "name", "email", "id", "Subject", "required", "", "multiple", "", 1, "inp"], ["for", "phone", 1, "label"], ["type", "tel", "value", "836956456", "name", "name", "id", "phone", "required", "", "maxlength", "10", 1, "inp"], ["for", "alterphone", 1, "label"], ["type", "tel", "value", "568945624", "name", "alterphone", "id", "alterphone", "maxlength", "10", 1, "inp"], ["for", "address", 1, "label"], ["type", "text", "value", "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09", "name", "address", "id", "address", "required", "", 1, "inp"], ["for", "postalcode", 1, "label"], ["type", "tel", "value", "452655", "name", "postalcode", "id", "postalcode", "required", "", "maxlength", "6", 1, "inp"], ["for", "aboutme", 1, "label"], ["id", "aboutme", "name", "aboutme", "placeholder", "Enter about me", "maxlength", "250", "required", "", 1, "inp"], [1, "btn", "bton", "shadow"]], template: function StudentProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Arpit Katiyar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "kakdifnasdflasid@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "schoool choools dfksdi dsi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam architecto repudiandae iure, vitae ut inventore blanditiis odio exercitationem, neque nulla quae cupiditate fuga esse, expedita labore saepe earum praesentium quaerat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "My account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "User information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "contact information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Phone no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Alternate Phone no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "textarea", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".head[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  color: #0795b5;\n  font-weight: bold;\n  font-size: xx-large;\n  letter-spacing: 1px;\n}\n\n.biopara[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 15px 15px;\n}\n\n.subhead[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.subpara[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: -10px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0%;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  text-transform: uppercase;\n}\n\n.formpoint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: grey;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.labeltext[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-right: 10px;\n}\n\n.fom[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  padding: 10px 50px;\n  height: 100%;\n}\n\n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.required[_ngcontent-%COMP%]::before {\n  content: \"*\";\n  color: red;\n  margin-right: 3px;\n}\n\n.inp[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  padding: 12px 15px;\n  margin: 8px 0px;\n  width: 100%;\n}\n\n.bton[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #0795b5;\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 8px 15px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.bton[_ngcontent-%COMP%]:focus {\n  position: relative;\n  outline: none;\n}\n\n\n\n@media (max-width: 858px) {\n  .head[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    color: #0795b5;\n    font-weight: bold;\n    font-size: 30px;\n    letter-spacing: 1px;\n  }\n\n  .subhead[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .subpara[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: -10px;\n  }\n}\n\n@media (max-width: 574px) {\n  .head[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    color: #0795b5;\n    font-weight: bold;\n    font-size: xx-large;\n    letter-spacing: 1px;\n  }\n\n  .sub[_ngcontent-%COMP%] {\n    margin-right: 30px;\n  }\n\n  .sub1[_ngcontent-%COMP%] {\n    margin-left: 30px;\n  }\n\n  .subhead[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .subpara[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: -10px;\n  }\n\n  .fom[_ngcontent-%COMP%] {\n    background-color: #FFFFFF;\n    display: flex;\n    flex-direction: column;\n    padding: 10px 0px;\n    height: 100%;\n  }\n\n  .formsection[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1wcm9maWxlL0Q6XFxLbm93bGVkZ2VTZXR1LUZFLW1haW4vc3JjXFxhcHBcXHN0dWRlbnQtcHJvZmlsZVxcc3R1ZGVudC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50LXByb2ZpbGUvc3R1ZGVudC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0gsaUJBQUE7QUNLRDs7QURIQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDSCx5QkFBQTtFQUNHLFdBQUE7QUNPSjs7QURMQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUUo7O0FETkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDU0o7O0FEUEE7RUFDQyx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1VEOztBRFJBO0VBQ0ksYUFBQTtBQ1dKOztBRFRBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ1lKOztBRFZBO0VBQ0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2FEOztBRFhBO0VBQ0ksa0JBQUE7RUFDSCx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDRywwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNjSjs7QURaQTtFQUNJLGtCQUFBO0VBQ0gsYUFBQTtBQ2VEOztBRGJBLGlGQUFBOztBQUNBO0VBRUk7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VDZU47O0VEYkU7SUFDSSxrQkFBQTtFQ2dCTjs7RURkRTtJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7RUNpQk47QUFDRjs7QURmQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUNpQk47O0VEZkU7SUFDSSxrQkFBQTtFQ2tCTjs7RURoQkU7SUFDSSxpQkFBQTtFQ21CTjs7RURqQkU7SUFDSSxrQkFBQTtFQ29CTjs7RURsQkU7SUFDSSxrQkFBQTtJQUNBLGlCQUFBO0VDcUJOOztFRG5CRTtJQUNJLHlCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VDc0JOOztFRHBCRTtJQUNJLGdCQUFBO0VDdUJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50LXByb2ZpbGUvc3R1ZGVudC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWR7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGNvbG9yOiAjMDc5NWI1O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbi5iaW9wYXJhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHg7XG59XG4uc3ViaGVhZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3VicGFyYXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG4uY2FyZHtcbiAgICBib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDAlO1xufVxuLmhlYWRlcntcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5mb3JtcG9pbnR7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiBncmV5O1xufVxuLmxhYmVse1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5sYWJlbHRleHR7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZm9tIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0cGFkZGluZzogMTBweCA1MHB4O1xuXHRoZWlnaHQ6IDEwMCU7XG59XG4uZm9ybS1zZWxlY3Q6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5yZXF1aXJlZDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIipcIjtcbiAgICBjb2xvcjogcmVkO1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xufVxuLmlucCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG5cdGJvcmRlcjogbm9uZTtcblx0cGFkZGluZzogMTJweCAxNXB4O1xuXHRtYXJnaW46IDhweCAwcHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuLmJ0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzA3OTViNTtcblx0Y29sb3I6ICNGRkZGRkY7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHBhZGRpbmc6IDhweCAxNXB4O1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5idG9uOmZvY3VzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG91dGxpbmU6IG5vbmU7XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqTWVkaWEgcXVlcnkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1heC13aWR0aDogODU4cHgpe1xuXHRcbiAgICAuaGVhZHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgY29sb3I6ICMwNzk1YjU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgfVxuICAgIC5zdWJoZWFke1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5zdWJwYXJhe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzRweCl7XG4gICAgLmhlYWR7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjMDc5NWI1O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB9XG4gICAgLnN1YntcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAuc3ViMXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgfVxuICAgIC5zdWJoZWFke1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5zdWJwYXJhe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIH1cbiAgICAuZm9tIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgLmZvcm1zZWN0aW9ue1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbn0iLCIuaGVhZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGNvbG9yOiAjMDc5NWI1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmJpb3BhcmEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMTVweDtcbn1cblxuLnN1YmhlYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdWJwYXJhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZm9ybXBvaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogZ3JleTtcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sYWJlbHRleHQge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5mb20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmZvcm0tc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnJlcXVpcmVkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIipcIjtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5pbnAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgbWFyZ2luOiA4cHggMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uYnRvbjpmb2N1cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKk1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDg1OHB4KSB7XG4gIC5oZWFkIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgY29sb3I6ICMwNzk1YjU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc3ViaGVhZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnN1YnBhcmEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NHB4KSB7XG4gIC5oZWFkIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgY29sb3I6ICMwNzk1YjU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB9XG5cbiAgLnN1YiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLnN1YjEge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG5cbiAgLnN1YmhlYWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5zdWJwYXJhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIH1cblxuICAuZm9tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuZm9ybXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-profile',
                templateUrl: './student-profile.component.html',
                styleUrls: ['./student-profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/student-register/student-register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/student-register/student-register.component.ts ***!
  \****************************************************************/
/*! exports provided: StudentRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRegisterComponent", function() { return StudentRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StudentRegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentRegisterComponent.ɵfac = function StudentRegisterComponent_Factory(t) { return new (t || StudentRegisterComponent)(); };
StudentRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentRegisterComponent, selectors: [["app-student-register"]], decls: 2, vars: 0, template: function StudentRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "student-register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtcmVnaXN0ZXIvc3R1ZGVudC1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-register',
                templateUrl: './student-register.component.html',
                styleUrls: ['./student-register.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/student-saved-courses/student-saved-courses.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/student-saved-courses/student-saved-courses.component.ts ***!
  \**************************************************************************/
/*! exports provided: StudentSavedCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentSavedCoursesComponent", function() { return StudentSavedCoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StudentSavedCoursesComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentSavedCoursesComponent.ɵfac = function StudentSavedCoursesComponent_Factory(t) { return new (t || StudentSavedCoursesComponent)(); };
StudentSavedCoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentSavedCoursesComponent, selectors: [["app-student-saved-courses"]], decls: 2, vars: 0, template: function StudentSavedCoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "student-saved-courses works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtc2F2ZWQtY291cnNlcy9zdHVkZW50LXNhdmVkLWNvdXJzZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentSavedCoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-saved-courses',
                templateUrl: './student-saved-courses.component.html',
                styleUrls: ['./student-saved-courses.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/student-subscribe-list/student-subscribe-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/student-subscribe-list/student-subscribe-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: StudentSubscribeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentSubscribeListComponent", function() { return StudentSubscribeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../teacher-header/teacher-header.component */ "./src/app/teacher-header/teacher-header.component.ts");
/* harmony import */ var _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teacher-footer/teacher-footer.component */ "./src/app/teacher-footer/teacher-footer.component.ts");




class StudentSubscribeListComponent {
    constructor() { }
    ngOnInit() {
    }
}
StudentSubscribeListComponent.ɵfac = function StudentSubscribeListComponent_Factory(t) { return new (t || StudentSubscribeListComponent)(); };
StudentSubscribeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentSubscribeListComponent, selectors: [["app-student-subscribe-list"]], decls: 103, vars: 0, consts: [[1, "col-sm-12", "col-md-12", "col-xd-12", "list-card"], [1, "card", "shadow"], [1, "card-header"], [2, "text-align", "right", "font-weight", "bold", "font-size", "20px"], [1, "card-body"], [1, "table-responsive-xl", "tab"], [1, "table", "table-hover", "table-bordered"], ["scope", "col"], ["scope", "row"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "50%"], ["colspan", "2"]], template: function StudentSubscribeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-teacher-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Student List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "app-teacher-footer");
    } }, directives: [_teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_1__["TeacherHeaderComponent"], _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_2__["TeacherFooterComponent"]], styles: [".tab[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  overflow-y: scroll;\n  overflow-x: scroll;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1zdWJzY3JpYmUtbGlzdC9EOlxcS25vd2xlZGdlU2V0dS1GRS1tYWluL3NyY1xcYXBwXFxzdHVkZW50LXN1YnNjcmliZS1saXN0XFxzdHVkZW50LXN1YnNjcmliZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50LXN1YnNjcmliZS1saXN0L3N0dWRlbnQtc3Vic2NyaWJlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC1zdWJzY3JpYmUtbGlzdC9zdHVkZW50LXN1YnNjcmliZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG59XG4uY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59IiwiLnRhYiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentSubscribeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-subscribe-list',
                templateUrl: './student-subscribe-list.component.html',
                styleUrls: ['./student-subscribe-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/teacher-approval/teacher-approval.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/teacher-approval/teacher-approval.component.ts ***!
  \****************************************************************/
/*! exports provided: TeacherApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherApprovalComponent", function() { return TeacherApprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function TeacherApprovalComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherApprovalComponent_tr_56_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const model_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.DownloadFile(model_r2.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r2.name);
} }
class TeacherApprovalComponent {
    constructor(route, http, router) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.detail = {};
        this.files = {};
        this.filesLength = 0;
        this.downloadData = {};
        this.Password = {};
        this.DownloadFile = (name) => {
            this.downloadData["Id"] = this.Teacher_Id;
            this.downloadData["FileName"] = name;
            console.log(this.downloadData);
            this.http.post('/api/downloadFile', JSON.stringify(this.downloadData), {
                responseType: 'blob',
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
            }).subscribe(data => Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(data, name), error => console.log(error));
        };
        this.RegisterTeacher = () => {
            if (this.Password["password"] == null) {
                alert("Please Provide Password");
            }
            else {
                this.detail[0]["Teacher_Password"] = this.Password["password"];
                this.detail[0].Teacher_DOB = (this.detail[0].Teacher_DOB).substring(0, 9);
                console.log(this.Password);
                console.log(this.detail);
                this.http.post('/api/Register_Teacher_After_Approval', JSON.stringify(this.detail), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'Access-Control-Allow-Headers': 'true' }) }).subscribe((res) => {
                    console.log(res);
                    var Result_Value = res;
                    if (Result_Value["result"] == "Registered") {
                        this.router.navigate(['/admin']);
                    }
                });
            }
        };
    }
    ngOnInit() {
        this.Teacher_Id = this.route.snapshot.params['id'];
        this.http.get('/api/get_Temp_Teacher_Detail/' + this.Teacher_Id).subscribe((res) => {
            console.log(res);
            this.detail = res;
        });
        this.http.get('/api/getFileNames/' + this.Teacher_Id).subscribe((res) => {
            this.files = res;
            console.log(this.files);
            for (let x in this.files) {
                this.filesLength += 1;
            }
        });
    }
}
TeacherApprovalComponent.ɵfac = function TeacherApprovalComponent_Factory(t) { return new (t || TeacherApprovalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TeacherApprovalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherApprovalComponent, selectors: [["app-teacher-approval"]], decls: 60, vars: 8, consts: [[1, "cordcol"], [1, "container"], [1, "d-flex", "cordform", "justify-content-center"], [1, "card", "shadow", "col-sm-10", "col-xd-10", "col-md-10"], [1, "card-body", "cord"], [1, "row"], [1, "col-sm-4", "col-md-4", "col-xd-4"], [1, "center"], [1, "text", "cl"], [1, "row", "cll"], [1, "col-sm-12", "col-md-12", "col-xd-12"], ["type", "button", 1, "btn", "bton", "btncol", "shadow-sm"], ["type", "button", 1, "btn", "bton", "btncol1", "shadow-sm", 3, "click"], [1, "col-sm-8", "col-md-8", "col-xd-8"], [1, "row", "right"], [1, "col-sm-6", "col-md-6", "col-xd-6"], [1, "text"], [1, "mb-4"], [1, "d-flex", "justify-content-center"], [1, "card", "shadow", "col-sm-10", "col-xd-10", "col-md-10", 2, "margin-bottom", "100px"], [1, "table", "table-striped", "table-bordered"], ["scope", "col"], ["scope", "col", "colspan", "2"], [4, "ngFor", "ngForOf"], ["type", "text", "name", "password", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["scope", "row"], ["colspan", "2"], [3, "click"]], template: function TeacherApprovalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherApprovalComponent_Template_button_click_15_listener() { return ctx.RegisterTeacher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Approv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "P", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "P", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "P", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "state");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "P", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "S.no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Name of file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TeacherApprovalComponent_tr_56_Template, 9, 2, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Please provide the password for the approval ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherApprovalComponent_Template_input_ngModelChange_58_listener($event) { return ctx.Password.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detail[0].Teacher_Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detail[0].Teacher_Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detail[0].Teacher_Phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detail[0].Teacher_City);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.detail[0].Teacher_State);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.filesLength, " files needs to be checked for approval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Password.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".cordcol[_ngcontent-%COMP%] {\n  background-color: #239463;\n  width: 100%;\n  height: 200px;\n  border-radius: 0px;\n  border: none;\n}\n\n.cordform[_ngcontent-%COMP%] {\n  transform: translate(0px, -100px);\n}\n.card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0%;\n}\n.cord[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.text[_ngcontent-%COMP%] {\n  color: grey;\n}\n.cl[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.cll[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.right[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n.bton[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 5px 25px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin: 8px;\n}\n.btncol[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.5);\n  border: 2px solid red;\n  color: black;\n}\n.btncol1[_ngcontent-%COMP%] {\n  background-color: rgba(35, 148, 99, 0.5);\n  border: 2px solid #239463;\n  color: #FFFFFF;\n}\n\n.bton1[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #239463;\n  background-color: #239463;\n  color: #FFFFFF;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 10px 10px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n@media (max-width: 1024px) {\n  .bton[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    font-size: 12px;\n    font-weight: bold;\n    padding: 5px 10px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    margin: 5px;\n  }\n}\n@media (max-width: 858px) {\n  .bton[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    font-size: 12px;\n    font-weight: bold;\n    padding: 5px 10px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    margin: 8px;\n  }\n}\n@media (max-width: 574px) {\n  .bton[_ngcontent-%COMP%] {\n    border-radius: 5px;\n    font-size: 12px;\n    font-weight: bold;\n    padding: 5px 25px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    margin: 8px;\n  }\n\n  .center[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: left;\n  }\n\n  .right[_ngcontent-%COMP%] {\n    padding-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci1hcHByb3ZhbC9EOlxcS25vd2xlZGdlU2V0dS1GRS1tYWluL3NyY1xcYXBwXFx0ZWFjaGVyLWFwcHJvdmFsXFx0ZWFjaGVyLWFwcHJvdmFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFjaGVyLWFwcHJvdmFsL3RlYWNoZXItYXBwcm92YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0dBQUE7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENBLDJGQUFBO0FBQ0E7RUFDQyxpQ0FBQTtBQ0VEO0FEQUE7RUFDSSxZQUFBO0VBQ0gsaUJBQUE7QUNHRDtBRERBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtBQ0lEO0FERkE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7QUNLRDtBREhBO0VBQ0MsV0FBQTtBQ01EO0FESkE7RUFDQyxnQkFBQTtBQ09EO0FETEE7RUFDQyxnQkFBQTtBQ1FEO0FETkE7RUFDQyxrQkFBQTtBQ1NEO0FEUEE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNVRDtBRFJBO0VBQ0Msc0NBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNXRDtBRFRBO0VBQ0Msd0NBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNZRDtBRFZBLHlGQUFBO0FBQ0E7RUFDQyxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDYUQ7QURYQSxpRkFBQTtBQUNBO0VBQ0k7SUFDRixrQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7RUNjQTtBQUNGO0FEWkE7RUFDQztJQUNDLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtFQ2NBO0FBQ0Y7QURaQTtFQUNDO0lBQ0Msa0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0VDY0E7O0VEWkQ7SUFDQyxhQUFBO0lBQ0EscUJBQUE7RUNlQTs7RURiRDtJQUNDLGlCQUFBO0VDZ0JBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90ZWFjaGVyLWFwcHJvdmFsL3RlYWNoZXItYXBwcm92YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKmJhY2tncm91bmQgZ3JlZW4gY29sb3IgY3NzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5jb3JkY29se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKmZvcm0gY3NzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5jb3JkZm9ybXtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LC0xMDBweCk7XG59XG4uY2FyZHtcbiAgICBib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDAlO1xufVxuLmNvcmR7XG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY2VudGVye1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi50ZXh0e1xuXHRjb2xvcjogZ3JleTtcbn1cbi5jbHtcblx0bWFyZ2luLXRvcDogMzBweDtcbn1cbi5jbGx7XG5cdG1hcmdpbi10b3A6IDQwcHg7XG59XG4ucmlnaHR7XG5cdHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5idG9uIHtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRmb250LXNpemU6IDEycHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRwYWRkaW5nOiA1cHggMjVweDtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0bWFyZ2luOiA4cHg7XG59XG4uYnRuY29se1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogcmVkLCAkYWxwaGE6IDAuNSk7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcblx0Y29sb3I6IGJsYWNrO1xufVxuLmJ0bmNvbDF7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMjM5NDYzLCAkYWxwaGE6IDAuNSk7XG5cdGJvcmRlcjogMnB4IHNvbGlkICMyMzk0NjM7XG5cdGNvbG9yOiAjRkZGRkZGO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqdGhpcyBpcyB0aGUgY3NzIHNlY3Rpb24gZm9yIGZpbGVzKioqKioqKioqKioqKioqKioqKioqKiovXG4uYnRvbjEge1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMyMzk0NjM7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRmb250LXNpemU6IDE1cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRwYWRkaW5nOiAxMHB4IDEwcHg7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqTWVkaWEgcXVlcnkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KXtcbiAgICAuYnRvbiB7XG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRwYWRkaW5nOiA1cHggMTBweDtcblx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0bWFyZ2luOiA1cHg7XG5cdH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4NThweCl7XG5cdC5idG9uIHtcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdHBhZGRpbmc6IDVweCAxMHB4O1xuXHRcdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRtYXJnaW46IDhweDtcblx0fVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NHB4KXtcblx0LmJ0b24ge1xuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0cGFkZGluZzogNXB4IDI1cHg7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdG1hcmdpbjogOHB4O1xuXHR9XG5cdC5jZW50ZXJ7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG5cdH1cblx0LnJpZ2h0e1xuXHRcdHBhZGRpbmctbGVmdDogMHB4O1xuXHR9XG59IiwiLyoqKioqKioqKioqKioqKioqKioqKioqKipiYWNrZ3JvdW5kIGdyZWVuIGNvbG9yIGNzcyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uY29yZGNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKmZvcm0gY3NzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5jb3JkZm9ybSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTEwMHB4KTtcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xufVxuXG4uY29yZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRleHQge1xuICBjb2xvcjogZ3JleTtcbn1cblxuLmNsIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNsbCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5yaWdodCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmJ0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDVweCAyNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDhweDtcbn1cblxuLmJ0bmNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJ0bmNvbDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCAxNDgsIDk5LCAwLjUpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjM5NDYzO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqdGhpcyBpcyB0aGUgY3NzIHNlY3Rpb24gZm9yIGZpbGVzKioqKioqKioqKioqKioqKioqKioqKiovXG4uYnRvbjEge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMzk0NjM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipNZWRpYSBxdWVyeSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJ0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODU4cHgpIHtcbiAgLmJ0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogOHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc0cHgpIHtcbiAgLmJ0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogNXB4IDI1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogOHB4O1xuICB9XG5cbiAgLmNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIH1cblxuICAucmlnaHQge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherApprovalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-approval',
                templateUrl: './teacher-approval.component.html',
                styleUrls: ['./teacher-approval.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/teacher-dashboard/teacher-dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/teacher-dashboard/teacher-dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: TeacherDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherDashboardComponent", function() { return TeacherDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../teacher-header/teacher-header.component */ "./src/app/teacher-header/teacher-header.component.ts");
/* harmony import */ var _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../teacher-footer/teacher-footer.component */ "./src/app/teacher-footer/teacher-footer.component.ts");







const _c0 = function () { return ["/Profile"]; };
const _c1 = function () { return ["/liveClass"]; };
const _c2 = function () { return ["/uploadVideo"]; };
const _c3 = function () { return ["/showVideo"]; };
const _c4 = function () { return ["/studentSubscribeList"]; };
class TeacherDashboardComponent {
    constructor(cookieService, router, http) {
        this.cookieService = cookieService;
        this.router = router;
        this.http = http;
        this.model = {};
    }
    ngOnInit() {
        const cookieCheck = this.cookieService.check('User');
        console.log(cookieCheck);
        if (!cookieCheck) {
            this.router.navigate(['/']);
        }
        this.model = JSON.parse(this.cookieService.get('User'));
        console.log(this.model);
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
        $("#menu-toggle1").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
    }
}
TeacherDashboardComponent.ɵfac = function TeacherDashboardComponent_Factory(t) { return new (t || TeacherDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TeacherDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherDashboardComponent, selectors: [["app-teacher-dashboard"]], decls: 67, vars: 11, consts: [[1, "container"], [1, "bg-margin"], [1, "contain", "d-flex", "justify-content-center"], [2, "color", "black"], [1, "row"], [1, "col-sm-4", "col-md-4", "col-xd-4", "margin"], [1, "card", "shadow", 3, "routerLink"], [1, "card-body"], [1, "icons"], ["src", "../../assets/user.png"], [1, "text"], ["src", "../../assets/live.png"], ["src", "../../assets/upload.png"], ["src", "../../assets/multimedia.png"], ["src", "../../assets/student.png"], [1, "card", "shadow"], ["src", "../../assets/debit-card.png"], ["src", "../../assets/settings.png"], ["src", "../../assets/help.png"]], template: function TeacherDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-teacher-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Live Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Upload Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Show Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "app-teacher-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi, ", ctx.model[0].Teacher_Name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
    } }, directives: [_teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_4__["TeacherHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_5__["TeacherFooterComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n\n.bg-margin[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.contain[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n  border: 2px solid #fff;\n  color: #fff;\n  margin-top: 18px;\n  padding: 10px 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  letter-spacing: 2px;\n}\n.image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-top: -30px;\n  padding-top: 0%;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #fff;\n  border-radius: 5px;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n  z-index: 0;\n}\n.card[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #0795b5;\n  z-index: -2;\n  -webkit-clip-path: circle(10% at 0% 0%);\n          clip-path: circle(10% at 0% 0%);\n  transition: -webkit-clip-path 0.5s ease-in-out;\n  transition: clip-path 0.5s ease-in-out;\n  transition: clip-path 0.5s ease-in-out, -webkit-clip-path 0.5s ease-in-out;\n}\n.card[_ngcontent-%COMP%]:hover::after {\n  -webkit-clip-path: circle(80%);\n          clip-path: circle(80%);\n}\n.card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.icons[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: auto;\n  margin-top: auto;\n  margin-right: auto;\n  margin-bottom: auto;\n  display: block;\n  align-content: center;\n  position: relative;\n}\n.text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #0795b5;\n  margin-top: 50px;\n}\n.comtt[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n.ptext[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.navbar-brand[_ngcontent-%COMP%]   .colortext[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #0795b5;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: #0795b5;\n  padding: 8px 15px;\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n\n@media (max-width: 433px) {\n  .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.header[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #ffffff;\n  padding: 20px 10px;\n}\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  color: black;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px;\n}\n.header[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bold;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n  color: black;\n}\n.header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: white;\n}\n.header-right[_ngcontent-%COMP%] {\n  float: right;\n}\n@media screen and (max-width: 500px) {\n  .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n\n  .header-right[_ngcontent-%COMP%] {\n    float: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci1kYXNoYm9hcmQvRDpcXEtub3dsZWRnZVNldHUtRkUtbWFpbi9zcmNcXGFwcFxcdGVhY2hlci1kYXNoYm9hcmRcXHRlYWNoZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFjaGVyLWRhc2hib2FyZC90ZWFjaGVyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyRUFBQTtBQXdGQSwyRUFBQTtBQXZGUiwyREFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUNFRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG1CQUFBO0FDRUY7QURBQTtFQUVFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFRjtBREFBLDBFQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ0dGO0FEQUEsZUFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDR0Y7QUREQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUFBLDBFQUFBO0FDSUY7QURGQTtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7QUNLSjtBREhBO0VBQ0ksV0FBQTtBQ01KO0FESEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNNRjtBREpBO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQ09GO0FETEEscUVBQUE7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNRRjtBRE5BO0VBQ0UsbUJBQUE7QUNTRjtBRFBBO0VBQ0UsY0FBQTtBQ1VGO0FETEEsZ0NBQUE7QUFDQTtFQUNJLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDUUo7QUROQTtFQUNHLGdCQUFBO0VBQ0EsY0FBQTtBQ1NIO0FETkE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1NKO0FETkEsZ0NBQUE7QUFDQTtFQUNJO0lBQ0ksYUFBQTtFQ1NOO0FBQ0Y7QURBQTtFQUFHLHNCQUFBO0FDR0g7QUREQTtFQUNFLFNBQUE7RUFDQSx5Q0FBQTtBQ0lGO0FEREE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNJRjtBREFBO0VBQ0Usd0RBQUE7QUNHRjtBREFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDR0Y7QURBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0dGO0FEQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNHRjtBREFBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDR0Y7QURBQTtFQUNFLFlBQUE7QUNHRjtBREFBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEQUE7SUFDRSxXQUFBO0VDR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItZGFzaGJvYXJkL3RlYWNoZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuLyoqKioqKioqKioqKioqKioqKipjc3MgZm9yIG5hbWUgc2VjdGlvbioqKioqKioqKioqKioqKioqKiovXG4uYmctbWFyZ2lue1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBcbn1cbi5jb250YWluIGgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5pbWFnZXtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3RhY2hlci1wYW5uZWwtYmFja2dyb3VuZC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgcGFkZGluZy10b3A6IDAlO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKmNzcyBmb3IgY2FyZCBzZWN0aW9uKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ubWFyZ2lue1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuIFxuLypjYXJkIHNlY3Rpb24qL1xuLmNhcmR7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDA7XG59XG4uY2FyZDo6YWZ0ZXJ7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIHotaW5kZXg6IC0yO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgxMCUgYXQgMCUgMCUpO1xuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggLjVzIGVhc2UtaW4tb3V0O1xufVxuLmNhcmQ6aG92ZXI6OmFmdGVye1xuICAgIGNsaXAtcGF0aDogY2lyY2xlKDgwJSk7XG59XG4uY2FyZDpob3ZlciBoMntcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmljb25ze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0gIFxuLnRleHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKipmb290ZXIgY3NzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmZvb3RlcntcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwNzk1YjUsICRhbHBoYTogMS4wKTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5jb210dHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5wdGV4dHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuLyoqKioqKioqKioqKioqKioqbmF2IGNzcyBzdGFydCovXG4ubmF2YmFyLWJyYW5ke1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4ubmF2YmFyLWJyYW5kIC5jb2xvcnRleHR7XG4gICBtYXJnaW4tbGVmdDogOHB4OyBcbiAgIGNvbG9yOiAjMDc5NWI1O1xufVxuXG4uYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKioqKiptZWRpYSBxdWVyeSoqKioqKioqKioqKioqKi9cbkBtZWRpYShtYXgtd2lkdGg6NDMzcHgpe1xuICAgIC5uYXZiYXItYnJhbmQgc3BhbntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59IFxuXG5cblxuXG5cblxuXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cblxuYm9keSB7IFxuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuXG59XG5cbi5zaGFkb3d7XG4gIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKDAsMCwwLC4xNSkhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIGEge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4OyBcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmhlYWRlciBhLmxvZ28ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkZXIgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXItcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5oZWFkZXIgYSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLmhlYWRlci1yaWdodCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbn1cblxuXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcbi8qKioqKioqKioqKioqKioqKioqY3NzIGZvciBuYW1lIHNlY3Rpb24qKioqKioqKioqKioqKioqKioqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIik7XG4uYmctbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmNvbnRhaW4gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgcGFkZGluZy10b3A6IDAlO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqY3NzIGZvciBjYXJkIHNlY3Rpb24qKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4vKmNhcmQgc2VjdGlvbiovXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMDtcbn1cblxuLmNhcmQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xuICB6LWluZGV4OiAtMjtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMTAlIGF0IDAlIDAlKTtcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJkOmhvdmVyOjphZnRlciB7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDgwJSk7XG59XG5cbi5jYXJkOmhvdmVyIGgyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5pY29ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqZm9vdGVyIGNzcyBzdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDc5NWI1O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uY29tdHQge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ucHRleHQge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLyoqKioqKioqKioqKioqKioqbmF2IGNzcyBzdGFydCovXG4ubmF2YmFyLWJyYW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ubmF2YmFyLWJyYW5kIC5jb2xvcnRleHQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogIzA3OTViNTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQzM3B4KSB7XG4gIC5uYXZiYXItYnJhbmQgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuXG4uc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5oZWFkZXIgYS5sb2dvIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlciBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaGVhZGVyIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaGVhZGVyIGEge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuaGVhZGVyLXJpZ2h0IHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-dashboard',
                templateUrl: './teacher-dashboard.component.html',
                styleUrls: ['./teacher-dashboard.component.scss']
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/teacher-details/teacher-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/teacher-details/teacher-details.component.ts ***!
  \**************************************************************/
/*! exports provided: TeacherDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherDetailsComponent", function() { return TeacherDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/admin"]; };
class TeacherDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeacherDetailsComponent.ɵfac = function TeacherDetailsComponent_Factory(t) { return new (t || TeacherDetailsComponent)(); };
TeacherDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherDetailsComponent, selectors: [["app-teacher-details"]], decls: 52, vars: 2, consts: [[1, "jumbotron", "cordcol"], [1, "container"], [1, "col-sm-12", "col-md-12", "col-xd-12", "list-card"], [1, "card", "shadow"], [1, "card-header"], [2, "text-align", "right", "font-weight", "bold", "font-size", "20px"], [1, "card-body"], [1, "table-responsive-xl"], [1, "table", "table-hover", "table-bordered"], ["scope", "col"], ["scope", "row"], ["colspan", "2"], [1, "card-footer"], ["type", "button", 1, "btn", "detailsbtn", 3, "routerLink"]], template: function TeacherDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Teacher List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "FirstName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "LastName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Larry the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".cordcol[_ngcontent-%COMP%] {\n  background-color: #239463;\n  width: 100%;\n  height: 200px;\n  border-radius: 0px;\n  border: none;\n}\n\n.list-card[_ngcontent-%COMP%] {\n  transform: translate(0px, -100px);\n  z-index: 2;\n}\n.detailsbtn[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #239463;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci1kZXRhaWxzL0Q6XFxLbm93bGVkZ2VTZXR1LUZFLW1haW4vc3JjXFxhcHBcXHRlYWNoZXItZGV0YWlsc1xcdGVhY2hlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFjaGVyLWRldGFpbHMvdGVhY2hlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtHQUFBO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURDQSxnR0FBQTtBQUNBO0VBQ0ksaUNBQUE7RUFDQSxVQUFBO0FDRUo7QURBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDSCxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNHLHlCQUFBO0VBQ0EsZUFBQTtBQ0dKO0FEREE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItZGV0YWlscy90ZWFjaGVyLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKmJhY2tncm91bmQgZ3JlZW4gY29sb3IgY3NzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5jb3JkY29se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKnN0dWRlbnQgbGlzdCB0YWJsZSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmxpc3QtY2FyZHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsLTEwMHB4KTtcbiAgICB6LWluZGV4OiAyO1xufVxuLmRldGFpbHNidG57XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG5cdGNvbG9yOiAjZmZmZmZmO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRwYWRkaW5nOiAxMnB4IDQ1cHg7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFibGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufSIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqYmFja2dyb3VuZCBncmVlbiBjb2xvciBjc3MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmNvcmRjb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipzdHVkZW50IGxpc3QgdGFibGUqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5saXN0LWNhcmQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0xMDBweCk7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5kZXRhaWxzYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTJweCA0NXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-details',
                templateUrl: './teacher-details.component.html',
                styleUrls: ['./teacher-details.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/teacher-footer/teacher-footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/teacher-footer/teacher-footer.component.ts ***!
  \************************************************************/
/*! exports provided: TeacherFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherFooterComponent", function() { return TeacherFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TeacherFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeacherFooterComponent.ɵfac = function TeacherFooterComponent_Factory(t) { return new (t || TeacherFooterComponent)(); };
TeacherFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherFooterComponent, selectors: [["app-teacher-footer"]], decls: 46, vars: 0, consts: [[1, "footer", "pt-5", "pb-4"], [1, "container", "text-md-left"], [1, "row", "text-md-left"], [1, "col-md-3", "col-lg-3", "col-xl-3", "mx-auto", "mt-3"], [1, "mb-4", "comtt", "text-warning"], [1, "ptext"], [1, "col-md-2", "col-lg-2", "col-xl-2", "mx-auto", "mt-3"], [1, "text-uppercase", "mb-4", "font-weight-bold", "text-warning"], ["src", "/assets/double_arrow-white-18dp.svg"], ["href", "#", 1, "text-white", 2, "text-decoration", "none"], [1, "col-md-4", "col-lg-3", "col-xl-3", "mx-auto", "mt-3"], [1, "text-white"], ["src", "/assets/fmd_good-white-18dp.svg"], ["src", "/assets/mail-white-18dp.svg"], ["src", "/assets/call-white-18dp.svg"], [1, "mb-4"], [1, "row"], [1, "d-flex", "justify-content-center", "text-white"]], template: function TeacherFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Knowledge Setu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We are helping organizations and the companies in their start up and make their journey simple with no complexities, we are defined with the imaginary emerging technology transformation to unbound the new insights for them.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "AboutUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Term&Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Indrapuram, Ghaziabad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " info@krashitservice.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " +91 9324226748 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "+91 9760967225 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u00A9 Copyright Krash IT Services.All Right Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n\n.bg-margin[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.contain[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n  border: 2px solid #fff;\n  color: #fff;\n  margin-top: 18px;\n  padding: 10px 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  letter-spacing: 2px;\n}\n.image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-top: -30px;\n  padding-top: 0%;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #fff;\n  border-radius: 5px;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n  z-index: 0;\n}\n.card[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #0795b5;\n  z-index: -2;\n  -webkit-clip-path: circle(10% at 0% 0%);\n          clip-path: circle(10% at 0% 0%);\n  transition: -webkit-clip-path 0.5s ease-in-out;\n  transition: clip-path 0.5s ease-in-out;\n  transition: clip-path 0.5s ease-in-out, -webkit-clip-path 0.5s ease-in-out;\n}\n.card[_ngcontent-%COMP%]:hover::after {\n  -webkit-clip-path: circle(80%);\n          clip-path: circle(80%);\n}\n.card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.icons[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: auto;\n  margin-top: auto;\n  margin-right: auto;\n  margin-bottom: auto;\n  display: block;\n  align-content: center;\n  position: relative;\n}\n.text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #0795b5;\n  margin-top: 50px;\n}\n.comtt[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n.ptext[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.navbar-brand[_ngcontent-%COMP%]   .colortext[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #0795b5;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: #0795b5;\n  padding: 8px 15px;\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n\n@media (max-width: 433px) {\n  .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.header[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #ffffff;\n  padding: 20px 10px;\n}\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  color: black;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px;\n}\n.header[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bold;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n  color: black;\n}\n.header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: white;\n}\n.header-right[_ngcontent-%COMP%] {\n  float: right;\n}\n@media screen and (max-width: 500px) {\n  .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n\n  .header-right[_ngcontent-%COMP%] {\n    float: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci1mb290ZXIvRDpcXEtub3dsZWRnZVNldHUtRkUtbWFpbi9zcmNcXGFwcFxcdGVhY2hlci1mb290ZXJcXHRlYWNoZXItZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFjaGVyLWZvb3Rlci90ZWFjaGVyLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyRUFBQTtBQXdGQSwyRUFBQTtBQXZGUiwyREFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUNFRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG1CQUFBO0FDRUY7QURBQTtFQUVFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFRjtBREFBLDBFQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ0dGO0FEQUEsZUFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDR0Y7QUREQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUFBLDBFQUFBO0FDSUY7QURGQTtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7QUNLSjtBREhBO0VBQ0ksV0FBQTtBQ01KO0FESEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNNRjtBREpBO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQ09GO0FETEEscUVBQUE7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNRRjtBRE5BO0VBQ0UsbUJBQUE7QUNTRjtBRFBBO0VBQ0UsY0FBQTtBQ1VGO0FETEEsZ0NBQUE7QUFDQTtFQUNJLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDUUo7QUROQTtFQUNHLGdCQUFBO0VBQ0EsY0FBQTtBQ1NIO0FETkE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1NKO0FETkEsZ0NBQUE7QUFDQTtFQUNJO0lBQ0ksYUFBQTtFQ1NOO0FBQ0Y7QURBQTtFQUFHLHNCQUFBO0FDR0g7QUREQTtFQUNFLFNBQUE7RUFDQSx5Q0FBQTtBQ0lGO0FEREE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNJRjtBREFBO0VBQ0Usd0RBQUE7QUNHRjtBREFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDR0Y7QURBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0dGO0FEQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNHRjtBREFBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDR0Y7QURBQTtFQUNFLFlBQUE7QUNHRjtBREFBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEQUE7SUFDRSxXQUFBO0VDR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItZm9vdGVyL3RlYWNoZXItZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuLyoqKioqKioqKioqKioqKioqKipjc3MgZm9yIG5hbWUgc2VjdGlvbioqKioqKioqKioqKioqKioqKiovXG4uYmctbWFyZ2lue1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBcbn1cbi5jb250YWluIGgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5pbWFnZXtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3RhY2hlci1wYW5uZWwtYmFja2dyb3VuZC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgcGFkZGluZy10b3A6IDAlO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKmNzcyBmb3IgY2FyZCBzZWN0aW9uKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ubWFyZ2lue1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuIFxuLypjYXJkIHNlY3Rpb24qL1xuLmNhcmR7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDA7XG59XG4uY2FyZDo6YWZ0ZXJ7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIHotaW5kZXg6IC0yO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgxMCUgYXQgMCUgMCUpO1xuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggLjVzIGVhc2UtaW4tb3V0O1xufVxuLmNhcmQ6aG92ZXI6OmFmdGVye1xuICAgIGNsaXAtcGF0aDogY2lyY2xlKDgwJSk7XG59XG4uY2FyZDpob3ZlciBoMntcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmljb25ze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0gIFxuLnRleHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKipmb290ZXIgY3NzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmZvb3RlcntcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwNzk1YjUsICRhbHBoYTogMS4wKTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5jb210dHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5wdGV4dHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuLyoqKioqKioqKioqKioqKioqbmF2IGNzcyBzdGFydCovXG4ubmF2YmFyLWJyYW5ke1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4ubmF2YmFyLWJyYW5kIC5jb2xvcnRleHR7XG4gICBtYXJnaW4tbGVmdDogOHB4OyBcbiAgIGNvbG9yOiAjMDc5NWI1O1xufVxuXG4uYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKioqKiptZWRpYSBxdWVyeSoqKioqKioqKioqKioqKi9cbkBtZWRpYShtYXgtd2lkdGg6NDMzcHgpe1xuICAgIC5uYXZiYXItYnJhbmQgc3BhbntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59IFxuXG5cblxuXG5cblxuXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cblxuYm9keSB7IFxuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuXG59XG5cbi5zaGFkb3d7XG4gIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKDAsMCwwLC4xNSkhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIGEge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4OyBcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmhlYWRlciBhLmxvZ28ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkZXIgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXItcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5oZWFkZXIgYSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLmhlYWRlci1yaWdodCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbn1cblxuXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcbi8qKioqKioqKioqKioqKioqKioqY3NzIGZvciBuYW1lIHNlY3Rpb24qKioqKioqKioqKioqKioqKioqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIik7XG4uYmctbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmNvbnRhaW4gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgcGFkZGluZy10b3A6IDAlO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqY3NzIGZvciBjYXJkIHNlY3Rpb24qKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4vKmNhcmQgc2VjdGlvbiovXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMDtcbn1cblxuLmNhcmQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xuICB6LWluZGV4OiAtMjtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMTAlIGF0IDAlIDAlKTtcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJkOmhvdmVyOjphZnRlciB7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDgwJSk7XG59XG5cbi5jYXJkOmhvdmVyIGgyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5pY29ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqZm9vdGVyIGNzcyBzdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDc5NWI1O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uY29tdHQge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ucHRleHQge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLyoqKioqKioqKioqKioqKioqbmF2IGNzcyBzdGFydCovXG4ubmF2YmFyLWJyYW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ubmF2YmFyLWJyYW5kIC5jb2xvcnRleHQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogIzA3OTViNTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQzM3B4KSB7XG4gIC5uYXZiYXItYnJhbmQgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuXG4uc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5oZWFkZXIgYS5sb2dvIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlciBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaGVhZGVyIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaGVhZGVyIGEge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuaGVhZGVyLXJpZ2h0IHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-footer',
                templateUrl: './teacher-footer.component.html',
                styleUrls: ['./teacher-footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/teacher-header/teacher-header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/teacher-header/teacher-header.component.ts ***!
  \************************************************************/
/*! exports provided: TeacherHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherHeaderComponent", function() { return TeacherHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class TeacherHeaderComponent {
    constructor(cookieService, http, router) {
        this.cookieService = cookieService;
        this.http = http;
        this.router = router;
        this.logout = () => {
            //Session needs to be clear here from backend
            //then cookie
            this.http.get('/api/logout').subscribe((res) => {
                console.log(res);
                if (res["LoggedIn"] == false) {
                    const dateNow = new Date();
                    this.deleteCookie();
                    setTimeout(() => { this.router.navigate(['/']); }, 1000);
                }
            });
        };
    }
    deleteCookie() {
        this.cookieService.delete('User', '/');
    }
    ngOnInit() {
    }
}
TeacherHeaderComponent.ɵfac = function TeacherHeaderComponent_Factory(t) { return new (t || TeacherHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TeacherHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherHeaderComponent, selectors: [["app-teacher-header"]], decls: 13, vars: 0, consts: [[1, "navbar", "navbar-light", "shadow"], [1, "container"], ["href", "#default", 1, "navbar-brand"], ["src", "../../assets/Krash IT Services png.PNG", "width", "60", "height", "60"], [1, "colortext"], [1, "navbar-text"], [1, "btn", "active", "shadow", 3, "click"], ["src", "../../assets/teacher-pannel-logout.svg"]], template: function TeacherHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Knowledge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Setu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherHeaderComponent_Template_button_click_10_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " LogOut ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n\n.bg-margin[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.contain[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n  border: 2px solid #fff;\n  color: #fff;\n  margin-top: 18px;\n  padding: 10px 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  letter-spacing: 2px;\n}\n.image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-top: -30px;\n  padding-top: 0%;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  background-color: #fff;\n  border-radius: 5px;\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n  overflow: hidden;\n  position: relative;\n  cursor: pointer;\n  z-index: 0;\n}\n.card[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #0795b5;\n  z-index: -2;\n  -webkit-clip-path: circle(10% at 0% 0%);\n          clip-path: circle(10% at 0% 0%);\n  transition: -webkit-clip-path 0.5s ease-in-out;\n  transition: clip-path 0.5s ease-in-out;\n  transition: clip-path 0.5s ease-in-out, -webkit-clip-path 0.5s ease-in-out;\n}\n.card[_ngcontent-%COMP%]:hover::after {\n  -webkit-clip-path: circle(80%);\n          clip-path: circle(80%);\n}\n.card[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.icons[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: auto;\n  margin-top: auto;\n  margin-right: auto;\n  margin-bottom: auto;\n  display: block;\n  align-content: center;\n  position: relative;\n}\n.text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #0795b5;\n  margin-top: 50px;\n}\n.comtt[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n.ptext[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.navbar-brand[_ngcontent-%COMP%]   .colortext[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #0795b5;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: #0795b5;\n  padding: 8px 15px;\n  text-transform: uppercase;\n  color: #ffffff;\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n\n@media (max-width: 433px) {\n  .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.header[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #ffffff;\n  padding: 20px 10px;\n}\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  color: black;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px;\n}\n.header[_ngcontent-%COMP%]   a.logo[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bold;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n  color: black;\n}\n.header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: dodgerblue;\n  color: white;\n}\n.header-right[_ngcontent-%COMP%] {\n  float: right;\n}\n@media screen and (max-width: 500px) {\n  .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n\n  .header-right[_ngcontent-%COMP%] {\n    float: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci1oZWFkZXIvRDpcXEtub3dsZWRnZVNldHUtRkUtbWFpbi9zcmNcXGFwcFxcdGVhY2hlci1oZWFkZXJcXHRlYWNoZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFjaGVyLWhlYWRlci90ZWFjaGVyLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyRUFBQTtBQXdGQSwyRUFBQTtBQXZGUiwyREFBQTtBQUNBO0VBQ0UsZ0JBQUE7QUNFRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG1CQUFBO0FDRUY7QURBQTtFQUVFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFRjtBREFBLDBFQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ0dGO0FEQUEsZUFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDR0Y7QUREQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUFBLDBFQUFBO0FDSUY7QURGQTtFQUNJLDhCQUFBO1VBQUEsc0JBQUE7QUNLSjtBREhBO0VBQ0ksV0FBQTtBQ01KO0FESEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNNRjtBREpBO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQ09GO0FETEEscUVBQUE7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNRRjtBRE5BO0VBQ0UsbUJBQUE7QUNTRjtBRFBBO0VBQ0UsY0FBQTtBQ1VGO0FETEEsZ0NBQUE7QUFDQTtFQUNJLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDUUo7QUROQTtFQUNHLGdCQUFBO0VBQ0EsY0FBQTtBQ1NIO0FETkE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1NKO0FETkEsZ0NBQUE7QUFDQTtFQUNJO0lBQ0ksYUFBQTtFQ1NOO0FBQ0Y7QURBQTtFQUFHLHNCQUFBO0FDR0g7QUREQTtFQUNFLFNBQUE7RUFDQSx5Q0FBQTtBQ0lGO0FEREE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNJRjtBREFBO0VBQ0Usd0RBQUE7QUNHRjtBREFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDR0Y7QURBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0dGO0FEQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNHRjtBREFBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDR0Y7QURBQTtFQUNFLFlBQUE7QUNHRjtBREFBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDR0Y7O0VEQUE7SUFDRSxXQUFBO0VDR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItaGVhZGVyL3RlYWNoZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuLyoqKioqKioqKioqKioqKioqKipjc3MgZm9yIG5hbWUgc2VjdGlvbioqKioqKioqKioqKioqKioqKiovXG4uYmctbWFyZ2lue1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBcbn1cbi5jb250YWluIGgxe1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5pbWFnZXtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3RhY2hlci1wYW5uZWwtYmFja2dyb3VuZC5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgcGFkZGluZy10b3A6IDAlO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKmNzcyBmb3IgY2FyZCBzZWN0aW9uKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4ubWFyZ2lue1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuIFxuLypjYXJkIHNlY3Rpb24qL1xuLmNhcmR7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDA7XG59XG4uY2FyZDo6YWZ0ZXJ7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIHotaW5kZXg6IC0yO1xuICBjbGlwLXBhdGg6IGNpcmNsZSgxMCUgYXQgMCUgMCUpO1xuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggLjVzIGVhc2UtaW4tb3V0O1xufVxuLmNhcmQ6aG92ZXI6OmFmdGVye1xuICAgIGNsaXAtcGF0aDogY2lyY2xlKDgwJSk7XG59XG4uY2FyZDpob3ZlciBoMntcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmljb25ze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0gIFxuLnRleHR7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuLyoqKioqKioqKioqKioqKioqKioqKipmb290ZXIgY3NzIHN0YXJ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmZvb3RlcntcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwNzk1YjUsICRhbHBoYTogMS4wKTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5jb210dHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5wdGV4dHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xuLyoqKioqKioqKioqKioqKioqbmF2IGNzcyBzdGFydCovXG4ubmF2YmFyLWJyYW5ke1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4ubmF2YmFyLWJyYW5kIC5jb2xvcnRleHR7XG4gICBtYXJnaW4tbGVmdDogOHB4OyBcbiAgIGNvbG9yOiAjMDc5NWI1O1xufVxuXG4uYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vKioqKiptZWRpYSBxdWVyeSoqKioqKioqKioqKioqKi9cbkBtZWRpYShtYXgtd2lkdGg6NDMzcHgpe1xuICAgIC5uYXZiYXItYnJhbmQgc3BhbntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59IFxuXG5cblxuXG5cblxuXG4qIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cblxuYm9keSB7IFxuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuXG59XG5cbi5zaGFkb3d7XG4gIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKDAsMCwwLC4xNSkhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIGEge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4OyBcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmhlYWRlciBhLmxvZ28ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkZXIgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkZXItcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5oZWFkZXIgYSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLmhlYWRlci1yaWdodCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbn1cblxuXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFwiKTtcbi8qKioqKioqKioqKioqKioqKioqY3NzIGZvciBuYW1lIHNlY3Rpb24qKioqKioqKioqKioqKioqKioqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcIik7XG4uYmctbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmNvbnRhaW4gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgcGFkZGluZy10b3A6IDAlO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqY3NzIGZvciBjYXJkIHNlY3Rpb24qKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4vKmNhcmQgc2VjdGlvbiovXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMDtcbn1cblxuLmNhcmQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc5NWI1O1xuICB6LWluZGV4OiAtMjtcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMTAlIGF0IDAlIDAlKTtcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJkOmhvdmVyOjphZnRlciB7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDgwJSk7XG59XG5cbi5jYXJkOmhvdmVyIGgyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5pY29ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqZm9vdGVyIGNzcyBzdGFydCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDc5NWI1O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uY29tdHQge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ucHRleHQge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLyoqKioqKioqKioqKioqKioqbmF2IGNzcyBzdGFydCovXG4ubmF2YmFyLWJyYW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ubmF2YmFyLWJyYW5kIC5jb2xvcnRleHQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogIzA3OTViNTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQzM3B4KSB7XG4gIC5uYXZiYXItYnJhbmQgc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuXG4uc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5oZWFkZXIgYS5sb2dvIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlciBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaGVhZGVyIGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuaGVhZGVyIGEge1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuaGVhZGVyLXJpZ2h0IHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-header',
                templateUrl: './teacher-header.component.html',
                styleUrls: ['./teacher-header.component.scss']
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/teacher-login/teacher-login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/teacher-login/teacher-login.component.ts ***!
  \**********************************************************/
/*! exports provided: TeacherLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherLoginComponent", function() { return TeacherLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var country_state_city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! country-state-city */ "./node_modules/country-state-city/dist/index.js");
/* harmony import */ var country_state_city__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(country_state_city__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _teacher_uploads_teacher_uploads_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teacher-uploads/teacher-uploads.component */ "./src/app/teacher-uploads/teacher-uploads.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");















function TeacherLoginComponent_mat_option_65_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherLoginComponent_mat_option_65_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const state_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.getCities(state_r13.isoCode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r13.name, " ");
} }
function TeacherLoginComponent_mat_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r16.name, " ");
} }
class TeacherLoginComponent {
    constructor(http, route, dialog, cookieService) {
        this.http = http;
        this.route = route;
        this.dialog = dialog;
        this.cookieService = cookieService;
        this.States = {};
        this.Cities = {};
        this.model = {};
        this.loginDetail = {};
        this.alert = "";
        this.result = {};
        this.getCities = (id) => {
            this.Cities = country_state_city__WEBPACK_IMPORTED_MODULE_1___default.a.getCitiesOfState('IN', id);
        };
        this.onSubmit = (buttonType) => {
            if (buttonType === 'SignUp') {
                console.log("SignUP hua");
                console.log(this.model);
                let DialogRef = this.dialog.open(_teacher_uploads_teacher_uploads_component__WEBPACK_IMPORTED_MODULE_3__["TeacherUploadsComponent"], {
                    width: '600px',
                    data: this.model
                });
            }
            if (buttonType === 'SignIn') {
                const data = JSON.stringify(this.loginDetail);
                console.log(data);
                this.http.post("/api/teacherLogin", data, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'Access-Control-Allow-Headers': 'true' }) }).subscribe((res) => {
                    this.result = res;
                    console.log(this.result["LoggedIn"]);
                    if (this.result["LoggedIn"]) {
                        const dateNow = new Date();
                        console.log(dateNow.getHours());
                        dateNow.setDate(dateNow.getDate() + 1);
                        console.log(dateNow);
                        this.alert = "";
                        this.cookieService.set('User', JSON.stringify(this.result["data"]), dateNow, '/');
                        var items = this.cookieService.get('User');
                        setTimeout(() => { this.route.navigate(['/teacherDashboard']); }, 1000);
                    }
                    else {
                        this.alert = "Invalid Email or Password";
                        setTimeout(() => { this.alert = ""; }, 3000);
                    }
                });
            }
        };
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.States = country_state_city__WEBPACK_IMPORTED_MODULE_1___default.a.getStatesOfCountry("IN");
        console.log(this.States);
    }
    ngOnInit() {
        const cookieExists = this.cookieService.check('User');
        if (cookieExists) {
            this.route.navigate(['/teacherDashboard']);
        }
        var active = document.querySelector('#pills-home-tab');
        var active1 = document.querySelector('#pills-profile-tab');
        var signin = document.querySelector('#pills-signin');
        var signup = document.querySelector('#pills-profile');
        active.addEventListener('click', function () {
            active.classList.add('act');
            signin.classList.add('show');
            signin.classList.add('active');
            signup.classList.remove('show');
            signup.classList.remove('active');
            active1.classList.remove('act');
        });
        active1.addEventListener('click', function () {
            active1.classList.add('act');
            signin.classList.remove('show');
            signin.classList.remove('active');
            signup.classList.add('show');
            signup.classList.add('active');
            active.classList.remove('act');
        });
    }
}
TeacherLoginComponent.ɵfac = function TeacherLoginComponent_Factory(t) { return new (t || TeacherLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"])); };
TeacherLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherLoginComponent, selectors: [["app-teacher-login"]], decls: 75, vars: 14, consts: [[1, "bg-margin"], [1, "container"], [1, "card", "showcard", "shadow"], [1, "card-body"], [1, "row"], [1, "col-sm-8", "col-md-8", "col-xd-8"], [1, "card-head1"], [1, "colortext"], [1, "plaintext"], [1, "text"], [1, "para"], [1, "image"], ["src", "../../assets/welcomeloginimage.svg", 1, "img-fluid", "loginimg"], [1, "col-sm-4", "col-md-4", "col-xd-4"], [1, "card", "formcard", "shadow"], ["id", "pills-tab", "role", "tablist", 1, "nav", "mb-3"], ["role", "presentation", 1, "nav-item"], ["id", "pills-home-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-signin", "type", "button", "role", "tab", "aria-controls", "pills-signin", "aria-selected", "true", 1, "tabs", "shadow", "act"], ["id", "pills-profile-tab", "data-bs-toggle", "pill", "data-bs-target", "#pills-profile", "type", "button", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "tabs", "shadow"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-signin", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], ["enctype", "multipart/form-data", 1, "was-validated", 3, "ngSubmit"], ["loginForm", "ngForm"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "password", "placeholder", "Password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [2, "color", "red"], ["type", "button", 1, "bton", "shadow", 3, "disabled", "click"], ["href", "#"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], ["registerForm", "ngForm"], ["type", "text", "placeholder", "FullName", "name", "fullName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["fullName", "ngModel"], ["type", "text", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "tel", "placeholder", "Phone Number", "name", "phoneNumber", "required", "", "maxlength", "10", 1, "form-control", 3, "ngModel", "ngModelChange"], ["phoneNumber", "ngModel"], ["type", "text", "placeholder", "Address", "name", "address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["address", "ngModel"], ["type", "text", "placeholder", "Date of Birth", "onfocus", "(this.type='date')", "name", "dateofBirth", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["dateofBirth", "ngModel"], [1, "form-group"], ["appearance", "fill", 2, "width", "100%"], ["name", "state", "required", "", 3, "ngModel", "ngModelChange"], ["state", "ngModel"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["name", "city", "required", "", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "bton", "shadow", 3, "disabled", "click"], [3, "value", "click"], [3, "value"]], template: function TeacherLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Knowledge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Setu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "#1 India's Best Teaching and Learning Platform Which Provide live Interaction With Educator As well as Recorded Lectures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TeacherLoginComponent_Template_form_ngSubmit_30_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherLoginComponent_Template_input_ngModelChange_34_listener($event) { return ctx.loginDetail.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherLoginComponent_Template_input_ngModelChange_36_listener($event) { return ctx.loginDetail.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherLoginComponent_Template_button_click_40_listener() { return ctx.onSubmit("SignIn"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form", 21, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TeacherLoginComponent_Template_form_ngSubmit_45_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherLoginComponent_Template_input_ngModelChange_49_listener($event) { return ctx.model.fullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 34, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherLoginComponent_Template_input_ngModelChange_51_listener($event) { return ctx.model.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherLoginComponent_Template_input_ngModelChange_53_listener($event) { return ctx.model.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherLoginComponent_Template_input_ngModelChange_55_listener($event) { return ctx.model.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherLoginComponent_Template_input_ngModelChange_57_listener($event) { return ctx.model.dateofBirth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-select", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherLoginComponent_Template_mat_select_ngModelChange_63_listener($event) { return ctx.model.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, TeacherLoginComponent_mat_option_65_Template, 2, 2, "mat-option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-select", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeacherLoginComponent_Template_mat_select_ngModelChange_70_listener($event) { return ctx.model.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, TeacherLoginComponent_mat_option_72_Template, 2, 2, "mat-option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherLoginComponent_Template_button_click_73_listener() { return ctx.onSubmit("SignUp"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginDetail.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginDetail.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.alert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.dateofBirth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.States);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.form.valid);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap\");\n\n\n.bg-margin[_ngcontent-%COMP%] {\n  margin-top: 150px;\n}\n.text[_ngcontent-%COMP%]   .para[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Roboto\", sans-serif;\n  letter-spacing: 1px;\n  line-height: 1.8;\n  color: rgba(0, 0, 0, 0.8);\n}\n.card-head1[_ngcontent-%COMP%] {\n  text-decoration: none;\n  outline: none;\n}\n.card-head1[_ngcontent-%COMP%]   .colortext[_ngcontent-%COMP%] {\n  color: #0795b5;\n  font-size: 30px;\n  font-family: \"Luckiest Guy\", cursive;\n}\n.card-head1[_ngcontent-%COMP%]   .plaintext[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 30px;\n  font-family: \"Luckiest Guy\", cursive;\n}\n.loginimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n.card[_ngcontent-%COMP%] {\n  display: block;\n  border: none;\n  border-radius: 0%;\n}\n.showcard[_ngcontent-%COMP%] {\n  background-color: #eee;\n  padding-top: 30px;\n  padding-right: 100px;\n  padding-left: 100px;\n  padding-bottom: 30px;\n}\n.formcard[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 50px;\n  padding-bottom: 20px;\n}\n.tab-content[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\nform[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  display: -moz-inline-box;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  text-align: center;\n}\n.tabs[_ngcontent-%COMP%] {\n  border: 2px solid #0795b5;\n  text-decoration: none;\n  color: #0795b5;\n  font-weight: bold;\n  margin-right: 5px;\n  padding: 5px 5px;\n  border-radius: 4px;\n}\n.act[_ngcontent-%COMP%] {\n  background-color: #0795b5;\n  color: #fff;\n  font-weight: bold;\n  margin-right: 5px;\n  padding: 7px 7px;\n  border-radius: 4px;\n  text-decoration: none;\n  border: none;\n}\nform[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\ninput[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  padding: 12px 15px;\n  margin: 8px 0;\n  width: 100%;\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0;\n}\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 20px 0 30px;\n}\n.bton[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  border: 1px solid #0795b5;\n  background-color: #0795b5;\n  color: #FFFFFF;\n  font-size: 15px;\n  font-weight: bold;\n  width: 100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n@media (max-width: 1198) {\n  .showcard[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n\n  .formcard[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 50px;\n    padding-bottom: 20px;\n  }\n}\n@media (max-width: 1024px) {\n  .showcard[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n}\n@media (max-width: 768px) {\n  .col-sm-8[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .col-sm-4[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    width: 100%;\n  }\n}\n@media (max-width: 450px) {\n  .showcard[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n}\n@media (max-width: 320px) {\n  .showcard[_ngcontent-%COMP%] {\n    padding: 8px 8px;\n  }\n\n  .card-head1[_ngcontent-%COMP%]   .colortext[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .card-head1[_ngcontent-%COMP%]   .plaintext[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 280px) {\n  .arrowbtn[_ngcontent-%COMP%] {\n    width: 17px;\n    height: 17px;\n  }\n\n  .showcard[_ngcontent-%COMP%] {\n    padding: 5px 5px;\n  }\n\n  .formcard[_ngcontent-%COMP%] {\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 50px;\n    padding-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci1sb2dpbi9EOlxcS25vd2xlZGdlU2V0dS1GRS1tYWluL3NyY1xcYXBwXFx0ZWFjaGVyLWxvZ2luXFx0ZWFjaGVyLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFjaGVyLWxvZ2luL3RlYWNoZXItbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkVBQUE7QUFDQSxrRkFBQTtBQUNBLGlGQUFBO0FBQ1Isb0ZBQUE7QUFDQSw2QkFBQTtBQUNBO0VBQ0MsaUJBQUE7QUNDRDtBRENBO0VBQ0MsZUFBQTtFQUNBLGlCQUFBO0VBQ0csaUNBQUE7RUFDSCxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNFRDtBREFBO0VBQ0MscUJBQUE7RUFDQSxhQUFBO0FDR0Q7QUREQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNJRDtBREZDO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0tGO0FESEE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtBQ01EO0FESkE7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDT0Q7QURMQTtFQUNDLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNRRDtBRE5BO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNTRDtBRFBBO0VBQ0MsZ0JBQUE7QUNVRDtBRFJBO0VBQ0MseUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1dEO0FEVEE7RUFDQyx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDWUQ7QURWQTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDYUQ7QURYQTtFQUNDLGdCQUFBO0FDY0Q7QURaQTtFQUNDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNlRDtBRGJBO0VBQ0MsaUJBQUE7RUFDQSxTQUFBO0FDZ0JEO0FEZEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNpQkQ7QURmQTtFQUNDLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNrQkQ7QURmQSxrRUFBQTtBQUNBO0VBQ0M7SUFDQyxrQkFBQTtFQ2tCQTs7RURoQkQ7SUFDQyxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQ21CQTtBQUNGO0FEakJBO0VBQ0M7SUFDQyxrQkFBQTtFQ21CQTtBQUNGO0FEakJBO0VBQ0M7SUFDQyxXQUFBO0VDbUJBOztFRGpCRDtJQUNDLGdCQUFBO0lBQ0EsV0FBQTtFQ29CQTtBQUNGO0FEakJBO0VBQ0M7SUFDQyxrQkFBQTtFQ21CQTtBQUNGO0FEaEJBO0VBQ0M7SUFDQyxnQkFBQTtFQ2tCQTs7RURoQkQ7SUFDQyxlQUFBO0VDbUJBOztFRGhCQTtJQUNDLGVBQUE7RUNtQkQ7QUFDRjtBRGpCQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNtQk47O0VEakJEO0lBQ0MsZ0JBQUE7RUNvQkE7O0VEbEJEO0lBQ0Msa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUNxQkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItbG9naW4vdGVhY2hlci1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvY2tuUm9sbCtPbmUmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MdWNraWVzdCtHdXkmZGlzcGxheT1zd2FwJyk7XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKmxvZ2luIGFuZCBzaWdudXAgY3NzIHN0YXJ0Ki9cbi5iZy1tYXJnaW57XG5cdG1hcmdpbi10b3A6IDE1MHB4O1xufVxuLnRleHQgLnBhcmF7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRsaW5lLWhlaWdodDogMS44O1xuXHRjb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC44KTtcbn1cbi5jYXJkLWhlYWQxe1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdG91dGxpbmU6IG5vbmU7XG59XG4uY2FyZC1oZWFkMSAuY29sb3J0ZXh0e1xuXHRjb2xvcjogIzA3OTViNTtcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIGN1cnNpdmU7XG4gfVxuIC5jYXJkLWhlYWQxIC5wbGFpbnRleHR7XG5cdCBjb2xvcjogIzAwMDtcblx0IGZvbnQtc2l6ZTogMzBweDtcblx0IGZvbnQtZmFtaWx5OiAnTHVja2llc3QgR3V5JywgY3Vyc2l2ZTtcbiB9XG4ubG9naW5pbWd7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDIwMHB4O1xufVxuLmNhcmR7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDAlO1xufVxuLnNob3djYXJke1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuXHRwYWRkaW5nLXRvcDogMzBweDtcblx0cGFkZGluZy1yaWdodDogMTAwcHg7XG5cdHBhZGRpbmctbGVmdDogMTAwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLmZvcm1jYXJke1xuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cdHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdHBhZGRpbmctdG9wOiA1MHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi50YWItY29udGVudHtcblx0bWFyZ2luLXRvcDogNTBweDtcbn1cbmZvcm0ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXHRkaXNwbGF5OiAtbW96LWlubGluZS1ib3g7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50YWJze1xuXHRib3JkZXI6IDJweCBzb2xpZCAjMDc5NWI1O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiAjMDc5NWI1O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XG5cdHBhZGRpbmc6IDVweCA1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5hY3R7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XG5cdHBhZGRpbmc6IDdweCA3cHg7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG59XG5mb3JtIC5saW5re1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW5wdXQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuXHRib3JkZXI6IG5vbmU7XG5cdHBhZGRpbmc6IDEycHggMTVweDtcblx0bWFyZ2luOiA4cHggMDtcblx0d2lkdGg6IDEwMCU7XG59XG5oMSB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRtYXJnaW46IDA7XG59XG5wIHtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRmb250LXdlaWdodDogMTAwO1xuXHRsaW5lLWhlaWdodDogMjBweDtcblx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuXHRtYXJnaW46IDIwcHggMCAzMHB4O1xufVxuLmJ0b24ge1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwNzk1YjU7XG5cdGJhY2tncm91bmQtY29sb3I6ICAjMDc5NWI1O1xuXHRjb2xvcjogI0ZGRkZGRjtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmctdG9wOiAxMHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcblx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqbWVkaWEgcXVlcnkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQG1lZGlhKG1heC13aWR0aDoxMTk4KXtcblx0LnNob3djYXJke1xuXHRcdHBhZGRpbmc6IDIwcHggMjBweDtcblx0fVxuXHQuZm9ybWNhcmR7XG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdFx0cGFkZGluZy10b3A6IDUwcHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6MTAyNHB4KXtcblx0LnNob3djYXJke1xuXHRcdHBhZGRpbmc6IDIwcHggMjBweDtcblx0fVxufVxuQG1lZGlhKG1heC13aWR0aDo3NjhweCl7XG5cdC5jb2wtc20tOCwuY29sLW1kLTh7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0LmNvbC1zbS00LC5jb2wtbWQtNHtcblx0XHRtYXJnaW4tdG9wOiA1MHB4O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdFxufVxuQG1lZGlhKG1heC13aWR0aDo0NTBweCl7XG5cdC5zaG93Y2FyZHtcblx0XHRwYWRkaW5nOiAyMHB4IDIwcHg7XG5cdH1cbiAgIFxufVxuQG1lZGlhKG1heC13aWR0aDozMjBweCl7XG5cdC5zaG93Y2FyZHtcblx0XHRwYWRkaW5nOiA4cHggOHB4O1xuXHR9XG5cdC5jYXJkLWhlYWQxIC5jb2xvcnRleHR7IFxuXHRcdGZvbnQtc2l6ZTogMjBweDtcblx0IH1cblx0IFxuXHQgLmNhcmQtaGVhZDEgLnBsYWludGV4dHtcblx0XHQgZm9udC1zaXplOiAyMHB4O1xuXHQgfVxufVxuQG1lZGlhKG1heC13aWR0aDoyODBweCl7XG4gICAgLmFycm93YnRue1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgIH1cblx0LnNob3djYXJke1xuXHRcdHBhZGRpbmc6IDVweCA1cHg7XG5cdH1cblx0LmZvcm1jYXJke1xuXHRcdHBhZGRpbmctbGVmdDogMTBweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXHRcdHBhZGRpbmctdG9wOiA1MHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXHR9XG5cbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvY2tuUm9sbCtPbmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUx1Y2tpZXN0K0d1eSZkaXNwbGF5PXN3YXBcIik7XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKmxvZ2luIGFuZCBzaWdudXAgY3NzIHN0YXJ0Ki9cbi5iZy1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuLnRleHQgLnBhcmEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLmNhcmQtaGVhZDEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jYXJkLWhlYWQxIC5jb2xvcnRleHQge1xuICBjb2xvcjogIzA3OTViNTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJMdWNraWVzdCBHdXlcIiwgY3Vyc2l2ZTtcbn1cblxuLmNhcmQtaGVhZDEgLnBsYWludGV4dCB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLCBjdXJzaXZlO1xufVxuXG4ubG9naW5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwJTtcbn1cblxuLnNob3djYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmZvcm1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi50YWItY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbmZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiAtbW96LWlubGluZS1ib3g7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhYnMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDc5NWI1O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDc5NWI1O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmFjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzk1YjU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmc6IDdweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0gLmxpbmsge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBtYXJnaW46IDIwcHggMCAzMHB4O1xufVxuXG4uYnRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzA3OTViNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3OTViNTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk4KSB7XG4gIC5zaG93Y2FyZCB7XG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xuICB9XG5cbiAgLmZvcm1jYXJkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuc2hvd2NhcmQge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb2wtc20tOCwgLmNvbC1tZC04IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb2wtc20tNCwgLmNvbC1tZC00IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnNob3djYXJkIHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuc2hvd2NhcmQge1xuICAgIHBhZGRpbmc6IDhweCA4cHg7XG4gIH1cblxuICAuY2FyZC1oZWFkMSAuY29sb3J0ZXh0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuY2FyZC1oZWFkMSAucGxhaW50ZXh0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyODBweCkge1xuICAuYXJyb3didG4ge1xuICAgIHdpZHRoOiAxN3B4O1xuICAgIGhlaWdodDogMTdweDtcbiAgfVxuXG4gIC5zaG93Y2FyZCB7XG4gICAgcGFkZGluZzogNXB4IDVweDtcbiAgfVxuXG4gIC5mb3JtY2FyZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-login',
                templateUrl: './teacher-login.component.html',
                styleUrls: ['./teacher-login.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/teacher-profile/teacher-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/teacher-profile/teacher-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: TeacherProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherProfileComponent", function() { return TeacherProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../teacher-header/teacher-header.component */ "./src/app/teacher-header/teacher-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../teacher-footer/teacher-footer.component */ "./src/app/teacher-footer/teacher-footer.component.ts");






class TeacherProfileComponent {
    constructor(cookieservice) {
        this.cookieservice = cookieservice;
        this.model = [];
    }
    ngOnInit() {
        console.log(JSON.parse(this.cookieservice.get('User')));
        this.model = JSON.parse(this.cookieservice.get('User'));
        console.log(this.model[0].Teacher_Id);
    }
}
TeacherProfileComponent.ɵfac = function TeacherProfileComponent_Factory(t) { return new (t || TeacherProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); };
TeacherProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherProfileComponent, selectors: [["app-teacher-profile"]], decls: 75, vars: 6, consts: [[1, "d-flex", "justify-content-center"], [1, "col-sm-12", "col-xd-12", "col-md-12"], [1, "row"], [1, "col-sm-4", "col-md-4", "col-xd-4"], [1, "card", "shadow"], [1, "card-body"], [1, "head"], [1, "col-sm-6", "col-md-6", "col-xd-6", "sub"], [1, "subhead"], [1, "subpara"], [1, "col-sm-6", "col-md-6", "col-xd-6", "sub1"], [1, "mb-2"], [1, "biopara"], [1, "col-sm-8", "col-md-8", "col-xd-8"], [1, "card", "shadow", "formsection"], [1, "header"], ["action", "#", 1, "fom"], [1, "formpoint"], [1, "col-sm-6", "col-md-6", "col-xd-6"], ["for", "name", 1, "label"], ["type", "text", "value", "Arpit katiyar", "name", "name", "id", "name", "required", "", 1, "inp", 3, "value"], ["for", "Email", 1, "label"], ["type", "Email", "name", "email", "id", "Email", "required", "", 1, "inp", 3, "value"], ["for", "address", 1, "label"], ["type", "text", "value", "{model[0].Teacher_Address}", "name", "address", "id", "address", "required", "", 1, "inp"], ["for", "postalcode", 1, "label"], ["type", "tel", "value", "452655", "name", "postalcode", "id", "postalcode", "required", "", "maxlength", "6", 1, "inp"], ["for", "aboutme", 1, "label"], ["id", "aboutme", "name", "aboutme", "placeholder", "Enter about me", "maxlength", "250", "required", "", 1, "inp"], [1, "btn", "bton", "shadow"]], template: function TeacherProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-teacher-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam architecto repudiandae iure, vitae ut inventore blanditiis odio exercitationem, neque nulla quae cupiditate fuga esse, expedita labore saepe earum praesentium quaerat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "My account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "User information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "contact information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "app-teacher-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model[0].Teacher_Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model[0].Teacher_Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.model[0].Teacher_Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.model[0].Teacher_Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.model[0].Teacher_City);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.model[0].Teacher_State);
    } }, directives: [_teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_2__["TeacherHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_4__["TeacherFooterComponent"]], styles: [".head[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  color: #239463;\n  font-weight: bold;\n  font-size: xx-large;\n  letter-spacing: 1px;\n}\n\n.biopara[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 15px 15px;\n}\n\n.subhead[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.subpara[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: -10px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0%;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  text-transform: uppercase;\n}\n\n.formpoint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: grey;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.labeltext[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-right: 10px;\n}\n\n.fom[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  padding: 10px 50px;\n  height: 100%;\n}\n\n.form-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.inp[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  padding: 12px 15px;\n  margin: 8px 0px;\n  width: 100%;\n}\n\n.bton[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #239463;\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 8px 15px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.bton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n\n\n@media (max-width: 858px) {\n  .head[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    color: #239463;\n    font-weight: bold;\n    font-size: 30px;\n    letter-spacing: 1px;\n  }\n\n  .subhead[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .subpara[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: -10px;\n  }\n}\n\n@media (max-width: 574px) {\n  .head[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    color: #239463;\n    font-weight: bold;\n    font-size: xx-large;\n    letter-spacing: 1px;\n  }\n\n  .sub[_ngcontent-%COMP%] {\n    margin-right: 30px;\n  }\n\n  .sub1[_ngcontent-%COMP%] {\n    margin-left: 30px;\n  }\n\n  .subhead[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .subpara[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: -10px;\n  }\n\n  .fom[_ngcontent-%COMP%] {\n    background-color: #FFFFFF;\n    display: flex;\n    flex-direction: column;\n    padding: 10px 0px;\n    height: 100%;\n  }\n\n  .formsection[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci1wcm9maWxlL0Q6XFxLbm93bGVkZ2VTZXR1LUZFLW1haW4vc3JjXFxhcHBcXHRlYWNoZXItcHJvZmlsZVxcdGVhY2hlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFjaGVyLXByb2ZpbGUvdGVhY2hlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0VBQ0gsaUJBQUE7QUNLRDs7QURIQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDSCx5QkFBQTtFQUNHLFdBQUE7QUNPSjs7QURMQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDUUo7O0FETkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDU0o7O0FEUEE7RUFDQyx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1VEOztBRFJBO0VBQ0ksYUFBQTtBQ1dKOztBRFRBO0VBQ0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1lEOztBRFZBO0VBQ0ksa0JBQUE7RUFDSCx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDRywwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNhSjs7QURYQTtFQUNDLGFBQUE7QUNjRDs7QURaQSxpRkFBQTs7QUFDQTtFQUVJO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQ2NOOztFRFpFO0lBQ0ksa0JBQUE7RUNlTjs7RURiRTtJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7RUNnQk47QUFDRjs7QURkQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUNnQk47O0VEZEU7SUFDSSxrQkFBQTtFQ2lCTjs7RURmRTtJQUNJLGlCQUFBO0VDa0JOOztFRGhCRTtJQUNJLGtCQUFBO0VDbUJOOztFRGpCRTtJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7RUNvQk47O0VEbEJFO0lBQ0kseUJBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUNxQk47O0VEbkJFO0lBQ0ksZ0JBQUE7RUNzQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItcHJvZmlsZS90ZWFjaGVyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgY29sb3I6ICMyMzk0NjM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmJpb3BhcmF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHggMTVweDtcbn1cbi5zdWJoZWFke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdWJwYXJhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5jYXJke1xuICAgIGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogMCU7XG59XG4uaGVhZGVye1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmZvcm1wb2ludHtcbiAgICBmb250LXNpemU6IDEycHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IGdyZXk7XG59XG4ubGFiZWx7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxhYmVsdGV4dHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5mb20ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nOiAxMHB4IDUwcHg7XG5cdGhlaWdodDogMTAwJTtcbn1cbi5mb3JtLXNlbGVjdDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmlucCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG5cdGJvcmRlcjogbm9uZTtcblx0cGFkZGluZzogMTJweCAxNXB4O1xuXHRtYXJnaW46IDhweCAwcHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuLmJ0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzIzOTQ2Mztcblx0Y29sb3I6ICNGRkZGRkY7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHBhZGRpbmc6IDhweCAxNXB4O1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5idG9uOmZvY3VzIHtcblx0b3V0bGluZTogbm9uZTtcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipNZWRpYSBxdWVyeSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA4NThweCl7XG5cdFxuICAgIC5oZWFke1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBjb2xvcjogIzIzOTQ2MztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB9XG4gICAgLnN1YmhlYWR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnN1YnBhcmF7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NHB4KXtcbiAgICAuaGVhZHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgY29sb3I6ICMyMzk0NjM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIH1cbiAgICAuc3Vie1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIC5zdWIxe1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICB9XG4gICAgLnN1YmhlYWR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnN1YnBhcmF7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgfVxuICAgIC5mb20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAuZm9ybXNlY3Rpb257XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxufSIsIi5oZWFkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgY29sb3I6ICMyMzk0NjM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uYmlvcGFyYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAxNXB4O1xufVxuXG4uc3ViaGVhZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1YnBhcmEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCU7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5mb3JtcG9pbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxhYmVsdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmZvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZm9ybS1zZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIG1hcmdpbjogOHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmJ0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqTWVkaWEgcXVlcnkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1heC13aWR0aDogODU4cHgpIHtcbiAgLmhlYWQge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBjb2xvcjogIzIzOTQ2MztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgfVxuXG4gIC5zdWJoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuc3VicGFyYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc0cHgpIHtcbiAgLmhlYWQge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBjb2xvcjogIzIzOTQ2MztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIH1cblxuICAuc3ViIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIH1cblxuICAuc3ViMSB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cblxuICAuc3ViaGVhZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnN1YnBhcmEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgfVxuXG4gIC5mb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5mb3Jtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-profile',
                templateUrl: './teacher-profile.component.html',
                styleUrls: ['./teacher-profile.component.scss']
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/teacher-register/teacher-register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/teacher-register/teacher-register.component.ts ***!
  \****************************************************************/
/*! exports provided: TeacherRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherRegisterComponent", function() { return TeacherRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/teacherDashboard/Profile"]; };
const _c1 = function () { return ["/teacherDashboard/studentSubscribeList"]; };
const _c2 = function () { return ["/teacherDashboard/ShowVideo"]; };
const _c3 = function () { return ["/teacherDashboard/liveClass"]; };
const _c4 = function () { return ["/teacherDashboard/uploadVideo"]; };
class TeacherRegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeacherRegisterComponent.ɵfac = function TeacherRegisterComponent_Factory(t) { return new (t || TeacherRegisterComponent)(); };
TeacherRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherRegisterComponent, selectors: [["app-teacher-register"]], decls: 56, vars: 10, consts: [["id", "wrapper", 1, "d-flex"], ["id", "sidebar-wrapper", 1, "border-right", "shadow"], [1, "sidebar-heading"], [1, "d-flex", "justify-content-center"], [1, "headtext"], [1, "list-group"], [1, "mb-2"], [1, "col-sm-6", "col-md-6", "col-xd-6", "sn-social"], [1, "head"], ["routerLinkActive", "active", 1, "sidenav-link", 3, "routerLink"], ["src", "../../assets/icons8-customer-skin-type-7-48.png", 1, "img"], ["src", "../../assets/icons8-read-online-48.png", 1, "img"], ["src", "../../assets/icons8-facetime-48.png", 1, "img"], [1, "sidenav-link", 3, "routerLink"], ["src", "../../assets/icons8-youtube-live-48.png", 1, "img"], ["src", "../../assets/icons8-upload-to-ftp-48.png", 1, "img"], [1, "sidenav-link", 2, "cursor", "pointer"], ["src", "../../assets/icons8-sign-out-48.png", 1, "img"], ["type", "button", "id", "menu-toggle1", 1, "btn", "sidetoggle", "shadow"], ["src", "../../assets/chevron_left-white-18dp.svg", "width", "30", "height", "30"], ["id", "page-content-wrapper"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "shadow", "bg-col"], [1, "container"], ["type", "button", "id", "menu-toggle", 1, "btn", "lefttoggle"], ["src", "../../assets/menu_open-white-18dp.svg", "width", "30", "height", "30"], [1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], ["src", "../../assets/menu-white-18dp.svg"], ["id", "show", 1, "show"], [1, "bg-margin"]], template: function TeacherRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "teacher-register works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "130");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "130");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Live Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Upload Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nav", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "KrAsh IT Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".bg-col[_ngcontent-%COMP%] {\n  background-color: #239463;\n}\n.link.active[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 5px;\n  margin-left: 5px;\n  transition: 0.5s;\n  box-shadow: 4px;\n}\n\n#wrapper[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n#sidebar-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  margin-left: -15rem;\n  transition: margin 0.25s ease-out;\n}\n#sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\n  padding: 0.875rem 1.25rem;\n  font-size: 1.2rem;\n}\n#sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n#page-content-wrapper[_ngcontent-%COMP%] {\n  min-width: 100vw;\n}\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.lefttoggle[_ngcontent-%COMP%] {\n  border: 2px solid #239463;\n  text-decoration: none;\n  cursor: pointer;\n}\n.sidetoggle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: #239463;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 50px;\n  text-align: center;\n  justify-content: center;\n}\n.headtext[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  color: #239463;\n  font-weight: bolder;\n  font-size: 30px;\n}\n.sn-social[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.sn-social.head[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: #000000;\n}\n.sidenav-link[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  display: block;\n  font-size: 15px;\n  text-decoration: none;\n  color: #000000;\n}\n.sidenav-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(35, 148, 99, 0.5);\n  border-radius: 5px;\n  margin-left: 5px;\n  margin-right: 5px;\n  transition: 0.5s;\n  box-shadow: 4px;\n}\n.active[_ngcontent-%COMP%] {\n  background-color: rgba(35, 148, 99, 0.5);\n  border-radius: 5px;\n  margin-left: 5px;\n  margin-right: 5px;\n  transition: 0.5s;\n  box-shadow: 4px;\n}\n.img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 20px;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin: 15px 15px;\n}\n.btnsearch[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: #000000;\n  background-color: #ffffff;\n}\n.bg-margin[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n@media (min-width: 768px) {\n  #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  #page-content-wrapper[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n\n  #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\n    margin-left: -15rem;\n  }\n}\n@media (max-width: 990px) {\n  .link.active[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]:hover {\n    background: none;\n    margin-left: 0px;\n    color: #ffffff;\n  }\n}\n@media (max-width: 858px) {\n  .link.active[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]:hover {\n    background: none;\n    margin-left: 0px;\n    color: #ffffff;\n  }\n}\n@media (max-width: 280px) {\n  .sn-social[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-right: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci1yZWdpc3Rlci9EOlxcS25vd2xlZGdlU2V0dS1GRS1tYWluL3NyY1xcYXBwXFx0ZWFjaGVyLXJlZ2lzdGVyXFx0ZWFjaGVyLXJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFjaGVyLXJlZ2lzdGVyL3RlYWNoZXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQUE7QUFDQTtFQUNJLHlCQUFBO0FDQ0o7QURDQTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEQUEsMEVBQUE7QUFDQTtFQUNJLGtCQUFBO0FDR0o7QUREQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFJQSxpQ0FBQTtBQ0lGO0FEREE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDSUY7QUREQTtFQUNFLFlBQUE7QUNJRjtBREFBO0VBQ0UsZ0JBQUE7QUNHRjtBREFBO0VBQ0UsY0FBQTtBQ0dGO0FEREE7RUFDRSx5QkFBQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0lKO0FEREE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNJRjtBREZBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDS0Y7QURIQTtFQUNFLGtCQUFBO0FDTUY7QURKQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNPRjtBRExBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ1FGO0FETkE7RUFDRSx3Q0FBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1NKO0FEUEE7RUFDRSx3Q0FBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1VKO0FEUkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDV0Y7QURUQTtFQUNFLGlCQUFBO0FDWUY7QURWQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDYUY7QURYQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNjRjtBRFpBLCtFQUFBO0FBQ0E7RUFDSTtJQUNFLGNBQUE7RUNlSjs7RURaRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VDZUo7O0VEWkU7SUFDRSxtQkFBQTtFQ2VKO0FBQ0Y7QURiQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUNlTjtBQUNGO0FEWkE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VDY047QUFDRjtBRFhBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0VDYUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXItcmVnaXN0ZXIvdGVhY2hlci1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKmhlYWRlciBjc3Mgc3RydCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uYmctY29se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG59XG4ubGluay5hY3RpdmUsLmxpbms6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmZmYsICRhbHBoYTogMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgYm94LXNoYWRvdzogNHB4O1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqY3NzIGZvciBzaWRlYmFyKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4jd3JhcHBlciB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuIH1cbiNzaWRlYmFyLXdyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xufVxuXG4jc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRpbmcge1xuICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuI3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCB7XG4gIHdpZHRoOiAxNXJlbTtcbn1cblxuXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICBtaW4td2lkdGg6IDEwMHZ3O1xufVxuXG4jd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5sZWZ0dG9nZ2xle1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjM5NDYzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRldG9nZ2xle1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmhlYWR0ZXh0e1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgY29sb3I6ICMyMzk0NjM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5zbi1zb2NpYWx7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zbi1zb2NpYWwuaGVhZHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uc2lkZW5hdi1saW5re1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uc2lkZW5hdi1saW5rOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzIzOTQ2MywgJGFscGhhOiAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHRyYW5zaXRpb246IC41cztcbiAgICBib3gtc2hhZG93OiA0cHg7XG59XG4uYWN0aXZle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzIzOTQ2MywgJGFscGhhOiAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIHRyYW5zaXRpb246IC41cztcbiAgICBib3gtc2hhZG93OiA0cHg7XG59XG4uaW1ne1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubWItMntcbiAgbWFyZ2luOiAxNXB4IDE1cHg7XG59XG4uYnRuc2VhcmNoe1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmJnLW1hcmdpbntcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKiptZWRpYSBxdWVyeSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAjc2lkZWJhci13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgXG4gICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcbiAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgXG4gICAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XG4gICAgfVxuICB9XG5AbWVkaWEgKG1heC13aWR0aDogOTkwcHgpe1xuICAgIC5saW5rLmFjdGl2ZSwubGluazpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICAgXG59XG5AbWVkaWEgKG1heC13aWR0aDogODU4cHgpe1xuICAgIC5saW5rLmFjdGl2ZSwubGluazpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICAgIFxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDI4MHB4KXtcbiAgLnNuLXNvY2lhbHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB9XG59XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKipoZWFkZXIgY3NzIHN0cnQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmJnLWNvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG59XG5cbi5saW5rLmFjdGl2ZSwgLmxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm94LXNoYWRvdzogNHB4O1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKipjc3MgZm9yIHNpZGViYXIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiN3cmFwcGVyIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4jc2lkZWJhci13cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1hcmdpbi1sZWZ0OiAtMTVyZW07XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzIGVhc2Utb3V0O1xuICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAwLjI1cyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIDAuMjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4yNXMgZWFzZS1vdXQ7XG59XG5cbiNzaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGluZyB7XG4gIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4jc2lkZWJhci13cmFwcGVyIC5saXN0LWdyb3VwIHtcbiAgd2lkdGg6IDE1cmVtO1xufVxuXG4jcGFnZS1jb250ZW50LXdyYXBwZXIge1xuICBtaW4td2lkdGg6IDEwMHZ3O1xufVxuXG4jd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmxlZnR0b2dnbGUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjM5NDYzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZGV0b2dnbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVhZHRleHQge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgY29sb3I6ICMyMzk0NjM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnNuLXNvY2lhbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNuLXNvY2lhbC5oZWFkIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5zaWRlbmF2LWxpbmsge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5zaWRlbmF2LWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCAxNDgsIDk5LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBib3gtc2hhZG93OiA0cHg7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCAxNDgsIDk5LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBib3gtc2hhZG93OiA0cHg7XG59XG5cbi5pbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5tYi0yIHtcbiAgbWFyZ2luOiAxNXB4IDE1cHg7XG59XG5cbi5idG5zZWFyY2gge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYmctbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAjc2lkZWJhci13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgLmxpbmsuYWN0aXZlLCAubGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODU4cHgpIHtcbiAgLmxpbmsuYWN0aXZlLCAubGluazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjgwcHgpIHtcbiAgLnNuLXNvY2lhbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-register',
                templateUrl: './teacher-register.component.html',
                styleUrls: ['./teacher-register.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/teacher-uploads/teacher-uploads.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/teacher-uploads/teacher-uploads.component.ts ***!
  \**************************************************************/
/*! exports provided: TeacherUploadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherUploadsComponent", function() { return TeacherUploadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






class TeacherUploadsComponent {
    constructor(http, thisDialogRef, data) {
        this.http = http;
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        this.models = {};
        this.ResumeFile = null;
        this.Documentfiles = [];
        this.formData = new FormData();
        this.models = this.data;
        console.log(this.models);
    }
    ngOnInit() {
        /* const data=JSON.stringify(this.models)
         this.http.post('http://localhost:4000/Name',data,{headers:new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Origin':'true','Access-Control-Allow-Headers':'true'})}).subscribe((res)=>{
       console.log(res);
       });*/
    }
    handleResumeFile(file) {
        this.ResumeFile = file.item(0);
        //console.log(this.ResumeFile.name)
        this.formData.append('Resume', this.ResumeFile);
        /*this.http.post('http://localhost:4000/FileUpload',formData).subscribe((res)=>{
      
        console.log(res)
        })*/
    }
    handleDocumentFile(files) {
        console.log(files);
        for (let i = 0; i < files.length; i++) {
            this.formData.append('Resume', files[i]);
        }
        /*this.http.post('http://localhost:4000/documentUpload',formData).subscribe((res)=>{
          console.log(res)
        })*/
    }
    onCloseConfirm() {
        this.formData.append('Name', this.models['fullName']);
        this.formData.append('Address', this.models['address']);
        this.formData.append('Email', this.models['email']);
        this.formData.append('PhoneNumber', this.models['phoneNumber']);
        this.formData.append('State', this.models['state']);
        this.formData.append('City', this.models['city']);
        this.formData.append('DOB', this.models['dateofBirth']);
        //const formData=JSON.stringify(this.models)
        this.http.post('/api/teacherRegister', this.formData).subscribe((res) => {
            console.log(res);
        });
        alert("!!Verification Pending!!   you will receive an email once it it approved");
        this.thisDialogRef.close();
    }
    onCloseCancel() {
        this.thisDialogRef.close();
        console.log(this.models);
    }
}
TeacherUploadsComponent.ɵfac = function TeacherUploadsComponent_Factory(t) { return new (t || TeacherUploadsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
TeacherUploadsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeacherUploadsComponent, selectors: [["app-teacher-uploads"]], decls: 26, vars: 0, consts: [["mat-dialog-title", ""], [1, "container"], ["id", "customfilelabel", "for", "customFileInput"], ["type", "file", "name", "Resume", "id", "customFileInput", 3, "change"], ["for", "customFileInput"], ["type", "file", "name", "Documents", "id", "customFileInput", "multiple", "", 3, "change"], ["mat-raised-button", "", 3, "click"]], template: function TeacherUploadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Let verify yourself....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Please upload your Resume and Documents. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Resume/BioData : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TeacherUploadsComponent_Template_input_change_13_listener($event) { return ctx.handleResumeFile($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Documents(10th,12th,Graduation) : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TeacherUploadsComponent_Template_input_change_20_listener($event) { return ctx.handleDocumentFile($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherUploadsComponent_Template_button_click_22_listener() { return ctx.onCloseConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherUploadsComponent_Template_button_click_24_listener() { return ctx.onCloseCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".custom-file-input.selected[_ngcontent-%COMP%]:lang(en)::after {\n  content: \"\" !important;\n}\n\n.custom-file[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.custom-file-input[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2hlci11cGxvYWRzL0Q6XFxLbm93bGVkZ2VTZXR1LUZFLW1haW4vc3JjXFxhcHBcXHRlYWNoZXItdXBsb2Fkc1xcdGVhY2hlci11cGxvYWRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFjaGVyLXVwbG9hZHMvdGVhY2hlci11cGxvYWRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGVhY2hlci11cGxvYWRzL3RlYWNoZXItdXBsb2Fkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tZmlsZS1pbnB1dC5zZWxlY3RlZDpsYW5nKGVuKTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jdXN0b20tZmlsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC5jdXN0b20tZmlsZS1pbnB1dCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuIiwiLmN1c3RvbS1maWxlLWlucHV0LnNlbGVjdGVkOmxhbmcoZW4pOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1maWxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmN1c3RvbS1maWxlLWlucHV0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherUploadsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-teacher-uploads',
                templateUrl: './teacher-uploads.component.html',
                styleUrls: ['./teacher-uploads.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: JSON, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/upload-video/upload-video.component.ts":
/*!********************************************************!*\
  !*** ./src/app/upload-video/upload-video.component.ts ***!
  \********************************************************/
/*! exports provided: UploadVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadVideoComponent", function() { return UploadVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../teacher-header/teacher-header.component */ "./src/app/teacher-header/teacher-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../teacher-footer/teacher-footer.component */ "./src/app/teacher-footer/teacher-footer.component.ts");












class UploadVideoComponent {
    constructor(cookieService, http, router) {
        this.cookieService = cookieService;
        this.http = http;
        this.router = router;
        this.alert = "";
        this.formData = new FormData();
        this.Form = {
            Class: "",
            Subject: "",
            Fees: "",
        };
    }
    onVideoUpload(file) {
        this.VideoFile = file.item(0);
        this.formData.append('Video', this.VideoFile);
        console.log(this.VideoFile.name);
    }
    onVideoDocUpload(files) {
        for (let i = 0; i < files.length; i++) {
            this.formData.append('VideoDocs', files[i]);
        }
        console.log(files);
    }
    processForm() {
        if (this.Form.Class == "" || this.Form.Subject == "" || this.VideoFile == null) {
            this.alert = "Please fill all the credentials";
            setTimeout(() => { this.alert = ""; }, 5000);
        }
        else {
            var User = JSON.parse(this.cookieService.get('User'));
            this.Form.Subject = this.Form.Subject.charAt(0).toUpperCase() + this.Form.Subject.slice(1);
            this.Form["Teacher_Id"] = User[0].Teacher_Id;
            this.Form["VideoFileName"] = User[0].Teacher_Id + "_" + this.Form.Subject + "_" + this.VideoFile.name;
            this.Form["TeacherName"] = User[0].Teacher_Name;
            this.http.post("/api/Create_Video_Folder", JSON.stringify(this.Form), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'true', 'Access-Control-Allow-Headers': 'true' }) }).subscribe((res) => {
                if (res["folderCreated"]) {
                    this.http.post("/api/uploadVideo", this.formData).subscribe((res) => {
                        if (res["result"]) {
                            alert("Uploaded Successfully");
                        }
                    });
                }
            });
        }
    }
    ngOnInit() {
        if (!this.cookieService.check('User')) {
            this.router.navigate(['/']);
        }
    }
}
UploadVideoComponent.ɵfac = function UploadVideoComponent_Factory(t) { return new (t || UploadVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UploadVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadVideoComponent, selectors: [["app-upload-video"]], decls: 71, vars: 4, consts: [[1, "container"], [1, "d-flex", "cordform", "justify-content-center"], [1, "card", "shadow", "col-sm-10", "col-xd-10", "col-md-10"], [1, "card-body", "cord"], ["enctype", "multipart/form-data", 1, "fom", 3, "submit"], ["UploadForm", "ngForm"], [1, "label"], ["appearance", "fill", 2, "width", "100%"], ["name", "Class", "required", "", 3, "ngModel", "ngModelChange"], ["Class", "ngModel"], ["value", "First"], ["value", "Second"], ["value", "Third"], ["value", "Fouth"], ["value", "Fiveth"], ["value", "Sixth"], ["value", "Seventh"], ["value", "Eighth"], ["value", "Nineth"], ["value", "Tenth"], ["value", "Eleventh"], ["value", "Twelfth"], ["for", "vediotext", 1, "label"], ["type", "text", "placeholder", "Vedio Subject", "name", "Subject", "id", "vediotext", "required", "", 1, "inp", 3, "ngModel", "ngModelChange"], ["Subject", "ngModel"], [1, "row"], [1, "col-sm-1"], [1, "col-sm-11"], ["type", "text", "placeholder", "Fees", "name", "Fees", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Fees", "ngModel"], [1, "mb-4"], [1, "col-sm-6", "col-md-6", "col-xd-6"], ["for", "vedio", 1, "label"], ["type", "file", "id", "vedio", "name", "Video", "accept", ".mp4,.MPG,.MP2,.MPEG,.MPE,.MPV,.OGG", 3, "change"], ["for", "Document", 1, "label"], ["type", "file", "name", "VideoDoc", "id", "Document", "accept", ".zip,.txt,.doc,.pdf", "multiple", "", 3, "change"], [2, "color", "crimson"], [1, "btn", "bton"], ["src", "../../assets/publish-white-18dp.svg", "width", "20", "height", "20", 1, "img-fluid"]], template: function UploadVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-teacher-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function UploadVideoComponent_Template_form_submit_5_listener() { return ctx.processForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Upload video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Select Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadVideoComponent_Template_mat_select_ngModelChange_14_listener($event) { return ctx.Form.Class = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "II");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "III");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "IV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "VI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "VII");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "VIII");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "IX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "XI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "XII");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Vedio Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadVideoComponent_Template_input_ngModelChange_42_listener($event) { return ctx.Form.Subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Video Fees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadVideoComponent_Template_input_ngModelChange_52_listener($event) { return ctx.Form.Fees = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Vedio Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadVideoComponent_Template_input_change_59_listener($event) { return ctx.onVideoUpload($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Document Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadVideoComponent_Template_input_change_63_listener($event) { return ctx.onVideoDocUpload($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "app-teacher-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Form.Class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Form.Subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Form.Fees);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.alert);
    } }, directives: [_teacher_header_teacher_header_component__WEBPACK_IMPORTED_MODULE_4__["TeacherHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _teacher_footer_teacher_footer_component__WEBPACK_IMPORTED_MODULE_9__["TeacherFooterComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0%;\n}\n\n.cord[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: bold;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.labeltext[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.5em;\n  margin-right: 10px;\n}\n\n.fom[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  padding: 0 50px;\n  height: 100%;\n}\n\n.form-select[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.inp[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  padding: 12px 15px;\n  margin: 8px 0;\n  width: 100%;\n}\n\n.bton[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #239463;\n  color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.bton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  color: #fff;\n  background-color: #239463;\n  padding: 10px;\n  border: none;\n  margin-bottom: 5px;\n  border-radius: 5px;\n  outline: none;\n}\n\n\n\n@media (max-width: 280px) {\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n\n  .cord[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .label[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-bottom: 20px;\n    display: block;\n    font-family: \"Roboto Condensed\", sans-serif;\n  }\n\n  .labeltext[_ngcontent-%COMP%] {\n    font-weight: bold;\n    font-size: 1.5em;\n    margin-right: 10px;\n  }\n\n  .fom[_ngcontent-%COMP%] {\n    background-color: #FFFFFF;\n    display: flex;\n    flex-direction: column;\n    padding: 0 10px;\n    height: 100%;\n  }\n\n  .form-select[_ngcontent-%COMP%] {\n    outline: none;\n  }\n\n  .inp[_ngcontent-%COMP%] {\n    background-color: #eee;\n    border: none;\n    padding: 12px 15px;\n    margin: 8px 0;\n    width: 100%;\n  }\n\n  [_ngcontent-%COMP%]::-webkit-file-upload-button {\n    color: #fff;\n    background-color: #239463;\n    padding: 10px;\n    border: none;\n    margin-bottom: 5px;\n    border-radius: 5px;\n    outline: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLXZpZGVvL0Q6XFxLbm93bGVkZ2VTZXR1LUZFLW1haW4vc3JjXFxhcHBcXHVwbG9hZC12aWRlb1xcdXBsb2FkLXZpZGVvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91cGxvYWQtdmlkZW8vdXBsb2FkLXZpZGVvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNILGlCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0FDRUQ7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNDLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNLRDs7QURIQTtFQUNJLGFBQUE7QUNNSjs7QURKQTtFQUNDLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNPRDs7QURMQTtFQUNJLGtCQUFBO0VBQ0gseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0csMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDUUo7O0FETkE7RUFDQyxhQUFBO0FDU0Q7O0FEUEE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDVUo7O0FEUkEseUZBQUE7O0FBQ0E7RUFDSTtJQUNJLFdBQUE7SUFDQSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7RUNXTjs7RURURTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUNZTjs7RURWRTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSwyQ0FBQTtFQ2FOOztFRFhFO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VDY047O0VEWkU7SUFDSSx5QkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VDZU47O0VEYkU7SUFDSSxhQUFBO0VDZ0JOOztFRGRFO0lBQ0ksc0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQ2lCTjs7RURmRTtJQUNJLFdBQUE7SUFDQSx5QkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUNrQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC12aWRlby91cGxvYWQtdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDAlO1xufVxuLmNvcmR7XG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubGFiZWx7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxhYmVsdGV4dHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5mb20ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nOiAwIDUwcHg7XG5cdGhlaWdodDogMTAwJTtcbn1cbi5mb3JtLXNlbGVjdHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmlucCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG5cdGJvcmRlcjogbm9uZTtcblx0cGFkZGluZzogMTJweCAxNXB4O1xuXHRtYXJnaW46IDhweCAwO1xuXHR3aWR0aDogMTAwJTtcbn1cbi5idG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRmb250LXNpemU6IDEycHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRwYWRkaW5nOiAxMnB4IDQ1cHg7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLmJ0b246Zm9jdXMge1xuXHRvdXRsaW5lOiBub25lO1xufVxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdXRsaW5lOm5vbmU7XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAyODBweCl7XG4gICAgLmNhcmR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIH1cbiAgICAuY29yZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLmxhYmVse1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gICAgfVxuICAgIC5sYWJlbHRleHR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5mb20ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgLmZvcm0tc2VsZWN0e1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAuaW5wIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICA6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9ue1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzOTQ2MztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBvdXRsaW5lOm5vbmU7XG4gICAgfVxufSIsIi5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwJTtcbn1cblxuLmNvcmQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubGFiZWwge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sYWJlbHRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZm9tIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mb3JtLXNlbGVjdCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbnAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTJweCA0NXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5idG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM5NDYzO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKm1lZGlhIHF1ZXJ5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAyODBweCkge1xuICAuY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuXG4gIC5jb3JkIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIH1cblxuICAubGFiZWx0ZXh0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5mb20ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuZm9ybS1zZWxlY3Qge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuaW5wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzk0NjM7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-video',
                templateUrl: './upload-video.component.html',
                styleUrls: ['./upload-video.component.scss']
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\KnowledgeSetu-FE-main\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
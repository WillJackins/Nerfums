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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"about-card\">\r\n\r\n  <mat-card-content class=\"mat-typography\">\r\n    <h1>Welcome to Nerfums!</h1>\r\n    <h2>What is Nerfums?</h2>\r\n    <p>\r\n      Nerfums is a Nerf hit-list website where you can post and complete contracts on other people in the office. These contracts will award money\r\n      which\r\n      can then be used to place new contracts. Leader boards also display things like: who has the most money, who has completed the most contracts,\r\n      or who has been hit the most times. Make an account to get started.\r\n    </p>\r\n\r\n    <h2>How to complete a Contract</h2>\r\n    <p>\r\n      To complete a Contract, go to the \"Contract List\" tab to find a list of active Contracts. From there, simply find a Contract that you want to\r\n      complete, and shoot the target with a Nerf Gun. Be sure to pay attention to any Modifiers.\r\n    </p>\r\n\r\n    <h2>How to place a Contract</h2>\r\n    <p>\r\n      Navigate to the \"Manage Contracts\" tab. From there, you can place a new contract. Contracts require a target and a dollar amount for the reward,\r\n      however you can also add a description, or attach modifiers.\r\n    </p>\r\n\r\n    <h2>What is a Modifier</h2>\r\n    <p>\r\n      A Modifier is a bonus challenge that can be placed on a Contract that makes it more difficult and more fun. Modifiers can include things like:\r\n      getting a headshot, hitting someone while they are on the phone, or hitting someone while they are walking. There are two types of Modifiers,\r\n      Required and Optional.\r\n      Required Modifiers are required to complete the contract, while Optional Modifiers will provide a bonus reward if completed.\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <span><strong>{{title}}</strong></span>\r\n    <span class=\"toolbar-fill\"></span>\r\n    <span>\r\n      <app-user-login-menu></app-user-login-menu>\r\n    </span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<nav mat-tab-nav-bar>\r\n  <div *ngFor=\"let link of navLinks\">\r\n    <a mat-tab-link\r\n       *ngIf=\"link.unauthenticated || nerfumsService.currentSessionValue\"\r\n       [routerLink]=\"link.link\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n      {{link.label}}\r\n    </a>\r\n  </div>\r\n\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-login/user-login.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-login/user-login.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class = user-login-card>\r\n    <mat-card-content>\r\n      <mat-card-title>Log-In</mat-card-title>\r\n      <mat-error *ngIf=\"loginFailed\" [ngClass]=\"{'shake': errorWobble, 'dialog-class': true}\">Invalid Username or Password</mat-error>\r\n        <mat-form-field class =\"username-field\">\r\n            <mat-label>Username</mat-label>\r\n            <input type=\"text\" matInput #usernameInput placeholder=\"Username\" [formControl] = \"usernameControl\" (change)=\"setUserName(usernameInput.value)\">\r\n            <mat-error *ngIf=\"usernameControl.hasError('required')\">Please enter a valid user name!</mat-error>\r\n            <mat-hint>Enter Username</mat-hint>\r\n        </mat-form-field>\r\n        <mat-form-field class =\"password-field\">\r\n            <mat-label>Password</mat-label>\r\n            <input [type]=\"hidePassword ? 'password' : 'text'\" matInput #passwordInput placeholder=\"Password\" [formControl] = \"passwordControl\" (change)=\"setPassword(passwordInput.value)\">\r\n            <button mat-icon-button matSuffix (click)=\"onHidePasswordClick()\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            </button>\r\n            <mat-error *ngIf=\"passwordControl.hasError('required')\">Please enter a valid password!</mat-error>\r\n            <mat-hint>Enter Password</mat-hint>\r\n        </mat-form-field>\r\n        <mat-card-actions align=\"end\">\r\n          <button mat-flat-button class=\"register-button\" (click)=\"openRegisterComponent()\">Register</button>\r\n            <button mat-flat-button class =\"login-button\" color=\"primary\" (click)=\"login()\">Login</button>\r\n        </mat-card-actions>\r\n    </mat-card-content>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-register/register-user.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-register/register-user.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=register-user-card>\r\n    <mat-card-content>\r\n      <mat-card-title>Register</mat-card-title>\r\n        <mat-form-field class=\"fullname-field\">\r\n            <mat-label>Full Name</mat-label>\r\n            <input type=\"text\" matInput #fullnameInput placeholder=\"Full Name\" [formControl]=\"fullnameControl\"\r\n                (change)=\"setFullName(fullnameInput.value)\">\r\n            <mat-error *ngIf=\"fullnameControl.hasError('required')\">Please enter your full name!</mat-error>\r\n            <mat-error *ngIf=\"!validName\">Please enter your full name!</mat-error>\r\n            <mat-hint>Enter Full Name</mat-hint>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"email-field\">\r\n            <mat-label>Email</mat-label>\r\n            <input type=\"text\" matInput #emailInput placeholder=\"Email\" [formControl]=\"emailControl\"\r\n                (change)=\"setEmail(emailInput.value)\">\r\n            <mat-error *ngIf=\"emailControl.hasError('required') || emailControl.invalid\">Please enter a valid email!\r\n            </mat-error>\r\n            <mat-hint>Enter Email</mat-hint>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"password-field\">\r\n            <mat-label>Password</mat-label>\r\n            <input [type]=\"hidePassword ? 'password' : 'text'\" matInput #passwordInput placeholder=\"Password\" [formControl]=\"passwordControl\"\r\n                (change)=\"setPassword(passwordInput.value)\">\r\n            <button mat-icon-button matSuffix (click)=\"onHidePasswordClick()\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            </button>\r\n            <mat-error *ngIf=\"passwordControl.hasError('required')\">Please enter a valid password!</mat-error>\r\n            <mat-hint>Enter Password</mat-hint>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"confirm-password-field\">\r\n            <mat-label>Confirm Password</mat-label>\r\n            <input [type]=\"hideConfirmPassword ? 'password' : 'text'\" matInput #confirmPasswordInput placeholder=\"Confirm Password\" [formControl]=\"confirmPasswordControl\" (change)=\"setConfirmPassword(confirmPasswordInput.value)\">\r\n            <button mat-icon-button matSuffix (click)=\"onHideConfirmPasswordClick()\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                <mat-icon>{{hideConfirmPassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            </button>\r\n            <mat-error *ngIf=\"confirmPasswordControl.hasError('required')\">Please enter a valid password!</mat-error>\r\n            <mat-error *ngIf=\"!validPassword\">Passwords do not match!</mat-error>\r\n            <mat-hint>Confirm Password</mat-hint>\r\n        </mat-form-field>\r\n        <mat-card-actions align=\"end\">\r\n            <button mat-flat-button class=\"signup-button\" color=\"primary\" (click)=\"registerUser()\">Register</button>\r\n        </mat-card-actions>\r\n    </mat-card-content>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-active-list/contract-active-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contract-active-list/contract-active-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"active-contracts\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      Active Contracts\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <table mat-table [dataSource]=\"currentUserActiveContracts\" >\r\n\r\n      <ng-container matColumnDef=\"index\">\r\n        <th mat-header-cell class = \"table-number-col\" *matHeaderCellDef></th>\r\n        <td mat-cell *matCellDef=\"let i = index\">{{i + 1}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"contractTarget\">\r\n        <th mat-header-cell class = \"table-info-col\" *matHeaderCellDef>Target</th>\r\n        <td mat-cell *matCellDef=\"let contract\">{{contract.contractTarget.fullName}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"contractReward\">\r\n        <th mat-header-cell class = \"table-info-col\" *matHeaderCellDef>Reward</th>\r\n        <td mat-cell *matCellDef=\"let contract\">{{contract.contractReward}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"contractDetails\">\r\n        <th mat-header-cell class = \"table-details-col\" *matHeaderCellDef>Details</th>\r\n        <td mat-cell *matCellDef=\"let contract\">{{contract.contractDetails}}</td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"contractDelete\">\r\n        <th mat-header-cell class=\"table-button-col\" *matHeaderCellDef></th>\r\n        <td mat-cell *matCellDef=\"let contract\">\r\n          <button mat-button (click)=\"openDeleteDialog(contract.contractId)\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"contractComplete\">\r\n        <th mat-header-cell class=\"table-button-col\" *matHeaderCellDef></th>\r\n        <td mat-cell *matCellDef=\"let contract\">\r\n          <button mat-button (click)=\"openCompleteDialog(contract)\">\r\n            <mat-icon>check_circle_outline</mat-icon>\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayColumns;\"></tr>\r\n    </table>\r\n  </mat-card-content>\r\n  <mat-card-footer>\r\n    <mat-paginator #paginator [length]=\"allUserActiveContracts.length\"\r\n                              [pageSize]=\"defaultPageSize\"\r\n                              [pageIndex]=\"defaultPageIndex\"\r\n                              [pageSizeOptions]=\"[2,5,10,25,50]\"\r\n\r\n                              (page) = \"paginatorEvent($event)\">\r\n    </mat-paginator>\r\n  </mat-card-footer>\r\n\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-active-list/contract-delete-dialog.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contract-active-list/contract-delete-dialog.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Are you sure?</h2>\r\n<mat-dialog-content>\r\n  <button mat-flat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-flat-button color=\"primary\" (click)=\"onDeleteClick()\">Delete</button>\r\n</mat-dialog-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-complete/contract-complete.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contract-complete/contract-complete.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"mat-elevation-z0\">\r\n  <mat-card-header>\r\n    <mat-card-title>Complete Contract</mat-card-title>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <mat-form-field class=\"complete-user\">\r\n      <mat-label>Completed By:</mat-label>\r\n      <mat-select #user (selectionChange)=\"setCompleteBy(user.value)\" [formControl]=\"userInputControl\">\r\n        <mat-option *ngFor=\"let user of users\" [value]=\"user\">{{user.displayName}}</mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"userInputControl.hasError('required')\">Please select a User.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-list #requirements *ngIf=\"hasRequirements()\">\r\n      <mat-label>Required Modifiers</mat-label>\r\n      <mat-list-item *ngFor=\"let modifier of contractToComplete.requirements\">{{modifier.modifierTitle}}</mat-list-item>\r\n    </mat-list>\r\n\r\n    <mat-selection-list #optionals *ngIf=\"hasOptionals()\" (selectionChange)=\"setCompletedOptionalFromSelectList(optionals.selectedOptions.selected.flat())\">\r\n      <mat-label>Optional Modifiers</mat-label>\r\n      <mat-list-option #optional *ngFor=\"let modifier of contractToComplete.optionals\" [value] = modifier>{{modifier.modifierTitle}}</mat-list-option>\r\n    </mat-selection-list>\r\n  </mat-card-content>\r\n\r\n  <mat-card-actions align=\"end\">\r\n    <button mat-flat-button (click)=\"closeDialog()\">Cancel</button>\r\n    <button mat-flat-button color=\"primary\" (click)=\"completeContract()\" [disabled]=\"!contractValid()\">Save</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-create/contract-create.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contract-create/contract-create.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"contract-create-card, mat-elevation-z0\">\r\n  <mat-card-header>\r\n    <mat-card-title>Create a new Contract</mat-card-title>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <mat-form-field class=\"input-field\">\r\n      <mat-label>Target</mat-label>\r\n      <mat-select #target (selectionChange)=\"setTarget(target.value)\" [formControl]=\"targetInputControl\">\r\n        <mat-option>--</mat-option>\r\n        <mat-option *ngFor=\"let user of users\" [value]=\"user\">\r\n          {{user.displayName}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error *ngIf=\"targetInputControl.hasError('required')\">Please enter a Contract Target.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"input-field\">\r\n      <mat-label>Reward</mat-label>\r\n      <input type=\"number\" matInput placeholder=\"Reward\" #reward [formControl]=\"rewardControl\" (change)=\"setReward(reward.value)\">\r\n      <span matPrefix>$&nbsp;</span>\r\n      <mat-error *ngIf=\"rewardControl.hasError('required')\">Please enter a Reward amount.</mat-error>\r\n    </mat-form-field>\r\n\r\n    <br>\r\n\r\n    <mat-form-field class=\"input-field\">\r\n      <mat-label>Requirements</mat-label>\r\n      <mat-select multiple #requirements (selectionChange)=\"setRequirements(requirements.value)\">\r\n        <mat-option *ngFor=\"let modifier of modifiers\" [value]=\"modifier\">\r\n          {{modifier.modifierTitle}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"input-field\">\r\n      <mat-label>Optionals</mat-label>\r\n      <mat-select multiple #optionals (selectionChange)=\"setOptionals(optionals.value)\">\r\n        <mat-option *ngFor=\"let modifier of modifiers\" [value]=\"modifier\">\r\n          {{modifier.modifierTitle}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <br>\r\n\r\n    <mat-form-field class=\"extra-details-field\" appearance=\"outline\">\r\n      <mat-label>Enter Details</mat-label>\r\n      <textarea matInput #details placeholder=\"Extra Details...\" (change)=\"setDetails(details.value)\" matTextareaAutosize matAutosizeMinRows=3 matAutosizeMaxRows=10></textarea>\r\n    </mat-form-field>\r\n\r\n\r\n  </mat-card-content>\r\n\r\n  <mat-card-actions align=\"end\">\r\n    <button mat-flat-button (click)=\"closeDialog()\">Cancel</button>\r\n    <button mat-flat-button color=\"primary\" (click)=\"postContract()\" [disabled]=\"!isValidContract()\">Submit</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-dashboard/contract-dashboard.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contract-dashboard/contract-dashboard.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"contract-dashboard\">\r\n  <mat-card-header>\r\n    <mat-card-title>Contract Dashboard</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n\r\n    <mat-grid-list cols=\"2\" rowHeight=\"6:1\">\r\n      <mat-grid-tile><b>Total Cash:</b></mat-grid-tile>\r\n      <mat-grid-tile>$ {{user.availableCash + user.committedCash}}</mat-grid-tile>\r\n      <mat-grid-tile><b>Contracted Cash:</b></mat-grid-tile>\r\n      <mat-grid-tile>$ {{user.committedCash}}</mat-grid-tile>\r\n    </mat-grid-list>\r\n\r\n    <mat-divider [inset]=\"true\"></mat-divider>\r\n\r\n    <mat-grid-list cols=\"2\" rowHeight=\"6:1\">\r\n      <mat-grid-tile><b>Available Cash:</b></mat-grid-tile>\r\n      <mat-grid-tile>${{user.availableCash}}</mat-grid-tile>\r\n    </mat-grid-list>\r\n\r\n  </mat-card-content>\r\n  <mat-card-actions align=\"end\">\r\n    <button mat-flat-button color=\"primary\" (click)=\"openContractCreator()\">Create Contract</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-item/contract-item.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contract-item/contract-item.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"contract-card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class = target-avatar></div>\r\n    <mat-card-title>{{contract.contractTarget.displayName}}</mat-card-title>\r\n    <mat-card-subtitle>{{contract.contractReward}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>\r\n      {{contract.contractDetails}}\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-divider></mat-divider>\r\n  <mat-card-actions>\r\n    <mat-expansion-panel class=\"mat-elevation-z0\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title><h3>Contract Details:</h3></mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n\r\n      <h3>Contract From:</h3>\r\n      <div class=\"owner\">\r\n        <div mat-card-avatar class = owner-avatar></div>\r\n        <mat-card-title class=\"owner-name\">Contract Owner Name Here</mat-card-title>\r\n      </div>\r\n\r\n      <div *ngIf=\"contract.requirements.length > 0\">\r\n        <h3>Requirements</h3>\r\n        <table mat-table [dataSource]=\"contract.requirements\" class=\"modifier-table\">\r\n\r\n          <ng-container matColumnDef=\"title\">\r\n            <th mat-header-cell *matHeaderCellDef>Modifier</th>\r\n            <td mat-cell class=\"modifier-table-title\" *matCellDef=\"let modifier\">{{modifier.modifierTitle}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"description\">\r\n            <th mat-header-cell *matHeaderCellDef>Description</th>\r\n            <td mat-cell class=\"modifier-table-description\" *matCellDef=\"let modifier\">{{modifier.modifierDescription}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"bonus\">\r\n            <th mat-header-cell *matHeaderCellDef>Bonus</th>\r\n            <td mat-cell class=\"modifier-table-bonus\" *matCellDef=\"let modifier\">${{modifier.modifierBonus}}</td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n      </div>\r\n\r\n      <div *ngIf=\"contract.optionals.length > 0\">\r\n        <h3>Optional</h3>\r\n        <table mat-table [dataSource]=\"contract.optionals\" class=\"modifier-table\">\r\n\r\n          <ng-container matColumnDef=\"title\">\r\n            <th mat-header-cell *matHeaderCellDef>Modifier</th>\r\n            <td mat-cell class=\"modifier-table-title\" *matCellDef=\"let modifier\">{{modifier.modifierTitle}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"description\">\r\n            <th mat-header-cell *matHeaderCellDef>Description</th>\r\n            <td mat-cell class=\"modifier-table-description\" *matCellDef=\"let modifier\">{{modifier.modifierDescription}}</td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"bonus\">\r\n            <th mat-header-cell *matHeaderCellDef>Bonus</th>\r\n            <td mat-cell class=\"modifier-table-bonus\" *matCellDef=\"let modifier\">${{modifier.modifierBonus}}</td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n      </div>\r\n\r\n    </mat-expansion-panel>\r\n  </mat-card-actions>\r\n\r\n</mat-card>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-list/contract-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contract-list/contract-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class = contract-list-card>\r\n  <mat-card-header>\r\n    <mat-card-title>Contract List</mat-card-title>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <mat-accordion *ngFor=\"let contract of currentActiveContracts\">\r\n      <app-contract-item [contract]=\"contract\"></app-contract-item>\r\n    </mat-accordion>\r\n  </mat-card-content>\r\n\r\n  <mat-card-actions align=\"end\">\r\n    <mat-paginator color=\"primary\" #paginator [length]=\"this.allActiveContracts.length\"\r\n                   [pageSize]=\"this.defaultPageSize\"\r\n                   [pageIndex]=\"this.defaultPageIndex\"\r\n                   [pageSizeOptions]=\"[2, 5, 10, 25, 100]\"\r\n\r\n                   (page)=\"paginatorEvent($event)\">\r\n    </mat-paginator>\r\n  </mat-card-actions>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-manager/contract-manager.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contract-manager/contract-manager.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"contract-manager\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      Manage your Contracts\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <app-contract-dashboard></app-contract-dashboard>\r\n    <app-contract-active-list></app-contract-active-list>\r\n  </mat-card-content>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class = settings-card>\r\n    <mat-card-content>\r\n      <mat-card-title>Settings</mat-card-title>\r\n        <mat-divider></mat-divider>\r\n        <div>\r\n            <img [src]=\"assets/kobe.png\">\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n        <mat-form-field class =\"username-field\">\r\n            <mat-label>Username</mat-label>\r\n            <input type=\"text\" matInput #usernameInput placeholder=\"Username\" [formControl] = \"usernameControl\" (change)=\"setUsername(usernameInput.value)\">\r\n            <mat-error *ngIf=\"usernameControl.hasError('required')\">Please enter a valid user name!</mat-error>\r\n            <mat-hint>Enter New Username</mat-hint>\r\n        </mat-form-field>\r\n        <mat-card-actions align=\"end\">\r\n            <button mat-flat-button class =\"confirm-username-button\" color=\"primary\" (click)=\"confirmUsername()\">Confirm</button>\r\n        </mat-card-actions>\r\n        <mat-divider></mat-divider>\r\n        <mat-form-field class =\"password-field\">\r\n            <mat-label>Password</mat-label>\r\n            <input [type]=\"hidePassword ? 'password' : 'text'\" matInput #passwordInput placeholder=\"Password\" [formControl] = \"passwordControl\" (change)=\"setPassword(passwordInput.value)\">\r\n            <button mat-icon-button matSuffix (click)=\"onHidePasswordClick()\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                <mat-icon>{{hidePassword ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            </button>\r\n            <mat-error *ngIf=\"passwordControl.hasError('required')\">Please enter a valid password!</mat-error>\r\n            <mat-hint>Enter New Password</mat-hint>\r\n        </mat-form-field>\r\n        <mat-card-actions align=\"end\">\r\n            <button mat-flat-button class =\"confirm-password-button\" color=\"primary\" (click)=\"confirmPassword()\">Confirm</button>\r\n        </mat-card-actions>\r\n    </mat-card-content>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-login-menu/user-login-menu.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-login-menu/user-login-menu.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button *ngIf=\"!nerfumService.currentSessionValue\" mat-flat-button color=\"accent\" [matMenuTriggerFor]=\"loginMenu\"\r\n        (menuClosed)=\"toggleRegister(false)\">Log In\r\n</button>\r\n<div *ngIf=\"nerfumService.currentSessionValue\">\r\n  <h2 class=\"user-menu-info\">{{user.displayName}}</h2>\r\n  <h1 class=\"user-menu-divider\">|</h1>\r\n  <h2 class=\"user-menu-info\"> ${{user.availableCash}}</h2>\r\n  <button *ngIf=\"nerfumService.currentSessionValue\" mat-button [matMenuTriggerFor]=\"userMenu\" class=\"user-menu-button\">\r\n    <mat-icon style=\"margin-bottom: 7px\">menu</mat-icon>\r\n  </button>\r\n</div>\r\n\r\n\r\n<mat-menu class=\"login-menu\" #loginMenu=\"matMenu\">\r\n  <div (click)=\"$event.stopPropagation()\">\r\n    <app-user-login *ngIf=\"!isRegistering\"></app-user-login>\r\n    <app-register-user *ngIf=\"isRegistering\"></app-register-user>\r\n  </div>\r\n</mat-menu>\r\n\r\n<mat-menu #userMenu=\"matMenu\">\r\n  <button mat-menu-item (click)=\"nerfumService.settingsPage()\">Settings</button>\r\n  <button mat-menu-item (click)=\"nerfumService.logout()\">Log Out</button>\r\n</mat-menu>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/JwtInterceptor.ts":
/*!***********************************!*\
  !*** ./src/app/JwtInterceptor.ts ***!
  \***********************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nerfums_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nerfums.service */ "./src/app/nerfums.service.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(nerfumsService) {
        this.nerfumsService = nerfumsService;
    }
    intercept(request, next) {
        let session = this.nerfumsService.currentSessionValue;
        if (session && session.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${session.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _nerfums_service__WEBPACK_IMPORTED_MODULE_2__["NerfumsService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nerfums_service__WEBPACK_IMPORTED_MODULE_2__["NerfumsService"]])
], JwtInterceptor);



/***/ }),

/***/ "./src/app/about-page/about-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/about-page/about-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about-card {\r\n  margin-top: 5% !important;\r\n  margin: 10%;\r\n}\r\n\r\n.text {\r\n  margin-right: 5%;\r\n  margin-left: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC1wYWdlL2Fib3V0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiA1JSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMTAlO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutPageComponent = class AboutPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
AboutPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about-page/about-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-page.component.css */ "./src/app/about-page/about-page.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutPageComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _contract_manager_contract_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contract-manager/contract-manager.component */ "./src/app/contract-manager/contract-manager.component.ts");
/* harmony import */ var _contract_list_contract_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contract-list/contract-list.component */ "./src/app/contract-list/contract-list.component.ts");
/* harmony import */ var _auth_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/user-login/user-login.component */ "./src/app/auth/user-login/user-login.component.ts");
/* harmony import */ var _auth_user_register_register_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/user-register/register-user.component */ "./src/app/auth/user-register/register-user.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");









const routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__["AboutPageComponent"] },
    { path: 'contractManager', component: _contract_manager_contract_manager_component__WEBPACK_IMPORTED_MODULE_4__["ContractManagerComponent"] },
    { path: 'contractList', component: _contract_list_contract_list_component__WEBPACK_IMPORTED_MODULE_5__["ContractListComponent"] },
    { path: 'loginPage', component: _auth_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__["UserLoginComponent"] },
    { path: 'registerPage', component: _auth_user_register_register_user_component__WEBPACK_IMPORTED_MODULE_7__["RegisterUserComponent"] },
    { path: 'settingsPage', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-fill {\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBYztVQUFkLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWZpbGwge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nerfums_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nerfums.service */ "./src/app/nerfums.service.ts");




let AppComponent = class AppComponent {
    constructor(router, nerfumsService) {
        this.router = router;
        this.nerfumsService = nerfumsService;
        this.title = 'Nerfums';
        this.activeLinkIndex = -1;
        this.navLinks = [
            {
                label: 'About',
                link: './about',
                unauthenticated: true,
                index: 0
            },
            {
                label: 'Contract List',
                link: './contractList',
                unauthenticated: false,
                index: 1
            },
            {
                label: 'Contract Manager',
                link: './contractManager',
                unauthenticated: false,
                index: 2
            }
        ];
    }
    ngOnInit() {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }
    goToLoginPage() {
        this.router.navigate(['./loginPage']);
    }
    test() {
        console.log('BUTTON PRESS');
        if (!this.nerfumsService.currentSessionValue) {
            this.nerfumsService.login("Dave", "Dave_Password").subscribe();
        }
        else {
            this.nerfumsService.logout();
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _nerfums_service__WEBPACK_IMPORTED_MODULE_3__["NerfumsService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _nerfums_service__WEBPACK_IMPORTED_MODULE_3__["NerfumsService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _contract_list_contract_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contract-list/contract-list.component */ "./src/app/contract-list/contract-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _contract_item_contract_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contract-item/contract-item.component */ "./src/app/contract-item/contract-item.component.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _contract_create_contract_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contract-create/contract-create.component */ "./src/app/contract-create/contract-create.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _contract_manager_contract_manager_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contract-manager/contract-manager.component */ "./src/app/contract-manager/contract-manager.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _contract_active_list_contract_active_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contract-active-list/contract-active-list.component */ "./src/app/contract-active-list/contract-active-list.component.ts");
/* harmony import */ var _contract_dashboard_contract_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contract-dashboard/contract-dashboard.component */ "./src/app/contract-dashboard/contract-dashboard.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _contract_complete_contract_complete_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contract-complete/contract-complete.component */ "./src/app/contract-complete/contract-complete.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _user_login_menu_user_login_menu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user-login-menu/user-login-menu.component */ "./src/app/user-login-menu/user-login-menu.component.ts");
/* harmony import */ var _JwtInterceptor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./JwtInterceptor */ "./src/app/JwtInterceptor.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _contract_list_contract_list_component__WEBPACK_IMPORTED_MODULE_6__["ContractListComponent"],
            _contract_item_contract_item_component__WEBPACK_IMPORTED_MODULE_10__["ContractItemComponent"],
            _contract_create_contract_create_component__WEBPACK_IMPORTED_MODULE_12__["ContractCreateComponent"],
            _contract_manager_contract_manager_component__WEBPACK_IMPORTED_MODULE_16__["ContractManagerComponent"],
            _contract_active_list_contract_active_list_component__WEBPACK_IMPORTED_MODULE_19__["ContractActiveListComponent"],
            _contract_dashboard_contract_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["ContractDashboardComponent"],
            _contract_active_list_contract_active_list_component__WEBPACK_IMPORTED_MODULE_19__["ContractDeleteDialogComponent"],
            _contract_complete_contract_complete_component__WEBPACK_IMPORTED_MODULE_23__["ContractCompleteComponent"],
            _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_25__["AboutPageComponent"],
            _user_login_menu_user_login_menu_component__WEBPACK_IMPORTED_MODULE_29__["UserLoginMenuComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_31__["SettingsComponent"]
        ],
        entryComponents: [
            _contract_create_contract_create_component__WEBPACK_IMPORTED_MODULE_12__["ContractCreateComponent"],
            _contract_complete_contract_complete_component__WEBPACK_IMPORTED_MODULE_23__["ContractCompleteComponent"],
            _contract_active_list_contract_active_list_component__WEBPACK_IMPORTED_MODULE_19__["ContractDeleteDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__["MatCheckboxModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["_MatMenuDirectivesModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_28__["AuthModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _JwtInterceptor__WEBPACK_IMPORTED_MODULE_30__["JwtInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/auth/user-login/user-login.component.ts");
/* harmony import */ var _user_register_register_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-register/register-user.component */ "./src/app/auth/user-register/register-user.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"], _user_register_register_user_component__WEBPACK_IMPORTED_MODULE_4__["RegisterUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ],
        exports: [_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"], _user_register_register_user_component__WEBPACK_IMPORTED_MODULE_4__["RegisterUserComponent"]]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/user-login/user-login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/auth/user-login/user-login.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-login-card {\r\n}\r\n\r\n.username-field {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    width: 100%;\r\n  }\r\n\r\n.password-field {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    width: 100%;\r\n}\r\n\r\n.login-button {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n}\r\n\r\n.register-button {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  color: blue;\r\n}\r\n\r\n.shake {\r\n  -webkit-animation-name: shake-animation;\r\n          animation-name: shake-animation;\r\n  -webkit-animation-duration: 0.3s;\r\n          animation-duration: 0.3s;\r\n}\r\n\r\n@-webkit-keyframes shake-animation {\r\n  10%, 90% {\r\n    -webkit-transform: translate3d(-0.5px, 0, 0);\r\n            transform: translate3d(-0.5px, 0, 0);\r\n  }\r\n\r\n  20%, 80% {\r\n    -webkit-transform: translate3d(2px, 0, 0);\r\n            transform: translate3d(2px, 0, 0);\r\n  }\r\n\r\n  30%, 50%, 70% {\r\n    -webkit-transform: translate3d(-3px, 0, 0);\r\n            transform: translate3d(-3px, 0, 0);\r\n  }\r\n\r\n  40%, 60% {\r\n    -webkit-transform: translate3d(3px, 0, 0);\r\n            transform: translate3d(3px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes shake-animation {\r\n  10%, 90% {\r\n    -webkit-transform: translate3d(-0.5px, 0, 0);\r\n            transform: translate3d(-0.5px, 0, 0);\r\n  }\r\n\r\n  20%, 80% {\r\n    -webkit-transform: translate3d(2px, 0, 0);\r\n            transform: translate3d(2px, 0, 0);\r\n  }\r\n\r\n  30%, 50%, 70% {\r\n    -webkit-transform: translate3d(-3px, 0, 0);\r\n            transform: translate3d(-3px, 0, 0);\r\n  }\r\n\r\n  40%, 60% {\r\n    -webkit-transform: translate3d(3px, 0, 0);\r\n            transform: translate3d(3px, 0, 0);\r\n  }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC91c2VyLWxvZ2luL3VzZXItbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIscUJBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0FBRUY7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixxQkFBeUI7WUFBekIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHVCQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsdUNBQStCO1VBQS9CLCtCQUErQjtFQUMvQixnQ0FBd0I7VUFBeEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSw0Q0FBb0M7WUFBcEMsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UseUNBQWlDO1lBQWpDLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDBDQUFrQztZQUFsQyxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSx5Q0FBaUM7WUFBakMsaUNBQWlDO0VBQ25DO0FBQ0Y7O0FBaEJBO0VBQ0U7SUFDRSw0Q0FBb0M7WUFBcEMsb0NBQW9DO0VBQ3RDOztFQUVBO0lBQ0UseUNBQWlDO1lBQWpDLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDBDQUFrQztZQUFsQyxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSx5Q0FBaUM7WUFBakMsaUNBQWlDO0VBQ25DO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItbG9naW4tY2FyZCB7XHJcbn1cclxuXHJcbi51c2VybmFtZS1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4ucGFzc3dvcmQtZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4uc2hha2Uge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBzaGFrZS1hbmltYXRpb247XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWtlLWFuaW1hdGlvbiB7XHJcbiAgMTAlLCA5MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgMjAlLCA4MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgMzAlLCA1MCUsIDcwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zcHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgNDAlLCA2MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzcHgsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/auth/user-login/user-login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/user-login/user-login.component.ts ***!
  \*********************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_login_menu_user_login_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user-login-menu/user-login-menu.component */ "./src/app/user-login-menu/user-login-menu.component.ts");
/* harmony import */ var _nerfums_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../nerfums.service */ "./src/app/nerfums.service.ts");





let UserLoginComponent = class UserLoginComponent {
    constructor(nerfumsService, loginMenu) {
        this.nerfumsService = nerfumsService;
        this.loginMenu = loginMenu;
        this.hidePassword = true;
        this.loginFailed = false;
        this.errorWobble = false;
        this.usernameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
    }
    ngOnInit() {
    }
    onHidePasswordClick() {
        this.hidePassword = !this.hidePassword;
    }
    setUserName(name) {
        this.user_name = name;
        console.log(name);
    }
    setPassword(password) {
        this.password = password;
        console.log(password);
    }
    login() {
        this.nerfumsService.login(this.user_name, this.password).subscribe(data => {
            this.resetLogin();
        }, error => {
            this.handleError(error);
        });
    }
    openRegisterComponent() {
        this.loginMenu.toggleRegister(true);
    }
    resetLogin() {
        this.user_name = null;
        this.password = null;
        this.hidePassword = true;
        this.loginFailed = false;
    }
    handleError(error) {
        if (error.status == 403) {
            console.log("Invalid");
            this.resetLogin();
            this.loginFailed = true;
            this.errorWobble = true;
            setTimeout((arg) => {
                this.errorWobble = false;
            }, 300);
        }
    }
};
UserLoginComponent.ctorParameters = () => [
    { type: _nerfums_service__WEBPACK_IMPORTED_MODULE_4__["NerfumsService"] },
    { type: _user_login_menu_user_login_menu_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginMenuComponent"] }
];
UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-login/user-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-login.component.css */ "./src/app/auth/user-login/user-login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nerfums_service__WEBPACK_IMPORTED_MODULE_4__["NerfumsService"], _user_login_menu_user_login_menu_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginMenuComponent"]])
], UserLoginComponent);



/***/ }),

/***/ "./src/app/auth/user-register/register-user.component.css":
/*!****************************************************************!*\
  !*** ./src/app/auth/user-register/register-user.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register-user-card {\r\n}\r\n\r\n.email-field {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    width: 100%;\r\n}\r\n\r\n.fullname-field {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    width: 100%;\r\n  }\r\n\r\n.password-field {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    width: 100%;\r\n}\r\n\r\n.confirm-password-field {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    width: 100%;\r\n}\r\n\r\n.signup-button {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n}\r\n\r\n.cancel-button {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    color: blue;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC91c2VyLXJlZ2lzdGVyL3JlZ2lzdGVyLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIscUJBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixxQkFBeUI7WUFBekIseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7QUFFRjtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHFCQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIscUJBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix1QkFBMkI7WUFBM0IsMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdXNlci1yZWdpc3Rlci9yZWdpc3Rlci11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItdXNlci1jYXJkIHtcclxufVxyXG5cclxuLmVtYWlsLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZnVsbG5hbWUtZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuLnBhc3N3b3JkLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29uZmlybS1wYXNzd29yZC1maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNpZ251cC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG4uY2FuY2VsLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/auth/user-register/register-user.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/auth/user-register/register-user.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _nerfums_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../nerfums.service */ "./src/app/nerfums.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterUserComponent = class RegisterUserComponent {
    constructor(nerfumsService, router) {
        this.nerfumsService = nerfumsService;
        this.router = router;
        this.validName = true;
        this.validPassword = false;
        this.hidePassword = true;
        this.hideConfirmPassword = true;
        //todo - use a form, custom form validations
        this.fullnameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.emailControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
        ]);
        this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.confirmPasswordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
    }
    ngOnInit() {
        this.initRegisterObject();
    }
    MustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && matchingControl.errors.mustMatch) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
    initRegisterObject() {
        this.register = new class {
        };
    }
    onHideConfirmPasswordClick() {
        this.hideConfirmPassword = !this.hideConfirmPassword;
    }
    onHidePasswordClick() {
        this.hidePassword = !this.hidePassword;
    }
    setFullName(displayName) {
        console.log(displayName);
        this.register.displayName = displayName;
    }
    setEmail(email) {
        this.register.username = email;
        console.log(email);
    }
    setPassword(password) {
        this.register.password = password;
        console.log(password);
    }
    setConfirmPassword(confirmPassword) {
        this.confirmPassword = confirmPassword;
        console.log(this.confirmPassword);
        console.log(this.validPassword);
        //TODO log at this
    }
    validateAllFields() {
        if (this.register.displayName === ""
            || this.register.username === ""
            || this.register.password === ""
            || this.confirmPassword === ""
            || this.confirmPassword !== this.register.password) {
            return false;
        }
        return true;
    }
    registerUser() {
        if (!this.validateAllFields()) {
            return;
        }
        this.nerfumsService.register(this.register).subscribe();
    }
    validatePasswords() {
        return this.register.password.length > 6 && this.register.password === this.confirmPassword;
    }
};
RegisterUserComponent.ctorParameters = () => [
    { type: _nerfums_service__WEBPACK_IMPORTED_MODULE_3__["NerfumsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-register/register-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register-user.component.css */ "./src/app/auth/user-register/register-user.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nerfums_service__WEBPACK_IMPORTED_MODULE_3__["NerfumsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], RegisterUserComponent);



/***/ }),

/***/ "./src/app/contract-active-list/contract-active-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/contract-active-list/contract-active-list.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  width: 90%;\r\n\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.active-contracts {\r\n  width: 60%;\r\n  height: 80%;\r\n\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 5%;\r\n}\r\n\r\n.table-number-col {\r\n  width: 10%;\r\n}\r\n\r\n.table-info-col {\r\n  width: 15%\r\n}\r\n\r\n.table-description-col {\r\n  width: 35%\r\n}\r\n\r\n.table-button-col {\r\n  width: 10%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3QtYWN0aXZlLWxpc3QvY29udHJhY3QtYWN0aXZlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7O0VBRVYsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXOztFQUVYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29udHJhY3QtYWN0aXZlLWxpc3QvY29udHJhY3QtYWN0aXZlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogOTAlO1xyXG5cclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hY3RpdmUtY29udHJhY3RzIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogODAlO1xyXG5cclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi50YWJsZS1udW1iZXItY29sIHtcclxuICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4udGFibGUtaW5mby1jb2wge1xyXG4gIHdpZHRoOiAxNSVcclxufVxyXG5cclxuLnRhYmxlLWRlc2NyaXB0aW9uLWNvbCB7XHJcbiAgd2lkdGg6IDM1JVxyXG59XHJcblxyXG4udGFibGUtYnV0dG9uLWNvbCB7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/contract-active-list/contract-active-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/contract-active-list/contract-active-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ContractActiveListComponent, ContractDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractActiveListComponent", function() { return ContractActiveListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractDeleteDialogComponent", function() { return ContractDeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nerfums_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nerfums.service */ "./src/app/nerfums.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _contract_complete_contract_complete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contract-complete/contract-complete.component */ "./src/app/contract-complete/contract-complete.component.ts");





let ContractActiveListComponent = class ContractActiveListComponent {
    constructor(nerfumsService, dialog) {
        this.nerfumsService = nerfumsService;
        this.dialog = dialog;
        this.displayColumns = ['index', 'contractTarget', 'contractReward', 'contractDetails', 'contractDelete', 'contractComplete'];
    }
    ngOnInit() {
        this.allUserActiveContracts = new Array();
        this.defaultPageIndex = 0;
        this.defaultPageSize = 5;
        this.retrieveContractList();
    }
    openCompleteDialog(contract) {
        const dialogRef = this.dialog.open(_contract_complete_contract_complete_component__WEBPACK_IMPORTED_MODULE_4__["ContractCompleteComponent"], {
            data: { contract }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.retrieveContractList();
        });
    }
    openDeleteDialog(contractToDeleteId) {
        const dialogRef = this.dialog.open(ContractDeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            console.log('DELETE CONTRACT: ' + result);
            if (result) {
                this.nerfumsService.deleteContractById(contractToDeleteId).subscribe(data => {
                    this.retrieveContractList();
                });
            }
        });
    }
    paginatorEvent(event) {
        this.updateContractList(event.pageIndex, event.pageSize);
    }
    retrieveContractList() {
        this.nerfumsService.getOwnerContracts(true).subscribe(data => {
            console.log('CONTRACT LIST RETRIEVED || COUNT: ' + data.length);
            this.allUserActiveContracts = data;
            this.updateContractList(this.defaultPageIndex, this.defaultPageSize);
        });
    }
    updateContractList(pageIndex, pageSize) {
        this.currentUserActiveContracts = this.allUserActiveContracts.slice((pageIndex * pageSize), (pageIndex * pageSize) + pageSize);
    }
};
ContractActiveListComponent.ctorParameters = () => [
    { type: _nerfums_service__WEBPACK_IMPORTED_MODULE_2__["NerfumsService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
ContractActiveListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contract-active-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contract-active-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-active-list/contract-active-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contract-active-list.component.css */ "./src/app/contract-active-list/contract-active-list.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nerfums_service__WEBPACK_IMPORTED_MODULE_2__["NerfumsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], ContractActiveListComponent);

let ContractDeleteDialogComponent = class ContractDeleteDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    onNoClick() {
        this.dialogRef.close(false);
    }
    onDeleteClick() {
        this.dialogRef.close(true);
    }
};
ContractDeleteDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
ContractDeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contract-delete-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contract-delete-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-active-list/contract-delete-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
], ContractDeleteDialogComponent);



/***/ }),

/***/ "./src/app/contract-complete/contract-complete.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/contract-complete/contract-complete.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.complete-user {\r\n  width: 80%;\r\n\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3QtY29tcGxldGUvY29udHJhY3QtY29tcGxldGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxVQUFVOztFQUVWLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb250cmFjdC1jb21wbGV0ZS9jb250cmFjdC1jb21wbGV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb21wbGV0ZS11c2VyIHtcclxuICB3aWR0aDogODAlO1xyXG5cclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contract-complete/contract-complete.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/contract-complete/contract-complete.component.ts ***!
  \******************************************************************/
/*! exports provided: ContractCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractCompleteComponent", function() { return ContractCompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _nerfums_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nerfums.service */ "./src/app/nerfums.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let ContractCompleteComponent = class ContractCompleteComponent {
    constructor(nerfumsService, dialogRef, data) {
        this.nerfumsService = nerfumsService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.userInputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
    }
    ngOnInit() {
        this.contractToComplete = this.data.contract;
        console.log(this.contractToComplete);
        this.nerfumsService.getAllUsers().subscribe(result => {
            this.users = result;
        });
    }
    setCompleteBy(completeBy) {
        this.contractToComplete.contractCompletedBy = completeBy;
    }
    setCompletedOptionalFromSelectList(selected) {
        const modifiers = new Array();
        for (const option of selected) {
            console.log(option);
            modifiers.push(option.value);
        }
        this.setCompletedOptionals(modifiers);
    }
    setCompletedOptionals(modifiers) {
        console.log(modifiers);
        this.contractToComplete.contractCompletedOptionals = modifiers;
    }
    completeContract() {
        if (this.contractValid()) {
            this.nerfumsService.completeContract(this.contractToComplete).subscribe(result => {
                console.log(result);
                this.closeDialog();
            });
        }
    }
    closeDialog() {
        this.contractToComplete = null;
        this.dialogRef.close();
    }
    hasRequirements() {
        return this.contractToComplete.requirements !== undefined &&
            this.contractToComplete.requirements != null &&
            this.contractToComplete.requirements.length > 0;
    }
    hasOptionals() {
        return this.contractToComplete.optionals !== undefined &&
            this.contractToComplete.optionals != null &&
            this.contractToComplete.optionals.length > 0;
    }
    contractValid() {
        return this.contractToComplete.contractCompletedBy != null;
    }
};
ContractCompleteComponent.ctorParameters = () => [
    { type: _nerfums_service__WEBPACK_IMPORTED_MODULE_3__["NerfumsService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ContractCompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contract-complete',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contract-complete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-complete/contract-complete.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contract-complete.component.css */ "./src/app/contract-complete/contract-complete.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nerfums_service__WEBPACK_IMPORTED_MODULE_3__["NerfumsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], ContractCompleteComponent);



/***/ }),

/***/ "./src/app/contract-create/contract-create.component.css":
/*!***************************************************************!*\
  !*** ./src/app/contract-create/contract-create.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contract-create-card {\r\n\r\n}\r\n\r\n.input-field {\r\n  width: 40%;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.extra-details-field {\r\n  width: 90%;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3QtY3JlYXRlL2NvbnRyYWN0LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0LWNyZWF0ZS9jb250cmFjdC1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cmFjdC1jcmVhdGUtY2FyZCB7XHJcblxyXG59XHJcblxyXG4uaW5wdXQtZmllbGQge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5leHRyYS1kZXRhaWxzLWZpZWxkIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contract-create/contract-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/contract-create/contract-create.component.ts ***!
  \**************************************************************/
/*! exports provided: ContractCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractCreateComponent", function() { return ContractCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nerfums_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nerfums.service */ "./src/app/nerfums.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");





let ContractCreateComponent = class ContractCreateComponent {
    constructor(nerfumsService, dialogRef) {
        this.nerfumsService = nerfumsService;
        this.dialogRef = dialogRef;
        this.targetInputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.rewardControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
    }
    ngOnInit() {
        this.nerfumsService.getAllUsers().subscribe(data => {
            this.users = data;
            console.log("USERS: " + this.users.length);
        });
        this.nerfumsService.getAllModifiers().subscribe(data => {
            this.modifiers = data;
        });
        this.initContract();
    }
    initContract() {
        this.contract = new class {
        };
    }
    setTarget(target) {
        this.contract.contractTarget = target;
    }
    setReward(reward) {
        this.contract.contractReward = reward;
    }
    setRequirements(requirements) {
        this.contract.requirements = requirements;
    }
    setOptionals(optionals) {
        this.contract.optionals = optionals;
    }
    setDetails(details) {
        this.contract.contractDetails = details;
    }
    isValidContract() {
        return (this.contract.contractTarget != null) && (this.contract.contractReward != null && this.contract.contractReward > 0);
    }
    postContract() {
        if (this.isValidContract()) {
            this.contract.contractOwner = this.nerfumsService.currentUserValue;
            this.nerfumsService.postContract(this.contract).subscribe(data => console.log(data));
            location.reload();
            this.closeDialog();
        }
        else {
            console.log('Invalid Contract');
        }
    }
    closeDialog() {
        this.initContract();
        this.dialogRef.close();
    }
};
ContractCreateComponent.ctorParameters = () => [
    { type: _nerfums_service__WEBPACK_IMPORTED_MODULE_2__["NerfumsService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
];
ContractCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contract-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contract-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-create/contract-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contract-create.component.css */ "./src/app/contract-create/contract-create.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nerfums_service__WEBPACK_IMPORTED_MODULE_2__["NerfumsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
], ContractCreateComponent);



/***/ }),

/***/ "./src/app/contract-dashboard/contract-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/contract-dashboard/contract-dashboard.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contract-dashboard {\r\n  width: 30%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.contract-details-category {\r\n  margin-right: 1%;\r\n  margin-left: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3QtZGFzaGJvYXJkL2NvbnRyYWN0LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29udHJhY3QtZGFzaGJvYXJkL2NvbnRyYWN0LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyYWN0LWRhc2hib2FyZCB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jb250cmFjdC1kZXRhaWxzLWNhdGVnb3J5IHtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contract-dashboard/contract-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/contract-dashboard/contract-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: ContractDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractDashboardComponent", function() { return ContractDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _contract_create_contract_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contract-create/contract-create.component */ "./src/app/contract-create/contract-create.component.ts");
/* harmony import */ var _nerfums_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nerfums.service */ "./src/app/nerfums.service.ts");





let ContractDashboardComponent = class ContractDashboardComponent {
    constructor(nerfumsService, dialog) {
        this.nerfumsService = nerfumsService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.user = this.nerfumsService.currentUserValue;
        console.log("USER: " + this.user);
    }
    openContractCreator() {
        this.dialog.open(_contract_create_contract_create_component__WEBPACK_IMPORTED_MODULE_3__["ContractCreateComponent"]);
    }
};
ContractDashboardComponent.ctorParameters = () => [
    { type: _nerfums_service__WEBPACK_IMPORTED_MODULE_4__["NerfumsService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
ContractDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contract-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contract-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-dashboard/contract-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contract-dashboard.component.css */ "./src/app/contract-dashboard/contract-dashboard.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nerfums_service__WEBPACK_IMPORTED_MODULE_4__["NerfumsService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], ContractDashboardComponent);



/***/ }),

/***/ "./src/app/contract-item/contract-item.component.css":
/*!***********************************************************!*\
  !*** ./src/app/contract-item/contract-item.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contract-card {\r\n  position: center;\r\n  width: 90%;\r\n\r\n  margin-top: 10px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.target-avatar {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.owner {\r\n  display: grid;\r\n  grid-template-columns: 10% 80%;\r\n}\r\n\r\n.owner-avatar {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.owner-name {\r\n  height: 50%;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  vertical-align: center;\r\n}\r\n\r\n.modifier-table {\r\n  width: 90%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.modifier-table-title {\r\n  width: 20%;\r\n  padding: 2%;\r\n}\r\n\r\n.modifier-table-description {\r\n  width: 50%;\r\n  padding: 2%;\r\n\r\n  text-align: left;\r\n  word-wrap: normal;\r\n}\r\n\r\n.modifier-table-bonus {\r\n  width: 20%;\r\n  padding: 2%;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3QtaXRlbS9jb250cmFjdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTs7RUFFVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXOztFQUVYLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0LWl0ZW0vY29udHJhY3QtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyYWN0LWNhcmQge1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkwJTtcclxuXHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50YXJnZXQtYXZhdGFyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ub3duZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgODAlO1xyXG59XHJcbi5vd25lci1hdmF0YXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5vd25lci1uYW1lIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGlmaWVyLXRhYmxlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLm1vZGlmaWVyLXRhYmxlLXRpdGxlIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4ubW9kaWZpZXItdGFibGUtZGVzY3JpcHRpb24ge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMiU7XHJcblxyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd29yZC13cmFwOiBub3JtYWw7XHJcbn1cclxuXHJcbi5tb2RpZmllci10YWJsZS1ib251cyB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBwYWRkaW5nOiAyJTtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/contract-item/contract-item.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/contract-item/contract-item.component.ts ***!
  \**********************************************************/
/*! exports provided: ContractItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractItemComponent", function() { return ContractItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContractItemComponent = class ContractItemComponent {
    constructor() {
        this.displayedColumns = ['title', 'description', 'bonus'];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContractItemComponent.prototype, "contract", void 0);
ContractItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contract-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contract-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-item/contract-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contract-item.component.css */ "./src/app/contract-item/contract-item.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContractItemComponent);



/***/ }),

/***/ "./src/app/contract-list/contract-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/contract-list/contract-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contract-list-card{\r\n  max-width: 600px;\r\n\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n\r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3QtbGlzdC9jb250cmFjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7O0VBRWhCLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0LWxpc3QvY29udHJhY3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyYWN0LWxpc3QtY2FyZHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG5cclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblxyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contract-list/contract-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/contract-list/contract-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ContractListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractListComponent", function() { return ContractListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nerfums_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nerfums.service */ "./src/app/nerfums.service.ts");



let ContractListComponent = class ContractListComponent {
    constructor(nerfumsService) {
        this.nerfumsService = nerfumsService;
    }
    ngOnInit() {
        this.allActiveContracts = new Array();
        this.nerfumsService.getPostedContracts().subscribe(data => {
            this.allActiveContracts = data;
            this.defaultPageIndex = 0;
            this.defaultPageSize = 5;
            this.updateContractList(this.defaultPageIndex, this.defaultPageSize);
        });
    }
    paginatorEvent(event) {
        this.updateContractList(event.pageIndex, event.pageSize);
    }
    updateContractList(pageIndex, pageSize) {
        this.currentActiveContracts = this.allActiveContracts.slice((pageIndex * pageSize), (pageIndex * pageSize) + pageSize);
    }
};
ContractListComponent.ctorParameters = () => [
    { type: _nerfums_service__WEBPACK_IMPORTED_MODULE_2__["NerfumsService"] }
];
ContractListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contract-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contract-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-list/contract-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contract-list.component.css */ "./src/app/contract-list/contract-list.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nerfums_service__WEBPACK_IMPORTED_MODULE_2__["NerfumsService"]])
], ContractListComponent);



/***/ }),

/***/ "./src/app/contract-manager/contract-manager.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/contract-manager/contract-manager.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contract-manager {\r\n  width: 90%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhY3QtbWFuYWdlci9jb250cmFjdC1tYW5hZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0LW1hbmFnZXIvY29udHJhY3QtbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyYWN0LW1hbmFnZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contract-manager/contract-manager.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contract-manager/contract-manager.component.ts ***!
  \****************************************************************/
/*! exports provided: ContractManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractManagerComponent", function() { return ContractManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nerfums_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nerfums.service */ "./src/app/nerfums.service.ts");



let ContractManagerComponent = class ContractManagerComponent {
    constructor(nerfumsService) {
        this.nerfumsService = nerfumsService;
    }
    ngOnInit() {
    }
};
ContractManagerComponent.ctorParameters = () => [
    { type: _nerfums_service__WEBPACK_IMPORTED_MODULE_2__["NerfumsService"] }
];
ContractManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contract-manager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contract-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract-manager/contract-manager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contract-manager.component.css */ "./src/app/contract-manager/contract-manager.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nerfums_service__WEBPACK_IMPORTED_MODULE_2__["NerfumsService"]])
], ContractManagerComponent);



/***/ }),

/***/ "./src/app/nerfums.service.ts":
/*!************************************!*\
  !*** ./src/app/nerfums.service.ts ***!
  \************************************/
/*! exports provided: NerfumsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NerfumsService", function() { return NerfumsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let NerfumsService = class NerfumsService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.urlRoot = 'http://localhost:8081/Nerfums/api';
        this.TEMP_SESSION_USERID = 11;
        this.currentSessionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentSession')));
        this.currentSession = this.currentSessionSubject.asObservable();
    }
    get currentSessionValue() {
        return this.currentSessionSubject.value;
    }
    get currentUserValue() {
        return this.currentSessionSubject.value.userRO;
    }
    register(register) {
        return this.http.post(this.urlRoot + '/authentication/register', register)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(session => {
            if (session && session.token) {
                localStorage.setItem('currentSession', JSON.stringify(session));
                this.currentSessionSubject.next(session);
            }
            return session;
        }));
    }
    login(username, password) {
        return this.http.post(this.urlRoot + '/authentication/login', { username, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(session => {
            if (session && session.token) {
                console.log(session);
                localStorage.setItem('currentSession', JSON.stringify(session));
                this.currentSessionSubject.next(session);
            }
            return session;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    logout() {
        localStorage.removeItem('currentSession');
        this.currentSessionSubject.next(null);
        this.router.navigate(['/about']);
    }
    settingsPage() {
        this.router.navigate(['/settingsPage']);
    }
    getAllActiveContracts(activeContracts) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('requestingUserId', String(this.TEMP_SESSION_USERID));
        return this.http.get(this.urlRoot + '/contracts', { params });
    }
    getPostedContracts() {
        return this.http.get(this.urlRoot + '/contracts/posted');
    }
    getOwnerContracts(activeContracts) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append('active', String(activeContracts));
        return this.http.get(this.urlRoot + '/contracts/owner', { params });
    }
    postContract(contract) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.urlRoot + '/contracts', JSON.stringify(contract), httpOptions);
    }
    completeContract(completedContract) {
        return this.http.patch(this.urlRoot + '/contracts', completedContract);
    }
    deleteContractById(contractId) {
        return this.http.delete(this.urlRoot + '/contracts/' + contractId);
    }
    getAllUsers() {
        return this.http.get(this.urlRoot + '/users');
    }
    getAllModifiers() {
        return this.http.get(this.urlRoot + '/modifiers');
    }
    postUser(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(this.urlRoot + '/users', JSON.stringify(user), httpOptions);
    }
    handleError(error) {
        console.log("DINGUM: " + error.status);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    }
};
NerfumsService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NerfumsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], NerfumsService);



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".target-avatar {\r\n    background-size: cover;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFyZ2V0LWF2YXRhciB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SettingsComponent = class SettingsComponent {
    constructor() {
        this.usernameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.passwordControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.hidePassword = true;
    }
    ngOnInit() {
    }
    setUsername(userName) {
        //todo
    }
    setPassword(password) {
        //todo
    }
    confirmUsername() {
        console.log('Confirm username');
    }
    confirmPassword() {
        console.log('Confirm password');
    }
    onHidePasswordClick() {
        this.hidePassword = !this.hidePassword;
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SettingsComponent);



/***/ }),

/***/ "./src/app/user-login-menu/user-login-menu.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user-login-menu/user-login-menu.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-menu {\r\n  padding: 0px;\r\n  background-color: red;\r\n}\r\n\r\n.user-menu-button {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  display: inline-block;\r\n}\r\n\r\n.user-menu-divider {\r\n  padding: 10px 10px;\r\n  display: inline-block;\r\n}\r\n\r\n.user-menu-info {\r\n  padding: 10% 0;\r\n  display: inline-block;\r\n}\r\n\r\n.menu-icon {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n\r\n::ng-deep .login-menu .mat-menu-content:not(:empty) {\r\n  padding-bottom: 0px;\r\n  padding-top: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1sb2dpbi1tZW51L3VzZXItbG9naW4tbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbG9naW4tbWVudS91c2VyLWxvZ2luLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1tZW51IHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4udXNlci1tZW51LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnVzZXItbWVudS1kaXZpZGVyIHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udXNlci1tZW51LWluZm8ge1xyXG4gIHBhZGRpbmc6IDEwJSAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm1lbnUtaWNvbiB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmxvZ2luLW1lbnUgLm1hdC1tZW51LWNvbnRlbnQ6bm90KDplbXB0eSkge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/user-login-menu/user-login-menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-login-menu/user-login-menu.component.ts ***!
  \**************************************************************/
/*! exports provided: UserLoginMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginMenuComponent", function() { return UserLoginMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nerfums_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nerfums.service */ "./src/app/nerfums.service.ts");



let UserLoginMenuComponent = class UserLoginMenuComponent {
    constructor(nerfumService) {
        this.nerfumService = nerfumService;
    }
    ngOnInit() {
        this.user = this.nerfumService.currentUserValue;
        this.isRegistering = false;
    }
    toggleRegister(isRegister) {
        this.isRegistering = isRegister;
    }
};
UserLoginMenuComponent.ctorParameters = () => [
    { type: _nerfums_service__WEBPACK_IMPORTED_MODULE_2__["NerfumsService"] }
];
UserLoginMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-login-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-login-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-login-menu/user-login-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-login-menu.component.css */ "./src/app/user-login-menu/user-login-menu.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nerfums_service__WEBPACK_IMPORTED_MODULE_2__["NerfumsService"]])
], UserLoginMenuComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\IannucL1\Desktop\Code\Nerfums\nerfums-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
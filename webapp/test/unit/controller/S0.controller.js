/*global QUnit*/

sap.ui.define([
	"alca/via-cep-ui5/controller/S0.controller"
], function (Controller) {
	"use strict";

	QUnit.module("S0 Controller");

	QUnit.test("I should test the S0 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
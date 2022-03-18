sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
    var sViewName = "View1";    
    var sNewVersion = "1.0.team"; //<<<<< CHANGE TO NEW VERSION HERE
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
                    });
                },
                iShouldSeeTheNewVersion: function () {
					return this.waitFor({
						id: "page",
						viewName: sViewName,
						success: function (page) {
							Opa5.assert.ok(page.getTitle().indexOf(sNewVersion) > 0, "Looking for version: "+sNewVersion);
						},
						errorMessage: "Did not find the new version " + sNewVersion + " !!!"
					});
				}
			}
		}
	});

});

'use strict';

var URL = browser.params.registrationPage.url;
var properties = browser.params.registrationPage;

var submitButtonByXpath = element(by.xpath('//*[@id="pie_register"]/li[14]/div/input'));

var hasClass = function (element, cls) {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(cls) !== -1;
    });
};


var isEmptyAt = function(index) {
	var locator = element(by.xpath('//*[@id="pie_register"]/li[' + index + ']/div'));
	return hasClass(locator, properties.error);
}

var RegistrationPage = function() {

};

RegistrationPage.prototype = {

	open : function() {
		browser.ignoreSynchronization = true;
		browser.driver.get(URL);
	},
	
	clickOnSubmit: function() {
		return submitButtonByXpath.click();
	},

	hasEmptyFirstLastName : function() {
		return isEmptyAt(properties.firstLastNameIndex);
	},

	hasEmptyHobby : function() {
		return isEmptyAt(properties.hobbyIndex);
	},

	hasEmptyPhoneNumber : function() {
		return isEmptyAt(properties.phoneNumberIndex);
	},

	hasEmptyUsername : function() {
		return isEmptyAt(properties.usernameIndex);
	},

	hasEmptyEmail : function() {
		return isEmptyAt(properties.emailIndex);
	},

	hasEmptyPassword : function() {
		return isEmptyAt(properties.passwordIndex);
	},

	hasEmptyConfirmPassword : function() {
		return isEmptyAt(properties.confirmPasswordIndex);
	},
}

module.exports = RegistrationPage;
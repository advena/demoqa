'use strict';

var RegistrationPage = require('./registrationPage.js');

describe('user registration page', function() {

	var registrationPage = new RegistrationPage();
	registrationPage.open();

	it('should have proper breadcrumb', function() {
	});

	it('should show error no empty form fields', function() {
		validateShowErrorsOnEmptyForm();
	});

	it('should show error on invalid email', function() {

	});

	it('should show error on invalid phone number', function() {

	});
	describe('when password is passed in', function() {
		it('should show error on to short password', function() {

		});

		it('should show error on password missmatch', function() {

		});

		it('should show alert on week passwords ', function() {

		});

	});

	describe('when all form values are correct', function() {
		it('should show confirmation tab', function() {

		});

		it('should show error tab on when user already exists', function() {

		});

	});

	var validateShowErrorsOnEmptyForm = function() {
		registrationPage.clickOnSubmit().then(function() {
			expect(registrationPage.hasEmptyFirstLastName()).toBeTruthy();
			expect(registrationPage.hasEmptyHobby()).toBeTruthy();
			expect(registrationPage.hasEmptyPhoneNumber()).toBeTruthy();
			expect(registrationPage.hasEmptyUsername()).toBeTruthy();
			expect(registrationPage.hasEmptyEmail()).toBeTruthy();
			expect(registrationPage.hasEmptyPassword()).toBeTruthy();
			expect(registrationPage.hasEmptyConfirmPassword()).toBeTruthy();
		});
	}

})
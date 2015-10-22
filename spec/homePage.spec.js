'use strict';

var HomePage = require('./homePage.js');

describe('ToolsQA homepage', function() {
	var data = browser.params.homePage;
	var homePage = new HomePage();
	var BREADCRUMB = data.breadcrumb;
	var TITLE = data.title;

	homePage.open();

	it('should have breadcrumb single breadcrumb', function() {
		var breadcrumbText = homePage.getBreadcrumbText();
		expect(breadcrumbText).toEqual(BREADCRUMB);
	});

	it('should have title', function() {
		var homePageHeader = homePage.getHeader();
		expect(homePageHeader).toEqual(TITLE);

	});

	it('should have three navigation elements on', function() {
		validateNavigationElements();
	});

	it('should have lower five tab views', function() {
		validateTabViews();
	});

	// navigation section

	var validateNavigationElements = function() {
		var navigationElements = homePage.getNavigationElementsHeaderAndDescription();
		checkLength(navigationElements);
		checkContent(navigationElements);
	}

	var checkLength = function(toCheck) {
		expect(toCheck.length).toEqual(data.navigationElementsCount);
	}

	var checkContent = function(toCheck) {
		var navigationSpec = data.navigationElements;
		toCheck.forEach(function(element, i) {
			expect(element.header).toEqual(navigationSpec[i].header);
			expect(element.description).toEqual(navigationSpec[i].description);
		});
	}

	// tabs section

	var validateTabViews = function() {
		var tabs = data.tabs;
		homePage.getLowerTabs().then(function(tabs) {
			for (var i = 0; i < tabs.length; i++) {
				tabs[i].click().then(function() {
					expect(homePage.isTabVisibleAt(i)).toBe(true);
					expect(homePage.getTabHeaderAt(i)).toEqual(tabs[i].header);
					expect(hoemPage.getDescriptionAt(i)).toEqual(tabs[i].description);
				});
			}
		});
	}
});

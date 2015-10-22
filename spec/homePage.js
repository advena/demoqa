'use strict';

var URL = browser.params.url;

var headerByXpath = element(by.xpath('//*[@id="post-9"]/header/h1'));
var breadcrumbByXpath = element(by.xpath('//*[@id="breadcrumbs"]/li/span'));
var navigationEntriesByXpath = element(by.xpath('//*[@id="post-9"]/div'));
var lowerTabsByCss = element.all(by.css('.ui-state-default li'));
	
var HomePage = function(){
	
};

HomePage.prototype = {
		
	open: function() {
		browser.ignoreSynchronization = true;
		browser.get(URL);
	},

	getBreadcrumbText: function() {
		return breadcrumbByXpath.getText();
	},
	
	getHeader: function() {
		return headerByXpath.getText();
	},
	
	getNavigationElementsHeaderAndDescription : function() {
		var elements = [];
		for (var i = 1; i < 4; i++) {
			elements.push({
				header: element(by.xpath('//*[@id="post-9"]/div/div[' + i + ']/h5')).getText(),
				description: element(by.xpath('//*[@id="post-9"]/div/div[' + i + ']/div/p[2]')).getText()
			});
		}
		return elements;
	},
	
	getLowerTabs: function() {
		return lowerTabsByCss.map(function(tab){
			return tab;
		});
	},
	
	isTabVisibleAt: function(index) {
		return element(by.id('tabs-' + index)).isPresent();
	},
	
	getTabHeaderAt: function(index) {
		return element(by.xpath('//*[@id="tabs-' + index + '"]/b')).getText();
	},
	
	getDescriptionAt: function(index) {
		return element(by.xpath('//*[@id="tabs-' + index + '"]/p[2]/text()')).getText();
	}
}

module.exports = HomePage;
describe('cafyne loginTest', function() {
	
	beforeEach(function (){
		browser.get('http://dev.cafyne.net/');
	});
	
  var Login_Page = require('../Pages/loginPage.js');
  var data=require('../conf/testdata.json');
  it('Should login in POM', function(){
	  
	  Login_Page.enterUserName(data.UserName);
	  Login_Page.enterPassword(data.Password);
	  Login_Page.clickLoginBtn();
	  
	  expect(browser.getCurrentUrl()).toEqual('http://dev.cafyne.net/#/listen');
  });
 
});
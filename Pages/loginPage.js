var Login_Page = function (){
	
	this.enterUserName = function(value){
		element(by.model('username')).sendKeys(value);
	};
	
	this.enterPassword = function(Password){
		element (by.model('userPassword')).sendKeys(Password);
	};
	
	this.clickLoginBtn = function (){
		element (by.buttonText('Login')).click();
	};
	
};
module.exports = new Login_Page();
describe('cafyne loginTest', function() {
	
	beforeEach(function (){
		browser.get('http://dev.cafyne.net/');
	});
	
	
  it('should login with valid credentials', function() {   
	
    element(by.model('username')).sendKeys('admin@cafyne.com');
	element (by.model('userPassword')).sendKeys('cafyne_admin');
	element (by.buttonText('Login')).click();
	
	expect(browser.getCurrentUrl()).toEqual('http://dev.cafyne.net/#/listen');
  });

  
 
});
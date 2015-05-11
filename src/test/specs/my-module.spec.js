describe('app.my-module', function() {
	var controller;
	
	beforeEach(function() {
		
		angular.mock.module('app');

    inject(function($controller) {
      controller = $controller('Index');
    });

  });

	describe('My module controller', function() {
		
		it('deve ter um controller definido', function () {
      should.exist(controller);
    });
		
	});

});
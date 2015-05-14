describe('app.my-module', function() {
	var controller;
	
	beforeEach(angular.mock.module('app'));
	
	beforeEach(inject(function ($controller) {
    controller = $controller('Index');
  }));

	it('deve ter um controller definido', function () {
		should.exist(controller);
  });

});
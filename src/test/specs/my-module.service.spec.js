describe('my-module.service', function() {
  var httpBackend;
  var service;
  
	beforeEach(function() {
		
		angular.mock.module('app');
    
    inject(function($httpBackend, myModuleService) {
	    httpBackend = $httpBackend;
      service = myModuleService;
	  });
		
	});
  
  afterEach(function() {
    // Verifica se todas as chamadas foram feitas para dar 'flush'
    httpBackend.verifyNoOutstandingExpectation();
    
    // Verifica se não existe solicitacões pendentes que precisam dar 'flush()'
     httpBackend.verifyNoOutstandingRequest();
   });
  
  it('deve retornar uma reclamação', function (done) {
		httpBackend.when('GET', 'http://www.cidadereclama.com.br/api/reclamacoes.json/288').respond({ Id: 299 });
   
    service.obterPorId(288).then(function(response) {
      response.data.Id.should.equal(299);
      done();
    });
    
    httpBackend.flush();
  });

});
describe('Calculadora', function() {
	
  describe('Soma', function() {
	  
  	it('deve retornar 5 ao somar os números 2 e 3', function() {
  	
      (2 + 3).should.equal(5);
      
    });
    
    it('deve retornar 4 ao somar os números 2 e 2', function() {
  	
      (2 + 2).should.equal(4);
      
    });
	
  });
  
});
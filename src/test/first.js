describe('Calculadora', function() {
	
  describe('Soma', function() {
	  
  	it('deve retornar 5 ao somar os números 2 e 3', function() {
  	
      expect(2 + 3).to.equal(5);
      
    });
    
    it('deve retornar 4 ao somar os números 2 e 2', function() {
  	
      expect(2 + 2).to.equal(4);
      
    });
	
  });
  
});
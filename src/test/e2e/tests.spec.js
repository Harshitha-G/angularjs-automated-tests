describe('Página inicial', function() {
  it('deve achar o menu', function() {
    browser.get('index.html');
    
    var el = element(by.id('menu'));
    
    expect(el.isPresent()).toBe(true);
  });
});

describe('Navegação', function(done) {
  it('deve entrar na página de Filtros', function() {
    browser.get('index.html');
    
    var elMenu = element.all(by.id('menu a')).get(1);
    
    elMenu.click();
    
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/src/#/filter.html');
    
  });
});
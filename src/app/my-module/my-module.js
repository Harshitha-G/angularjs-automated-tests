(function () {
  'use strict';
  
  angular
    .module('app.my-module')
    .controller('Index', Index)
    .controller('Filter', Filter);

  function Index(myModuleService) {
    var vm = this;
    
    vm.reclamacao = {};
    
    myModuleService.obterPorId(299).then(function(response) {
      vm.reclamacao = response.data;
    });
  }
  
  function Filter() {
      var vm = this;
    
      vm.nomes = [
      'Zé',
      'Victor Miguez',
      'Jô',
      'Gabriel Ribeiro'
    ]
  }

}());

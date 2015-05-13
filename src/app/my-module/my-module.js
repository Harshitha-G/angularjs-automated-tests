(function () {
  'use strict';
  
  angular
    .module('app.my-module')
    .controller('Index', Index)
    .controller('Filter', Filter)
    .controller('Promise', Promise);

  function Index() {
    var vm = this;
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
  
  function Promise(myModuleService) {
    var vm = this;
    
    myModuleService.obterPorId(299).then(function(response) {
      vm.reclamacao = response.data;
    });
  }

}());

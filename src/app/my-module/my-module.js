(function () {
  'use strict';
  
  angular
    .module('app.my-module')
    .controller('Index', Index)
    .controller('Filter', Filter);

  function Index(myModuleService) {
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

}());

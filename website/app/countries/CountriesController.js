(function () {
    'use strict';

    var controllerId = 'CountriesController';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', '$routeParams', 'countriesService', CountriesController]);

    function CountriesController($scope, $routeParams, countriesService) {
        var vm = this;
        vm.country = $routeParams.country;

        vm.activate = activate;
        vm.title = 'CountriesController';
        vm.countries = countriesService.getData();
        function activate() { }
    }
})();

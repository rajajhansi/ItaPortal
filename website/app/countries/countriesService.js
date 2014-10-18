(function () {
    'use strict';

    angular
        .module('mainApp')
        .service('countriesService', countriesService);

    countriesService.$inject = ['$http'];

    function countriesService($http) {
        this.getData = getData;

        var countries = [
            { 'name': 'United States' },
            { 'name': 'Canada' },
            { 'name': 'Singapore' },
            { 'name': 'Malaysia' },
            { 'name': 'South Africa' },
            { 'name': 'England'}
        ];
        function getData() {
            return countries;
        }
    }
})();
(function () {
    'use strict';

    var controllerId = 'SideNavBarController';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', '$routeParams', '$location', SideNavBarController]);

    function SideNavBarController($scope, $routeParams, $location) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'SideNavBarController';
        vm.menuItems = [
            { url: '/', icon: 'icon-home', tamilText: 'முகப்பு', text: 'Home' },
            { url: '/aboutus', icon: 'icon-info', tamilText: 'எங்களைப் பற்றி', text: 'About Us' },
            { url: '/board', icon: 'icon-user-3', tamilText: 'நிர்வாகம்', text: 'Board' },         
            { url: '/registration', icon: 'icon-pencil', tamilText: 'பதிவு', text: 'Registration' },
            { url: '/countries', icon: 'icon-location', tamilText: 'நாடுகள்', text: 'Countries' },
            { url: '/contacts', icon: 'icon-mail', tamilText: 'தொடர்பு கொள்ள', text: 'Contact Us' }          
        ];
        vm.getClass = function (path) {            
            var currentPath = $location.path().substr(0, path.length);
            if (currentPath == path) {
                if ($location.path().substr(0).length > 1 && path.length == 1)
                    return "";
                else {
                    return "stick active";
                }
            } else {
                return "";
            }
        }
        function activate() { }
    }
})();

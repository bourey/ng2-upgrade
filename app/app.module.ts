// ng1/2 hybrid

export const Ng2RouteModule = angular.module('Ng2RouteModule', []);

/** @ngInject */
function configRoutes($routeProvider: angular.route.IRouteProvider) {
  // everything here is angular 2
  $routeProvider.when('/artists/:t', {template : '<module-root></module-root>'});
};
Ng2RouteModule.config(configRoutes);


/**
 * Root ng1 module for our application. This is the app that will be bootstrapped.
 */
export const galleryApp = angular.module('galleryApp', [
    'ngRoute',
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'ngMdIcons',
    Ng2RouteModule.name
]);

Ng2RouteModule.config(configRoutes);

galleryApp.config(['$routeProvider', function($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/', { templateUrl: '/app/welcome.html' });
}]);

galleryApp.run(function($rootScope: ng.IRootScopeService) {
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope['loading'] = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope['loading'] = false;
    });
});

galleryApp.component(
    'rootCmp',
    {template : '<div class="ng-view"></div>', controllerAs : 'ctrl'});

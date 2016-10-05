// ng1/2 hybrid
import { Ng2RouteModule } from './ng2.routes';

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

/** @ngInject */
function configRoutes($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/', { templateUrl: '/app/welcome.html' });
};
galleryApp.config(configRoutes);

/** @ngInject */
function configLoading($rootScope: ng.IRootScopeService) {
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope['loading'] = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope['loading'] = false;
    });
};
galleryApp.run(configLoading);

/** Component containing the ng1-router-controller ng-view */
galleryApp.component('galleryApp', {
    template : '<div class="ng-view"></div>',
    controllerAs : 'ctrl'
});

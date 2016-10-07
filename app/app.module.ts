// ng1/2 hybrid
import { Ng2RouteModule } from './ng2.routes';
import { ArtistServiceModule } from './services/artist';
import { LoadingModule } from './loading.module';

/**
 * Root ng1 module for our application. This is the app that will be bootstrapped.
 */
export const galleryApp = angular.module('galleryApp', [
    'ngRoute',
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'ngMdIcons',
    ArtistServiceModule.name,
    LoadingModule.name,
    Ng2RouteModule.name,
]);

/** @ngInject */
function configRoutes($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/', { templateUrl: '/app/welcome.html' });
};
galleryApp.config(configRoutes);

/** Component containing the ng1-router-controller ng-view */
galleryApp.component('galleryApp', {
    template : '<div class="ng-view"></div>',
    controllerAs : 'ctrl'
});

galleryApp.component('broken', {
    template: 'Hello?'
});

// ng1/2 hybrid
import { Ng2RouteModule } from './ng2.routes';
import { ArtistServiceModule } from './common/artist/artist';
import { LoadingModule } from './loading.module';
import { artistModule } from './artist1/artist.module';
import { paintingModule } from './painting/painting.module';

/**
 * Root ng1 module for our application. This is the app that will be bootstrapped.
 */
export const galleryApp = angular.module('galleryApp', [
    'ngRoute',
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'ngMdIcons',
    artistModule.name,
    paintingModule.name,
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

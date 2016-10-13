import { ArtistDetailComponent, resolveArtist } from './artist-detail.component';
import { paintingGridModule } from '../common/painting/painting-grid.component';

// Angular 1 module for the /artists sub-directory
export const artistModule = angular.module('artistListModule', [
    'ngRoute',
    paintingGridModule.name,
]);

/** @ngInject */
let configRoutes = function($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/artists', {
        templateUrl: '/app/artist1/artist-list.component.html'
    }).when('/artists/:artist', {
        controller: ArtistDetailComponent,
        controllerAs: 'ctrl',
        resolve: { artist: resolveArtist },
        templateUrl: '/app/artist1/artist-detail.component.html'
    });
};
artistModule.config(configRoutes);

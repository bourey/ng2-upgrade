import { ArtistDetailComponent, resolveArtist } from './artist_detail.component';
import { paintingGridModule } from '../common/painting/painting_grid.component';

// Angular 1 module for the /artists sub-directory
export const artistModule = angular.module('artistListModule', [
    'ngRoute',
    paintingGridModule.name,
]);

/** @ngInject */
let configRoutes = function($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/artists', {
        templateUrl: '/app/artist1/artist_list.component.html'
    }).when('/artists/:artist', {
        controller: ArtistDetailComponent,
        controllerAs: 'ctrl',
        resolve: { artist: resolveArtist },
        templateUrl: '/app/artist1/artist_detail.component.html'
    });
};
artistModule.config(configRoutes);

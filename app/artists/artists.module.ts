import { Component } from '@angular/core';
//import {ArtistComponentModule} from './artist.component';

@Component({
  selector: 'artist',
  template : `
    <h1>Degas</h1>
  `
})
export class ArtistCmp {
}

export const ARTIST_ROUTES = [ {
  path : 'artists',
  children : [
    {path : 'degas', component : ArtistCmp},
  ]
} ];

export const ArtistsModule = angular.module('ArtistsModule', []);

/** @ngInject */
function configRoutes($routeProvider: angular.route.IRouteProvider) {
  // everything here is angular 2
  $routeProvider.when('/artists/:t', {template : '<module-root></module-root>'});
};
ArtistsModule.config(configRoutes);


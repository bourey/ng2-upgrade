import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { adapter } from './upgrade';
import {ArtistsComponentModule} from './artists/artists.component';

@NgModule({
  imports: [BrowserModule]
})
class AppModule {}

let galleryApp = angular.module('galleryApp', [
    'ngRoute',
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'ngMdIcons',
    ArtistsComponentModule.name
]);

galleryApp.config(function($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/', { templateUrl: '/app/welcome.html' });
});

galleryApp.run(function($rootScope: ng.IRootScopeService) {
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope['loading'] = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope['loading'] = false;
    });
});

adapter.bootstrap(document.body, ['galleryApp']);

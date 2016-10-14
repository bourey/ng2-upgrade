// angular2 imports
import {NgModule, Component} from '@angular/core';
import {Router, RouterModule, UrlHandlingStrategy} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeAdapter} from '@angular/upgrade';
import { ArtistsModule } from './artist2/artist.module'

// modules

// a placeholder component that acts as a root component for angular 2 modules
@Component({selector : 'ng2-router-root', template: `<router-outlet></router-outlet>`})
export class Ng2RouterRoot {}

export function createAngular1RootModule(adapter: UpgradeAdapter, moduleNames: string[]) {
  const RootModule = angular.module('rootModule', moduleNames);

  RootModule.component('rootCmp', {template : '<div class="ng-view"></div>'});
  RootModule.directive('ng2RouterRoot', <any>adapter.downgradeNg2Component(Ng2RouterRoot));
  RootModule.config(($routeProvider: angular.route.IRouteProvider) => {

    // telling the Angular 1 router to render the placeholder
    $routeProvider
      .otherwise({template : '<ng2-router-root></ng2-router-root>', reloadOnSearch: false});
  });

  return RootModule;
};

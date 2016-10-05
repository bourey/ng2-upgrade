// ng1/2 hybrid
import {
  HashLocationStrategy,
  Location,
  LocationStrategy
} from '@angular/common';
import {
  Component,
  Inject,
  Injector,
  SkipSelf,
  NgModule,
  NgZone,
  NgModuleFactoryLoader,
  Compiler
} from '@angular/core';
import {
  Route,
  Router,
  RouterOutletMap,
  UrlSerializer,
  UrlTree,
  RouterModule
} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeAdapter} from '@angular/upgrade';
import {FakeRootCmp, UpgradeRouter, configureModuleRoot, ModuleRootCmp} from './upgrade/router_upgrade';
import {ARTIST_ROUTES, ArtistsModule, ArtistCmp} from './artists/artists.module';

export const galleryApp = angular.module('galleryApp', [
    'ngRoute',
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    'ngMdIcons',
    ArtistsModule.name
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

galleryApp.component(
    'rootCmp',
    {template : '<div class="ng-view"></div>', controllerAs : 'ctrl'});


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ARTIST_ROUTES, {useHash: true})],
  declarations: [ArtistCmp, ModuleRootCmp],
  providers: [
    {
      provide : Router,
      useFactory : createRouter,
      deps : [
        UrlSerializer, RouterOutletMap, Location, Injector, NgZone, NgModuleFactoryLoader, Compiler
      ]
    }
  ]
})
class AppModule {}

export function createRouter(urlSerializer: UrlSerializer,
  outletMap: RouterOutletMap,
  location: Location,
  injector: Injector,
  zone: NgZone,
  loader: NgModuleFactoryLoader,
  compiler: Compiler) {

  return zone.run(() => {
    const r =
      new UpgradeRouter(FakeRootCmp, urlSerializer, outletMap,
        location, injector, loader, compiler, ARTIST_ROUTES, (url: any) => url.startsWith("/artists"));
    setTimeout(() => {
      console.log("set up location listener");
      (<any>r).setUpLocationChangeListener();
    }, 0);

    return r;
  });
}

export const adapter = new UpgradeAdapter(AppModule);

console.log("set up module root");
configureModuleRoot(adapter, ArtistsModule);

export const bootstrap = (el: any) => {
  const ref = adapter.bootstrap(el, [ 'galleryApp' ]);
  setTimeout(() => ref.ng2Injector.get(Router), 0);
};

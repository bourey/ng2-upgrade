// ng1/2 hybrid
import { Location } from '@angular/common';
import { Compiler, Injector, NgModule, NgZone, NgModuleFactoryLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, RouterOutletMap, UrlSerializer } from '@angular/router';
import { NG2_ROUTES, isNg2Route } from './ng2.routes';
import { FakeRootCmp, UpgradeRouter, ModuleRootCmp } from './upgrade/router_upgrade';
import { ArtistsComponentModule } from './artists/artists.module';

function createRouter(urlSerializer: UrlSerializer, outletMap: RouterOutletMap,
    location: Location, injector: Injector, zone: NgZone,
    loader: NgModuleFactoryLoader, compiler: Compiler) {

  return zone.run(() => {
    const r = new UpgradeRouter(FakeRootCmp, urlSerializer, outletMap,
        location, injector, loader, compiler, NG2_ROUTES, isNg2Route);
    setTimeout(() => {
      (<any>r).setUpLocationChangeListener();
    }, 0);

    return r;
  });
}

/**
 * Root module for angular 2 for the app.
 */
@NgModule({
  imports: [ArtistsComponentModule, BrowserModule, RouterModule.forRoot(NG2_ROUTES, {useHash: true})],
  declarations: [ModuleRootCmp],
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
export class AppModule {}

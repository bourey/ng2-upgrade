// ng1/2 hybrid
import { Location } from '@angular/common';
import { Injector, NgModule, NgZone, NgModuleFactoryLoader, Compiler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterOutletMap, UrlSerializer, RouterModule } from '@angular/router';
import { UpgradeAdapter } from '@angular/upgrade';
import { NG2_ROUTES, Ng2RouteModule, isNg2Route } from './ng2.routes';
import { FakeRootCmp, UpgradeRouter, ModuleRootCmp, configureModuleRoot } from './upgrade/router_upgrade';

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
        location, injector, loader, compiler, NG2_ROUTES, isNg2Route);
    setTimeout(() => {
      console.log("set up location listener");
      (<any>r).setUpLocationChangeListener();
    }, 0);

    return r;
  });
}


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(NG2_ROUTES, {useHash: true})],
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

export const adapter = new UpgradeAdapter(AppModule);

console.log("set up module root");
configureModuleRoot(adapter, Ng2RouteModule);

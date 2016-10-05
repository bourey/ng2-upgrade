// ng1/2 hybrid
import { Location } from '@angular/common';
import { Injector, NgModule, NgZone, NgModuleFactoryLoader, Compiler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterOutletMap, UrlSerializer, RouterModule } from '@angular/router';
import { UpgradeAdapter } from '@angular/upgrade';
import { ArtistsComponentModule } from './artists/artists.module';
import { Ng2RouteModule } from './app.module';
import { FakeRootCmp, UpgradeRouter, ModuleRootCmp, configureModuleRoot } from './upgrade/router_upgrade';

let NG2_ROUTES = [
    { path: 'artists', loadChildren: () => ArtistsComponentModule }
];

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
        location, injector, loader, compiler, NG2_ROUTES, (url: any) => url.startsWith("/artists"));
    setTimeout(() => {
      console.log("set up location listener");
      (<any>r).setUpLocationChangeListener();
    }, 0);

    return r;
  });
}


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

export const adapter = new UpgradeAdapter(AppModule);

console.log("set up module root");
configureModuleRoot(adapter, Ng2RouteModule);

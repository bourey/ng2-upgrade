/**
 * Everything from this file will be moved into the router package.
 */

import {
  HashLocationStrategy,
  Location,
  LocationStrategy
} from '@angular/common';
import {
  Component,
  Inject,
  Injector,
  NgZone,
  SkipSelf,
  Compiler,
  NgModuleFactoryLoader,
  Type
} from '@angular/core';
import {
  Route,
  Router,
  RouterOutletMap,
  UrlSerializer,
  UrlTree,
  Routes
} from '@angular/router';
import {UpgradeAdapter} from '@angular/upgrade';

// we need an extension point in the router to do it
class FilteringLocation implements Location {
  constructor(private delegate: Location, private matches: Function){};

  path(includeHash?: boolean): string {
    return this.delegate.path(includeHash);
  }

  isCurrentPathEqualTo(path: string, query?: string): boolean {
    return this.delegate.isCurrentPathEqualTo(path, query);
  }

  normalize(url: string): string { return this.delegate.normalize(url); }

  prepareExternalUrl(url: string): string {
    return this.delegate.prepareExternalUrl(url);
  }

  go(path: string, query?: string): void { this.delegate.go(path, query); }

  replaceState(path: string, query?: string): void {
    this.delegate.replaceState(path, query);
  }

  forward(): void { this.delegate.forward(); }

  back(): void { this.delegate.back(); }

  subscribe(onNext: (value: any) => void, onThrow?: (exception: any) => void,
            onReturn?: () => void): Object {
    return this.delegate.subscribe((next => {
                                     console.log("navigation!", next['url']);
                                     setTimeout(() => {
                                       if (this.matches(next['url'])) {
                                         console.log("navigation matches!",
                                                     next['url']);
                                         onNext(next);
                                       }
                                     }, 0);
                                   }),
                                   onThrow, onReturn);
  }
}

export class UpgradeRouter extends Router {
  public loc: Location;
  public rootCmp: any;
  public storedState: any;

  constructor(rootComponentType: Type<any>, urlSerializer: UrlSerializer,
      outletMap: RouterOutletMap, location: Location, injector: Injector,
      loader: NgModuleFactoryLoader, compiler: Compiler, config: Routes, private matches: Function) {

    super(
      rootComponentType,
      urlSerializer,
      outletMap,
      new FilteringLocation(location, matches),
      injector,
      loader,
      compiler,
      config
    );
    this.rootCmp = rootComponentType;

    this.loc = location;
    this.storedState = (<any>this).currentRouterState;
  }

  navigate(commands: any[], extras: any = {}): Promise<boolean> {
    const r = this.createUrlTree(commands, extras);

    if (this.matches(r.toString())) {
      return this.navigate(commands, extras);
    }
    else {
      (<any>this).currentRouterState = this.storedState;
      this.loc.go(r.toString());
      return Promise.resolve(true);
    }
  }

  navigateByUrl(url: string|UrlTree): Promise<boolean> {
    if (this.matches(url.toString())) {
      return this.navigateByUrl(url);
    }
    else {
      (<any>this).currentRouterState = this.storedState;
      this.loc.go(url.toString());
      return Promise.resolve(true)
    }
  }
}

@Component({template : ''})
export class FakeRootCmp {
}

@Component(
    {selector : 'module-root', template : `<router-outlet></router-outlet>`})
export class ModuleRootCmp {
}

export function configureModuleRoot(adapter: UpgradeAdapter, module: angular.IModule) {
  module.directive('moduleRoot', <any>adapter.downgradeNg2Component(ModuleRootCmp));
}

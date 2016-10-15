// ng1/2 hybrid
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, UrlHandlingStrategy } from '@angular/router';
import { UpgradeAdapter } from '@angular/upgrade';
import { MdCoreModule } from '@angular2-material/core';
import { galleryApp } from './app.module';
import { ArtistsModule } from './artist2/artist.module';
import { ArtistService2Module } from './common/artist/artist.service';
import { PaintingService2Module } from './common/painting/painting.service';
import { Ng2RouterRoot, createAngular1RootModule} from './upgrade_utils';

// This URL handling strategy is custom and application-specific.
// Using it we can tell the Angular 2 router to handle only URL starting with settings.
class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: any) { return url.toString().startsWith('/artists'); }
  extract(url: any) { return url; }
  merge(url: any, whole: any) { return url; }
}

/**
 * Root module for angular 2 for the app.
 */
@NgModule({
  imports: [ArtistsModule, ArtistService2Module, BrowserModule, MdCoreModule,
    RouterModule.forRoot([], {useHash: true})],
  declarations: [Ng2RouterRoot],
  providers: [
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ]
})
export class AppModule {}

const adapter = new UpgradeAdapter(AppModule);
ArtistService2Module.setAdapter(adapter);
PaintingService2Module.setAdapter(adapter);

let rootModule = createAngular1RootModule(adapter, ['ngRoute', galleryApp.name]);

export function bootstrap(el: Element) {
  const ref = adapter.bootstrap(el, [rootModule.name]);

  // this is required because of a bug in NgUpgrade
  setTimeout(() => {
    ref.ng2Injector.get(Router).initialNavigation();
  }, 0);
}

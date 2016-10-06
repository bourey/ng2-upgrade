import { Inject, Injectable, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Artist, ArtistService } from '../services/artist';
import { ArtistCmp } from './artist.component';

@Injectable()
class ArtistResolver implements Resolve<Artist> {
    constructor(@Inject('artistService') private artistService: ArtistService) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Artist> {
      return this.artistService.getArtist(route.params['artistId']);
    }
}

let ROUTES = [{
  path : ':artistId', component: ArtistCmp, resolve: {
    artist: ArtistResolver
  }
}];


@NgModule({
  providers: [ArtistResolver],
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [ArtistCmp]
})
export default class ArtistsComponentModule { }

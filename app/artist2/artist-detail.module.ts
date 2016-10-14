import { Inject, Injectable, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Artist, ArtistService } from '../common/artist/artist';
import { ArtistDetailCmp } from './artist-detail.component';

@Injectable()
class ArtistResolver implements Resolve<Artist> {
    constructor(@Inject('artistService') private artistService: ArtistService) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Artist> {
      return this.artistService.getArtist(route.params['artistId']);
    }
}

let ROUTES = [{
  path : '', component: ArtistDetailCmp, resolve: {
    artist: ArtistResolver
  }
}];


@NgModule({
  providers: [ArtistResolver],
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [ArtistDetailCmp]
})
export default class ArtistsComponentModule { }

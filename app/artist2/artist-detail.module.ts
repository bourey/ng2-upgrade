import { Inject, Injectable, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Artist, ArtistService } from '../services/artist';
import { ArtistDetailCmp } from './artist-detail.component';
import { PaintingGridModule } from '../painting/painting-grid2';

@Injectable()
class ArtistResolver implements Resolve<Artist> {
    constructor(@Inject('artistService') private artistService: ArtistService) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Artist> {
      return this.artistService.getArtist(route.params['artistId']);
    }
}

let ROUTES = [{
  path : ':artistId', component: ArtistDetailCmp, resolve: {
    artist: ArtistResolver
  }
}];


@NgModule({
  providers: [ArtistResolver],
  imports: [PaintingGridModule, RouterModule.forChild(ROUTES)],
  declarations: [ArtistDetailCmp]
})
export default class ArtistsComponentModule { }

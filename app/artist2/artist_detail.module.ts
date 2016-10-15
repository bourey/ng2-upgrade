import { Inject, Injectable, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Artist } from '../common/artist/artist';
import { ArtistService } from '../common/artist/artist.service';
import { Painting } from '../common/painting/painting';
import { PaintingService } from '../common/painting/painting.service';
import { ArtistDetailCmp } from './artist_detail.component';

@Injectable()
class ArtistResolver implements Resolve<Artist> {
    constructor(@Inject('artistService') private artistService: ArtistService) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Artist> {
      return this.artistService.getArtist(route.params['artistId']);
    }
}

@Injectable()
class PaintingsResolver implements Resolve<Painting[]> {
    constructor(@Inject('paintingService') private paintingService: PaintingService) {}

    resolve(route: ActivatedRouteSnapshot): Promise<Painting[]> {
      return this.paintingService.getPaintingsForArtist(route.params['artistId']);
    }
}

let ROUTES = [{
  path : '', component: ArtistDetailCmp, resolve: {
    artist: ArtistResolver,
    paintings: PaintingsResolver
  }
}];


@NgModule({
  providers: [ArtistResolver, PaintingsResolver],
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [ArtistDetailCmp]
})
export default class ArtistsComponentModule { }

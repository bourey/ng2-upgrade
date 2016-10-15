import { Inject, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resolve, RouterModule } from '@angular/router';

import { Artist } from '../common/artist/artist';
import { ArtistService } from '../common/artist/artist.service';
import { ArtistListCmp } from './artist_list.component';


@Injectable()
class ArtistsResolver implements Resolve<Artist[]> {
    constructor(@Inject('artistService') private artistService: ArtistService) {}

    resolve(): Promise<Artist[]> {
      return this.artistService.getArtists();
    }
}

let ROUTES = [{
  path : '', component: ArtistListCmp, resolve: {
    artists: ArtistsResolver
  }
}];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [ArtistListCmp],
  providers: [ArtistsResolver],
})
export default class ArtistsComponentModule { }

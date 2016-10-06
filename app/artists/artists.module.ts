import { Component, Inject, Injectable, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Resolve, ActivatedRoute } from '@angular/router';
import { Artist, ArtistService } from '../services/artist';

@Component({
  selector: 'artist',
  template : `
    <h1>Degas</h1>
    <p>{{artist.name}}</p>
  `
})
export class ArtistCmp {
  artist: Artist;
  constructor(private route: ActivatedRoute) {
    this.artist = route.snapshot.data['artist'];
  }
}

@Injectable()
class ArtistResolver implements Resolve<Artist> {
    constructor(@Inject('artistService') private artistService: ArtistService) {}
   resolve(): Promise<Artist> {
      return this.artistService.getArtist('degas');
    }
}

let ROUTES = [{
  path : 'degas', component: ArtistCmp, resolve: {
    artist: ArtistResolver
  }
}];


@NgModule({
  providers: [ArtistResolver],
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [ArtistCmp]
})
export default class ArtistsComponentModule { }

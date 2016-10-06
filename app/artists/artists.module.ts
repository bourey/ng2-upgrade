import { Component, Inject, Injectable, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Artist, ArtistService } from '../services/artist';

@Component({
  selector: 'artist',
  templateUrl : 'app/artists/artist.component.html'
})
export class ArtistCmp implements OnInit {
  artist: Artist;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.artist = this.route.snapshot.data['artist'];
  }
}

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

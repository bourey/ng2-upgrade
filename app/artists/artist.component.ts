import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Artist } from '../services/artist';

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

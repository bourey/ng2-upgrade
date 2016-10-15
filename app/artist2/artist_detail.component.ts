import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Artist } from '../common/artist/artist';
import { Painting } from '../common/painting/painting';

@Component({
  selector: 'artist',
  templateUrl : 'app/artist2/artist_detail.component.html'
})
export class ArtistDetailCmp implements OnInit {
  artist: Artist;
  paintings: Painting[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.artist = this.route.snapshot.data['artist'];
    this.paintings = this.route.snapshot.data['paintings'];
    console.log(this.artist, this.paintings);
  }
}

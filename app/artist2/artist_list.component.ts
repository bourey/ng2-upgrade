import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Artist } from '../common/artist/artist';


@Component({
    templateUrl: 'app/artist2/artist_list.component.html'
})
export class ArtistListCmp implements OnInit {
    artists: Artist[];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.artists = this.route.snapshot.data['artists'];
    }

}

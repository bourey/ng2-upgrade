import { Artist } from '../common/artist/artist';
import { ArtistService } from '../common/artist/artist.service';

/** @ngInject */
export function resolveArtist(artistService: ArtistService) {
    return artistService.getArtist('degas');
}

/** @ngInject */
export class ArtistDetailComponent {
    artist: Artist;
    constructor(artist: Artist) {
        this.artist = artist;
    }
}
import { Artist, ArtistService } from '../common/artist/artist';

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
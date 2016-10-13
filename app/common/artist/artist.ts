import { Painting } from '../painting/painting';

let delay = 0;
//let delay = 2000;

export class Artist {
    name: string;
    paintings: Painting[];

    constructor(name: string, paintings: Painting[]) {
        this.name = name;
        this.paintings = paintings;
    }
}

export class ArtistService {
    artists: any;
    $timeout: ng.ITimeoutService;

    constructor($timeout: ng.ITimeoutService) {
        this.$timeout = $timeout;
        this.artists = {
            'degas': new Artist('Edgar Degas', [
                new Painting('La Classe de Danse', '1873–1876', 'ballet.jpg'),
                new Painting('At the Races', '1877-1880', 'races.jpg'),
            ]),
            'renoir': new Artist('Pierre-Auguste Renoir', [
                new Painting('By the Water', '1880', 'water.jpg'),
                new Painting('Still Life: Flowers', '1885', 'flowers.jpg')
            ]),
            'monet': new Artist('Claude Monet', [])
        };
    }

    getArtist(key: string): Promise<Artist> {
        let artist = this.artists[key];
        return new Promise<Artist>(resolve =>
            setTimeout(resolve, delay))
            .then(() => artist);
    }

    favoritePainting() {
        console.log('it worked');
    }
}

export const ArtistServiceModule = angular.module('ArtistServiceModule', []);
ArtistServiceModule.service('artistService', ArtistService);

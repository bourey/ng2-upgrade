import { NgModule } from '@angular/core';
import { UpgradeAdapter } from '@angular/upgrade';

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
                new Painting('1', 'La Classe de Danse', '1873–1876', 'ballet.jpg', '1'),
                new Painting('1', 'At the Races', '1877-1880', 'races.jpg', '1'),
            ]),
            'renoir': new Artist('Pierre-Auguste Renoir', [
                new Painting('1', 'By the Water', '1880', 'water.jpg', '1'),
                new Painting('1', 'Still Life: Flowers', '1885', 'flowers.jpg', '1')
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

@NgModule()
export class ArtistService2Module {
  static setAdapter(adapter: UpgradeAdapter) {
    adapter.upgradeNg1Provider('artistService');
  }
}

import { NgModule } from '@angular/core';
import { UpgradeAdapter } from '@angular/upgrade';

import { Artist } from './artist';

let delay = 0;
//let delay = 2000;


export class ArtistService {
    artists: Artist[] = [
        new Artist('degas', 'Edgar Degas'),
        new Artist('monet', 'Claude Monet'),
        new Artist('renoir', 'Pierre-Auguste Renoir'),
    ];

    constructor(private $timeout: ng.ITimeoutService) { }

    getArtists(): Promise<Artist[]> {
        return new Promise<Artist>(resolve => setTimeout(resolve, delay)).
            then(() => this.artists);
    }

    getArtist(id: string): Promise<Artist> {
        let match = this.artists.find(function(artist: Artist) {
            return artist.id === id;
        });
        return new Promise<Artist>(resolve =>
            setTimeout(resolve, delay))
            .then(() => match);
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

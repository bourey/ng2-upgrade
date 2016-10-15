import { NgModule } from '@angular/core';
import { UpgradeAdapter } from '@angular/upgrade';

import { Painting } from './painting';

export class PaintingService {
    paintings: Painting[] = [
        new Painting('ballet', 'La Classe de Danse', '1873–1876', 'degas'),
        new Painting('races', 'At the Races', '1877-1880', 'degas'),
        new Painting('water', 'By the Water', '1880', 'renoir'),
        new Painting('flowers', 'Still Life: Flowers', '1885', 'renoir'),
    ];

    constructor(private $q: any) { }

    getPainting(id: string): Promise<Painting> {
        let match = this.paintings.find(function(painting: Painting) {
            return painting.id === id;
        });
        return this.$q.when().then(() => match);
    }

    getPaintingsForArtist(artistId: string): Promise<Painting[]> {
        let matches = this.paintings.filter(function(painting: Painting) {
            return painting.artistId === artistId;
        });
        return this.$q.when().then(() => matches);
    }

    getPaintings(): Promise<Painting[]> {
        return this.$q.when().then(() => this.paintings);
    }
}

export const paintingServiceModule = angular.module('paintingServiceModule', []);
paintingServiceModule.service('paintingService', PaintingService);

@NgModule()
export class PaintingService2Module {
  static setAdapter(adapter: UpgradeAdapter) {
    adapter.upgradeNg1Provider('paintingService');
  }
}

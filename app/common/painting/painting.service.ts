import { Painting } from '../painting/painting';

export class PaintingService {
    paintings: Painting[] = [
        new Painting('1', 'La Classe de Danse', '1873–1876', 'ballet.jpg', 'degas'),
        new Painting('2', 'At the Races', '1877-1880', 'races.jpg', 'degas')
    ];

    getPainting(id: string): Painting {
        return this.paintings[0];
    }

    getPaintings(): Painting[] {
        return this.paintings;
    }
}

export const paintingServiceModule = angular.module('paintingServiceModule', []);
paintingServiceModule.service('paintingService', PaintingService);

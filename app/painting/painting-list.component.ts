import { Painting } from '../common/painting/painting';

/** @ngInject */
export class PaintingListCmp {
    paintings: Painting[] = [
        new Painting('1', 'La Classe de Danse', '1873–1876', 'ballet.jpg', '1'),
        new Painting('1', 'At the Races', '1877-1880', 'races.jpg', '1'),
    ];
}

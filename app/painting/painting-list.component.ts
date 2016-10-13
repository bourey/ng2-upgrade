import { Painting } from '../common/painting/painting';

/** @ngInject */
export class PaintingListCmp {
    paintings: Painting[] = [
        new Painting('La Classe de Danse', '1873–1876', 'ballet.jpg'),
        new Painting('At the Races', '1877-1880', 'races.jpg'),
    ];
}

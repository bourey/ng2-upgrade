import { Painting } from './services/painting';
import { favoriteModule } from './artists/favorite.component';

class PaintingGridController {
    layout: Painting[][];
    paintings: Painting[];
    $onInit() {
        this.layout = [[], [], []];
        this.paintings.forEach(function(painting, i) {
            this.layout[i % 3].push(painting);
        }, this);
    }
}

export const PaintingGridModule = angular.module('paintingGrid', [favoriteModule.name]);
PaintingGridModule.component('paintingGrid', {
  templateUrl: '/app/painting-grid.component.html',
  controller: PaintingGridController,
  controllerAs: 'gridCtrl',
  bindings: {
    paintings: '<'
  }
});

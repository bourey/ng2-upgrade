import { Painting } from '../painting/painting';

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

export const paintingGridModule = angular.module('paintingGrid', []);
paintingGridModule.component('paintingGrid', {
  templateUrl: '/app/common/painting/painting_grid.component.html',
  controller: PaintingGridController,
  controllerAs: 'gridCtrl',
  bindings: {
    paintings: '<'
  }
});

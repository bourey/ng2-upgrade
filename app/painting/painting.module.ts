import { Painting } from '../common/painting/painting';
import { PaintingService, paintingServiceModule } from '../common/painting/painting.service';
import { PaintingListCmp } from './painting_list.component';
import { paintingGridModule } from '../common/painting/painting_grid.component';
import { PaintingSer}

export const paintingModule = angular.module('paintingModule', [
    'ngRoute',
    paintingGridModule.name,
    paintingServiceModule.name,
]);

/** @ngInject */
let resolvePaintings = function(paintingService: PaintingService): Promise<Painting[]> {
    return paintingService.getPaintings();
};

/** @ngInject */
let resolvePainting = function(paintingService: PaintingService): Promise<Painting> {
    return paintingService.getPainting('?');
};

let configRoutes = function($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/paintings', {
        controller: PaintingListCmp,
        controllerAs: 'ctrl',
        templateUrl: '/app/painting/painting_list.component.html',
        resolve: {
            paintings: resolvePaintings
        }
    }).when('painting/:paintings', {
        controllerAs: 'ctrl',
        templateUrl: '/app/painting/painting_detail.component.html',
        resolve: {
            painting: resolvePainting
        }
    });
};
paintingModule.config(configRoutes);

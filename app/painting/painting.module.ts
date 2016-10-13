import { PaintingListCmp } from './painting-list.component';
import { paintingGridModule } from '../common/painting/painting-grid.component';

export const paintingModule = angular.module('paintingModule', [
    'ngRoute',
    paintingGridModule.name,
]);

let configRoutes = function($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when('/paintings', {
        controller: PaintingListCmp,
        controllerAs: 'ctrl',
        templateUrl: '/app/painting/painting-list.component.html'
    }).when('painting/:paintings', {
        controllerAs: 'ctrl',
        templateUrl: '/app/painting/painting-detail.component.html',
    });
};
paintingModule.config(configRoutes);

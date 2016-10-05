// Note: this file currently contains some annoying duplication.  It
// would certainly be possible to put together a more sophisticated
// implementation that only requires paths to be specified once.

/**
 * Determine if a specified path should be handled by ng2.
 * @return {boolean} true for ng2, false otherwise
 */
export function isNg2Route(url: string) {
    return url.startsWith('/artists');
}

/**
 * The actual Angular 2 route map.
 */
export const NG2_ROUTES = [
    { path: 'artists', loadChildren: 'app/artists/artists.module' }
];

/**
 * Angular 1 module that forwards routes to Angular 2.
 */
export const Ng2RouteModule = angular.module('Ng2RouteModule', []);

/** @ngInject */
function configRoutes($routeProvider: angular.route.IRouteProvider) {
  // everything here is angular 2
  $routeProvider.when('/artists/:t', {template : '<module-root></module-root>'});
};
Ng2RouteModule.config(configRoutes);

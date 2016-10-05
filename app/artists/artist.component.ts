// import {PaintingGridModule} from '../painting-grid.component';
// import {Artist, ArtistService, ArtistServiceModule} from '../services/artist';

// export const ArtistComponentModule = angular.module('ArtistComponentModule', [
//     'ngRoute',
//     ArtistServiceModule.name,
//     PaintingGridModule.name
// ]);

// function sleep(artistService: ArtistService,
//         $route: angular.route.IRouteService): Promise<any> {
//     return artistService.getArtist($route.current.params['artistKey']);
// };

// export class ArtistComponent {
//     artist: Artist;
//     constructor(artist: Artist) {
//         this.artist = artist;
//     }
// }

// ArtistComponentModule.config(function($routeProvider: angular.route.IRouteProvider) {
//     $routeProvider.when('/artists/:artistKey', {
//         controller: ArtistComponent,
//         controllerAs: 'ctrl',
//         templateUrl: '/app/artists/artist.component.html',
//         resolve: {artist: sleep}
//     });
// });

import {ArtistComponentModule} from './artist.component';

export const ArtistsComponentModule = angular.module('ArtistsComponentModule', [
    'ngRoute',
    ArtistComponentModule.name,
]);

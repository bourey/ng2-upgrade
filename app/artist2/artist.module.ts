import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

let ROUTES = [
    { path: 'artists', children: [
        { path: '', loadChildren: 'app/artist2/artist_list.module' },
        { path: ':artistId', loadChildren: 'app/artist2/artist_detail.module' }
    ]}
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
})
export class ArtistsModule {}

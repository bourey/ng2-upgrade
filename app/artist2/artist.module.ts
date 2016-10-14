import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpgradeAdapter } from '@angular/upgrade';

let ROUTES = [
    { path: 'artists', children: [
        { path: '', loadChildren: 'app/artist2/artist-list.module' },
        { path: ':artistId', loadChildren: 'app/artist2/artist-detail.module' }
    ]}
];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
})
export class ArtistsModule {
    static setAdapter(adapter: UpgradeAdapter) {}
}

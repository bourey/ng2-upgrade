import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArtistListCmp } from './artist-list.component';

let ROUTES = [{
  path : '', component: ArtistListCmp
}];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [ArtistListCmp]
})
export default class ArtistsComponentModule { }

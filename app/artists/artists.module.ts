import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'artist',
  template : `
    <h1>Degas</h1>
  `
})
export class ArtistCmp {
}

let ROUTES = [{
  path : 'degas', component: ArtistCmp
}];


@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [ArtistCmp]
})
export class ArtistsComponentModule {}

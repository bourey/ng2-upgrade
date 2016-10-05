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

// @Component({
//   selector: 'artist2',
//   template : `
//     <h1>Degas</h1>
//   `
// })
// export class Artist2Cmp {
// }


// let ROUTES = [{
//   path : 'artists',
//   children : [
//     {path : 'degas', component : Artist2Cmp},
//   ]
// }];


// @NgModule({
//   imports: [RouterModule.forChild(ROUTES)],
//   declarations: [Artist2Cmp]
// })
// export class ArtistsComponentModule {}

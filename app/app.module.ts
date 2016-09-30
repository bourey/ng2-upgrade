import { NgModule, Component }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';

import * as angular from 'angular';
import { UpgradeAdapter } from '@angular/upgrade';

const ROUTES = [
  { path: '', component: AppComponent },
  {
    path: 'artists',
    loadChildren: 'app/artists/impressionists.module'
  }
];

@Component({
  selector: 'my-app2',
  template: `<router-outlet></router-outlet>`
})
class AppCmp { }

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(ROUTES)],
  declarations: [ AppCmp, AppComponent ],
  bootstrap: [ AppCmp ]
})
export class AppModule { }

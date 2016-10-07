import { Router } from '@angular/router';
import { galleryApp } from './app.module';
import { adapter } from './adapter';

let bootstrap = (el: any) => {
  const ref = adapter.bootstrap(el, [ galleryApp.name ]);
  setTimeout(() => ref.ng2Injector.get(Router), 0);
};
bootstrap(document.body);

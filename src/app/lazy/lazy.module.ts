import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';

import { lazyRoutes }     from './lazy.routes';
import { HomeComponent }  from './home';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lazyRoutes)
  ],
  declarations: [
    HomeComponent
  ],
  providers: [

  ],
  entryComponents: [  ]
})
export class LazyModule {
}

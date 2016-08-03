<<<<<<< HEAD
import { TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('About Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [AboutComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('About Works!');
  });

});
=======
// import {
//   async,
//   inject,
//   addProviders
// } from '@angular/core/testing';
//
// import { TestComponentBuilder } from '@angular/compiler/testing';
//
// import { AboutComponent } from './about.component';
//
// describe('About Component', () => {
//   beforeEach(() => {
//     addProviders([]);
//   });
//
//   it('should ...', async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
//     tcb.createAsync(AboutComponent).then((fixture) => {
//       fixture.detectChanges();
//     });
//   })));
//
// });
>>>>>>> Example of lazy loaded module using the router

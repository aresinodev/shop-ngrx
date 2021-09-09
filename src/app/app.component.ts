import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { CartSelectors } from './stores/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items$ = this.store.select(CartSelectors.selectItemsCart);

  constructor(private store: Store) {}
}

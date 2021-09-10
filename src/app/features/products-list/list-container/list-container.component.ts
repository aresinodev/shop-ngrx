import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { ProductsActions } from 'src/app/stores/actions';
import { ProductsSelectors } from 'src/app/stores/selectors';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListContainerComponent implements OnInit {
  vm$ = this.store.select(ProductsSelectors.selectProductsListPageViewModel);

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(ProductsActions.enterProductsListPage());
  }

  goToDetail(productId: number): void {
    this.router.navigate([productId]);
  }
}

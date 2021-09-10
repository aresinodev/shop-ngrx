import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() title!: string;
  @Input() txt!: string;
  @Input() price!: string;
  @Input() photoURL!: string;
}

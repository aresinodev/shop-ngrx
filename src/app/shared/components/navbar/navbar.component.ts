import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Input() items!: number | null;

  constructor() {}
}

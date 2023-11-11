import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  template: `
    <div class="border-b-[1px] border-neutral-800 p-5">
      <div class="flex flex-row items-center gap-2">
        <span
          *ngIf="showbackArrow"
          class="material-icons text-white cursor-pointer"
          (click)="goBack()"
          >arrow_back</span
        >
        <h1 class="text-white text-lg font-semibold">{{ title }}</h1>
      </div>
    </div>
  `,
  styles: [],
})
export class HeaderComponent {
  @Input() showbackArrow: boolean = false;
  @Input() title: string = '';

  constructor(private router: Router) {}

  goBack = () => this.router.navigate(['/']);
}

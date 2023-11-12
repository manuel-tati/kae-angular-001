import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      *ngIf="label"
      [disabled]="disabled"
      [ngClass]="{
        'w-full': fullWidth,
        'w-fit': !fullWidth,
        'bg-white text-black border-black': secondary,
        'bg-sky-500 text-white border-sky-500': !secondary,
        'text-xl px-5 py-3': large,
        'text-md px-4 py-2': !large,
        'bg-transparent border-white': outline
      }"
      class="disabled:opacity-70 disabled:cursor-no-allowed rounded-full font-semibold hover:opacity-10"
    >
      {{ label }}
    </button>
  `,
  styles: [],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() fullWidth?: boolean = false;
  @Input() secondary?: boolean;
  @Input() large?: boolean;
  @Input() disabled?: boolean;
  @Input() outline?: boolean = false;

  @Output() formSubmit: EventEmitter<void> = new EventEmitter<void>();

  onSubmit = () => this.formSubmit.emit();
}

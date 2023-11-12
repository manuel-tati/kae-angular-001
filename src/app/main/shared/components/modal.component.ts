import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div
      *ngIf="isOpen"
      class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70"
    >
      <div
        class="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto"
      >
        <div
          class="h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none"
        >
          <h3 class="text-3xl font-semibold text-white">Header Title</h3>
          <button
            class="p-1 ml-auto border-0 text-white hover:opacity-70 transition"
          >
            <p class="material-icons">close</p>
          </button>
        </div>
        <div class="relative p-10 flex-auto">
          <ng-content></ng-content>
        </div>
        <div class="flex flex-col gap-2 p-10">
          <app-button
            (formSubmit)="submit()"
            [disabled]="disabled"
            [label]="actionLabel"
            [fullWidth]="true"
            [large]="true"
          />
          <ng-container *ngIf="footer">
            <ng-container *ngTemplateOutlet="footer"></ng-container>
          </ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Input() footer?: TemplateRef<any>;
  @Input() actionLabel: string = '';
  @Input() disabled?: boolean;

  @Output() formSubmitted: EventEmitter<void> = new EventEmitter<void>();
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  submit = (): void => {
    this.disabled = true;
    this.actionLabel = 'Loading...';
    this.formSubmitted.emit();
  };

  close = () => this.onClose.emit();
}

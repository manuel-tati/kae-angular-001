import { Component } from '@angular/core';

@Component({
  selector: 'siderbar-items',
  template: `
    <div
      class="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:opacity-10 hover:bg-blue-300 cursor-pointer transition"
    >
      <img src="/assets/images/logo.svg" class="h-14 w-14" alt="logo" />
    </div>
    <div class="flex flex-row items-center">
      <a
        href=""
        class="material-icons relative rounded-full h-14 w-14 flex items-center-justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 curs"
      >
        home
      </a>
      <a
        href=""
        class="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-po4"
      >
        <p class="hidden lg:block text-white text-lg">Home</p>
      </a>
    </div>
  `,
  styles: [],
})
export class SiderbarItemsComponent {}

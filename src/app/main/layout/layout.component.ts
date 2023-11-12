import { Component } from '@angular/core';
import { ModelService } from '../shared/services/model.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  constructor(public modalService: ModelService) {}
}

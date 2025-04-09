import { Component } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-steps-form2',
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './steps-form2.component.html',
  styleUrl: './steps-form2.component.css'
})
export class StepsForm2Component {
  active = 2;

  goToStep(step: number) {
    this.active = step;
  }

  get lineWidth() {
    return ((this.active) / 6) * 100 + '%';
  }
}

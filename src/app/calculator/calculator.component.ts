import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  expression = '';
  result: string | number = '';

  append(value: string) {
    this.expression += value;
  }

  clear() {
    this.expression = '';
    this.result = '';
  }

  calculate() {
    try {
      // Basic eval for demonstration; replace with a proper math parser for production
      // eslint-disable-next-line no-eval
      this.result = eval(this.expression);
    } catch {
      this.result = 'Error';
    }
  }
}

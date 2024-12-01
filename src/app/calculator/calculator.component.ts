import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  initialInvest = 0;
  annualInvest = 0;
  expectedReturn = 0;
  duration = 0;


  @Output() submit = new EventEmitter()
  onSubmit($event:any) {
    $event.preventDefault();
    this.submit.emit({initialInvest: this.initialInvest, annualInvest: this.annualInvest, expectedReturn: this.expectedReturn, duration: this.duration});
  }
}

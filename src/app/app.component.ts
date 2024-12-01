import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {InvestmentRusltComponent} from "./investment-ruslt/investment-ruslt.component";
import {calculateInvestmentResults} from "../investment-results";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    CalculatorComponent,
    InvestmentRusltComponent
  ]
})
export class AppComponent {
  calculated: any = []
  onSubmit($event:any) {
  this.calculated = calculateInvestmentResults($event.initialInvest, $event.annualInvest, $event.expectedReturn, $event.duration);
    console.log(this.calculated)
  }
  constructor() {
    console.log(calculateInvestmentResults(1000, 100, 5, 5));
  }
}

import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-investment-ruslt',
  standalone: true,
  imports: [],
  templateUrl: './investment-ruslt.component.html',
  styleUrl: './investment-ruslt.component.css'
})
export class InvestmentRusltComponent  implements OnChanges{

  @Input() table:any = []

  ngOnChanges(changes: SimpleChanges) {
    if (changes['table']) {
      console.log(this.table)
    }
  }

}

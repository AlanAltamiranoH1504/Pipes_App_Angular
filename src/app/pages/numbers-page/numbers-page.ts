import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [PercentPipe, DecimalPipe, CurrencyPipe],
  templateUrl: './numbers-page.html',
  styleUrl: './numbers-page.css',
})
export class NumbersPage {
  protected totalSells = signal<number>(2574174448.87);
  protected percent = signal<number>(0.0875655);
}

import { Component } from '@angular/core';
import { BindingFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public bindingSingle: number = 50;
  public bindingDual: { lower: number, upper: number } = { lower: 25, upper: 75 }

  public singleRangeChange() {
    this.logSingleBindings();
  }

  public dualRangeChange() {
    this.logDualBindings();
  }

  public lowerClick(change: number) {
    this.bindingDual.lower += change;
    this.logDualBindings();
  }

  public upperClick(change: number) {
    this.bindingDual.upper += change;
    this.logDualBindings();
  }

  public singleClick(change: number) {
    this.bindingSingle += change;
    this.logSingleBindings();
  }

  private logDualBindings() {
    console.log(`Lower:${this.bindingDual.lower} Upper: ${this.bindingDual.upper}`)
  }

  private logSingleBindings() {
    console.log(`Single:${this.bindingSingle}`)
  }
}

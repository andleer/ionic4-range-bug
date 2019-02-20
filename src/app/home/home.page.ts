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

  public rangeChange() {
    this.logBindings('change()')
  }

  public lowerClick(change: number) {
    this.bindingDual.lower += change;
    this.logBindings('upper()')
  }

  public upperClick(change: number) {
    this.bindingDual.upper += change;
    this.logBindings('upper()')
  }

  public singleClick(change: number) {
    this.bindingSingle += change;
    this.logBindings('single()')
  }

  private logBindings(name: string) {
    console.log(`${name} Lower:${this.bindingDual.lower} Upper: ${this.bindingDual.upper}`)
    console.log(`${name} Single:${this.bindingSingle}`)
  }
}

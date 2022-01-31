import { Component, Input } from '@angular/core';

@Component({
  selector: 'hellov2',
  template: `<h1>Hello version 2... {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class Hellov2Component  {
  @Input() name: string;
}

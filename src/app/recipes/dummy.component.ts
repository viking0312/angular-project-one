import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mm-dummy',
  template: `
    <p>
      dummy works!
    </p>
  `,
  styles: [
    'color: red'
  ]
})
export class DummyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

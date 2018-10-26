import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cobertura',
  templateUrl: './cobertura.component.html',
  styles: []
})
export class CoberturaComponent implements OnInit {

  @Input() cobertura: any;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Cobertura } from 'src/app/db/model';

@Component({
  selector: 'app-cobertura',
  templateUrl: './cobertura.component.html',
  styles: []
})
export class CoberturaComponent implements OnInit {

  @Input() cobertura: Cobertura;

  constructor() {
   }

  ngOnInit() {
  }

}

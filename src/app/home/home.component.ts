import { Component, OnInit } from '@angular/core';

//#region Imports
import { Cobertura, TipoCobertura } from '../db/model';
import { CoberturasService } from '../home/home.coberturas.service';
//#endregion

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  coberturas: Cobertura[];

  constructor(private coberturasService: CoberturasService) { }

  ngOnInit() {
    this.coberturasService.coberturas()
      .subscribe(coberturas => this.coberturas = coberturas);
  }

}

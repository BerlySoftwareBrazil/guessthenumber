//#region Import Core
import { Component, OnInit, Output } from '@angular/core';
//#endregion

//#region Imports
import { Cobertura, TipoCobertura } from '../../../db/model';
//#endregion

@Component({
  selector: 'app-cobertura-list',
  templateUrl: './cobertura-list.component.html',
  styles: []
})
export class CoberturaListComponent implements OnInit {

  show: boolean = true;
  
  tipoCobertura: TipoCobertura = { id: 1, name: "Vida" };

  @Output() coberturas: Cobertura[] = [
    { id: 1, name: "Médico", base: true, tipo: this.tipoCobertura, img: "fas fa-user-md fa-3x" },
    { id: 2, name: "Funeral", base: true, tipo: this.tipoCobertura, img: "fab fa-pagelines fa-3x" },
    { id: 3, name: "Invalidez", base: true, tipo: this.tipoCobertura, img: "fas fa-wheelchair fa-3x" },
    { id: 4, name: "Contratual", base: true, tipo: this.tipoCobertura, img: "fas fa-edit fa-3x" },
    { id: 5, name: "Doenças", base: false, tipo: this.tipoCobertura, img: "fas fa-procedures fa-3x" },
    { id: 6, name: "Alimentação", base: false, tipo: this.tipoCobertura, img: "far fa-lemon fa-3x" },
    { id: 7, name: "Incapacidade", base: false, tipo: this.tipoCobertura, img: "fas fa-blind fa-3x" },
    { id: 8, name: "Laborativa", base: false, tipo: this.tipoCobertura, img: "fas fa-toolbox fa-3x" },
    { id: 9, name: "Acidente", base: false, tipo: this.tipoCobertura, img: "fas fa-user-injured fa-3x" },
    { id: 10, name: "Cônjuge", base: false, tipo: this.tipoCobertura, img: "fas fa-transgender fa-3x" },
    { id: 11, name: "Danos", base: false, tipo: this.tipoCobertura, img: "fas fa-car-crash fa-3x" },
    { id: 12, name: "Farmácia", base: false, tipo: this.tipoCobertura, img: "fas fa-capsules fa-3x" },
    { id: 13, name: "Auxílio", base: false, tipo: this.tipoCobertura, img: "fas fa-hand-holding-usd fa-3x" },
    { id: 14, name: "Familiar", base: false, tipo: this.tipoCobertura, img: "fas fa-hands fa-3x" },
    { id: 15, name: "Congênita", base: false, tipo: this.tipoCobertura, img: "fas fa-diagnoses fa-3x" },
    { id: 16, name: "Despesas", base: false, tipo: this.tipoCobertura, img: "fas fa-hand-holding fa-3x" },
    { id: 17, name: "Óleos", base: false, tipo: this.tipoCobertura, img: "fas fa-oil-can fa-3x" },
    { id: 18, name: "Reciclagem", base: false, tipo: this.tipoCobertura, img: "fas fa-recycle fa-3x" },
    { id: 19, name: "Patentes", base: false, tipo: this.tipoCobertura, img: "far fa-registered fa-3x" }
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

//#region Import
import { Cobertura, TipoCobertura } from '../../db/model';
//#endregion

@Component({
    selector: 'app-cobertura-list',
    templateUrl: '',
    styles: []  
})
export class CoberturaListComponent implements OnInit {

    tipoCobertura: TipoCobertura = { id: 1, name: "Vida" }

    coberturas: Cobertura[] = [
        { id: 1, name: "Médico", base: true, tipo: this.tipoCobertura, img: "fas fa-user-md fa-3x" },
        { id: 2, name: "Funeral", base: true, tipo: this.tipoCobertura, img: "fab fa-pagelines fa-3x" },
        { id: 3, name: "Invalidez", base: true, tipo: this.tipoCobertura, img: "fas fa-wheelchair fa-3x" },
        { id: 4, name: "Contratual", base: true, tipo: this.tipoCobertura, img: "fas fa-edit fa-3x" },
        { id: 5, name: "Doenças", base: false, tipo: this.tipoCobertura, img: "fas fa-procedures fa-3x" },
        { id: 6, name: "Alimentação", base: false, tipo: this.tipoCobertura, img: "far fa-lemon fa-3x" },
        { id: 7, name: "Incapacidade", base: false, tipo: this.tipoCobertura, img: "fas fa-blind fa-3x" },
        { id: 8, name: "Laborativa", base: false, tipo: this.tipoCobertura, img: "fas fa-toolbox fa-3x" },
        { id: 9, name: "Acidente", base: false, tipo: this.tipoCobertura, img: "fas fa-user-injured fa-3x" },
        { id: 10, name: "Invalidez Permanente por Acidente do Cônjuge", base: false, tipo: this.tipoCobertura, img: "fas fa-transgender fa-3x" },
        { id: 11, name: "Doença Congênita de Filhos", base: false, tipo: this.tipoCobertura, img: "fa-graduation-cap" },
        { id: 12, name: "Auxílio Alimentação (Cesta Básica)", base: false, tipo: this.tipoCobertura, img: "fa-bullhorn" },
        { id: 13, name: "Cesta Natalidade", base: false, tipo: this.tipoCobertura, img: "fa-wind" },
        { id: 14, name: "Despesas Médico Hospitalares por Acidente", base: false, tipo: this.tipoCobertura, img: "fa-plus-square" },
        { id: 15, name: "Invalidez Permanente Total por Doença Laborativa", base: false, tipo: this.tipoCobertura, img: "fa-frown" },
        { id: 16, name: "Diária de Incapacidade Temporária", base: false, tipo: this.tipoCobertura, img: "fa-car-crash"},
        { id: 17, name: "Farma Assist", base: false, tipo: this.tipoCobertura, img: "fa-house-damage"},
        { id: 18, name: "Rede Descontos", base: false, tipo: this.tipoCobertura, img: "fa-wine-glass"},
        { id: 19, name: "Danos Morais", base: false, tipo: this.tipoCobertura, img: "fa-fire-extinguisher"}
      ]

    constructor() { }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}

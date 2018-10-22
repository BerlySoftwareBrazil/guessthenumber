import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coberturas = [
    { id: 1, name: "Morte", basica: true, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-fire-extinguisher" },
    { id: 2, name: "Morte Acidental", basica: true, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-charging-station" },
    { id: 3, name: "Invalidez Permanente por Acidente", basica: true, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-wheelchair" },
    { id: 4, name: "Invalidez Funcional Permanente por Doença", basica: true, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-user-secret" },
    { id: 5, name: "Funeral Familiar", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-hand-holding-usd" },
    { id: 6, name: "Morte Cônjuge", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-laptop" },
    { id: 7, name: "Morte Filhos", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-broadcast-tower" },
    { id: 8, name: "Rescisão Contratual", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-file-times" },
    { id: 9, name: "Morte Acidental do  Cônjuge", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-plus-square" },
    { id: 10, name: "Invalidez Permanente por Acidente do Cônjuge", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-hands" },
    { id: 11, name: "Doença Congênita de Filhos", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-graduation-cap" },
    { id: 12, name: "Auxílio Alimentação (Cesta Básica)", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-bullhorn" },
    { id: 13, name: "Cesta Natalidade", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-wind" },
    { id: 14, name: "Despesas Médico Hospitalares por Acidente", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-plus-square" },
    { id: 15, name: "Invalidez Permanente Total por Doença Laborativa", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-frown" },
    { id: 16, name: "Diária de Incapacidade Temporária", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-car-crash"},
    { id: 17, name: "Farma Assist", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-house-damage"},
    { id: 18, name: "Rede Descontos", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-wine-glass"},
    { id: 19, name: "Danos Morais", basica: false, TipoCobertura: [{ id: 1, name: "Vida" }], img: "fa-fire-extinguisher"}];
}

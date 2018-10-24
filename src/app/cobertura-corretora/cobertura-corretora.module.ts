import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//#region Imports
import { CoberturaCorretoraComponent } from './cobertura-corretora.component';
//#endregion

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoberturaCorretoraComponent],
  exports: [CoberturaCorretoraComponent]
})
export class CoberturaCorretoraModule { }

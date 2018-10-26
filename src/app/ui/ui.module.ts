import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//#region Imports
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoberturaCorretoraComponent } from '../cobertura-corretora/cobertura-corretora.component';
import { HomeComponent } from '../home/home.component';
import { CoberturaListComponent } from '../componente/coberturas/cobertura-list/cobertura-list.component';
import { CoberturaComponent } from '../componente/coberturas/cobertura/cobertura.component';
//#endregion

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    LayoutComponent, 
    HeaderComponent, 
    FooterComponent, 
    CoberturaCorretoraComponent,
    HomeComponent,
    CoberturaListComponent,
    CoberturaComponent
  ],
  exports:[
    LayoutComponent
  ]
})

export class UiModule { }

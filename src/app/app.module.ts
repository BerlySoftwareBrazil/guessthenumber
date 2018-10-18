import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { CoberturaCorretoraComponent } from './cobertura-corretora/cobertura-corretora.component';
import { TipoCoberturaComponent } from './tipo-cobertura/tipo-cobertura.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CoberturaCorretoraComponent,
    TipoCoberturaComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

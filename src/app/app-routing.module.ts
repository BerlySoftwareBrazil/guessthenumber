import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CoberturaCorretoraComponent } from "./cobertura-corretora/cobertura-corretora.component";
import { TipoCoberturaComponent } from "./tipo-cobertura/tipo-cobertura.component";
import { AppComponent } from "./app.component";

const routes: Routes=[
    {path: 'Home', component: AppComponent},
    {path: 'CoberturaCorretora', component: CoberturaCorretoraComponent},
    {path: 'TipoCobertura', component: TipoCoberturaComponent},
    {path: '**', component: AppComponent}    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true})],
    exports: [RouterModule]
})
export class AppRoutingModule{}
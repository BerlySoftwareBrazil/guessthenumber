import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { CoberturaCorretoraComponent } from "./cobertura-corretora/cobertura-corretora.component";

const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'cobertura', component: CoberturaCorretoraComponent },
    { path: '**', component: AppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from "@angular/core";

//#region Imports
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoberturaCorretoraComponent } from './cobertura-corretora/cobertura-corretora.component';
//#endregion

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'cobertura', component: CoberturaCorretoraComponent },
    { path: '**', component: AppComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
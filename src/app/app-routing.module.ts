import { NgModule } from "@angular/core";

//#region Imports
import { Routes, RouterModule } from '@angular/router';
import { CoberturaCorretoraComponent } from './cobertura-corretora/cobertura-corretora.component';
import { HomeComponent} from "./home/home.component";
import { CoberturaListComponent} from "./coberturas/cobertura-list/cobertura-list.component"
//#endregion

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cobertura', component: CoberturaCorretoraComponent },
    { path: 'list', component: CoberturaListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
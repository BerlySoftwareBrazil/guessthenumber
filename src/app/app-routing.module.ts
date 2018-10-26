import { NgModule } from "@angular/core";

//#region Imports
import { Routes, RouterModule } from '@angular/router';
import { CoberturaCorretoraComponent } from './cobertura-corretora/cobertura-corretora.component';
import { HomeComponent} from "./home/home.component";
//#endregion

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cobertura', component: CoberturaCorretoraComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
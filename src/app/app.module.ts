import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//#region Imports
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiModule } from './ui/ui.module';

//#endregion
@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ShowDetailsComponent } from './components/show-details/show-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
    ShowFormComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

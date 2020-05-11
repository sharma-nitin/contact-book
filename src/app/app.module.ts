import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EhContactListComponent } from './eh-contact-list/eh-contact-list.component';
import { EhContactFormComponent } from './eh-contact-form/eh-contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EhContactListComponent,
    EhContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

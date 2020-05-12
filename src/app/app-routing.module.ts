import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EhContactListComponent } from './eh-contact-list/eh-contact-list.component';
import { EhContactFormComponent } from './eh-contact-form/eh-contact-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact-list', pathMatch: 'full' },
  { path: 'contact-list', component: EhContactListComponent },
  { path: 'contact-form', component: EhContactFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

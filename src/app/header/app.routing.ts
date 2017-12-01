import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkListComponent } from '../link-list/link-list.component';
import { CreateLinkComponent } from '../create-link/create-link.component';


const routes: Routes = [
  {
    path: '', component: LinkListComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateLinkComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}


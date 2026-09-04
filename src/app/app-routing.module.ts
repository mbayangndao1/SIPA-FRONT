import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./layout/admin-layout/admin.layout.component";
import {ClientLayoutComponent} from "./layout/client-layout/client.layout.component";
import {AppLayoutComponent} from "./layout/app.layout.component";

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
  },
  {
    path: 'admin', component: AdminLayoutComponent,
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),

  },
  {
    path: 'client', component: ClientLayoutComponent,
    loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

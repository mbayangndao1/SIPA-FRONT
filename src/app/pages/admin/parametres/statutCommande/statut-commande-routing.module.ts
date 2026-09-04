import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StatutCommandeComponent} from "./statut-commande.component";

const routes: Routes = [{ path: '', component: StatutCommandeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatutCommandeRoutingModule { }

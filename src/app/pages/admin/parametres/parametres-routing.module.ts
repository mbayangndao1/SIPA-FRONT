import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ParametresComponent} from "./parametres.component";

const routes: Routes = [
  { path: '', component:ParametresComponent },
  { path: 'produit', loadChildren: () => import('./produit/produit.module').then(m => m.ProduitModule) },
  { path: 'typeproduit', loadChildren: () => import('./typeproduit/typeproduit.module').then(m => m.TypeproduitModule) },
  { path: 'categorie', loadChildren: () => import('./categorie/categorie.module').then(m => m.CategorieModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'statutcommande', loadChildren: () => import('./statutCommande/statut-commande.module').then(m => m.StatutCommandeModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametresRoutingModule { }

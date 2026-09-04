import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitComponent} from "../produit/produit.component";
import {TypeProduitComponent} from "./typeproduit.component";

const routes: Routes = [{ path: '', component: TypeProduitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeproduitRoutingModule { }

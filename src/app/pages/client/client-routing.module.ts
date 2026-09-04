import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientLayoutComponent} from "../../layout/client-layout/client.layout.component";
import {ClientComponent} from "./client.component";

const routes: Routes = [
  {path:'',component:ClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

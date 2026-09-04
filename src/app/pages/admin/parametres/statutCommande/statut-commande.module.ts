
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatutCommandeRoutingModule } from './statut-commande-routing.module';
import {StatutCommandeComponent} from "./statut-commande.component";
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputSwitchModule} from "primeng/inputswitch";
import {PaginatorModule} from "primeng/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [StatutCommandeComponent],
    imports: [
        CommonModule,
        StatutCommandeRoutingModule,
        ButtonModule,
        DialogModule,
        InputSwitchModule,
        PaginatorModule,
        ReactiveFormsModule,
        SharedModule,
        TableModule,
        ToastModule,
        ToolbarModule,
        RippleModule,
        InputTextModule
    ]
})
export class StatutCommandeModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import {CategorieComponent} from "./categorie.component";
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
  declarations: [CategorieComponent],
    imports: [
        CommonModule,
        CategorieRoutingModule,
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
export class CategorieModule { }

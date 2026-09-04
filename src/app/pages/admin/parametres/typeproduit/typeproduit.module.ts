import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeproduitRoutingModule } from './typeproduit-routing.module';
import {TypeProduitComponent} from "./typeproduit.component";
import {TableModule} from "primeng/table";
import {ToolbarModule} from "primeng/toolbar";
import {ToastModule} from "primeng/toast";
import {DropdownModule} from "primeng/dropdown";
import {ReactiveFormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {InputSwitchModule} from "primeng/inputswitch";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";;
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [TypeProduitComponent],
    imports: [
        CommonModule,
        ButtonModule,
        TypeproduitRoutingModule,
        TableModule,
        ToolbarModule,
        ToastModule,
        DropdownModule,
        ReactiveFormsModule,
        DialogModule,
        InputSwitchModule,
        RippleModule,
        InputTextModule
    ]
})
export class TypeproduitModule { }

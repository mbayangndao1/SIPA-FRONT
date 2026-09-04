import { NgModule } from '@angular/core';
import {ClientSidebarComponent} from "./client.sidebar.component";
import {SharedComponentModule} from "../shared/shared-component.module";
import {ClientMenuComponent} from "./client.menu.component";
import {ClientLayoutComponent} from "./client.layout.component";

@NgModule({
    declarations: [ ClientMenuComponent,  ClientLayoutComponent, ClientSidebarComponent],
    imports: [
      SharedComponentModule


    ],
    exports: [ ClientLayoutComponent, ClientSidebarComponent]
})
export class ClientLayoutModule { }

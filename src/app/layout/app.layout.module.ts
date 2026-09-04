import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./app.layout.component";
import { AppMenuComponent } from './app.menu.component';
import { AppSidebarComponent } from './app.sidebar.component';
import {SharedComponentModule} from "./shared/shared-component.module";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
    declarations: [
        AppLayoutComponent,
        AppMenuComponent,
        AppSidebarComponent,
    ],
    imports: [
       SharedComponentModule
    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }

import { NgModule } from '@angular/core';
import {AdminSidebarComponent} from "./admin.sidebar.component";
import {AdminMenuComponent} from "./admin.menu.component";
import {AdminLayoutComponent} from "./admin.layout.component";
import {SharedComponentModule} from "../shared/shared-component.module";





@NgModule({
  declarations: [AdminSidebarComponent,AdminMenuComponent,AdminLayoutComponent],
  imports: [
      SharedComponentModule

  ],
    exports: [AdminLayoutComponent, AdminSidebarComponent]
})
export class AdminLayoutModule { }

import {Component, ElementRef} from '@angular/core';
import {LayoutService} from "../service/app.layout.service";

@Component({
  selector: 'client-sidebar',
  templateUrl: './client.sidebar.component.html'
})
export class ClientSidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef) { }
}

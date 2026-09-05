import {Component, OnInit} from '@angular/core';
import {LayoutService} from "../service/app.layout.service";

@Component({
  selector: 'client-menu',
  templateUrl: './client.menu.component.html'
})
export class ClientMenuComponent implements OnInit{
    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'CLIENT',
                items: [
                    { label: 'Choix Module', icon: 'pi pi-fw pi-home', url: 'https://sipafront.netlify.app/' }
                ],
            }

        ];
    }

}

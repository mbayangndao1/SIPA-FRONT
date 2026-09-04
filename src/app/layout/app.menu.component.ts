import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Accueil',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/'],
                    },
                  {
                    label: 'ADMIN',
                    icon: 'pi pi-fw pi-user',
                    routerLink: ['/'],
                  },
                  {
                    label: 'CLIENT',
                    icon: 'pi pi-fw pi-user',
                    routerLink: ['/'],
                  },
                ],
            },

        ];
    }
}

import {Component, OnInit} from '@angular/core';
import {LayoutService} from "../service/app.layout.service";

@Component({
  selector: 'admin-menu',
  templateUrl: './admin.menu.component.html'
})
export class AdminMenuComponent implements OnInit{
    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'admin',
                items: [
                    {label: 'Dashboard',  icon: 'pi pi-fw pi-box', routerLink: ['/admin']}
                ],
            },

            {label: 'Paramères',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Paramétres',
                        icon: 'pi pi-fw pi-cog',
                        items:[ {label: 'Type de produits', icon: 'pi pi-fw pi-angle-right', routerLink: ['/admin/parametres/typeproduit']},
                            {label: 'Catégories', icon: 'pi pi-fw pi-angle-right', routerLink: ['/admin/parametres/categorie']},
                            {label: 'Produits', icon: 'pi pi-fw pi-angle-right', routerLink: ['/admin/parametres/produit']},
                            {label: 'StatutCommande', icon: 'pi pi-fw pi-angle-right', routerLink: ['/admin/parametres/statutcommande']},
                            {label: 'Clients',  icon: 'pi pi-fw pi-user', routerLink: ['/admin/parametres/client']}
                        ]
                    },
                ]
            },

        ];
    }

}

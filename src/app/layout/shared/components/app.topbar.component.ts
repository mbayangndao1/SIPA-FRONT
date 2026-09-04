import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { LayoutService } from "../../service/app.layout.service";
// import { AuthService } from 'src/app/proxy/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    providers:[MessageService]
})
export class AppTopBarComponent implements OnInit{
    public isLoggedIn = false;
    fullname = "";
    structureLibelle = "";
    caisseLibelle = "";

    years: { label: string; value: number }[] = [];

      annee: number | null = null;
    items: MenuItem[] = [];
    searchCode: string = '';
    loading = [false, false, false, false];
    public isClientModule: boolean = false;
    isCaveauModule=false;
    isReceveurModule: boolean=false;
    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;
    constructor(
        public layoutService: LayoutService,
        private router: Router,
        private messageService: MessageService,

    ) { }
    public async ngOnInit() {


        // Define items based on roles

            this.items = [
                {
                    label: 'Profil', icon: 'pi pi-refresh', command: () => {
                        this.router.navigate(['/profile']);
                    }
                /*,

                    label: 'admin', icon: 'pi pi-unlock', command: (hello) => {
                        this.router.navigate(['/admin']);
                    },

                    label: 'Client', icon: 'pi pi-unlock', command: () => {
                        this.router.navigate(['/client']);
                    },
                // separator: true,

                    label: 'Déconnexion', icon: 'pi pi-sign-out', command: () => {
                       alert("déconnecter");
                        sessionStorage.clear();
                    }*/
                }
            ];
        }






}


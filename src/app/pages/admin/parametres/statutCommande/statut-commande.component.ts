import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StatutCommande, StatutCommandeService} from "../../../../proxy/statutCommande";
import {Table} from "primeng/table";
import {debounceTime, distinctUntilChanged, first, of, switchMap} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-statut-commande',
  templateUrl: './statut-commande.component.html',
  styleUrl: './statut-commande.component.scss',
    providers:[MessageService]
})
export class StatutCommandeComponent implements OnInit {
    form!: FormGroup;
    statutCommandeDialog: boolean = false;
    deleteStatutCommandeDialog: boolean = false;
    statutCommandes: StatutCommande[] = [];
    statutCommande: StatutCommande={id: "", libelle: "",description:'',couleur:''};
    cols: any[] = [];
    loadingStatut=false;
    constructor(
        private statutCommandeService: StatutCommandeService,
        private fb :FormBuilder,
        private messageService: MessageService
    ) {}
    ngOnInit(): void {
        this.getAllStatutCommandes();

    }
    buildForm(){
        this.form = this.fb.group({
            libelle: [this.statutCommande.libelle ||'', [Validators.required],[this.libelleUniqueValidator( this.statutCommande?.id)]],
            description:[this.statutCommande.description, [Validators.required]],
            couleur:[this.statutCommande.couleur, [Validators.required]]

        });
    }
    openNew() {
        this.resetStatut();
        this.statutCommandeDialog = true;

    }
    resetStatut(){
        this.statutCommande={couleur: "", description: "", libelle: ""};
        this.buildForm();
    }
    editStatutCommande(statutCommande: StatutCommande) {
        this.statutCommande = statutCommande;
        this.buildForm();
        this.statutCommandeDialog=true;
    }

    deleteStatutCommande(statutCommande: StatutCommande) {
        this.deleteStatutCommandeDialog = true;
        this.statutCommande = statutCommande;
    }

    confirmDelete() {
        this.deleteStatutCommandeDialog = false;
        this.loadingStatut=true;
        this.statutCommandeService.deleteStatutCommande(this.statutCommande.id).subscribe(() => {
            this.loadingStatut=false;
            this.getAllStatutCommandes();
        });
        this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'Statut supprimé', life: 3000 });
        this.resetStatut();}

    hideDialog() {
        this.resetStatut();
        this.statutCommandeDialog = false;
    }
    createStatutCommande() {
        if (this.form.invalid) {
            return;
        }
        if (this.statutCommande.id) {
            // @ts-ignore
            this.form.value.id = this.statutCommande.id;
            this.loadingStatut=true;
            this.statutCommandeService.updateStatutCommande(this.statutCommande.id, this.form.value).
            subscribe(() => {
                this.statutCommandeDialog = false;
                this.loadingStatut=false;
                this.getAllStatutCommandes();
                this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'statut modifié', life: 3000 });
                this.resetStatut();
            },(error)=>{
                this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur de Modification', life: 3000 });
                this.statutCommandeDialog = true;
                this.loadingStatut=false;
            });

        }
        else {
            this.loadingStatut=true;
            // @ts-ignore
            this.statutCommandeService.createStatutCommande(this.form.value).
            subscribe(() => {
                    this.statutCommandeService.updateStatutCommande(this.statutCommande.id,this.form.value)
                    this.statutCommandeDialog = false;
                this.loadingStatut=false;
                    this.getAllStatutCommandes();
                    this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'Statut crée', life: 3000 });
                    this.resetStatut();
                },(error)=>{
                    this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "Erreur d'enregistrement", life: 3000 });
                    this.statutCommandeDialog = true;
                this.loadingStatut=false;
                }
            );
        }


        //this.statutCommandes = [...this.statutCommandes];
    }


    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    getAllStatutCommandes(){
        this.statutCommandeService.findAllStatutCommandes().subscribe(result =>{
            this.statutCommandes = result;
            this.messageService.add({ severity: 'info', summary: 'Réussi', detail: 'Liste chargée', life: 3000 });
        }, error =>{
            this.messageService.add({ severity: 'danger', summary: 'Erreur', detail: 'Erreur Serveur', life: 3000 });
        })
    }
  exporterEnExcel(): void {

  }
  generatePDF(){

  }
    libelleUniqueValidator(currentId?: string): AsyncValidatorFn {
        return (control: AbstractControl) => {
            if (!control.value || control.value.length < 2) {
                return of(null);
            }
            return of(control.value).pipe(
                debounceTime(500),
                distinctUntilChanged(),
                switchMap(libelle =>
                    this.statutCommandeService.existsByLibelle(libelle).pipe(
                        map(exists => {
                            // Si on est en mode édition et que le libellé n’a pas changé, pas d’erreur
                            if (exists && (!currentId || control.value !== this.statutCommande.libelle)) {
                                return { libelleExists: true };
                            }
                            return null;
                        }),
                        first()
                    )
                )
            );
        };
    }
}

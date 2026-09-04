import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import {TypeProduit, TypeProduitService} from "../../../../proxy/typeproduit";


@Component({
    selector: 'app-typeProduit',
    templateUrl: './typeproduit.component.html',
    providers: [MessageService,],
})
export class TypeProduitComponent implements OnInit{

    form!: FormGroup;
    typeProduitDialog: boolean = false;
    deleteTypeProduitDialog: boolean = false;
    typeProduits: TypeProduit[] = [];
    typeProduit: TypeProduit={id: "", libelle: "", active:false,description:''};
    cols: any[] = [];
    loadingType=false;
    constructor(
        private typeProduitService: TypeProduitService,
        private fb :FormBuilder,
        private messageService: MessageService

    ) {}
    ngOnInit(): void {
        this.getAllTypeProduits();

    }
    buildForm(){
        this.form = this.fb.group({
            libelle: [this.typeProduit.libelle ||'', [Validators.required]],
            description:[this.typeProduit.description, [Validators.required]],
            active:[this.typeProduit.active]

        });
    }
    openNew() {
       this.resetType();
        this.typeProduitDialog = true;

    }

    editTypeProduit(typeProduit: TypeProduit) {
        this.typeProduit = typeProduit;
        this.buildForm();
        this.typeProduitDialog=true;
    }

    deleteTypeProduit(typeProduit: TypeProduit) {
        this.deleteTypeProduitDialog = true;
        this.typeProduit = typeProduit;
    }

    confirmDelete() {
        this.deleteTypeProduitDialog = false;
        this.loadingType=true;
        this.typeProduitService.deleteTypeProduit(this.typeProduit.id).subscribe(() => {
            this.loadingType=false;
            this.getAllTypeProduits();
        });
        this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'TypeProduit supprimé', life: 3000 });
        this.resetType();
    };

    hideDialog() {
        this.typeProduitDialog = false;
    }
    createTypeProduit() {
        if (this.form.invalid) {
            return;
        }
        if (this.typeProduit.id) {
            this.loadingType=true;
            // @ts-ignore
            this.form.value.id = this.typeProduit.id;
            this.typeProduitService.updateTypeProduit(this.typeProduit.id, this.form.value).
            subscribe(() => {
                this.typeProduitDialog = false;
                this.loadingType=false;
                this.getAllTypeProduits();
                this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'typeProduit modifié', life: 3000 });
                this.resetType();
            },(error)=>{
                this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur de Modification', life: 3000 });
                this.typeProduitDialog = true;
                this.loadingType=false;
            });

        }
        else {
            this.loadingType=true;
            // @ts-ignore
            this.typeProduitService.createTypeProduit(this.form.value).
            subscribe(() => {
                    this.typeProduitService.updateTypeProduit(this.typeProduit.id,this.form.value)
                    this.typeProduitDialog = false;
                this.loadingType=false;
                    this.getAllTypeProduits();
                    this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'TypeProduit crée', life: 3000 });
                    this.resetType();
                },(error)=>{
                    this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "Erreur d'enregistrement", life: 3000 });
                    this.typeProduitDialog = true;
                this.loadingType=false;
                }
            );

        }


        //this.typeProduits = [...this.typeProduits];
    }


    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }


    getAllTypeProduits(){
        this.typeProduitService.findAllTypeProduits().subscribe(result =>{
            this.typeProduits = result;
            this.messageService.add({ severity: 'info', summary: 'Réussi', detail: 'Liste chargée', life: 3000 });
        }, error =>{
            this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur Serveur', life: 3000 });
        })
    }

resetType(){
    this.typeProduit={description: "", libelle: ""};
    this.buildForm();
}
    exporterEnExcel(): void {

    }
  generatePDF(){

  }
}

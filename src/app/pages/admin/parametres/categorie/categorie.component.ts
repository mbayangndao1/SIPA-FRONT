import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageService} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Categorie, CategorieService} from "../../../../proxy/categorie";
import {Table} from "primeng/table";
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.scss',
    providers:[MessageService]
})
export class CategorieComponent implements OnInit {
    form!: FormGroup;
    categorieDialog: boolean = false;
    deleteCategorieDialog: boolean = false;
    categories: Categorie[] = [];
    categorie: Categorie={id: "", libelle: "", active:false,description:''};
    cols: any[] = [];
    loadingCategorie=false;
    @ViewChild('dt') table: Table | undefined;
    constructor(
        private categorieService: CategorieService,
        private fb :FormBuilder,
        private messageService: MessageService
    ) {}
    isRowColorful(data: Categorie): boolean {
        // Logique pour déterminer si la ligne doit être colorée
        // Par exemple, si un thème est activé
        return data.active===false;
    }
    ngOnInit(): void {
        this.getAllCategories();

    }
    buildForm(){
        this.form = this.fb.group({
            libelle: [this.categorie.libelle ||'', [Validators.required]],
            description:[this.categorie.description, [Validators.required]],
            active:[this.categorie.active]

        });
    }
    openNew() {
        this.resetCategorie();
        this.categorieDialog = true;

    }

    editCategorie(categorie: Categorie) {
        this.categorie = categorie;
        this.buildForm();
        this.categorieDialog=true;
    }

    deleteCategorie(categorie: Categorie) {
        this.deleteCategorieDialog = true;
        this.categorie = categorie;
    }

    confirmDelete() {
        this.deleteCategorieDialog = false;
        this.loadingCategorie=true;
        this.categorieService.deleteCategorie(this.categorie.id).subscribe(() => {
            this.loadingCategorie=false;
            this.getAllCategories();
        });
        this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'Categorie supprimé', life: 3000 });
        this.resetCategorie()};

    hideDialog() {
        this.resetCategorie();
        this.categorieDialog = false;
    }
    createCategorie() {
        if (this.form.invalid) {
            return;
        }
        if (this.categorie.id) {
            // @ts-ignore
            this.form.value.id = this.categorie.id;
            this.loadingCategorie=true;
            this.categorieService.updateCategorie(this.categorie.id, this.form.value).
            subscribe(() => {
                this.categorieDialog = false;
                this.loadingCategorie=false;
                this.getAllCategories();
                this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'categorie modifié', life: 3000 });
                this.resetCategorie();
            },(error)=>{
                this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur de Modification', life: 3000 });
                this.loadingCategorie=false;
                this.categorieDialog = true;
            });

        }
        else {
            this.loadingCategorie=true;
            // @ts-ignore
            this.categorieService.createCategorie(this.form.value).
            subscribe(() => {
                    this.categorieService.updateCategorie(this.categorie.id,this.form.value);
                    this.categorieDialog = false;
                this.loadingCategorie=false;
                    this.getAllCategories();
                    this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'Categorie crée', life: 3000 });
                    this.resetCategorie();
                },(error)=>{
                    this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "Erreur d'enregistrement", life: 3000 });
                    this.categorieDialog = true;
                this.loadingCategorie=false;
                }
            );

        }


        //this.categories = [...this.categories];
    }


    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }


    getAllCategories(){
        this.categorieService.findAllCategories().subscribe(result =>{
            this.categories = result;
            this.messageService.add({ severity: 'info', summary: 'Réussi', detail: 'Liste chargée', life: 3000 });
        }, error =>{
            this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur Serveur', life: 3000 });
        })
    }


generatePDF(){

}
    resetCategorie(){
        this.categorie={description: "", libelle: ""};
        this.buildForm();
    }
    exporterEnExcel(): void {

    }
}

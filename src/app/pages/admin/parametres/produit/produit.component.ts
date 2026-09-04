import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // add this
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import {TypeProduit, TypeProduitService} from "../../../../proxy/typeproduit";
import {Categorie, CategorieService} from "../../../../proxy/categorie";
import {Produit, ProduitService} from "../../../../proxy/produits";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  providers: [MessageService,],
})
export class ProduitComponent implements OnInit{

  form!: FormGroup;
   produitDialog: boolean = false;
   deleteProduitDialog: boolean = false;
   produits: Produit[] = [];
   produit: Produit={active: false, codeBarre: "", description: "", libelle: "", prix: 0, categorieId: "", typeProduitId: ""};
   cols: any[] = [];
    typeProduits!: TypeProduit[];
   categories!: Categorie[];
loadingProduit=false;
    constructor(
        private produitService: ProduitService,
        private typeProduitService: TypeProduitService,
        private categorieService:CategorieService,
        private fb :FormBuilder,
        private messageService: MessageService
    ) {}
  ngOnInit(): void {
    this.getAllProduits();
    this.getAllCategories();
    this.getAllTypeProduits();

  }
buildForm(){
    this.form = this.fb.group({
        libelle: [this.produit.libelle ||'', [Validators.required]],
        prix:[this.produit.prix ||'', [Validators.required]],
        codeBarre:[this.produit.codeBarre ||'', [Validators.required]],
        description:[this.produit.description, [Validators.required]],
        categorieId: [this.produit.categorieId ||'', [Validators.required]],
        typeProduitId:[this.produit.typeProduitId ||'', [Validators.required]],
        active:[this.produit.active]

    });
}
  openNew() {
      this.resetProduit();
    this.produitDialog = true;

}

editProduit(produit: Produit) {
    this.produit = produit;
    this.buildForm();
    this.produitDialog=true;
    }

deleteProduit(produit: Produit) {
    this.deleteProduitDialog = true;
    this.produit = produit;
}

confirmDelete() {
    this.deleteProduitDialog = false;
    this.loadingProduit=true;
    this.produitService.deleteProduit(this.produit.id).subscribe(() => {
        this.getAllProduits();
        this.loadingProduit=false;
    });
    this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'Produit supprimé', life: 3000 });
    this.resetProduit();
}

hideDialog() {
        this.resetProduit();
    this.produitDialog = false;
}
createProduit() {
    if (this.form.invalid) {
        return;
      }
    if (this.produit.id) {
        // @ts-ignore
        this.form.value.id = this.produit.id;
        this.loadingProduit=true;
        this.produitService.updateProduit(this.produit.id, this.form.value).
        subscribe(() => {
            this.produitDialog = false;
            this.loadingProduit=false
            this.getAllProduits();
            this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'produit modifié', life: 3000 });
            this.resetProduit();
        },(error)=>{
            this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur de Modification', life: 3000 });
            this.produitDialog = true;
            this.loadingProduit=false;
        });

    }
     else {
         this.loadingProduit=true;
        // @ts-ignore
      this.produitService.createProduit(this.form.value).
       subscribe(() => {
              this.produitService.updateProduit(this.produit.id,this.form.value)
           this.produitDialog = false;
              this.loadingProduit=false;
           this.getAllProduits();
           this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'Produit crée', life: 3000 });
         this.resetProduit();
          },(error)=>{
            this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "Erreur d'enregistrement", life: 3000 });
            this.produitDialog = true;
              this.loadingProduit=false;
          }
          );

    }


        //this.produits = [...this.produits];
}


onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}


  getAllProduits(){
    this.produitService.findAllProduits().subscribe(result =>{
    this.produits = result;
        this.messageService.add({ severity: 'info', summary: 'Réussi', detail: 'produits chargés', life: 3000 });
  }, error =>{
    this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur Serveur', life: 3000 });
})
}
    getAllTypeProduits(){
        this.typeProduitService.findAllTypeProduits().subscribe(result =>{
            this.typeProduits = result;
            //this.messageService.add({ severity: 'info', summary: 'Réussi', detail: 'type de produits chargés', life: 3000 });
        }, error =>{
            this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur Serveur', life: 3000 });
        })
    }
    getAllCategories(){
        this.categorieService.findAllCategories().subscribe(result =>{
            this.categories = result;
            //this.messageService.add({ severity: 'info', summary: 'Réussi', detail: 'thèmes chargés', life: 3000 });
        }, error =>{
            this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur Serveur', life: 3000 });
        })
    }
    resetProduit(){
        this.produit={
            active: false,
            codeBarre: "",
            description: "",
            libelle: "",
            prix: 0,
            categorieId: "",
            typeProduitId: ""
        };
        this.buildForm();
    }
  exporterEnExcel(): void {

  }
  generatePDF(){

  }
}

import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Table} from "primeng/table";
import {Client} from "../../../../proxy/client/models";
import {ClientService} from "../../../../proxy/client/client.service";

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrl: './client.component.scss',
    providers:[MessageService]
})
export class ClientComponent implements OnInit{
    form!: FormGroup;
    clientDialog: boolean = false;
    deleteClientDialog: boolean = false;
    clients: Client[] = [];
    client: Client={nom:'',telephone:'',adresse:''};
    cols: any[] = [];
    clientFound: Client | undefined;
    formNom: FormGroup | undefined;
    nomDialog: boolean =false;
    searchDialog: boolean =false;
    adresseDialog =false;
   formAdresse: FormGroup | undefined;
    telephoneDialog: boolean=false;
    formTelephone!: FormGroup;
    loadingClient=false;
    constructor(
        private clientService: ClientService,
        private fb :FormBuilder,
        private messageService: MessageService
    ) {}

    ngOnInit(): void {
        this.getAllClients();
        this.formNom = this.fb.group({
            nom: ['', [Validators.required]],

        });
        this.formAdresse = this.fb.group({
            adresse: ['', [Validators.required]],

        });
        this.formTelephone = this.fb.group({
            telephone: ['', [Validators.required]],

        });
    }
    buildForm(){
        this.form = this.fb.group({
            nom: [this.client.nom||'', [Validators.required]],
            telephone:[this.client.telephone, [Validators.required]],
            adresse:[this.client.adresse]

        });
    }
    resetForm(){
        this.client={};
        this.buildForm();
    }
    openNew() {
        this.resetForm();
        this.clientDialog = true;

    }

    editClient(client: Client) {
        this.client = client;
        this.buildForm();
        this.clientDialog=true;
    }

    deleteClient(client: Client) {
        this.deleteClientDialog = true;
        this.client = client;
    }

    confirmDelete() {
        this.deleteClientDialog = false;
        this.loadingClient=true;
        this.clientService.deleteClient(this.client.id).subscribe(() => {
            this.loadingClient=false;
            this.getAllClients();
        });
        this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'Client supprimé', life: 3000 });
        this.resetForm()}

    hideDialog() {
        this.resetForm();
        this.clientDialog = false;
    }
    createClient() {
        if (this.form.invalid) {
            return;
        }
        if (this.client.id) {
            this.loadingClient=true;
            // @ts-ignore
            this.form.value.id = this.client.id;
            this.clientService.updateClient(this.client.id, this.form.value).
            subscribe(
                {
                    next:()=>{
                        this.clientDialog = false;
                        this.loadingClient=false;
                        this.getAllClients();
                        this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'client modifié', life: 3000 });
                        this.resetForm();
                    },
                    error:()=>{this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur de Modification', life: 3000 });
                        this.clientDialog = true;}
                });

        }
        else {
            this.loadingClient=true;
            // @ts-ignore
            this.clientService.createClient(this.form.value).
            subscribe(
                {
                    next:()=>{
                        this.clientService.updateClient(this.client.id,this.form.value)
                        this.clientDialog = false;
                        this.loadingClient=false;
                        this.getAllClients();
                        this.messageService.add({ severity: 'success', summary: 'Réussie', detail: 'Client crée', life: 3000 });
                        this.resetForm();
                    },
                    error:()=>{
                        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: "Erreur d'enregistrement", life: 3000 });
                        this.clientDialog = true;
                        this.loadingClient=false;
                    }
                }
            );

        }
        //this.clients = [...this.clients];
    }


    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }


    getAllClients(){
        this.clientService.findAllClients().subscribe(
        {next:(result)=>{
            this.clients = result;
                this.messageService.add({ severity: 'info', summary: 'Réussi', detail: 'Liste chargée', life: 3000 });
        },
            error:() =>{
            this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur Serveur', life: 3000 });
        }})
    }
    getClientById(id:string)
    {
        this.clientService.findClientById(id).subscribe({
            next:(result)=>{
                this.clientFound = result;},

            error:()=>{this.messageService.add({ severity: 'danger', summary: 'Erreur', detail: 'Erreur de chargement', life: 3000 });
            }})
    }
    getClientByTelephone(telephone:number)
    {

        this.clientService.findClientByTelephone(telephone).subscribe({
            next:(result)=>{
                this.clientFound = result;
                this.clients=[result];
                this.telephoneDialog=false;
                this.searchDialog=false;
                },

            error:()=>{this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur de chargement', life: 3000 });
                this.searchDialog=true;
                this.telephoneDialog=true;
            }})
    }

    getClientsByAdresse(adresse:string)
    {

        this.clientService.findClientsByAdresse(adresse).subscribe({
            next:(result)=>{
                this.clients = result;
                this.adresseDialog=false;
                this.searchDialog=false;
                },

            error:()=>{this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur de chargement', life: 3000 });
                this.searchDialog=true;
                this.adresseDialog=true;
            }})
    }
    getClientsByNom(nom:string)
    {
        this.clientService.findClientsByNom(nom).subscribe({
            next:(result)=>{
                this.clients= result;
                this.nomDialog=false;
                this.searchDialog=false;
                },

            error:()=>{this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur de chargement', life: 3000 });
                this.searchDialog=true;
                this.nomDialog=true;
            }})
    }
    resetFormSearch(){
        this.formNom = this.fb.group({
            nom: ['', [Validators.required]],

        });
        this.formAdresse = this.fb.group({
            adresse: ['', [Validators.required]],

        });
        this.formTelephone = this.fb.group({
            telephone: ['', [Validators.required]],

        });
    }
  /*  generateListeClients(){
        const doc=new jsPDF()
        this.clientPdfService.generateListeClients(doc,this.clients)
    }*/
    /*generateListeClients(): void {
        const doc=new jsPDF();

        // Appel de la méthode pour générer l'en-tête
        this.pdfService.generateHeaderPDF(doc, () => {
            // Générer le contenu du corps une fois le header ajouté
            this.clientPdfService.generateContentListeClients(doc, this.clients);
            let fileName:string;
            if(this.formNom?.get('nom').value){
                fileName=`Liste  clients ayant le nom : ${this.formNom?.get('nom').value}`
            }
            else if(this.formAdresse.get('adresse').value){
                    fileName=`Liste  clients ayant l'adresse' : ${this.formAdresse.get('adresse').value}`
            }
            else if(this.formTelephone.get('telephone').value){
                fileName=`Liste  clients ayant le numéro de téléphone' : ${this.formTelephone.get('telephone').value}`
            }
            else {
                fileName= 'Liste_clients.pdf';
            }
            doc.save(fileName);
        });
    }*/
  exporterEnExcel(): void {

  }
  generatePDF(){

  }
}

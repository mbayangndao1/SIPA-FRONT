import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AppTopBarComponent } from './components/app.topbar.component';
import { AppFooterComponent } from './components/app.footer.component';
import { AppConfigModule } from '../config/config.module';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppMenuitemComponent } from './components/app.menuitem.component';
import { ButtonModule } from "primeng/button";
import { SplitButtonModule } from "primeng/splitbutton";
import { CustomCurrencyPipe } from "../../pipes/custom-currency.pipe";
import { CustomNumberPipe } from "../../pipes/custom-number.pipe";
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputNumberModule } from 'primeng/inputnumber';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
    declarations: [
        AppFooterComponent,
        AppTopBarComponent,
        AppMenuitemComponent,
        CustomCurrencyPipe,
        CustomNumberPipe
    ],
    exports: [
        FormsModule,
        HttpClientModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        InputTextModule,
        RouterModule,
        AppConfigModule,
        AppFooterComponent,
        AppTopBarComponent,
        AppMenuitemComponent,
        CommonModule,
        CustomCurrencyPipe,
        CustomNumberPipe,
        ToolbarModule,
        ToastModule,
        ButtonModule,
        DialogModule,
        ReactiveFormsModule,
        DropdownModule,
        FormsModule,
        RippleModule,
        InputTextModule,
        TableModule,
        InputNumberModule,
        BadgeModule,
        CommonModule,
        InputGroupModule
    ],
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ButtonModule, SplitButtonModule, InputTextModule, FormsModule, DropdownModule,]
})
export class SharedComponentModule { }

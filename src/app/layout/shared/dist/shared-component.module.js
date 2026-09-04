"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedComponentModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var inputtext_1 = require("primeng/inputtext");
var sidebar_1 = require("primeng/sidebar");
var badge_1 = require("primeng/badge");
var radiobutton_1 = require("primeng/radiobutton");
var inputswitch_1 = require("primeng/inputswitch");
var app_topbar_component_1 = require("./components/app.topbar.component");
var app_footer_component_1 = require("./components/app.footer.component");
var config_module_1 = require("../config/config.module");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var app_menuitem_component_1 = require("./components/app.menuitem.component");
var button_1 = require("primeng/button");
var splitbutton_1 = require("primeng/splitbutton");
var custom_currency_pipe_1 = require("../../pipes/custom-currency.pipe");
var custom_number_pipe_1 = require("../../pipes/custom-number.pipe");
var dropdown_1 = require("primeng/dropdown");
var dialog_1 = require("primeng/dialog");
var inputgroup_1 = require("primeng/inputgroup");
var inputnumber_1 = require("primeng/inputnumber");
var ripple_1 = require("primeng/ripple");
var table_1 = require("primeng/table");
var toast_1 = require("primeng/toast");
var toolbar_1 = require("primeng/toolbar");
var SharedComponentModule = /** @class */ (function () {
    function SharedComponentModule() {
    }
    SharedComponentModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_footer_component_1.AppFooterComponent,
                app_topbar_component_1.AppTopBarComponent,
                app_menuitem_component_1.AppMenuitemComponent,
                custom_currency_pipe_1.CustomCurrencyPipe,
                custom_number_pipe_1.CustomNumberPipe
            ],
            exports: [
                forms_1.FormsModule,
                http_1.HttpClientModule,
                inputtext_1.InputTextModule,
                sidebar_1.SidebarModule,
                badge_1.BadgeModule,
                radiobutton_1.RadioButtonModule,
                inputswitch_1.InputSwitchModule,
                inputtext_1.InputTextModule,
                router_1.RouterModule,
                config_module_1.AppConfigModule,
                app_footer_component_1.AppFooterComponent,
                app_topbar_component_1.AppTopBarComponent,
                app_menuitem_component_1.AppMenuitemComponent,
                common_1.CommonModule,
                custom_currency_pipe_1.CustomCurrencyPipe,
                custom_number_pipe_1.CustomNumberPipe,
                toolbar_1.ToolbarModule,
                toast_1.ToastModule,
                button_1.ButtonModule,
                dialog_1.DialogModule,
                forms_1.ReactiveFormsModule,
                dropdown_1.DropdownModule,
                forms_1.FormsModule,
                ripple_1.RippleModule,
                inputtext_1.InputTextModule,
                table_1.TableModule,
                inputnumber_1.InputNumberModule,
                badge_1.BadgeModule,
                common_1.CommonModule,
                inputgroup_1.InputGroupModule
            ],
            imports: [common_1.CommonModule, router_1.RouterOutlet, router_1.RouterLink, router_1.RouterLinkActive, button_1.ButtonModule, splitbutton_1.SplitButtonModule, inputtext_1.InputTextModule, forms_1.FormsModule, dropdown_1.DropdownModule,]
        })
    ], SharedComponentModule);
    return SharedComponentModule;
}());
exports.SharedComponentModule = SharedComponentModule;

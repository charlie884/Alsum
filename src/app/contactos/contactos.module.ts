import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ContactosRoutingModule } from "./contactos-routing.module";
import { ContactosComponent } from "./contactos.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ContactosRoutingModule
    ],
    declarations: [
        ContactosComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ContactosModule { }

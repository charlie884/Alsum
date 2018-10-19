import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ContactoRoutingModule } from "./contacto-routing.module";
import { ContactoComponent } from "./contacto.component";
import { AccordionModule } from "nativescript-accordion/angular";

@NgModule({
    imports: [
        AccordionModule,
        NativeScriptCommonModule,
        ContactoRoutingModule
    ],
    declarations: [
        ContactoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ContactoModule { }

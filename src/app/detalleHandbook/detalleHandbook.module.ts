import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DetalleHandbookRoutingModule } from "./detalleHandbook-routing.module";
import { DetalleHandbookComponent } from "./detalleHandbook.component";
import { AccordionModule } from "nativescript-accordion/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DetalleHandbookRoutingModule,
        AccordionModule
    ],
    declarations: [
        DetalleHandbookComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DetalleHandbookModule { }

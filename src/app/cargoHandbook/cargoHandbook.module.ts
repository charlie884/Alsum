import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CargoHandbookRoutingModule } from "./cargoHandbook-routing.module";
import { CargoHandbookComponent } from "./cargoHandbook.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CargoHandbookRoutingModule
    ],
    declarations: [
        CargoHandbookComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CargoHandbookModule { }

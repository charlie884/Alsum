import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ClausuladoRoutingModule } from "./clausulado-routing.module";
import { ClausuladoComponent } from "./clausulado.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ClausuladoRoutingModule
    ],
    declarations: [
        ClausuladoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ClausuladoModule { }

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ClausuladosRoutingModule } from "./clausulados-routing.module";
import { ClausuladosComponent } from "./clausulados.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ClausuladosRoutingModule
    ],
    declarations: [
        ClausuladosComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ClausuladosModule { }

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PresentacionesCongresoRoutingModule } from "./presentacionesCongreso-routing.module";
import { PresentacionesCongresoComponent } from "./presentacionesCongreso.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PresentacionesCongresoRoutingModule
    ],
    declarations: [
        PresentacionesCongresoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PresentacionesCongresoModule { }

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DetalleCongresoRoutingModule } from "./detalleCongreso-routing.module";
import { DetalleCongresoComponent } from "./detalleCongreso.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DetalleCongresoRoutingModule
    ],
    declarations: [
        DetalleCongresoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DetalleCongresoModule { }

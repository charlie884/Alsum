import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DetalleDirectorioRoutingModule } from "./detalleDirectorio-routing.module";
import { DetalleDirectorioComponent } from "./detalleDirectorio.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DetalleDirectorioRoutingModule
    ],
    declarations: [
        DetalleDirectorioComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DetalleDirectorioModule { }

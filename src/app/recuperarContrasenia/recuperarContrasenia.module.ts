import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RecuperarContraseniaRoutingModule } from "./recuperarContrasenia-routing.module";
import { RecuperarContraseniaComponent } from "./recuperarContrasenia.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RecuperarContraseniaRoutingModule
    ],
    declarations: [
        RecuperarContraseniaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RecuperarContraseniaModule { }

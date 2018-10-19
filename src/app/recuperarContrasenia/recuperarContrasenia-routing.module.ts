import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RecuperarContraseniaComponent } from "./recuperarContrasenia.component";

const routes: Routes = [
    { path: "", component: RecuperarContraseniaComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RecuperarContraseniaRoutingModule { }

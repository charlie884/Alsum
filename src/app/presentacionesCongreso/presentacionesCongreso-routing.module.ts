import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PresentacionesCongresoComponent } from "./presentacionesCongreso.component";

const routes: Routes = [
    { path: "", component: PresentacionesCongresoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PresentacionesCongresoRoutingModule { }

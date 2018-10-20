import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DetalleCongresoComponent } from "./detalleCongreso.component";

const routes: Routes = [
    { path: "", component: DetalleCongresoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DetalleCongresoRoutingModule { }

import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DetalleDirectorioComponent } from "./detalleDirectorio.component";

const routes: Routes = [
    { path: "", component: DetalleDirectorioComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DetalleDirectorioRoutingModule { }

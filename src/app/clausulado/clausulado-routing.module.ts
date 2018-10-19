import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ClausuladoComponent } from "./clausulado.component";

const routes: Routes = [
    { path: "", component: ClausuladoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ClausuladoRoutingModule { }

import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ClausuladosComponent } from "./clausulados.component";

const routes: Routes = [
    { path: "", component: ClausuladosComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ClausuladosRoutingModule { }

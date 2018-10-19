import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NosotrosComponent } from "./nosotros.component";

const routes: Routes = [
    { path: "", component: NosotrosComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NosotrosRoutingModule { }

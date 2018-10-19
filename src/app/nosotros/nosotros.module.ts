import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { NosotrosRoutingModule } from "./nosotros-routing.module";
import { NosotrosComponent } from "./nosotros.component";

import { AccordionModule } from "nativescript-accordion/angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NosotrosRoutingModule,
        AccordionModule
    ],
    declarations: [
        NosotrosComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NosotrosModule { }

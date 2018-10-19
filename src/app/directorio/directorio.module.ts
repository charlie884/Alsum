import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { GridViewModule } from 'nativescript-grid-view/angular';
import { DirectorioRoutingModule } from "./directorio-routing.module";
import { DirectorioComponent } from "./directorio.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DirectorioRoutingModule, 
        GridViewModule       
    ],
    declarations: [
        DirectorioComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DirectorioModule { }

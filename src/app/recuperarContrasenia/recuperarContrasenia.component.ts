import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { TNSFancyAlert } from "nativescript-fancyalert";
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "recuperarContrasenia", loadChildren: "./recuperarContrasenia/recuperarContrasenia.module#RecuperarContraseniaModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "RecuperarContrasenia",
    moduleId: module.id,
    templateUrl: "./recuperarContrasenia.component.html"
})
export class RecuperarContraseniaComponent implements OnInit {
    constructor(private routerExtensions: RouterExtensions) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    irAtras(): void {
        this.routerExtensions.back();// show success
        TNSFancyAlert.showSuccess(
          "Success!",
          "Fancy alerts are nice.",
          "Yes they are!"
        );
        TNSFancyAlert.showError( "Success!",
          "Fancy alerts are nice.",
          "Yes they are!")
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }
}

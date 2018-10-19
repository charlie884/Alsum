import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationEnd, Router } from "@angular/router";
import * as app from "tns-core-modules/application";
import { GridItemEventData } from "nativescript-grid-view";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items=[
        {nombre:'Nosotros',imagen:'~/images/nosotros-min.png',link:'/nosotros'},
        {nombre:'Cargo Handbook',imagen:'~/images/cargo_handbook-min.png',link:'/cargoHandbook'},
        {nombre:'Clausulados',imagen:'~/images/clausulados-min.png',link:'/clausulados'},
        {nombre:'Directorio de afiliados',imagen:'~/images/directorio_afiliados-min.png',link:'/directorio'},
        {nombre:'Presentaciones congreso',imagen:'~/images/presentaciones_congreo-min.png',link:'/presentacionesCongreso'},
        {nombre:'Contacto',imagen:'~/images/contacto-min.png',link:'/contactos'}
    ];

    constructor(private router: Router, private routerExtensions: RouterExtensions) {

    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}

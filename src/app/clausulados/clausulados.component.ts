import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { View } from "tns-core-modules/ui/core/view";
import * as app from "tns-core-modules/application";
import { Servicio } from "../servicio.service";
import * as observableArray from "tns-core-modules/data/observable-array";
import * as ApplicationSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Clausulados",
    moduleId: module.id,
    templateUrl: "./clausulados.component.html"
})
export class ClausuladosComponent implements OnInit {
    public clausulados = new observableArray.ObservableArray([]);

    public categorias = new observableArray.ObservableArray([]);
    public subcategorias = new observableArray.ObservableArray([]);

    public tabs:Array<any>;

    constructor(private ws:Servicio,private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
        
        let model = this;

        model.ws.categoriasClausulados().subscribe((res) => {
            console.log('Respuesta de las categorias ');
            console.log(res);
            model.tabs=[];
            for (let i = 0; i < Object.keys(res).length; i++) {
                model.categorias.push(res[i]);
                model.tabs.push(res[i]);
            }
        }, (error) => {
            console.log(error);
        });
    }
    cargada(id){
        console.log('Cargada: '+id);
        let model = this;
        model.ws.subcategoriasClausulados(id).subscribe((res) => {
            console.log('Respuesta de la subcategorias ');
            console.log(res);
            model.subcategorias= new observableArray.ObservableArray([]);
            for (let i = 0; i < Object.keys(res).length; i++) {
                model.subcategorias.push(res[i]);
            }
        }, (error) => {
            console.log(error);
        });
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}

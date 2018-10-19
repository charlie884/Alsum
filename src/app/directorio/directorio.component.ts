import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { View } from "tns-core-modules/ui/core/view";
import * as app from "tns-core-modules/application";
import {Servicio} from '../servicio.service';
import * as observableArray from "tns-core-modules/data/observable-array";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import {LoadingIndicator} from "nativescript-loading-indicator";
import * as ApplicationSettings from "application-settings";
import { RouterExtensions } from "nativescript-angular/router";
import { GridItemEventData } from "nativescript-grid-view";

@Component({
    selector: "Directorio",
    moduleId: module.id,
    templateUrl: "./directorio.component.html"
})
export class DirectorioComponent implements OnInit {
    public categorias = new observableArray.ObservableArray([]);
    public subcategorias = new observableArray.ObservableArray([]);
    public tabs:Array<any>;
    constructor(private ws:Servicio,private routerExtensions: RouterExtensions) {
        let model = this;
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

    ngOnInit(): void {
        let model = this;

        model.ws.categoriasDirectorio().subscribe((res) => {
            console.log('Respuesta de las categorias ');
            console.log(res);
           
            model.tabs=[];
            for (let i = 0; i < Object.keys(res).length; i++) {
                if (res[i].name == 'Miembros') {
                    model.categorias.push(res[i]);
                    model.tabs.push(res[i]);
                }
                if (res[i].name == 'Asociados') {
                    model.categorias.push(res[i]);
                    model.tabs.push(res[i]);
                }
            }
        }, (error) => {
            console.log(error);
        });

    }
    cargada(id){
        console.log('Cargada: '+id);
        let model = this;
        model.ws.obtenerEmpresasDirectorio(id).subscribe((res) => {
            ApplicationSettings.setString('empresas',JSON.stringify(res));
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

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}

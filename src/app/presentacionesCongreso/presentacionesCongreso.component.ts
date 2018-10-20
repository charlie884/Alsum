import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { View } from "tns-core-modules/ui/core/view";
import * as app from "tns-core-modules/application";
import {Servicio} from '../servicio.service';
import * as observableArray from "tns-core-modules/data/observable-array";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import {LoadingIndicator} from "nativescript-loading-indicator";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";

let loader = new LoadingIndicator();

@Component({
    selector: "PresentacionesCongreso",
    moduleId: module.id,
    templateUrl: "./presentacionesCongreso.component.html"
})
export class PresentacionesCongresoComponent implements OnInit {
    public dias = new observableArray.ObservableArray([]);
    public charlas = new observableArray.ObservableArray([]);

    public tabs:Array<any>;


    constructor(private ws:Servicio,private routerExtensions: RouterExtensions) {

    }

    ngOnInit(): void {
        
        let model = this;

        model.ws.dias().subscribe((res) => {            
            console.log('Respuesta de los dias ');
            console.log(res);
            model.tabs=[];
            for (let i = 0; i < Object.keys(res).length; i++) {
                model.dias.push(res[i]);
                model.tabs.push(res[i]);
            }
        }, (error) => {
            console.log(error);
        });
    }
    cargada(id){
        console.log('Cargada: '+id);
        loader.show({
            message:"Cargando charlas"
        });
        let model = this;
        model.ws.charlas(id).subscribe((res) => {
            ApplicationSettings.setString('charlas',JSON.stringify(res));
            loader.hide();
            console.log('Respuesta de la charla ');
            console.log(res);
            model.charlas= new observableArray.ObservableArray([]);
            for (let i = 0; i < Object.keys(res).length; i++) {
                model.charlas.push(res[i]);
            }
        }, (error) => {
            loader.hide();
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

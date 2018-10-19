import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
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

    constructor(private ws:Servicio,private routerExtensions: RouterExtensions) {
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
      model.ws.obtenerClausulados().subscribe((res)=>{
            console.log('Respuesta de lo clausulados: '+Object.keys(res).length);
            console.log(JSON.stringify(res));
            ApplicationSettings.setString('clausulados',JSON.stringify(res));
            for(let i = 0; i <Object.keys(res).length; i++) {
                console.log('Pintando a:');
                console.log(res[i]); // "species"

                model.clausulados.push(res[i]);

            }

            
        }, (error) => {
            console.log('Error trayendo clausulados');
            console.log(error);
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}

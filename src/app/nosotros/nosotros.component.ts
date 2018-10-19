import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as observableArray from "tns-core-modules/data/observable-array";
import { Servicio } from "../servicio.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Nosotros",
    moduleId: module.id,
    templateUrl: "./nosotros.component.html"
})
export class NosotrosComponent implements OnInit {
    public nosotros=[];
    constructor(private ws:Servicio,private routerExtensions: RouterExtensions) {
        let model = this;
      model.ws.obtenerNosotros().subscribe((res:any)=>{
            console.log(res);
            console.log();    

            model.nosotros = [{
                title:res.alsum[0].post_title,
                items: [
                    { texto: 'textososo'}
                ]
            },{
                title:'Líneas de acción',
                items: [
                    { texto: 'textososo'}
                ]
            },{
                title:'Fundadores',
                items: [
                    { texto: 'textososo'}
                ]
            }];
            console.log(model.nosotros); 

            
            
        }, (error) => {
            console.log('Error trayendo nosotros');
            console.log(error);
        });

    }

    ngOnInit(): void {
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

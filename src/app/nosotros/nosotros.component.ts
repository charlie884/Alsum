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

            model.nosotros = [{
                title:res.alsum[0].post_title.replace(':es',':').replace(':en',':').split('[:]')[1],
                items: [
                    { 
                        imagen:res.alsum[0].imagen[0].guid,
                        texto: res.alsum[0].post_content.replace(':es',':').replace(':en',':').split('[:]')[1]

                    }
                ]
            },{
                title:'Líneas de acción',
                items: [
                    { 
                        imagen:res.lineas[0].imagen[0].guid,
                        texto: res.lineas[0].post_content.replace(':es',':').replace(':en',':').split('[:]')[1]
                    }
                ]
            },{
                title:res.fundadores[0].post_title.replace(':es',':').replace(':en',':').split('[:]')[1],
                items: [
                    { 
                        imagen:res.fundadores[0].imagen[0].guid,
                        texto:res.fundadores[0].post_content.replace(':es',':').replace(':en',':').split('[:]')[1]
                    }
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

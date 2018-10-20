import { Component, OnInit,Input } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { View } from 'tns-core-modules/ui/core/view';
import * as ApplicationSettings from "application-settings";
import { ActivatedRoute } from "@angular/router";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "detalleCongreso", loadChildren: "./detalleCongreso/detalleCongreso.module#DetalleCongresoModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "DetalleCongreso",
    moduleId: module.id,
    templateUrl: "./detalleCongreso.component.html"
})
export class DetalleCongresoComponent implements OnInit {
    charlas:any;
    id:string;
    charla:any;
    constructor(private routerExtensions: RouterExtensions,private route: ActivatedRoute) {
        console.log(ApplicationSettings.getString('charlas'));
        this.charlas=JSON.parse(ApplicationSettings.getString('charlas'));
        this.route.params.forEach((params) => { 
            console.log('Parametros de url');
            this.id = params["id"];
        });
        console.log('Charla a buscar: '+this.id);
    }

    ngOnInit(): void {
      this.charlas.forEach((charla)=>{
          console.log('Charla');
          if(charla.id==this.id){
              this.charla=charla;
              console.log(this.charla);
          }
      });
    }
    irAtras(): void {
        this.routerExtensions.back();
    }
}

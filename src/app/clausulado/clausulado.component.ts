import { Component, OnInit, Input, ChangeDetectionStrategy, AfterViewInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { View } from 'tns-core-modules/ui/core/view';
import * as ApplicationSettings from "application-settings";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "Clausulado",
    moduleId: module.id,
    templateUrl: "./clausulado.component.html"
})
export class ClausuladoComponent implements OnInit {
    clausulados:any;
    id:string;
    clausulado:any;

    constructor(private routerExtensions: RouterExtensions,private route: ActivatedRoute) {
        console.log(ApplicationSettings.getString('clausulados'));
        this.clausulados=JSON.parse(ApplicationSettings.getString('clausulados'));
        this.route.params.forEach((params) => { 
            console.log('Parametros de url');
            this.id = params["ID"];
        });
        console.log('Contacto a buscar: '+this.id);
    }

    ngOnInit(): void {
      this.clausulados.forEach((clausulado)=>{
          console.log('clausulado');
          console.log(clausulado);
          if(clausulado.ID==this.id){
              this.clausulado=clausulado;
          }
      });
    }

    irAtras(): void {
        this.routerExtensions.back();
    }
}

import { Component, OnInit, Input, ChangeDetectionStrategy, AfterViewInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { View } from 'tns-core-modules/ui/core/view';
import * as ApplicationSettings from "application-settings";
import { ActivatedRoute } from "@angular/router";
import {Servicio} from '../servicio.service';

@Component({
    selector: "Clausulado",
    moduleId: module.id,
    templateUrl: "./clausulado.component.html"
})
export class ClausuladoComponent implements OnInit {
    id:string;
    clausulado:any;

    constructor(private ws:Servicio,private routerExtensions: RouterExtensions,private route: ActivatedRoute) {
        let model = this;
        model.route.params.forEach((params) => { 
            console.log('Parametros de url');
            model.id = params["ID"];
        });
        console.log('Detalle a buscar: '+model.id);
    }

    ngOnInit(): void {
        let model = this;
        model.ws.detalleClausulado(model.id).subscribe((res)=>{

          console.log(res);
          console.log(res[0].post_content);
          this.clausulado = res[0].post_content.replace(':es',':').replace(':en',':').split('[:]')[1];

        }, (error) => {
            console.log(error);
        });
    }

    irAtras(): void {
        this.routerExtensions.back();
    }
}

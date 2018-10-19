import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { View } from 'tns-core-modules/ui/core/view';
import * as ApplicationSettings from "application-settings";
import { ActivatedRoute } from "@angular/router";
import {Servicio} from '../servicio.service';
import * as observableArray from "tns-core-modules/data/observable-array";

@Component({
    selector: "DetalleHandbook",
    moduleId: module.id,
    templateUrl: "./detalleHandbook.component.html"
})
export class DetalleHandbookComponent implements OnInit {

    public detalles = new observableArray.ObservableArray([]);
    id:string;
    img:any;
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
        model.ws.obtenerDetalleHandbook(model.id).subscribe((res)=>{
            this.img = res[0].detalle.imagen;

            console.log('respuesta descripcion hangbook');
            console.log((res[0].post_title).replace(':es',':').replace(':en',':').split('[:]')[1]);
            let detalle = res[0].post_content.replace(':es',':').replace(':en',':').split('[:]')[1].split('<h2');
            console.log(detalle.shift());

            detalle.forEach((valor)=>{
                valor = '<h2'+valor;
                let titulo = valor.match(/<h2 [^>]+>([^<]+)<\/h2>/)[1];
                let texto = valor.replace(valor.match(/<h2 [^>]+>([^<]+)<\/h2>/)[0],'');
                let elemento = {
                    title:titulo,
                    items: [
                        { texto: texto}
                    ]
                }
                model.detalles.push(elemento);
            });

            console.log(model.detalles);

        }, (error) => {
            console.log(error);
        });
        //model.id

    }

    irAtras(): void {
        this.routerExtensions.back();
    }
}

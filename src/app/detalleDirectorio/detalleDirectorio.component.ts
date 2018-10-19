import { Component, OnInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { View } from 'tns-core-modules/ui/core/view';
import * as ApplicationSettings from "application-settings";
import { ActivatedRoute } from "@angular/router";
import {Servicio} from '../servicio.service';
import * as observableArray from "tns-core-modules/data/observable-array";

@Component({
    selector: "DetalleDirectorio",
    moduleId: module.id,
    templateUrl: "./detalleDirectorio.component.html"
})
export class DetalleDirectorioComponent implements OnInit {
    empresas:any;
    id:string;
    empresa:any;
    constructor(private routerExtensions: RouterExtensions,private route: ActivatedRoute) { 
        console.log(ApplicationSettings.getString('empresas'));
        this.empresas=JSON.parse(ApplicationSettings.getString('empresas'));
        this.route.params.forEach((params) => { 
            console.log('Parametros de url');
            this.id = params["ID"];
        });
        console.log('Empresa a buscar: '+this.id);
    }

    ngOnInit(): void {
      this.empresas.forEach((empresa)=>{
          console.log('Empresa');
          if(empresa.ID==this.id){
              this.empresa=empresa;
          }
      });
      console.log(this.empresa);
    }

    irAtras(): void {
        this.routerExtensions.back();
    }
}

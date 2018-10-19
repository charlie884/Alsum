import { Component, OnInit,Input, ChangeDetectionStrategy, AfterViewInit } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { View } from 'tns-core-modules/ui/core/view';
import * as ApplicationSettings from "application-settings";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "Contacto",
    moduleId: module.id,
    templateUrl: "./contacto.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ContactoComponent implements OnInit {
    contactos:any;
    id:string;
    contacto:any;
    constructor(private routerExtensions: RouterExtensions,private route: ActivatedRoute) { 
        console.log(ApplicationSettings.getString('contactos'));
        this.contactos=JSON.parse(ApplicationSettings.getString('contactos'));
        this.route.params.forEach((params) => { 
            console.log('Parametros de url');
            this.id = params["ID"];
        });
        console.log('Contacto a buscar: '+this.id);
    }

    // public onItemTap(args)  {
    //     console.log("Item Tapped at cell index: " + args.index);
    // }

    ngOnInit(): void {
      this.contactos.forEach((contacto)=>{
          console.log('Contacto');
          if(contacto.ID==this.id){
              this.contacto=contacto;
          }
      });
    }

    irAtras(): void {
        this.routerExtensions.back();
    }
}

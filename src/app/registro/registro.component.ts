import { Component, OnInit } from "@angular/core";
import {Page} from "ui/page";
import { ListPicker } from "tns-core-modules/ui/list-picker";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "Registro",
    moduleId: module.id,
    templateUrl: "./registro.component.html"
})
export class RegistroComponent implements OnInit {
    name: string;
    telefono: string;
    email: string;
    password: string;
    items=[ 'Tipo uno','Tipo dos','Tipo tres' ];
    constructor(private page: Page,private routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onSignupWithSocialProviderButtonTap(): void {
        /* ***********************************************************
        * For sign up with social provider you can add your custom logic or
        * use NativeScript plugin for sign up with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    }

    public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        console.log("picker selection: " + picker.selectedIndex);
    }

    irAtras(): void {
        this.routerExtensions.back();
    }

    onSignupButtonTap(): void {
        const name = this.name;
        const email = this.email;
        const password = this.password;

        /* ***********************************************************
        * Call your custom signup logic using the email and password data.
        *************************************************************/
    }
}

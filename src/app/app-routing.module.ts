import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
    { path: "registro", loadChildren: "~/app/registro/registro.module#RegistroModule" },
    { path: "recuperarContrasenia", loadChildren: "~/app/recuperarContrasenia/recuperarContrasenia.module#RecuperarContraseniaModule" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" },
    { path: "nosotros", loadChildren: "~/app/nosotros/nosotros.module#NosotrosModule" },
    { path: "clausulados", loadChildren: "~/app/clausulados/clausulados.module#ClausuladosModule" },
    { path: "clausulado", loadChildren: "~/app/clausulado/clausulado.module#ClausuladoModule" },
    { path: "clausulado/:ID", loadChildren: "~/app/clausulado/clausulado.module#ClausuladoModule" },
    { path: "detalleDirectorio", loadChildren: "~/app/detalleDirectorio/detalleDirectorio.module#DetalleDirectorioModule" },
    { path: "detalleDirectorio/:ID", loadChildren: "~/app/detalleDirectorio/detalleDirectorio.module#DetalleDirectorioModule" },
    { path: "directorio", loadChildren: "~/app/directorio/directorio.module#DirectorioModule" },
    { path: "presentacionesCongreso", loadChildren: "~/app/presentacionesCongreso/presentacionesCongreso.module#PresentacionesCongresoModule" },
    { path: "contactos", loadChildren: "~/app/contactos/contactos.module#ContactosModule" },
    { path: "contacto", loadChildren: "~/app/contacto/contacto.module#ContactoModule" },
    { path: "contacto/:ID", loadChildren: "~/app/contacto/contacto.module#ContactoModule" },
    { path: "detalleHandbook", loadChildren: "~/app/detalleHandbook/detalleHandbook.module#DetalleHandbookModule" },
    { path: "detalleHandbook/:ID", loadChildren: "~/app/detalleHandbook/detalleHandbook.module#DetalleHandbookModule" },
    { path: "cargoHandbook", loadChildren: "~/app/cargoHandbook/cargoHandbook.module#CargoHandbookModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

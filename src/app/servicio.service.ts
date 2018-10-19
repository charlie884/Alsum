import { Injectable } from "@angular/core";
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import * as platform from "platform";

@Injectable()
export class Servicio {
    public urlServidor:string = 'https://alsum.co/api/index.php/api/example/';
    constructor(private http: HttpClient) { }

    
    obtenerCategoriasHandbook() { 
        var serverUrl = this.urlServidor+'categoriasHandbook';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    }

    
    obtenerContactos() { 
        var serverUrl = this.urlServidor+'contactos';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    }

    obtenerSubcategoriasHandbook(idCategoria) { 
        var serverUrl = this.urlServidor+'subcategoriasHandbook';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { params:{id:idCategoria}, headers: headers })
            .pipe(map(res => res));
    }



    obtenerNosotros() { 
        var serverUrl = this.urlServidor+'nosotros';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    }

    obtenerClausulados() { 
        var serverUrl = this.urlServidor+'obtenerClausulados';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    }
    
    categoriasDirectorio() { 
        var serverUrl = this.urlServidor+'categoriasDirectorio';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    }

    obtenerEmpresasDirectorio(idEmpresa) { 
        var serverUrl = this.urlServidor+'empresasDeDirectorio';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { params:{id:idEmpresa}, headers: headers })
            .pipe(map(res => res));
    }  

    obtenerDetalleHandbook(idSubcategoria) { 
        var serverUrl = this.urlServidor+'detalleHandbook';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { params:{id:idSubcategoria}, headers: headers })
            .pipe(map(res => res));
    }    

    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json",
         });

        return headers;
    }
}
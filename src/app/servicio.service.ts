import { Injectable } from "@angular/core";
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import * as platform from "platform";

@Injectable()
export class Servicio {    
    public urlServidor:string = 'https://alsum.co/api/index.php/api/example/';
    public urlServidorCongreso:string = 'https://alsum.co/api/index.php/api/congreso/';
    constructor(private http: HttpClient) { }

    // VISTA CARGO HANDBOOK
    
    obtenerCategoriasHandbook() { 
        var serverUrl = this.urlServidor+'categoriasHandbook';
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

    obtenerDetalleHandbook(idSubcategoria) { 
        var serverUrl = this.urlServidor+'detalleHandbook';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { params:{id:idSubcategoria}, headers: headers })
            .pipe(map(res => res));
    }   

    // VISTA CANTACTO
    
    obtenerContactos() { 
        var serverUrl = this.urlServidor+'contactos';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    }

    // VISTA NOSOTROS

    obtenerNosotros() { 
        var serverUrl = this.urlServidor+'nosotros';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    }

    // VISTA CLUSULADOS

    categoriasClausulados() { 
        var serverUrl = this.urlServidor+'categoriasClausulados';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    }

    subcategoriasClausulados(idCategoria) { 
        var serverUrl = this.urlServidor+'subcategoriasClausulados';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { params:{id:idCategoria}, headers: headers })
            .pipe(map(res => res));
    }  

    detalleClausulado(idSubcategoria) { 
        var serverUrl = this.urlServidor+'detalleClausulado';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { params:{id:idSubcategoria}, headers: headers })
            .pipe(map(res => res));
    }  

    // VISTA DIRECTORIO AFILIADOS
    
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

    // VISTA VISTA DE CONGRESO

    dias() { 
        var serverUrl = this.urlServidorCongreso+'dias';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { headers: headers })
            .pipe(map(res => res));
    }

    charlas(idDia) { 
        var serverUrl = this.urlServidorCongreso+'charlas';
        let headers = this.createRequestHeader();
        // console.log('respues url: '+serverUrl)

        return this.http.get(serverUrl, { params:{dia:idDia}, headers: headers })
            .pipe(map(res => res));
    }  

    // detalleClausulado(idSubcategoria) { 
    //     var serverUrl = this.urlServidorCongreso+'detalleClausulado';
    //     let headers = this.createRequestHeader();
    //     // console.log('respues url: '+serverUrl)

    //     return this.http.get(serverUrl, { params:{id:idSubcategoria}, headers: headers })
    //         .pipe(map(res => res));
    // }  



    // HEADERS 

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
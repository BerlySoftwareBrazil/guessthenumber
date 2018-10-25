//#region Core
import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//#endregion

//#region Imports
import { Cobertura, TipoCobertura} from '../db/model';
import { TuIA_LocalHost_Api, TuIA_MockYo_Api} from '../app.api';
//#endregion

@Injectable()
export class CoberturasService{
    constructor(private http: Http){}

    coberturas(): Observable<Cobertura[]>{
        return this.http.get(`${TuIA_LocalHost_Api}/cobertura`).map(response => response.json());
    }
}
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService{

    public url: string;

    constructor(private _http: HttpClient){
        this.url = GLOBAL.url;
    }

    singUp(to_login, gethash = null):Observable<any>{
        //Sugerencia
        if(gethash != null){
            to_login.gethash = gethash;
        }
        
        let json = JSON.stringify(to_login);

        let params = json;

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+ 'login', params, {headers: headers});
        /*let json = JSON.stringify(to_login);
        let params = json;

        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+ 'login', params, {headers: headers}).pipe(map(res => res.json()));; */
    }

}

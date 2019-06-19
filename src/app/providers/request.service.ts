import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReqeustService {
    private errorObserver: any;
    public error: any;

    constructor(private http: HttpClient) {
        this.errorObserver = null;
        this.error = Observable.create(observer => {
            this.errorObserver = observer;
        });
    }

    public _call( endpoint: string ) {
        return this._get(endpoint);
    }

    public _get(endpoint: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json'
                })
            };

            this.http.get(endpoint, httpOptions).toPromise().then((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }

    public handleError(error, reject) {
        reject(error);
        this.errorObserver.next(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
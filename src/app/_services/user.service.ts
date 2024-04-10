import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = "http://localhost:6565/";

    constructor(private http: Http) { }
    postfitnessdata(data){
      return this.http.post(UserService.BaseUrl+'appointment',data,httpOptions).pipe(map((response: Response) => response.json()));
    }
    getfitnessdata() {
      return this.http.get(UserService.BaseUrl+'appointment',httpOptions).pipe(map((response: Response) => response.json()));
    }
    // add more methods as per requirements

    deletefitnessdata(id){
      return this.http.delete(UserService.BaseUrl+'appointment/'+id,httpOptions).pipe(map((response: Response) => response.json()));
    }
    updatefitnessdata(data){
      return this.http.put(UserService.BaseUrl+'appointment/'+data.id,data,httpOptions).pipe(map((response: Response) => response.json()));
    }
    submitContactForm(data){
      return this.http.post(UserService.BaseUrl+'query',data,httpOptions).pipe(map((response: Response) => response.json()));
    }
  }
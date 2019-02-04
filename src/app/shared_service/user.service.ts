import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}; 

@Injectable({
  providedIn: 'root'
})


export class UserService {
  private baseurl: string = "localhost:8080";
  //private headers = new HttpHeaders({'Content-Type':'application/json'});
  //private options = new Request({'Content-Type':'headers'});
  private user: User;
  constructor(private http: HttpClient) { }

  /*getUsers(){
    return this.http.get(this.baseurl+'/users', httpOptions).map((response: Response) => response.json()).catch(this.errorHandler);
  }*/

  getUsers(): Observable<any> {
    return this.http.get('//localhost:8080/users',httpOptions);
  }

  /*getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users');
  }
  deleteUser(id:number){
    return this.http.get(this.baseurl+'/users'+id, httpOptions).map((response: Response) => response.json()).catch(this.errorHandler);
  }
  public deleteUser(emailid: String): Observable<any> {
    console.log(emailid);
    const body = JSON.stringify(emailid);
    console.log(body);

    return this.http.delete('http://localhost:8080/users/delete/' + emailid);
  }
  addUser(user: Todo): Observable<any> {
    const body = JSON.stringify(user);
    return this.http.post('http://localhost:8080/users/add', body);
  }
  createUser(user: User){
    return this.http.post(this.baseurl+'/users', JSON.stringify(user), httpOptions).map((response: Response) => response.json()).catch(this.errorHandler);
  }
  updateUser(user: User){
    return this.http.put(this.baseurl+'/users', JSON.stringify(user), httpOptions).map((response: Response) => response.json()).catch(this.errorHandler);
  }*/

  deleteUser(id: number): Observable<any> {
    console.log(id);
    const body = JSON.stringify(id);
    console.log(body);
    return this.http.delete('//localhost:8080/user/' + id);
  }
  createUser(user: User): Observable<any>{
    const body = JSON.stringify(user);
    return this.http.post('//localhost:8080/user' , body, httpOptions);
  }
  updateUser(user: User): Observable<any>{
    const body = JSON.stringify(user);
    return this.http.post('//localhost:8080/user' , body, httpOptions);
  }
  
  errorHandler(error: Response){
    return Observable.throw(error || "SERVER ERROR");  
  }

  setter(user){
    this.user = user;
  }

  getter(){
    return this.user;
  }
}

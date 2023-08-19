import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient:HttpClient) { }
  getfunction(){
  return this.httpclient.get('https://jsonplaceholder.typicode.com/posts')
  }
  postfunction(data:any){
    return this.httpclient.post('https://jsonplaceholder.typicode.com/posts',data)
  }
  putfunction(id:any,data:any){
    return this.httpclient.put('https://jsonplaceholder.typicode.com/posts/'+id,data)
  }
  deletefuction(id:any){
return this.httpclient.delete('https://jsonplaceholder.typicode.com/posts/'+id)
  }
}

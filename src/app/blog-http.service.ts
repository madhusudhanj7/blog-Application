import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {


  public allBlogs;
  public currenBlog;
  public baseUrl = "https://blogapp.edwisor.com/api/v1/blogs";
  public authToken = "MTExMDQyZjE5NGQ4ZmRlZmE4Zjk1MzI2OWRjOTdiODM2ZDA5YmEwYTdlNzRhNDQ2NmU1YTk5ZGMzODA2NmY0ZDUzMDk3YTdlMmQ1NWZkN2ZlY2U0ODM0YjQ1OGMyYWIzZDAzYmZiNjY1NjQ1ZWE0YjlkMTU1ZjcyN2FjNjhiOTY2ZDZi"

  constructor(private _http: HttpClient) {
    console.log("blog-http service was called");
  }

  private handlerError(err: HttpErrorResponse) {
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message)
  }
  public getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;

  }

  public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken)
    return myResponse;
  }

  public createBlog(blogData): any {
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
    return myResponse;
  }
  public deleteBlog(blogId): any {
    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken' + this.authToken, data)
    return myResponse;
  }
  public editBlog(blogId, blogData): any {
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken' + this.authToken, blogData)
    return myResponse;
  }

}
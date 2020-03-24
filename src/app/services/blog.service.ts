import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.baseUrl + 'blogs/');
  }

  getBlog(id: string): Observable<Blog> {
    return this.http.get<Blog>(this.baseUrl + 'blogs/' + id);
  }

}

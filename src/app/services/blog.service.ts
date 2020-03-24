import { Injectable } from '@angular/core';
import { Blog } from '../models/Blog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // blogs: Blog[] = [
  //   {
  //     title: 'Toma control sobre tus limpiezas',
  //     // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: max-line-length
  //     content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae vel necessitatibus cumque beatae! Eligendi unde quam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae vel necessitatibus cumque beatae! Eligendi unde quam eos nesciunt, reprehenderit dicta dignissimos, odio quasi, debitis asperiores libero aperiam maiores doloremque rerum reprehenderit dicta dignissimos, odio quasi, debitis asperiores libero aperiam maiores doloremque rerum?`,
  //     imgUrl: 'libros.jpg'
  //   },
  //   {
  //     title: 'lorem',
  //     // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: max-line-length
  //     content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae vel necessitatibus cumque beatae! Eligendi unde quam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae vel necessitatibus cumque beatae! Eligendi unde quam eos nesciunt, reprehenderit dicta dignissimos, odio quasi, debitis asperiores libero aperiam maiores doloremque rerum reprehenderit dicta dignissimos, odio quasi, debitis asperiores libero aperiam maiores doloremque rerum?`,
  //     imgUrl: 'bosque.jpg'
  //   },
  //   {
  //     title: 'blog3',
  //     // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: max-line-length
  //     content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae vel necessitatibus cumque beatae! Eligendi unde quam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae vel necessitatibus cumque beatae! Eligendi unde quam eos nesciunt, reprehenderit dicta dignissimos, odio quasi, debitis asperiores libero aperiam maiores doloremque rerum reprehenderit dicta dignissimos, odio quasi, debitis asperiores libero aperiam maiores doloremque rerum?`,
  //     imgUrl: 'estudio.jpg'
  //   },
  // ];

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>('https://steffani-mendoza-api.herokuapp.com/blogs');
  }

  getBlog(id: string): Observable<Blog> {
    return this.http.get<Blog>(`https://steffani-mendoza-api.herokuapp.com/blogs/${id}`);
  }


}

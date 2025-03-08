import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts')
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/posts', post)
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, } from '@angular/forms'
import { Post } from '../../model/Post'
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-feed',
  imports: [FormsModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit {
  listPost: Post[] = []
  post: Post = new Post

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.findPosts()
  }

  findPosts() {
    this.service.getPost().subscribe((data: Post[]) => {
      this.listPost = data
    })
  }

  cadastrarMensagem() {
    this.service.createPost(this.post).subscribe((data: Post) => {
      this.post = data
      location.assign('/feed')
    })
  }
}

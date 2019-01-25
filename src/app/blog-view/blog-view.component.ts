import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": ["humour", "standup comedy", "tag3", "tag4"],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-21T21:47:51.678Z",
      "created": "2017-10-21T21:47:51.678Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 2 description",
      "title": "This is blog 2"
    },
    {
      "blogId": "3",
      "lastModified": "2017-11-14T14:15:54.407Z",
      "created": "2017-11-14T14:15:54.407Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog 3 description",
      "title": "This is blog 3"
    },
  ]

  constructor(private _route: ActivatedRoute, private router: Router) {
    console.log("blog-view constuctor is called");

  }

  ngOnInit() {
    console.log("blog view ngOnInit Called");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);

  }
  ngOnDestroy() {
    console.log("blog-view destroyed")

  }


}

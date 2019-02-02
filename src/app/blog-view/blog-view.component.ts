import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService } from "../blog-http.service";
// import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { ToastrService } from 'ngx-toastr';
import { AnimationEvent } from "@angular/animations";
import { Location } from "@angular/common";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

  // public allBlogs = [{
  //   "blogId": "1",
  //   "lastModified": "2017-10-20T12:20:47.854Z",
  //   "created": "2017-10-20T12:20:47.854Z",
  //   "tags": [],
  //   "author": "Admin",
  //   "category": "Comedy",
  //   "isPublished": true,
  //   "views": 0,
  //   "bodyHtml": "this is blog body",
  //   "description": "this is blog 1 description",
  //   "title": "This is blog 1"
  // },
  // {
  //   "blogId": "2",
  //   "lastModified": "2017-10-21T21:47:51.678Z",
  //   "created": "2017-10-21T21:47:51.678Z",
  //   "tags": [],
  //   "author": "Admin",
  //   "category": "Comedy",
  //   "isPublished": true,
  //   "views": 0,
  //   "bodyHtml": "this is blog body",
  //   "description": "this is blog 2 description",
  //   "title": "This is blog 2"
  // },
  // {
  //   "blogId": "3",
  //   "lastModified": "2017-11-14T14:15:54.407Z",
  //   "created": "2017-11-14T14:15:54.407Z",
  //   "tags": [],
  //   "author": "Admin",
  //   "category": "Comedy",
  //   "isPublished": true,
  //   "views": 0,
  //   "bodyHtml": "this is blog body",
  //   "description": "this is blog 3 description",
  //   "title": "This is blog 3"
  // }]

  constructor(private _route: ActivatedRoute, private router: Router, public blogService: BlogService, public blogHttpService: BlogHttpService, private toastr: ToastrService, vcr: ViewContainerRef, private location: Location) {
    console.log("blog-view constuctor is called");
    // this.toastr.setRootViewContainerRef(vcr);

  }

  ngOnInit() {
    console.log("blog view ngOnInit Called");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //  this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId);
    //  console.log(this.currentBlog);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        // console.log("logging data")
        console.log(data);
        this.currentBlog = data["data"];
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )

  }

  public deleteThisBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        this.toastr.success('Blog Deleted successfully', 'Success');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('Some error occured', 'Error');
      }
    )
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }

  ngOnDestroy() {
    console.log("blog view destroyed")
  }



}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogService } from "./blog.service";
import { BlogHttpService } from "./blog-http.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { Http, HttpModule } from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogViewComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'blog/:blogId', component: BlogViewComponent },
      { path: 'create', component: BlogCreateComponent },
      { path: 'edit/:blogId', component: BlogEditComponent },
      { path: '**', component: NotFoundComponent },


    ])
  ],
  providers: [BlogService, BlogHttpService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule {


}

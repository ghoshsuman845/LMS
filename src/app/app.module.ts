import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { CourseComponent } from './content/course/course.component';
import { PageComponent } from './content/page/page.component';
import { ArticleComponent } from './content/article/article.component';
import { BlockComponent } from './content/block/block.component';
import { ComponentContentComponent } from './component-content/component-content.component';
import { GraphicsComponent } from './component-content/graphics/graphics.component';
import { TextBoxComponent } from './component-content/text-box/text-box.component';
import { PageStructureComponent } from './page-structure/page-structure.component';
import { EditorPaneComponent } from './editor-pane/editor-pane.component';
import { ComponentSidebarComponent } from './component-sidebar/component-sidebar.component';
import { FinalCourseComponent } from './final-course/final-course.component';
import { PagesComponent } from './final-course/pages/pages.component';
import { ArticlesComponent } from './final-course/articles/articles.component';
import { BlocksComponent } from './final-course/blocks/blocks.component';
import { ComponentsComponent } from './final-course/components/components.component';
import { GraphicComponent } from './final-course/components/graphic/graphic.component';
import { TextComponent } from './final-course/components/text/text.component';
import {EditorModule} from 'primeng/editor';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContentComponent,
    CourseComponent,
    PageComponent,
    ArticleComponent,
    BlockComponent,
    ComponentContentComponent,
    GraphicsComponent,
    TextBoxComponent,
    PageStructureComponent,
    EditorPaneComponent,
    ComponentSidebarComponent,
    FinalCourseComponent,
    PagesComponent,
    ArticlesComponent,
    BlocksComponent,
    ComponentsComponent,
    GraphicComponent,
    TextComponent
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EditorModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

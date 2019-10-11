import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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



const routes: Routes = [
{ path: '',redirectTo: '/page-structure',pathMatch: 'full'},

{ path: 'dashboard', 
component: DashboardComponent ,
},
{ path: 'component-sidebar', 
component: ComponentSidebarComponent ,
},
{ path: 'editor-pane', 
component: EditorPaneComponent ,
},
{ path: 'page-structure', 
component: PageStructureComponent ,
},

{path: 'content', 
component: ContentComponent,
children: [
  {path: 'page', component: PageComponent},
  {path: 'article', component: ArticleComponent}, 
  {path: 'block', component: BlockComponent}, 
  {path: 'course', component: CourseComponent},
 
]
},

{path: 'final-course', 
component: FinalCourseComponent,
children: [
  {path: 'pages', component: PagesComponent},
  {path: 'articles', component: ArticlesComponent}, 
  {path: 'blocks', component: BlocksComponent}, 
  {path: 'course', component: CourseComponent},
  {path: 'components', component: ComponentsComponent,
  children:[
    {path:'graphic',component:GraphicComponent},
    {path:'text',component:TextComponent},

  ]
}, 
 
]
},

{path: 'component-content', 
component: ComponentContentComponent,
children: [
  {path: 'graphics', component: GraphicsComponent},
  {path: 'text-box', component: TextBoxComponent}, 
]
}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

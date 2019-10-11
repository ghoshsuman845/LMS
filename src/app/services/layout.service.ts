import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Course } from '../models/course.model';
import { Page } from '../models/page.model';
import { Article } from '../models/article.model';
import { Block } from '../models/block.model';
import { Subject } from 'rxjs';
import { Graphics } from '../models/components/graphics.model';
import { TextBox} from '../models/components/text-box.model'; 

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public course :Course[] =[];
  public page: Page[] = [];
  public article:Article[] = [];
  public block:Block[]=[];
  public textBox: TextBox[]=[];
  public graphics : Graphics[]=[];

  constructor() { }
  addPage(value):void{
    this.page.push({
        title: value.title !=''? value.title : 'not specified',
        dtitle:value.dtitle !=''? value.dtitle : 'not specified', 
        _classes: value._classes !=''? value._classes : 'not specified',
        body: value.body !=''? value.body : 'not specified',
        blink: value.blink !=''? value.blink : 'not specified',
        duration: value.duration !=''? value.duration : 'not specified',
        page_id: UUID.UUID(),
        _type:'page',
        _childInfo: this.article,
        _parentId: value._parentId !=''? value._parentId : 'not specified',
    });
    console.log("page", this.page);
   
    
   
  
  }
  addArticle(value):void{
    this.article.push({
        title: value.title !=''? value.title : 'not specified',
        dtitle:value.dtitle !=''? value.dtitle : 'not specified', 
        _classes: value._classes !=''? value._classes : 'not specified',
        body: value.body !=''? value.body : 'not specified',
        blink: value.blink !=''? value.blink : 'not specified',
        duration: value.duration !=''? value.duration : 'not specified',
        article_id: UUID.UUID(),
        _type:'article',
        _childInfo: this.block,
        _parentId: value._parentId !=''? value._parentId : 'not specified',
    });
    console.log("article", this.article)
    
  }



  addText(value):void{
    this.textBox.push({
      title: value.title !=''? value.title : 'not specified',
      dtitle: value.dtitle !=''? value.dtitle : 'not specified',
      body:value.body !=''? value.body : 'not specified',
      _type:'Text Component',
      _parentId:value._parentId !=''? value._parentId : 'not specified',
    });
    console.log("textbox", this.textBox);
    console.log("type text", this.textBox[0]._type);
    
    localStorage.setItem("page",JSON.stringify(this.page));

    
}

addGraphics(value):void{
  this.graphics.push({
    title: value.title !=''? value.title : 'not specified',
    dtitle:value.dtitle !=''? value.dtitle : 'not specified',
    body:value.body !=''? value.body : 'not specified',
    
    graphics_id:UUID.UUID(),
    _type:'Graphics Component',
    _parentId: value._parentId !=''? value._parentId : 'not specified',
    graphics_url: value.file !=''? value.file : 'not specified',
   
  });
  console.log("graphics", this.graphics);
  localStorage.setItem("page",JSON.stringify(this.page));

  
}

addBlock(value):void{
  console.log(value,'block component')
  
  this.block.push({
      title: value.title !=''? value.title : 'not specified',
      dtitle:value.dtitle !=''? value.dtitle : 'not specified', 
      _classes: value._classes !=''? value._classes : 'not specified',
      body: value.body !=''? value.body : 'not specified',
      blink: value.blink !=''? value.blink : 'not specified',
      duration: value.duration !=''? value.duration : 'not specified',
      block_id: UUID.UUID(),
      _type:'block',
      _childInfo: this.graphics ,
      _parentId: value._parentId !=''? value._parentId : 'not specified',
  });
  console.log("block", this.block);
  
  
}
}

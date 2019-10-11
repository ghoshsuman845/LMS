import { Component, OnInit } from '@angular/core';
import {LayoutService } from 'src/app/services/layout.service';
import { Article } from 'src/app/models/article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  get article() :   Article[] {
    return this.layoutService.article;
  
  }

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }
  SubmitItem(myArticleForm:HTMLInputElement) {
    this.layoutService.addArticle(myArticleForm.value);
   console.log(JSON.stringify(myArticleForm.value));
   localStorage.setItem("ArticleItem",JSON.stringify(myArticleForm.value));
  
  
 // return JSON.stringify(this.model);
  
  
 }

}

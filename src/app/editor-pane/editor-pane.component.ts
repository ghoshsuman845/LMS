import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor-pane',
  templateUrl: './editor-pane.component.html',
  styleUrls: ['./editor-pane.component.scss']
})
export class EditorPaneComponent implements OnInit {
articles = [
  {"number": "Article 1"}
];
blocks = [
  {"number": "Block 1"}
];
isShow = false;
visible:boolean = false;
Component:string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  addArticle(){
    this.articles.push({"number": "Article " + (this.articles.length + 1)})
  }
  deleteArticle(number: string){
    this.articles.splice(this.articles.findIndex( (article)  =>  article.number === number ), 1 );

  }
  addBlock(){
    this.blocks.push({"number": "Block " + (this.blocks.length + 1)})
  }
  deleteBlock(number: string){
    this.blocks.splice(this.blocks.findIndex( (block)  =>  block.number === number ), 1 );

  }
  deleteComponent(){
     return this.Component.slice();
  }
 
 
  displayComponentbar() {
    this.isShow = !this.isShow;
  }
  addComponentHere($event){
    this.Component = $event;

    console.log(this.Component);
    
    this.visible = true;
    this.isShow = false;
  }

  gotoComponentPage(component){
    
    console.log(component);

    if(component==='Text'){
        this.router.navigate(['/component-content/text-content'])
     }else if(component==='Graphics'){
      this.router.navigate(['/component-content/graphics-content'])
     }else{
       console.log('no page found');
       
     }
  }

}

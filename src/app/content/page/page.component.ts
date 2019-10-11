import { Component, OnInit } from '@angular/core';
import{Page} from 'src/app/models/page.model'
import {LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  get page() :   Page[] {
    return this.layoutService.page;
  }

  constructor(private layoutService:LayoutService) { }

  ngOnInit() {
  }
  SubmitItem(myForm:HTMLInputElement) {
    this.layoutService.addPage(myForm.value);
    console.log(JSON.stringify(myForm.value));
    localStorage.setItem("PageItem",JSON.stringify(myForm.value));
  
    
    // return JSON.stringify(this.model);
 }

}

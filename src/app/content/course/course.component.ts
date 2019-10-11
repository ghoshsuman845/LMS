import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import{Course} from 'src/app/models/course.model'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  get course() :   Course[] {
    return this.layoutService.course;
  
  }
  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }
  SubmitItem(myCourseForm:HTMLInputElement) {
    this.layoutService.addBlock(myCourseForm.value);
    console.log(JSON.stringify(myCourseForm.value));
    localStorage.setItem("BlockItem",JSON.stringify(myCourseForm.value));
 // return JSON.stringify(this.model);
  
  
 }

}

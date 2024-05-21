import { Component , ViewChild , AfterViewInit} from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  //Data transfer from parent to child
  parentMessage:string ='message coming from parent component 1';
  parentmessage1:string='msg  from parent2, BY SANJAM';
  message:string | undefined;

  //Data transfer from child to parent
  @ViewChild(PostListComponent) childComp: any;

  constructor(){
    console.log(this.childComp);
  }

  //Constructor nl initialize ni hunda, so tn eh hook lgande a 
 ngAfterViewInit() {
  console.log(this.childComp);
  this.message = this.childComp.childMessage;
   
 }
  
}


import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {


 childMessage:string ='passing data from child to parent';
 outputChildMessage:string='msg from child via o/p';

 @Input() fromParent : string | undefined;

 // used when there is user action like on button click etc
 @Output() messageEvent = new EventEmitter<string>();

 constructor(){}

 sendMessage(){
  console.log('click');
 }
}

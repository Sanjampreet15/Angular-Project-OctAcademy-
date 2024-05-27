import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar-component.html',
  styleUrls:['./navbar-component.css']
})
export class NavbarComponent {

  message:string ='Msg from typescript component file (data binding way 1)';
  imgUrl:string ='https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  @Input() fromParent : string | undefined;

  bool:boolean = true;
  
}

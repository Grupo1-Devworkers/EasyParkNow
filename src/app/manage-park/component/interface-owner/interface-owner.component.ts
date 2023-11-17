import { Component } from '@angular/core';

@Component({
  selector: 'app-interface-owner',
  templateUrl: './interface-owner.component.html',
  styleUrls: ['./interface-owner.component.css']
})
export class InterfaceOwnerComponent {
  toggle:boolean = true;
  width:string = "calc(100% - 172px)"

  useToggle(t:boolean){
    this.toggle = t;
    this.width = this.toggle ? "calc(100% - 172px)" : "100%"
  }
}

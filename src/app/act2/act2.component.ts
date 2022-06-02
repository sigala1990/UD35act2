import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-act2',
  templateUrl: './act2.component.html',
  styleUrls: ['./act2.component.css']
})
export class Act2Component implements OnInit {

  @Input() listaHija : any = [] ;
  constructor() { }

  ngOnInit(): void {
  }

}

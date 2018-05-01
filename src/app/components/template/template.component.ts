import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  // styles: [`
  //   .ng-invalid.ng-touched:not(form) {
  //     border : 1px solid red;
  //   }
  // `]
})
export class TemplateComponent implements OnInit {
  user:any ={
    nombre:null,
    apellido:null,
    correo:null
  }
  constructor() { }

  ngOnInit() {
  }

  save(forma:NgForm){
    console.log("form saved")
    console.log(forma)
  }

}

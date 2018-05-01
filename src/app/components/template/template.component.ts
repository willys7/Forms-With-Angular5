import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {
  user:any ={
    nombre:"William",
    apellido:"Fuentes",
    correo:""
  }
  constructor() { }

  ngOnInit() {
  }

  save(forma:NgForm){
    console.log("form saved")
    console.log(forma)
  }

}

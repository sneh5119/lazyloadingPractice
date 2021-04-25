import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  country=['india','usa','canada','london']

  constructor() { }

  ngOnInit(): void {
  }
   reactiveForm= new FormGroup({
     name: new FormControl(''),
     countryname: new FormControl(''),
     gender: new FormControl(''),
   });

}

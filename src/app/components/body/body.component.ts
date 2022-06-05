import { Component, OnInit } from '@angular/core';
import { Ianimal } from 'src/app/components/interfaces/interfaces'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  public animal1: Ianimal;
  public animal: Ianimal;

  constructor() { 

    this.animal1 = {

      name: "Emilio",
      age: 4,
      country: "España",
      playable: true,
      alive: true


    }

    this.animal = {

      name: "Pato",
      age: 11,
      country: "España",
      playable: false,
      alive: true


    }


  }
  

  ngOnInit(): void {
  }

}

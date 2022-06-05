import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public home: string = "Home"
  public primero: string = "Premios"
  public segundo: string = "Juguetes"

  constructor() { }

  ngOnInit(): void {
  }

}

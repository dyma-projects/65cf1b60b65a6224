import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component implements OnInit {
  @Output() public result: number = 0;

  constructor() {}

  ngOnInit() {}

  public count(compteur: number) {
    this.result = compteur;
  }
}

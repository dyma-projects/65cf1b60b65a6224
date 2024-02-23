import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur = 0;
  @Output() public count = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public countIt(compteur: number) {
    this.count.emit(compteur);
  }
}

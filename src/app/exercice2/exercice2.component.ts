import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild('textInput') public textInput: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {
    console.log(this.textInput);
    
  }

  public textInputChanged(evt: KeyboardEvent) {
    this.valeur = this.textInput.nativeElement.value;
  }

}

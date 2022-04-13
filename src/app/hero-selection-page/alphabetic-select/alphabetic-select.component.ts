import {Component, EventEmitter, Output} from '@angular/core';
import {Letter, letters} from "../../models/alphabet.model";

@Component({
  selector: 'app-alphabetic-select',
  templateUrl: './alphabetic-select.component.html',
  styleUrls: ['./alphabetic-select.component.css']
})
export class AlphabeticSelectComponent {
  @Output() readonly letter = new EventEmitter<Letter>();

  selectedLetter: Letter = 'a';
  alphabet: Letter[] = letters;
  isOpen = false;

  onSelectClick(letter: Letter): void {
    this.selectedLetter = letter;
    this.letter.emit(letter);
    this.isOpen = !this.isOpen;
  }

  onOpenClick(): void {
    this.isOpen = !this.isOpen;
  }
}


